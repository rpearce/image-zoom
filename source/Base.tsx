import React, {
  Component,
  createRef,
  CSSProperties,
  ImgHTMLAttributes,
  KeyboardEvent,
  ReactNode,
} from 'react'

import { SupportedImage } from './types'
import { IEnlarge, ICompress } from './icons'

import {
  getImgAlt,
  getImgSrc,
  getStyleGhost,
  getStyleModalImg,
  testDiv,
  testImg,
  testSvg,
} from './utils'

// =============================================================================

const enum ModalState {
  LOADED,
  LOADING,
  UNLOADED,
  UNLOADING,
}

// =============================================================================

export interface BaseProps {
  a11yNameButtonUnzoom?: string
  a11yNameButtonZoom?: string
  children: ReactNode
  isZoomed: boolean
  onZoomChange?: (value: boolean) => void
  scrollableEl?: Window | HTMLElement
  zoomImg?: ImgHTMLAttributes<HTMLImageElement>
  zoomMargin?: number
}

export interface BaseDefaultProps {
  a11yNameButtonUnzoom: string
  a11yNameButtonZoom: string
  scrollableEl: Window | HTMLElement
  zoomMargin: number
}

export type BasePropsWithDefaults = BaseDefaultProps & BaseProps

interface BaseState {
  shouldRefresh: boolean
  isZoomImgLoaded: boolean
  loadedImgEl: HTMLImageElement | undefined
  modalState: ModalState
}

export default class Base extends Component<BasePropsWithDefaults, BaseState> {
  static defaultProps: BaseDefaultProps = {
    a11yNameButtonUnzoom: 'Minimize image',
    a11yNameButtonZoom: 'Expand image',
    scrollableEl: window,
    zoomMargin: 0,
  }

  state: BaseState = {
    shouldRefresh: false,
    isZoomImgLoaded: false,
    loadedImgEl: undefined,
    modalState: ModalState.UNLOADED,
  }

  private refContent = createRef<HTMLDivElement>()
  private refDialog = createRef<HTMLDialogElement>()
  private refModalImg = createRef<HTMLImageElement>()
  private refWrap = createRef<HTMLDivElement>()

  private imgEl: SupportedImage | null = null
  private imgElObserver: ResizeObserver | undefined
  private styleModalImg: CSSProperties = {}
  private idModalImg = `rmiz-modal-img-${Math.random().toString(16).slice(-4)}`

  render() {
    const {
      handleUnzoom,
      handleDialogKeyDown,
      handleZoom,
      idModalImg,
      imgEl,
      props: {
        a11yNameButtonUnzoom,
        a11yNameButtonZoom,
        children,
        isZoomed,
        zoomImg,
        zoomMargin,
      },
      refContent,
      refDialog,
      refModalImg,
      refWrap,
      state: {
        shouldRefresh,
        isZoomImgLoaded,
        loadedImgEl,
        modalState,
      },
    } = this

    // =========================================================================

    const isDiv = testDiv(imgEl)
    const isImg = testImg(imgEl)
    const isSvg = testSvg(imgEl)

    const imgAlt = getImgAlt(imgEl)
    const imgSrc = getImgSrc(imgEl)
    const imgSizes = isImg ? imgEl.sizes : undefined
    const imgSrcSet = isImg ? imgEl.srcset : undefined

    const hasZoomImg = !!zoomImg?.src

    const labelBtnZoom = imgAlt
      ? `${a11yNameButtonZoom}: ${imgAlt}`
      : a11yNameButtonZoom

    const isModalActive = modalState === ModalState.LOADING ||
      modalState === ModalState.LOADED

    const dataOverlayState =
      modalState === ModalState.UNLOADED || modalState === ModalState.UNLOADING
        ? 'hidden'
        : 'visible'

    // =========================================================================

    const styleContent: CSSProperties = {
      visibility: modalState === ModalState.UNLOADED ? 'visible' : 'hidden',
    }

    const styleGhost = getStyleGhost(imgEl)

    // @TODO: Better way to share this with UNSAFE_handleSvg?
    //        What ways can we optimize?
    this.styleModalImg = imgEl && (loadedImgEl || isSvg)
      ? getStyleModalImg({
        hasZoomImg,
        imgSrc,
        isSvg,
        isZoomed: isZoomed && isModalActive,
        loadedImgEl,
        offset: zoomMargin,
        shouldRefresh,
        targetEl: imgEl,
      })
      : {}

    // =========================================================================

    return (
      <div data-rmiz ref={refWrap}>
        <div data-rmiz-content ref={refContent} style={styleContent}>
          {children}
        </div>
        <div data-rmiz-ghost style={styleGhost}>
          <button
            aria-label={labelBtnZoom}
            data-rmiz-btn-zoom
            onClick={handleZoom}
            type="button"
          >
            <IEnlarge /* @TODO: Allow for them to pass their own icons? */ />
          </button>
        </div>
        <dialog /* eslint-disable-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-redundant-roles */
          aria-labelledby={idModalImg}
          aria-modal="true"
          data-rmiz-modal
          ref={refDialog}
          onClick={handleUnzoom}
          onClose={handleUnzoom}
          onKeyDown={handleDialogKeyDown}
          role="dialog"
        >
          <div data-rmiz-modal-overlay={dataOverlayState} />
          <div data-rmiz-modal-content>
            {isImg || isDiv
              ? <img
                alt={imgAlt}
                sizes={imgSizes}
                src={imgSrc}
                srcSet={imgSrcSet}
                {...isZoomImgLoaded && modalState === ModalState.LOADED ? zoomImg : {}}
                data-rmiz-modal-img
                height={this.styleModalImg.height}
                id={idModalImg}
                ref={refModalImg}
                style={this.styleModalImg}
                width={this.styleModalImg.width}
              />
              : undefined
            }
            {isSvg
              ? <div
              data-rmiz-modal-img
              ref={refModalImg}
              style={this.styleModalImg}
              />
              : undefined
            }
            <button
              aria-label={a11yNameButtonUnzoom}
              data-rmiz-btn-unzoom
              onClick={handleUnzoom}
              type="button"
            >
              <ICompress />
            </button>
          </div>
        </dialog>
      </div>
    )
  }

  // ===========================================================================

  componentDidMount() {
    this.setAndTrackImg()
    this.handleImgLoad()
    this.UNSAFE_handleSvg()
    this.imgEl?.addEventListener?.('load', this.handleImgLoad)
    this.imgEl?.addEventListener?.('click', this.handleZoom)
  }

  componentWillUnmount() {
    this.imgElObserver?.disconnect()
    this.imgEl?.removeEventListener?.('load', this.handleImgLoad)
    this.imgEl?.removeEventListener?.('click', this.handleZoom)
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  }

  // ===========================================================================

  componentDidUpdate(prevProps: BasePropsWithDefaults) {
    this.UNSAFE_handleSvg()
    this.handleIfZoomChanged(prevProps.isZoomed)
  }

  // ===========================================================================
  // Find and set the image we're working with

  setAndTrackImg = () => {
    this.imgEl = this.refContent.current?.querySelector?.(
      'img, svg, [role="img"], [data-zoom]'
    ) as SupportedImage | null

    if (this.imgEl) {
      this.imgElObserver = new ResizeObserver(entries => {
        const entry = entries[0]

        if (entry?.target) {
          this.imgEl = entry.target as SupportedImage
          this.setState({}) // Force a re-render
        }
      })

      this.imgElObserver.observe(this.imgEl)
    }
  }

  // ===========================================================================
  // Show modal when zoomed; hide modal when unzoomed

  handleIfZoomChanged = (prevIsZoomed: boolean) => {
    const { isZoomed } = this.props

    if (!prevIsZoomed && isZoomed) {
      this.zoom()
    } else if (prevIsZoomed && !isZoomed) {
      this.unzoom()
    }
  }

  // ===========================================================================
  // Ensure we always have the latest img src value loaded

  handleImgLoad = () => {
    const { imgEl } = this

    const img = new Image()
    img.src = getImgSrc(imgEl) ?? ''

    if (testImg(imgEl)) {
      img.sizes = imgEl.sizes
      img.srcset = imgEl.srcset
    }

    img.decode().then(() => {
      this.setState({ loadedImgEl: img })
    })
  }

  // ===========================================================================
  // Report zoom state changes

  handleZoom = () => {
    this.props.onZoomChange?.(true)
  }

  handleUnzoom = () => {
    this.props.onZoomChange?.(false)
  }

  // ===========================================================================
  // Intercept default dialog.close() and use ours so we can animate

  handleDialogKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      e.preventDefault()
      e.stopPropagation()
      this.handleUnzoom()
    }
  }

  // ===========================================================================
  // Force re-renders on closing scroll

  handleScroll = () => {
    this.setState({ shouldRefresh: true })
    this.handleUnzoom()
  }

  // ===========================================================================
  // Force re-render on resize

  handleResize = () => {
    this.setState({ shouldRefresh: true })
  }

  // ===========================================================================
  // Perform zoom actions

  zoom = () => {
    const {
      handleResize,
      handleScroll,
      loadZoomImg,
      props: {
        scrollableEl,
      },
      refDialog,
      refModalImg,
    } = this

    refDialog.current?.showModal?.()
    this.setState({ modalState: ModalState.LOADING })
    loadZoomImg()

    refModalImg.current?.addEventListener?.('transitionend', () => {
      setTimeout(() => {
        this.setState({ modalState: ModalState.LOADED })
        scrollableEl.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
      }, 0)
    }, { once: true })
  }

  // ===========================================================================
  // Perform unzoom actions

  unzoom = () => {
    const {
      handleResize,
      handleScroll,
      refDialog,
      refModalImg,
      props: { scrollableEl },
    } = this

    this.setState({ modalState: ModalState.UNLOADING })

    refModalImg.current?.addEventListener?.('transitionend', () => {
      setTimeout(() => {
        window.removeEventListener('resize', handleResize)
        scrollableEl.removeEventListener('scroll', handleScroll)

        this.setState({
          shouldRefresh: false,
          modalState: ModalState.UNLOADED,
        })

        refDialog.current?.close?.()
      }, 0)
    }, { once: true })
  }

  // ===========================================================================
  // Load the zoomImg manually

  loadZoomImg = () => {
    const { props: { zoomImg } } = this
    const zoomImgSrc = zoomImg?.src

    if (zoomImgSrc) {
      const img = new Image()
      img.src = zoomImgSrc
      img.sizes = zoomImg?.sizes ?? ''
      img.srcset = zoomImg?.srcSet ?? ''

      img.decode().then(() => {
        this.setState({ isZoomImgLoaded: true })
      })
    }
  }

  // ===========================================================================
  // Hackily deal with SVGs because of all of their unknowns.

  UNSAFE_handleSvg = () => {
    const { imgEl, refModalImg, styleModalImg } = this

    if (testSvg(imgEl)) {
      const tmp = document.createElement('div')
      tmp.innerHTML = imgEl.outerHTML

      const svg = tmp.firstChild as SVGSVGElement
      svg.style.width = `${styleModalImg.width ?? 0}px`
      svg.style.height = `${styleModalImg.height ?? 0}px`

      refModalImg.current?.firstChild?.remove?.()
      refModalImg.current?.appendChild?.(svg)
    }
  }
}