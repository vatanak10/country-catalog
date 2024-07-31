import{p as H,m as R,a as D,g as P,u as I,c as o,b as j,t as w,d as q,e as $,s as S,f as u,h as G,i as B,r as L,j as J,w as k,o as K,k as O,l as W,n as Y,q as Q,v as X,x as Z,y as ee,z as te,A as F,B as ae,C as M,D as U,E as x,F as le,G as oe,H as ne,I as se,V as re,J as ue,K as ie}from"./index-qO7AY88s.js";import{m as ce,a as de,b as ve,u as me,c as ge,d as he,e as fe,V as be,f as C,g as ye,h as _e,i as Se,j as Te}from"./VGrid-0bjOTq76.js";const xe=H({text:String,...R(),...D()},"VToolbarTitle"),Ve=P()({name:"VToolbarTitle",props:xe(),setup(e,i){let{slots:t}=i;return I(()=>{const r=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[r&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),pe=[null,"prominent","default","comfortable","compact"],z=H({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>pe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ce(),...R(),...de(),...ve(),...D({tag:"header"}),...j()},"VToolbar"),A=P()({name:"VToolbar",props:z(),setup(e,i){var h;let{slots:t}=i;const{backgroundColorClasses:r,backgroundColorStyles:n}=me(w(e,"color")),{borderClasses:l}=ge(e),{elevationClasses:v}=he(e),{roundedClasses:c}=fe(e),{themeClasses:f}=q(e),{rtlClasses:T}=$(),d=S(!!(e.extended||(h=t.extension)!=null&&h.call(t))),m=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=u(()=>d.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return G({VBtn:{variant:"text"}}),I(()=>{var V;const s=!!(e.title||t.title),g=!!(t.image||e.image),_=(V=t.extension)==null?void 0:V.call(t);return d.value=!!(e.extended||_),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},r.value,l.value,v.value,c.value,f.value,T.value,e.class],style:[n.value,e.style]},{default:()=>[g&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(be,{key:"image-img",cover:!0,src:e.image},null)]),o(C,{defaults:{VTabs:{height:B(m.value)}}},{default:()=>{var p,a,b;return[o("div",{class:"v-toolbar__content",style:{height:B(m.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(p=t.prepend)==null?void 0:p.call(t)]),s&&o(Ve,{key:"title",text:e.title},{text:t.title}),(a=t.default)==null?void 0:a.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(b=t.append)==null?void 0:b.call(t)])])]}}),o(C,{defaults:{VTabs:{height:B(y.value)}}},{default:()=>[o(ye,null,{default:()=>[d.value&&o("div",{class:"v-toolbar__extension",style:{height:B(y.value)}},[_])]})]})]})}),{contentHeight:m,extensionHeight:y}}}),Be=H({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ke(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=i;let r=0,n=0;const l=L(null),v=S(0),c=S(0),f=S(0),T=S(!1),d=S(!1),m=u(()=>Number(e.scrollThreshold)),y=u(()=>J((m.value-v.value)/m.value||0)),h=()=>{const s=l.value;if(!s||t&&!t.value)return;r=v.value,v.value="window"in s?s.pageYOffset:s.scrollTop;const g=s instanceof Window?document.documentElement.scrollHeight:s.scrollHeight;if(n!==g){n=g;return}d.value=v.value<r,f.value=Math.abs(v.value-m.value)};return k(d,()=>{c.value=c.value||v.value}),k(T,()=>{c.value=0}),K(()=>{k(()=>e.scrollTarget,s=>{var _;const g=s?document.querySelector(s):window;g&&g!==l.value&&((_=l.value)==null||_.removeEventListener("scroll",h),l.value=g,l.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),O(()=>{var s;(s=l.value)==null||s.removeEventListener("scroll",h)}),t&&k(t,h,{immediate:!0}),{scrollThreshold:m,currentScroll:v,currentThreshold:f,isScrollActive:T,scrollRatio:y,isScrollingUp:d,savedScroll:c}}const He=H({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...z(),...W(),...Be(),height:{type:[Number,String],default:64}},"VAppBar"),Ce=P()({name:"VAppBar",props:He(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const r=L(),n=Y(e,"modelValue"),l=u(()=>{var b;const a=new Set(((b=e.scrollBehavior)==null?void 0:b.split(" "))??[]);return{hide:a.has("hide"),fullyHide:a.has("fully-hide"),inverted:a.has("inverted"),collapse:a.has("collapse"),elevate:a.has("elevate"),fadeImage:a.has("fade-image")}}),v=u(()=>{const a=l.value;return a.hide||a.fullyHide||a.inverted||a.collapse||a.elevate||a.fadeImage||!n.value}),{currentScroll:c,scrollThreshold:f,isScrollingUp:T,scrollRatio:d}=ke(e,{canScroll:v}),m=u(()=>l.value.hide||l.value.fullyHide),y=u(()=>e.collapse||l.value.collapse&&(l.value.inverted?d.value>0:d.value===0)),h=u(()=>e.flat||l.value.fullyHide&&!n.value||l.value.elevate&&(l.value.inverted?c.value>0:c.value===0)),s=u(()=>l.value.fadeImage?l.value.inverted?1-d.value:d.value:void 0),g=u(()=>{var N,E;const a=Number(((N=r.value)==null?void 0:N.contentHeight)??e.height),b=Number(((E=r.value)==null?void 0:E.extensionHeight)??0);return m.value?c.value<f.value||l.value.fullyHide?a+b:a:a+b});Q(u(()=>!!e.scrollBehavior),()=>{te(()=>{m.value?l.value.inverted?n.value=c.value>f.value:n.value=T.value||c.value<f.value:n.value=!0})});const{ssrBootStyles:_}=X(),{layoutItemStyles:V,layoutIsReady:p}=Z({id:e.name,order:u(()=>parseInt(e.order,10)),position:w(e,"location"),layoutSize:g,elementSize:S(void 0),active:n,absolute:w(e,"absolute")});return I(()=>{const a=A.filterProps(e);return o(A,ee({ref:r,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...V.value,"--v-toolbar-image-opacity":s.value,height:void 0,..._.value},e.style]},a,{collapse:y.value,flat:h.value}),t)}),p}}),we=_e("v-spacer","div","VSpacer"),Pe=se("span",{class:"font-weight-bold"},"Country Catalog",-1),Ie=F({__name:"AppHeader",setup(e){const i=ae();function t(){i.global.name.value=i.global.current.value.dark?"light":"dark"}return(r,n)=>(M(),U(Ce,{class:"px-4",rounded:""},{default:x(()=>[Pe,o(we),o(Se,{icon:"",onClick:t},{default:x(()=>[o(Te,null,{default:x(()=>[le(oe(ne(i).global.current.value.dark?"mdi-weather-sunny":"mdi-weather-night"),1)]),_:1})]),_:1})]),_:1}))}}),Ae=F({__name:"default",setup(e){return(i,t)=>{const r=Ie,n=ue("router-view");return M(),U(re,null,{default:x(()=>[o(r),o(ie,null,{default:x(()=>[o(n)]),_:1})]),_:1})}}});export{Ae as default};
