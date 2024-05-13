"use strict";(self.webpackChunkreact_medium_image_zoom=self.webpackChunkreact_medium_image_zoom||[]).push([[983],{"./stories/Galleries.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DivImageGallery:()=>DivImageGallery,ImageGallery:()=>ImageGallery,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_source__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./source/Uncontrolled.tsx"),_images__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./source/styles.css"),__webpack_require__("./stories/base.css"),__webpack_require__("./stories/images/index.ts"));function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={title:"Galleries",component:_source__WEBPACK_IMPORTED_MODULE_3__.i};var ImageGallery=function(){var images=[_images__WEBPACK_IMPORTED_MODULE_4__.pu,_images__WEBPACK_IMPORTED_MODULE_4__.Wq,_images__WEBPACK_IMPORTED_MODULE_4__.Zd,_images__WEBPACK_IMPORTED_MODULE_4__.lc,_images__WEBPACK_IMPORTED_MODULE_4__.cq,_images__WEBPACK_IMPORTED_MODULE_4__.l5,_images__WEBPACK_IMPORTED_MODULE_4__.w_,_images__WEBPACK_IMPORTED_MODULE_4__.N9,_images__WEBPACK_IMPORTED_MODULE_4__.bG],_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("cover"),2),objectFit=_useState[0],setObjectFit=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("50% 50%"),2),objectPosition=_useState1[0],setObjectPosition=_useState1[1],handleSubmit=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){e.preventDefault();var data=new FormData(e.currentTarget);setObjectFit(data.get("objectFit")),setObjectPosition(data.get("objectPosition"))}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{"aria-label":"Story"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Image gallery using <img />, object-fit, & object-position"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{style:{marginBottom:"3rem"},onSubmit:handleSubmit},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginBottom:"1rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"object-fit:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("select",{defaultValue:objectFit,name:"objectFit"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"cover"},"cover"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"contain"},"contain"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"none"},"none"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"scale-down"},"scale-down"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"fill"},"fill")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginBottom:"1rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"object-position:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{defaultValue:objectPosition,name:"objectPosition",type:"text"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"submit"},"Apply changes")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{style:{display:"grid",gridTemplateColumns:"2fr 2fr 2fr",gridGap:"2rem",listStyle:"none",margin:0,padding:0},role:"list"},images.map((function(img,i){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:i,role:"listitem"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_source__WEBPACK_IMPORTED_MODULE_3__.i,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{alt:img.alt,loading:"lazy",src:img.src,style:{objectFit,objectPosition,width:"100%"},width:"250",height:"500"})))}))))},DivImageGallery=function(){var images=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[_images__WEBPACK_IMPORTED_MODULE_4__.pu,_images__WEBPACK_IMPORTED_MODULE_4__.Wq,_images__WEBPACK_IMPORTED_MODULE_4__.Zd,_images__WEBPACK_IMPORTED_MODULE_4__.lc,_images__WEBPACK_IMPORTED_MODULE_4__.cq,_images__WEBPACK_IMPORTED_MODULE_4__.l5,_images__WEBPACK_IMPORTED_MODULE_4__.w_,_images__WEBPACK_IMPORTED_MODULE_4__.N9,_images__WEBPACK_IMPORTED_MODULE_4__.bG]}),[]),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("cover"),2),bgSize=_useState[0],setBgSize=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("50%"),2),bgPosition=_useState1[0],setBgPosition=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("56%"),2),aspectRatio=_useState2[0],setAspectRatio=_useState2[1],handleSubmit=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){e.preventDefault();var data=new FormData(e.currentTarget);setBgSize(data.get("backgroundSize")),setBgPosition(data.get("backgroundPosition")),setAspectRatio(data.get("aspectRatio"))}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",{"aria-label":"Story"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Image gallery using <div>s, background images, and padding"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{style:{marginBottom:"3rem"},onSubmit:handleSubmit},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginBottom:"1rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"background-size:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{defaultValue:bgSize,name:"backgroundSize",type:"text"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginBottom:"1rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"background-position:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{defaultValue:bgPosition,name:"backgroundPosition",type:"text"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginBottom:"1rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,"aspect ratio:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("select",{defaultValue:aspectRatio,name:"aspectRatio"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"56%"},"16:9"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"75%"},"4:3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"33%"},"3:1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"100%"},"1:1")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"submit"},"Apply changes")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{style:{display:"flex",flexWrap:"wrap",listStyle:"none",margin:0,padding:0}},images.map((function(img,i){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:i,style:{margin:"0 1rem 1rem 0",width:"calc(33% - 1rem)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_source__WEBPACK_IMPORTED_MODULE_3__.i,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"aria-label":img.alt,role:"img",style:{backgroundColor:"#fff",backgroundImage:"url(".concat(img.src,")"),backgroundPosition:bgPosition,backgroundRepeat:"no-repeat",backgroundSize:bgSize,height:"0",paddingBottom:aspectRatio,width:"100%"}})))}))))};ImageGallery.parameters={...ImageGallery.parameters,docs:{...ImageGallery.parameters?.docs,source:{originalSource:'() => {\n  const images = [imgGlenorchyLagoon, imgThatWanakaTree, imgNzBeach, imgHobbiton, imgHookerValleyTrack, imgQueenstown, imgTekapo, imgPortWaikato, imgKea];\n  const [objectFit, setObjectFit] = useState((\'cover\' as ObjectFit));\n  const [objectPosition, setObjectPosition] = useState(\'50% 50%\');\n  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    const data = new FormData(e.currentTarget);\n    setObjectFit((data.get(\'objectFit\') as ObjectFit));\n    setObjectPosition((data.get(\'objectPosition\') as string));\n  }, []);\n  return <main aria-label="Story">\n      <h1>{\'Image gallery using <img />, object-fit, & object-position\'}</h1>\n      <form style={{\n      marginBottom: \'3rem\'\n    }} onSubmit={handleSubmit}>\n        <div style={{\n        marginBottom: \'1rem\'\n      }}>\n          <label>\n            <code>object-fit:</code>\n            <select defaultValue={objectFit} name="objectFit">\n              <option value="cover">cover</option>\n              <option value="contain">contain</option>\n              <option value="none">none</option>\n              <option value="scale-down">scale-down</option>\n              <option value="fill">fill</option>\n            </select>\n          </label>\n        </div>\n        <div style={{\n        marginBottom: \'1rem\'\n      }}>\n          <label>\n            <code>object-position:</code>\n            <input defaultValue={objectPosition} name="objectPosition" type="text" />\n          </label>\n        </div>\n        <button type="submit">Apply changes</button>\n      </form>\n      <ul /* eslint-disable-line jsx-a11y/no-redundant-roles */ style={{\n      display: \'grid\',\n      gridTemplateColumns: \'2fr 2fr 2fr\',\n      gridGap: \'2rem\',\n      listStyle: \'none\',\n      margin: 0,\n      padding: 0\n    }} role="list">\n        {images.map((img, i) => <li /* eslint-disable-line jsx-a11y/no-redundant-roles */ key={i} role="listitem">\n            <Zoom>\n              <img alt={img.alt} loading="lazy" src={img.src} style={{\n            objectFit,\n            objectPosition,\n            width: \'100%\'\n          }} width="250" height="500" />\n            </Zoom>\n          </li>)}\n      </ul>\n    </main>;\n}',...ImageGallery.parameters?.docs?.source}}},DivImageGallery.parameters={...DivImageGallery.parameters,docs:{...DivImageGallery.parameters?.docs,source:{originalSource:"() => {\n  const images = useMemo(() => [imgGlenorchyLagoon, imgThatWanakaTree, imgNzBeach, imgHobbiton, imgHookerValleyTrack, imgQueenstown, imgTekapo, imgPortWaikato, imgKea], []);\n  const [bgSize, setBgSize] = useState('cover');\n  const [bgPosition, setBgPosition] = useState('50%');\n  const [aspectRatio, setAspectRatio] = useState('56%');\n  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    const data = new FormData(e.currentTarget);\n    setBgSize((data.get('backgroundSize') as string));\n    setBgPosition((data.get('backgroundPosition') as string));\n    setAspectRatio((data.get('aspectRatio') as string));\n  }, []);\n  return <main aria-label=\"Story\">\n      <h1>{'Image gallery using <div>s, background images, and padding'}</h1>\n      <form style={{\n      marginBottom: '3rem'\n    }} onSubmit={handleSubmit}>\n        <div style={{\n        marginBottom: '1rem'\n      }}>\n          <label>\n            <code>background-size:</code>\n            <input defaultValue={bgSize} name=\"backgroundSize\" type=\"text\" />\n          </label>\n        </div>\n        <div style={{\n        marginBottom: '1rem'\n      }}>\n          <label>\n            <code>background-position:</code>\n            <input defaultValue={bgPosition} name=\"backgroundPosition\" type=\"text\" />\n          </label>\n        </div>\n        <div style={{\n        marginBottom: '1rem'\n      }}>\n          <label>\n            <code>aspect ratio:</code>\n            <select defaultValue={aspectRatio} name=\"aspectRatio\">\n              <option value=\"56%\">16:9</option>\n              <option value=\"75%\">4:3</option>\n              <option value=\"33%\">3:1</option>\n              <option value=\"100%\">1:1</option>\n            </select>\n          </label>\n        </div>\n        <button type=\"submit\">Apply changes</button>\n      </form>\n      <ul style={{\n      display: 'flex',\n      flexWrap: 'wrap',\n      listStyle: 'none',\n      margin: 0,\n      padding: 0\n    }}>\n        {images.map((img, i) => <li key={i} style={{\n        margin: '0 1rem 1rem 0',\n        width: 'calc(33% - 1rem)'\n      }}>\n            <Zoom>\n              <div aria-label={img.alt} role=\"img\" style={{\n            backgroundColor: '#fff',\n            backgroundImage: `url(${img.src})`,\n            backgroundPosition: bgPosition,\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: bgSize,\n            height: '0',\n            paddingBottom: aspectRatio,\n            width: '100%'\n          }} />\n            </Zoom>\n          </li>)}\n      </ul>\n    </main>;\n}",...DivImageGallery.parameters?.docs?.source}}};const __namedExportsOrder=["ImageGallery","DivImageGallery"]},"./source/Uncontrolled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Uncontrolled});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Controlled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./source/Controlled.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Uncontrolled(props){var _React_useState=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),2),isZoomed=_React_useState[0],setIsZoomed=_React_useState[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Controlled__WEBPACK_IMPORTED_MODULE_1__.x,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},props),{isZoomed,onZoomChange:setIsZoomed}))}try{Uncontrolled.displayName="Uncontrolled",Uncontrolled.__docgenInfo={description:"",displayName:"Uncontrolled",props:{a11yNameButtonUnzoom:{defaultValue:null,description:"",name:"a11yNameButtonUnzoom",required:!1,type:{name:"string | undefined"}},a11yNameButtonZoom:{defaultValue:null,description:"",name:"a11yNameButtonZoom",required:!1,type:{name:"string | undefined"}},canSwipeToUnzoom:{defaultValue:null,description:"",name:"canSwipeToUnzoom",required:!1,type:{name:"boolean | undefined"}},classDialog:{defaultValue:null,description:"",name:"classDialog",required:!1,type:{name:"string | undefined"}},IconUnzoom:{defaultValue:null,description:"",name:"IconUnzoom",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},IconZoom:{defaultValue:null,description:"",name:"IconZoom",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},swipeToUnzoomThreshold:{defaultValue:null,description:"",name:"swipeToUnzoomThreshold",required:!1,type:{name:"number | undefined"}},wrapElement:{defaultValue:null,description:"",name:"wrapElement",required:!1,type:{name:'"div" | "span" | undefined'}},ZoomContent:{defaultValue:null,description:"",name:"ZoomContent",required:!1,type:{name:"((data: { img: ReactElement<any, string | JSXElementConstructor<any>> | null; buttonUnzoom: ReactElement<HTMLButtonElement, string | JSXElementConstructor<...>>; modalState: ModalState; onUnzoom: () => void; }) => ReactElement<...>) | undefined"}},zoomImg:{defaultValue:null,description:"",name:"zoomImg",required:!1,type:{name:"ImgHTMLAttributes<HTMLImageElement> | undefined"}},zoomMargin:{defaultValue:null,description:"",name:"zoomMargin",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["source/Uncontrolled.tsx#Uncontrolled"]={docgenInfo:Uncontrolled.__docgenInfo,name:"Uncontrolled",path:"source/Uncontrolled.tsx#Uncontrolled"})}catch(__react_docgen_typescript_loader_error){}},"./stories/images/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Qj:()=>imgEarth,pu:()=>imgGlenorchyLagoon,lc:()=>imgHobbiton,cq:()=>imgHookerValleyTrack,bG:()=>imgKea,gA:()=>imgKeaLarge,K$:()=>imgKeaSmall,Zd:()=>imgNzBeach,Ig:()=>imgNzMap,N9:()=>imgPortWaikato,l5:()=>imgQueenstown,Sc:()=>imgTeAraiPoint,w_:()=>imgTekapo,Wq:()=>imgThatWanakaTree});const earth_large_namespaceObject=__webpack_require__.p+"static/media/earth-large.b1a1ed4f.jpg",glenorchy_lagoon_namespaceObject=__webpack_require__.p+"static/media/glenorchy-lagoon.272d443f.jpg",andres_iga_7XKkJVw1d8c_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/andres-iga-7XKkJVw1d8c-unsplash-smaller.737d2ec5.jpg",roell_de_ram_2DM7eOR5iyc_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/roell-de-ram-2DM7eOR5iyc-unsplash-smaller.a4e5b402.jpg",pablo_heimplatz_PSF2RhUBORs_unsplash_300w_namespaceObject=__webpack_require__.p+"static/media/pablo-heimplatz-PSF2RhUBORs-unsplash-300w.7d7b6375.jpg",pablo_heimplatz_PSF2RhUBORs_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/pablo-heimplatz-PSF2RhUBORs-unsplash-smaller.5a06c8a2.jpg",pablo_heimplatz_PSF2RhUBORs_unsplash_namespaceObject=__webpack_require__.p+"static/media/pablo-heimplatz-PSF2RhUBORs-unsplash.19841566.jpg",rod_long_4dcsLxQxSHY_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/rod-long-4dcsLxQxSHY-unsplash-smaller.9eee9731.jpg",petr_vysohlid_9fqwGqGLUxc_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/petr-vysohlid-9fqwGqGLUxc-unsplash-smaller.163735c3.jpg",omer_faruk_bekdemir_5BuxuWIJF1Q_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/omer-faruk-bekdemir-5BuxuWIJF1Q-unsplash-smaller.e6787204.jpg",douglas_bagg_wRwa3Z6GtRI_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/douglas-bagg-wRwa3Z6GtRI-unsplash-smaller.053c764a.jpg",tobias_keller_73F4pKoUkM0_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/tobias-keller-73F4pKoUkM0-unsplash-smaller.0831f856.jpg",laura_smetsers_H_TW2CoNtTk_unsplash_smaller_namespaceObject=__webpack_require__.p+"static/media/laura-smetsers-H-TW2CoNtTk-unsplash-smaller.4d1fd239.jpg",nz_map_namespaceObject=__webpack_require__.p+"static/media/nz-map.d56663ce.svg";var imgEarth={alt:"2D map of the Earth",src:earth_large_namespaceObject},imgGlenorchyLagoon={alt:"Glenorchy lagoon, New Zealand by Robert Pearce",src:glenorchy_lagoon_namespaceObject},imgHobbiton={alt:"Hobbiton, Matamata, New Zealand by Andres Iga",src:andres_iga_7XKkJVw1d8c_unsplash_smaller_namespaceObject},imgHookerValleyTrack={alt:"Hooker Valley Track, New Zealand by Roll de Ram",src:roell_de_ram_2DM7eOR5iyc_unsplash_smaller_namespaceObject},imgKeaSmall={alt:"Kea (alpine parrot) in Arthur's Pass, New Zealand by Pablo Heimplatz",src:pablo_heimplatz_PSF2RhUBORs_unsplash_300w_namespaceObject},imgKea={alt:"Kea (alpine parrot) in Arthur's Pass, New Zealand by Pablo Heimplatz",src:pablo_heimplatz_PSF2RhUBORs_unsplash_smaller_namespaceObject},imgKeaLarge={alt:"Kea (alpine parrot) in Arthur's Pass, New Zealand by Pablo Heimplatz",src:pablo_heimplatz_PSF2RhUBORs_unsplash_namespaceObject},imgNzBeach={alt:"New Zealand Beach by Rod Long",src:rod_long_4dcsLxQxSHY_unsplash_smaller_namespaceObject},imgQueenstown={alt:"Queenstown, New Zealand by Omer Faruk",src:omer_faruk_bekdemir_5BuxuWIJF1Q_unsplash_smaller_namespaceObject},imgTeAraiPoint={alt:"Te Arai Point, New Zealand by Douglas Bagg",src:douglas_bagg_wRwa3Z6GtRI_unsplash_smaller_namespaceObject},imgTekapo={alt:"Lake Tekapo, New Zealand by Tobias Keller",src:tobias_keller_73F4pKoUkM0_unsplash_smaller_namespaceObject},imgThatWanakaTree={alt:"That Wanaka Tree, New Zealand by Laura Smetsers",src:laura_smetsers_H_TW2CoNtTk_unsplash_smaller_namespaceObject},imgPortWaikato={alt:"Port Waikato, Tuakau, Auckland, New Zealand by Petr Vysohlid",src:petr_vysohlid_9fqwGqGLUxc_unsplash_smaller_namespaceObject},imgNzMap={alt:"Map of New Zealand",src:nz_map_namespaceObject}}}]);