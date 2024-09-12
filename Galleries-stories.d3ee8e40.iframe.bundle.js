"use strict";(self.webpackChunkreact_medium_image_zoom=self.webpackChunkreact_medium_image_zoom||[]).push([[983],{"./stories/Galleries.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DivImageGallery:()=>DivImageGallery,ImageGallery:()=>ImageGallery,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_source__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./source/Uncontrolled.tsx"),_images__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./source/styles.css"),__webpack_require__("./stories/base.css"),__webpack_require__("./stories/images/index.ts"));const __WEBPACK_DEFAULT_EXPORT__={title:"Galleries",component:_source__WEBPACK_IMPORTED_MODULE_3__.i},ImageGallery=()=>{const images=[_images__WEBPACK_IMPORTED_MODULE_4__.pu,_images__WEBPACK_IMPORTED_MODULE_4__.Wq,_images__WEBPACK_IMPORTED_MODULE_4__.Zd,_images__WEBPACK_IMPORTED_MODULE_4__.lc,_images__WEBPACK_IMPORTED_MODULE_4__.cq,_images__WEBPACK_IMPORTED_MODULE_4__.l5,_images__WEBPACK_IMPORTED_MODULE_4__.w_,_images__WEBPACK_IMPORTED_MODULE_4__.N9,_images__WEBPACK_IMPORTED_MODULE_4__.bG],[objectFit,setObjectFit]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("cover"),[objectPosition,setObjectPosition]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("50% 50%"),handleSubmit=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{e.preventDefault();const data=new FormData(e.currentTarget);setObjectFit(data.get("objectFit")),setObjectPosition(data.get("objectPosition"))}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{"aria-label":"Story"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Image gallery using <img />, object-fit, & object-position"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{style:{marginBottom:"3rem"},onSubmit:handleSubmit},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginBottom:"1rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"object-fit:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("select",{defaultValue:objectFit,name:"objectFit"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"cover"},"cover"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"contain"},"contain"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"none"},"none"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"scale-down"},"scale-down"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"fill"},"fill")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginBottom:"1rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"object-position:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{defaultValue:objectPosition,name:"objectPosition",type:"text"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"submit"},"Apply changes")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{style:{display:"grid",gridTemplateColumns:"2fr 2fr 2fr",gridGap:"2rem",listStyle:"none",margin:0,padding:0},role:"list"},images.map(((img,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:i,role:"listitem"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_source__WEBPACK_IMPORTED_MODULE_3__.i,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{alt:img.alt,loading:"lazy",src:img.src,style:{objectFit,objectPosition,width:"100%"},width:"250",height:"500"})))))))},DivImageGallery=()=>{const images=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>[_images__WEBPACK_IMPORTED_MODULE_4__.pu,_images__WEBPACK_IMPORTED_MODULE_4__.Wq,_images__WEBPACK_IMPORTED_MODULE_4__.Zd,_images__WEBPACK_IMPORTED_MODULE_4__.lc,_images__WEBPACK_IMPORTED_MODULE_4__.cq,_images__WEBPACK_IMPORTED_MODULE_4__.l5,_images__WEBPACK_IMPORTED_MODULE_4__.w_,_images__WEBPACK_IMPORTED_MODULE_4__.N9,_images__WEBPACK_IMPORTED_MODULE_4__.bG]),[]),[bgSize,setBgSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("cover"),[bgPosition,setBgPosition]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("50%"),[aspectRatio,setAspectRatio]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("56%"),handleSubmit=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{e.preventDefault();const data=new FormData(e.currentTarget);setBgSize(data.get("backgroundSize")),setBgPosition(data.get("backgroundPosition")),setAspectRatio(data.get("aspectRatio"))}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{"aria-label":"Story"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Image gallery using <div>s, background images, and padding"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{style:{marginBottom:"3rem"},onSubmit:handleSubmit},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginBottom:"1rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"background-size:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{defaultValue:bgSize,name:"backgroundSize",type:"text"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginBottom:"1rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"background-position:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{defaultValue:bgPosition,name:"backgroundPosition",type:"text"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginBottom:"1rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"aspect ratio:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("select",{defaultValue:aspectRatio,name:"aspectRatio"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"56%"},"16:9"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"75%"},"4:3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"33%"},"3:1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"100%"},"1:1")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"submit"},"Apply changes")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{style:{display:"flex",flexWrap:"wrap",listStyle:"none",margin:0,padding:0}},images.map(((img,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:i,style:{margin:"0 1rem 1rem 0",width:"calc(33% - 1rem)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_source__WEBPACK_IMPORTED_MODULE_3__.i,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"aria-label":img.alt,role:"img",style:{backgroundColor:"#fff",backgroundImage:`url(${img.src})`,backgroundPosition:bgPosition,backgroundRepeat:"no-repeat",backgroundSize:bgSize,height:"0",paddingBottom:aspectRatio,width:"100%"}})))))))},__namedExportsOrder=["ImageGallery","DivImageGallery"];ImageGallery.parameters={...ImageGallery.parameters,docs:{...ImageGallery.parameters?.docs,source:{originalSource:'() => {\n  const images = [imgGlenorchyLagoon, imgThatWanakaTree, imgNzBeach, imgHobbiton, imgHookerValleyTrack, imgQueenstown, imgTekapo, imgPortWaikato, imgKea];\n  const [objectFit, setObjectFit] = useState(\'cover\' as ObjectFit);\n  const [objectPosition, setObjectPosition] = useState(\'50% 50%\');\n  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    const data = new FormData(e.currentTarget);\n    setObjectFit(data.get(\'objectFit\') as ObjectFit);\n    setObjectPosition(data.get(\'objectPosition\') as string);\n  }, []);\n  return <main aria-label="Story">\n      <h1>{\'Image gallery using <img />, object-fit, & object-position\'}</h1>\n      <form style={{\n      marginBottom: \'3rem\'\n    }} onSubmit={handleSubmit}>\n        <div style={{\n        marginBottom: \'1rem\'\n      }}>\n          <label>\n            <code>object-fit:</code>\n            <select defaultValue={objectFit} name="objectFit">\n              <option value="cover">cover</option>\n              <option value="contain">contain</option>\n              <option value="none">none</option>\n              <option value="scale-down">scale-down</option>\n              <option value="fill">fill</option>\n            </select>\n          </label>\n        </div>\n        <div style={{\n        marginBottom: \'1rem\'\n      }}>\n          <label>\n            <code>object-position:</code>\n            <input defaultValue={objectPosition} name="objectPosition" type="text" />\n          </label>\n        </div>\n        <button type="submit">Apply changes</button>\n      </form>\n      <ul /* eslint-disable-line jsx-a11y/no-redundant-roles */ style={{\n      display: \'grid\',\n      gridTemplateColumns: \'2fr 2fr 2fr\',\n      gridGap: \'2rem\',\n      listStyle: \'none\',\n      margin: 0,\n      padding: 0\n    }} role="list">\n        {images.map((img, i) => <li /* eslint-disable-line jsx-a11y/no-redundant-roles */ key={i} role="listitem">\n            <Zoom>\n              <img alt={img.alt} loading="lazy" src={img.src} style={{\n            objectFit,\n            objectPosition,\n            width: \'100%\'\n          }} width="250" height="500" />\n            </Zoom>\n          </li>)}\n      </ul>\n    </main>;\n}',...ImageGallery.parameters?.docs?.source}}},DivImageGallery.parameters={...DivImageGallery.parameters,docs:{...DivImageGallery.parameters?.docs,source:{originalSource:"() => {\n  const images = useMemo(() => [imgGlenorchyLagoon, imgThatWanakaTree, imgNzBeach, imgHobbiton, imgHookerValleyTrack, imgQueenstown, imgTekapo, imgPortWaikato, imgKea], []);\n  const [bgSize, setBgSize] = useState('cover');\n  const [bgPosition, setBgPosition] = useState('50%');\n  const [aspectRatio, setAspectRatio] = useState('56%');\n  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    const data = new FormData(e.currentTarget);\n    setBgSize(data.get('backgroundSize') as string);\n    setBgPosition(data.get('backgroundPosition') as string);\n    setAspectRatio(data.get('aspectRatio') as string);\n  }, []);\n  return <main aria-label=\"Story\">\n      <h1>{'Image gallery using <div>s, background images, and padding'}</h1>\n      <form style={{\n      marginBottom: '3rem'\n    }} onSubmit={handleSubmit}>\n        <div style={{\n        marginBottom: '1rem'\n      }}>\n          <label>\n            <code>background-size:</code>\n            <input defaultValue={bgSize} name=\"backgroundSize\" type=\"text\" />\n          </label>\n        </div>\n        <div style={{\n        marginBottom: '1rem'\n      }}>\n          <label>\n            <code>background-position:</code>\n            <input defaultValue={bgPosition} name=\"backgroundPosition\" type=\"text\" />\n          </label>\n        </div>\n        <div style={{\n        marginBottom: '1rem'\n      }}>\n          <label>\n            <code>aspect ratio:</code>\n            <select defaultValue={aspectRatio} name=\"aspectRatio\">\n              <option value=\"56%\">16:9</option>\n              <option value=\"75%\">4:3</option>\n              <option value=\"33%\">3:1</option>\n              <option value=\"100%\">1:1</option>\n            </select>\n          </label>\n        </div>\n        <button type=\"submit\">Apply changes</button>\n      </form>\n      <ul style={{\n      display: 'flex',\n      flexWrap: 'wrap',\n      listStyle: 'none',\n      margin: 0,\n      padding: 0\n    }}>\n        {images.map((img, i) => <li key={i} style={{\n        margin: '0 1rem 1rem 0',\n        width: 'calc(33% - 1rem)'\n      }}>\n            <Zoom>\n              <div aria-label={img.alt} role=\"img\" style={{\n            backgroundColor: '#fff',\n            backgroundImage: `url(${img.src})`,\n            backgroundPosition: bgPosition,\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: bgSize,\n            height: '0',\n            paddingBottom: aspectRatio,\n            width: '100%'\n          }} />\n            </Zoom>\n          </li>)}\n      </ul>\n    </main>;\n}",...DivImageGallery.parameters?.docs?.source}}}},"./source/Uncontrolled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Uncontrolled});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Controlled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./source/Controlled.tsx");function Uncontrolled(props){const[isZoomed,setIsZoomed]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Controlled__WEBPACK_IMPORTED_MODULE_1__.x,{...props,isZoomed,onZoomChange:setIsZoomed})}Uncontrolled.__docgenInfo={description:"",methods:[],displayName:"Uncontrolled"}},"./stories/images/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Qj:()=>imgEarth,pu:()=>imgGlenorchyLagoon,lc:()=>imgHobbiton,cq:()=>imgHookerValleyTrack,bG:()=>imgKea,gA:()=>imgKeaLarge,K$:()=>imgKeaSmall,Zd:()=>imgNzBeach,Ig:()=>imgNzMap,N9:()=>imgPortWaikato,l5:()=>imgQueenstown,Sc:()=>imgTeAraiPoint,w_:()=>imgTekapo,Wq:()=>imgThatWanakaTree});const earth_large_namespaceObject=__webpack_require__.p+"static/media/earth-large.b1a1ed4f.jpg",glenorchy_lagoon_namespaceObject=__webpack_require__.p+"static/media/glenorchy-lagoon.272d443f.jpg",andres_iga_7XKkJVw1d8c_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/andres-iga-7XKkJVw1d8c-unsplash-smaller.737d2ec5.jpg",roell_de_ram_2DM7eOR5iyc_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/roell-de-ram-2DM7eOR5iyc-unsplash-smaller.a4e5b402.jpg",pablo_heimplatz_PSF2RhUBORs_unsplash_300w_namespaceObject=__webpack_require__.p+"static/media/pablo-heimplatz-PSF2RhUBORs-unsplash-300w.7d7b6375.jpg",pablo_heimplatz_PSF2RhUBORs_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/pablo-heimplatz-PSF2RhUBORs-unsplash-smaller.5a06c8a2.jpg",pablo_heimplatz_PSF2RhUBORs_unsplash_namespaceObject=__webpack_require__.p+"static/media/pablo-heimplatz-PSF2RhUBORs-unsplash.19841566.jpg",rod_long_4dcsLxQxSHY_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/rod-long-4dcsLxQxSHY-unsplash-smaller.9eee9731.jpg",petr_vysohlid_9fqwGqGLUxc_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/petr-vysohlid-9fqwGqGLUxc-unsplash-smaller.163735c3.jpg",omer_faruk_bekdemir_5BuxuWIJF1Q_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/omer-faruk-bekdemir-5BuxuWIJF1Q-unsplash-smaller.e6787204.jpg",douglas_bagg_wRwa3Z6GtRI_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/douglas-bagg-wRwa3Z6GtRI-unsplash-smaller.053c764a.jpg",tobias_keller_73F4pKoUkM0_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/tobias-keller-73F4pKoUkM0-unsplash-smaller.0831f856.jpg",laura_smetsers_H_TW2CoNtTk_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/laura-smetsers-H-TW2CoNtTk-unsplash-smaller.4d1fd239.jpg",nz_map_namespaceObject=__webpack_require__.p+"static/media/nz-map.d56663ce.svg",imgEarth={alt:"2D map of the Earth",src:earth_large_namespaceObject},imgGlenorchyLagoon={alt:"Glenorchy lagoon, New Zealand by Robert Pearce",src:glenorchy_lagoon_namespaceObject},imgHobbiton={alt:"Hobbiton, Matamata, New Zealand by Andres Iga",src:andres_iga_7XKkJVw1d8c_unsplash_smaller_namespaceObject},imgHookerValleyTrack={alt:"Hooker Valley Track, New Zealand by Roll de Ram",src:roell_de_ram_2DM7eOR5iyc_unsplash_smaller_namespaceObject},imgKeaSmall={alt:"Kea (alpine parrot) in Arthur's Pass, New Zealand by Pablo Heimplatz",src:pablo_heimplatz_PSF2RhUBORs_unsplash_300w_namespaceObject},imgKea={alt:"Kea (alpine parrot) in Arthur's Pass, New Zealand by Pablo Heimplatz",src:pablo_heimplatz_PSF2RhUBORs_unsplash_smaller_namespaceObject},imgKeaLarge={alt:"Kea (alpine parrot) in Arthur's Pass, New Zealand by Pablo Heimplatz",src:pablo_heimplatz_PSF2RhUBORs_unsplash_namespaceObject},imgNzBeach={alt:"New Zealand Beach by Rod Long",src:rod_long_4dcsLxQxSHY_unsplash_smaller_namespaceObject},imgQueenstown={alt:"Queenstown, New Zealand by Omer Faruk",src:omer_faruk_bekdemir_5BuxuWIJF1Q_unsplash_smaller_namespaceObject},imgTeAraiPoint={alt:"Te Arai Point, New Zealand by Douglas Bagg",src:douglas_bagg_wRwa3Z6GtRI_unsplash_smaller_namespaceObject},imgTekapo={alt:"Lake Tekapo, New Zealand by Tobias Keller",src:tobias_keller_73F4pKoUkM0_unsplash_smaller_namespaceObject},imgThatWanakaTree={alt:"That Wanaka Tree, New Zealand by Laura Smetsers",src:laura_smetsers_H_TW2CoNtTk_unsplash_smaller_namespaceObject},imgPortWaikato={alt:"Port Waikato, Tuakau, Auckland, New Zealand by Petr Vysohlid",src:petr_vysohlid_9fqwGqGLUxc_unsplash_smaller_namespaceObject},imgNzMap={alt:"Map of New Zealand",src:nz_map_namespaceObject}}}]);