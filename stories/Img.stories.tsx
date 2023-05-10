import React, {
  ReactElement,
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import type { Meta } from '@storybook/react'

import { waitFor, within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Zoom, { UncontrolledProps } from '../source'
import '../source/styles.css'
import './base.css'

import {
  imgEarth,
  imgGlenorchyLagoon,
  imgHookerValleyTrack,
  imgKeaLarge,
  imgKeaSmall,
  imgNzMap,
  imgTeAraiPoint,
  imgTekapo,
  imgThatWanakaTree,
} from './images'

const meta: Meta<typeof Zoom> = {
  title: '<img>',
  component: Zoom,
}

export default meta

// =============================================================================

export const Regular = (props) => (
  <main aria-label="Story">
    <h1>Zooming a regular image</h1>
    <div className="mw-600">
      <Zoom {...props}>
        <img
          alt={imgThatWanakaTree.alt}
          src={imgThatWanakaTree.src}
          height="320"
          loading="lazy"
        />
      </Zoom>
    </div>
  </main>
)

// =============================================================================

export const ZoomMargin = (props) => (
  <main aria-label="Story">
    <h1>Setting a zoomMargin of 45(px)</h1>
    <div className="mw-600">
      <p>This example should always be offset from the window by at least 45px</p>
      <Zoom {...props} zoomMargin={45}>
        <img
          alt={imgThatWanakaTree.alt}
          src={imgThatWanakaTree.src}
          height="320"
          loading="lazy"
        />
      </Zoom>
    </div>
  </main>
)

// =============================================================================

export const SmallPortrait = (props) => (
  <main aria-label="Story">
    <h1>A portrait image with a small width specified</h1>
    <div className="mw-600">
      <p>Small size specifications scale well, too — even on mobile.</p>
      <Zoom {...props}>
        <img
          alt={imgTeAraiPoint.alt}
          src={imgTeAraiPoint.src}
          height="112"
          loading="lazy"
        />
      </Zoom>
    </div>
  </main>
)

// =============================================================================

export const SVGSource = (props) => (
  <main aria-label="Story">
    <h1>An image with an SVG src</h1>
    <div className="mw-600">
      <Zoom {...props}>
        <img
          alt={imgNzMap.alt}
          src={imgNzMap.src}
          width="150"
          loading="lazy"
        />
      </Zoom>
    </div>
  </main>
)

// =============================================================================

export const DataSVGSource = () => (
  <main aria-label="Story">
    <h1>An image with a <code>data:image/svg+xml</code> <code>src</code></h1>
    <div className="data-uri-img mw-600">
      <Zoom>
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </Zoom>
    </div>
  </main>
)

// =============================================================================

export const ProvideZoomImg = (props) => (
  <main aria-label="Story">
    <h1>An image with a larger <code>zoomImg</code></h1>
    <div className="mw-600">
      <p>
        When zoomed, the original image will scale to as large as the window will
        allow, and then it will be replaced by an image that is downloaded in the
        background.
      </p>
      <Zoom
        {...props}
        zoomImg={{
          alt: imgKeaLarge.alt,
          src: imgKeaLarge.src,
        }}
      >
        <img
          alt={imgKeaSmall.alt}
          src={imgKeaSmall.src}
          width="150"
        />
      </Zoom>
    </div>
  </main>
)

// =============================================================================

export const SmallSrcSize = (props) => (
  <main aria-label="Story">
    <h1>An image with a small size</h1>
    <div className="mw-600">
      <p>
        In order to prevent blurry images, An image won&apos;t scale up larger
        than its natural dimensions.
      </p>
      <Zoom {...props}>
        <img
          alt={imgKeaSmall.alt}
          src={imgKeaSmall.src}
          width="150"
        />
      </Zoom>
    </div>
  </main>
)

// =============================================================================

export const CustomModalStyles = (props) => {
  return (
    <main aria-label="Story">
      <h1>Custom Modal Styles</h1>
      <div className="mw-600">
        <p>Use CSS to customize the zoom modal styles.</p>
        <p>Here, we slow down the transition time and use a different overlay color.</p>
        <div>
          <Zoom {...props} classDialog="custom-zoom">
            <img
              alt={imgGlenorchyLagoon.alt}
              src={imgGlenorchyLagoon.src}
              width="400"
            />
          </Zoom>
        </div>
        <p>
          The CSS class, <code>custom-zoom</code>, is sent to the component via
          the <code>classDialog</code> string prop. Here are the styles used:
        </p>
        <pre>
          <code>{`
.custom-zoom [data-rmiz-modal-overlay],
.custom-zoom [data-rmiz-modal-img] {
  transition-duration: 0.8s;
  transition-timing-function: linear;
}
.custom-zoom [data-rmiz-modal-overlay="hidden"] {
  background-color: rgb(56, 58, 89, 0);
}
.custom-zoom [data-rmiz-modal-overlay="visible"] {
  background-color: rgb(56, 58, 89, 1);
}
.custom-zoom [data-rmiz-btn-unzoom] {
  background-color: #bd93f9;
  color: #000;
}
.custom-zoom [data-rmiz-btn-unzoom]:focus-visible {
  outline-offset: 0.4rem;
  outline: 0.2rem solid #bd93f9;
}
`}
          </code>
        </pre>
      </div>
    </main>
  )
}

// =============================================================================

export const ModalFigureCaption = (props) => (
  <main aria-label="Story">
    <h1>Modal With Figure And Caption</h1>
    <p>
      If you want more control over the zoom modal&apos;s content, you can pass
      a <code>ZoomContent</code> component
    </p>
    <div className="mw-600">
      <Zoom {...props} ZoomContent={CustomZoomContent}>
        <img
          alt={imgThatWanakaTree.alt}
          src={imgThatWanakaTree.src}
          height="320"
          loading="lazy"
        />
      </Zoom>
    </div>
  </main>
)

const CustomZoomContent: UncontrolledProps['ZoomContent'] = ({
  buttonUnzoom,
  modalState,
  img,
  //onUnzooom, // Not used here, but could be
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const imgProps = (img as ReactElement<HTMLImageElement>)?.props
  const imgWidth = imgProps?.width
  const imgHeight = imgProps?.height

  const classCaption = useMemo(() => {
    const hasWidthHeight = imgWidth != null && imgHeight != null
    const imgRatioLargerThanWindow = imgWidth / imgHeight > window.innerWidth / window.innerHeight

    return cx({
      'zoom-caption': true,
      'zoom-caption--loaded': isLoaded,
      'zoom-caption--bottom': hasWidthHeight && imgRatioLargerThanWindow,
      'zoom-caption--left': hasWidthHeight && !imgRatioLargerThanWindow,
    })
  }, [imgWidth, imgHeight, isLoaded])

  useLayoutEffect(() => {
    if (modalState === 'LOADED') {
      setIsLoaded(true)
    } else if (modalState === 'UNLOADING') {
      setIsLoaded(false)
    }
  }, [modalState])

  return <>
    {buttonUnzoom}

    <figure>
      {img}
      <figcaption className={classCaption}>
        That Wanaka Tree, also known as the Wanaka Willow, is a willow tree
        located at the southern end of Lake Wānaka in the Otago region of New
        Zealand.
        <cite className="zoom-caption-cite">
          Wikipedia, <a className="zoom-caption-link" href="https://en.wikipedia.org/wiki/That_Wanaka_Tree">
            That Wanaka Tree
          </a>
        </cite>
      </figcaption>
    </figure>
  </>
}

// =============================================================================

type DelayedImgProps = {
  timer: number
  alt: string
  src: string
  width: string
  height: string
}

const DelayedImg = (props: DelayedImgProps) => {
  const { alt, height, src, timer, width } = props

  const stylePlaceholder: CSSProperties = timer === 0
    ? { opacity: 0, visibility: 'hidden', position: 'absolute' }
    : { opacity: 1 }

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.decode()
  }, [src])

  return (
    <div>
      <img /* placeholder */
        alt=""
        aria-hidden="true"
        decoding="async"
        height={height}
        src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgQA/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAFutLOHXan/xAAaEAACAwEBAAAAAAAAAAAAAAAAEwIDEQES/9oACAEBAAEFAmyxnT3YKhiqxcD/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQISUf/aAAgBAwEBPwFKjNdP/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPwHFw//EABcQAQEBAQAAAAAAAAAAAAAAAAAxATL/2gAIAQEABj8Cq6qOUf/EAB0QAQACAgIDAAAAAAAAAAAAAAEAETFBIVFhcYH/2gAIAQEAAT8hLTa9xQK5/MRwq9wB94FrKsV+z//aAAwDAQACAAMAAAAQg+//xAAYEQACAwAAAAAAAAAAAAAAAAAAARFB0f/aAAgBAwEBPxBCxzaP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAECAQE/EEUAZf/EAB0QAAICAgMBAAAAAAAAAAAAAAERADEhQVGRocH/2gAIAQEAAT8QrTbZUQmHR1CiO0TexMDR5OfZSZbuE1IcAh9n/9k="
        style={stylePlaceholder}
        width={width}
      />
      {timer === 0 && <img
        alt={alt}
        decoding="async"
        loading="lazy"
        src={src}
        width={width}
      />}
    </div>
  )
}

export const DelayedImageRender = (props) => {
  const { timer } = useTimer(5000)

  return (
    <main aria-label="Story">
      <h1>A sub-component which delays rendering</h1>
      <div className="mw-600">
        <p>
          This examples simulates an issue caused by the gatsby-plugin-image
          (and potentially others) where the actual image element isn&apos;t
          found on the first render.
        </p>
        <div>
          Image loads in: <span role="timer">{timer / 1000}</span>
        </div>
        <Zoom {...props}>
          <DelayedImg
            timer={timer}
            alt={imgEarth.alt}
            src={imgEarth.src}
            height="200"
            width="400"
          />
        </Zoom>
      </div>
    </main>
  )
}

// =============================================================================

export const DelayedDisplayNone = (props) => {
  const { timer } = useTimer(5000)
  const classImg = timer === 0 ? undefined : 'display-none'

  return (
    <main aria-label="Story">
      <h1>A delayed <code>display: none;</code> image</h1>
      <div className="mw-600">
        <p>
          This examples simulates an image being hidden with CSS and then shown
          after the countdown.
        </p>
        <div>
          Image loads in: <span role="timer">{timer / 1000}</span>
        </div>
        <Zoom {...props}>
          <img
            alt={imgTekapo.alt}
            src={imgTekapo.src}
            className={classImg}
            decoding="async"
            height="320"
            loading="lazy"
          />
        </Zoom>
      </div>
    </main>
  )
}

// =============================================================================

export const CustomButtonIcons = (props) => (
  <main aria-label="Story">
    <h1>An image with custom zoom &amp; unzoom icons</h1>
    <div className="mw-600">
      <p>Press TAB to activate the zoom button</p>
      <div className="change-icons">
        <Zoom {...props} IconZoom={() => <>+</>} IconUnzoom={() => <>-</>}>
          <img
            alt={imgHookerValleyTrack.alt}
            src={imgHookerValleyTrack.src}
            width="400"
          />
        </Zoom>
      </div>
    </div>
  </main>
)

// =============================================================================

export const InlineImage = (props) => (
  <main aria-label="Story">
    <h1>Inline Image</h1>
    <p className="inline">
      This example is of an image that is inline with text.
      <Zoom {...props} wrapElement="span">
        <img
          alt={imgThatWanakaTree.alt}
          src={imgThatWanakaTree.src}
          decoding="async"
          height="320"
          loading="lazy"
        />
      </Zoom>
    </p>
  </main>
)

// =============================================================================

export const UseBorderRadius = (props) => (
  <main aria-label="Story">
    <h1>Zooming a regular image</h1>
    <div className="mw-600">
      <Zoom {...props} zoomUseBorderRadius={true}>
        <img
          alt={imgThatWanakaTree.alt}
          src={imgThatWanakaTree.src}
          height="320"
          loading="lazy"
          style={{ borderRadius: '4rem' }}
        />
      </Zoom>
    </div>
  </main>
)

// =============================================================================
// INTERACTIONS

export const AutomatedTest = Regular.bind({}, { title: '(Automated Test)' })
AutomatedTest.storyName = '(Automated Test)'
AutomatedTest.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await waitFor(async () => {
    await expect(canvas.getByLabelText(`Expand image: ${imgThatWanakaTree.alt}`)).toBeVisible()
  })

  await delay(1000)

  // TAB to expand button and press ENTER
  await userEvent.tab()
  await userEvent.keyboard('{Enter}', { delay: 1000 })

  await waitFor(async () => {
    const dialog = document.querySelector('dialog')

    if (dialog == null) {
      throw new Error('rmiz automated test failure: cannot find <dialog>')
    }

    await expect(dialog).toHaveAttribute('open')
    await expect(dialog.querySelector(`img[alt="${imgThatWanakaTree.alt}"]`)).toBeVisible()
    await expect(dialog.querySelector('[aria-label="Minimize image"')).toHaveFocus()
  })

  await delay(1000)

  await userEvent.keyboard('{Escape}', { delay: 1000 })

  await waitFor(async () => {
    await expect(document.querySelector('dialog')).not.toHaveAttribute('open')
    await expect(canvas.getByLabelText(`Expand image: ${imgThatWanakaTree.alt}`)).toHaveFocus()
  })
}

// =============================================================================
// HELPERS

const cx = (mods: Record<string, boolean>): string => {
  const cns: string[] = []

  for (const k in mods) {
    if (mods[k]) {
      cns.push(k)
    }
  }

  return cns.join(' ')
}

const delay = (duration: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, duration))

const useTimer = (duration: number) => {
  const [timer, setTimer] = useState(duration)

  useEffect(() => {
    const interval = setInterval(function () {
      if (timer === 0) {
        clearInterval(this)
      } else {
        setTimer(timer - 1000)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])

  return { timer }
}
