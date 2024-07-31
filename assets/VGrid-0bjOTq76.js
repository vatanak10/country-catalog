import{aL as te,g as z,aE as bt,aM as Re,m as F,aN as se,aO as be,T as ie,p as S,aJ as Ct,h as Ne,P as Oe,Q as Ae,u as M,c,f,ab as H,X as Fe,aP as xe,aQ as St,aR as _t,aS as kt,an as D,y as Ce,aT as Se,t as $,$ as X,s as j,r as le,w as G,ao as wt,Y as _e,k as re,R as fe,S as pt,O as Me,i as x,a9 as xt,H as me,a as Y,b as J,d as K,aj as Bt,a5 as De,a0 as It,a4 as Pt,n as je,o as Vt,aU as Tt,ai as Ge,al as Et,aV as Lt,N as ge,aW as $t,aX as zt,aY as Rt,ae as Nt,z as Ot,e as He,j as Be,U as Ue,aZ as At,a_ as Ie,W as Ft,a$ as Mt,b0 as Pe}from"./index-qO7AY88s.js";const We=["top","bottom"],Dt=["start","end","left","right"];function jt(e,n){let[a,t]=e.split(" ");return t||(t=te(We,a)?"start":te(Dt,a)?"top":"center"),{side:Ve(a,n),align:Ve(t,n)}}function Ve(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function En(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Ln(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function $n(e){return{side:e.align,align:e.side}}function zn(e){return te(We,e.side)?"y":"x"}function Rn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return z()({name:a??bt(Re(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...F()},setup(t,s){let{slots:i}=s;return()=>{var l;return se(t.tag,{class:[e,t.class],style:t.style},(l=i.default)==null?void 0:l.call(i))}}})}const Gt=S({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function V(e,n,a){return z()({name:e,props:Gt({mode:a,origin:n}),setup(t,s){let{slots:i}=s;const l={onBeforeEnter(r){t.origin&&(r.style.transformOrigin=t.origin)},onLeave(r){if(t.leaveAbsolute){const{offsetTop:u,offsetLeft:m,offsetWidth:g,offsetHeight:y}=r;r._transitionInitialStyles={position:r.style.position,top:r.style.top,left:r.style.left,width:r.style.width,height:r.style.height},r.style.position="absolute",r.style.top=`${u}px`,r.style.left=`${m}px`,r.style.width=`${g}px`,r.style.height=`${y}px`}t.hideOnLeave&&r.style.setProperty("display","none","important")},onAfterLeave(r){if(t.leaveAbsolute&&(r!=null&&r._transitionInitialStyles)){const{position:u,top:m,left:g,width:y,height:o}=r._transitionInitialStyles;delete r._transitionInitialStyles,r.style.position=u||"",r.style.top=m||"",r.style.left=g||"",r.style.width=y||"",r.style.height=o||""}}};return()=>{const r=t.group?be:ie;return se(r,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:l},i.default)}}})}function qe(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return z()({name:e,props:{mode:{type:String,default:a},disabled:Boolean,group:Boolean},setup(t,s){let{slots:i}=s;const l=t.group?be:ie;return()=>se(l,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:n},i.default)}})}function Xe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const a=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Re(`offset-${a}`);return{onBeforeEnter(l){l._parent=l.parentNode,l._initialStyle={transition:l.style.transition,overflow:l.style.overflow,[a]:l.style[a]}},onEnter(l){const r=l._initialStyle;l.style.setProperty("transition","none","important"),l.style.overflow="hidden";const u=`${l[t]}px`;l.style[a]="0",l.offsetHeight,l.style.transition=r.transition,e&&l._parent&&l._parent.classList.add(e),requestAnimationFrame(()=>{l.style[a]=u})},onAfterEnter:i,onEnterCancelled:i,onLeave(l){l._initialStyle={transition:"",overflow:l.style.overflow,[a]:l.style[a]},l.style.overflow="hidden",l.style[a]=`${l[t]}px`,l.offsetHeight,requestAnimationFrame(()=>l.style[a]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(l){e&&l._parent&&l._parent.classList.remove(e),i(l)}function i(l){const r=l._initialStyle[a];l.style.overflow=l._initialStyle.overflow,r!=null&&(l.style[a]=r),delete l._initialStyle}}V("fab-transition","center center","out-in");V("dialog-bottom-transition");V("dialog-top-transition");const Nn=V("fade-transition");V("scale-transition");V("scroll-x-transition");V("scroll-x-reverse-transition");V("scroll-y-transition");V("scroll-y-reverse-transition");V("slide-x-transition");V("slide-x-reverse-transition");const On=V("slide-y-transition");V("slide-y-reverse-transition");const An=qe("expand-transition",Xe()),Fn=qe("expand-x-transition",Xe("",!0)),Ht=S({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ce=z(!1)({name:"VDefaultsProvider",props:Ht(),setup(e,n){let{slots:a}=n;const{defaults:t,disabled:s,reset:i,root:l,scoped:r}=Ct(e);return Ne(t,{reset:i,root:l,scoped:r,disabled:s}),()=>{var u;return(u=a.default)==null?void 0:u.call(a)}}});function Ut(e){return{aspectStyles:f(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const Ye=S({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...F(),...Oe()},"VResponsive"),Te=z()({name:"VResponsive",props:Ye(),setup(e,n){let{slots:a}=n;const{aspectStyles:t}=Ut(e),{dimensionStyles:s}=Ae(e);return M(()=>{var i;return c("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[c("div",{class:"v-responsive__sizer",style:t.value},null),(i=a.additional)==null?void 0:i.call(a),a.default&&c("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}});function ke(e){return Fe(()=>{const n=[],a={};if(e.value.background)if(xe(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&St(e.value.background)){const t=_t(e.value.background);if(t.a==null||t.a===1){const s=kt(t);a.color=s,a.caretColor=s}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(xe(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:a}})}function ne(e,n){const a=f(()=>({text:H(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=ke(a);return{textColorClasses:t,textColorStyles:s}}function ee(e,n){const a=f(()=>({background:H(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=ke(a);return{backgroundColorClasses:t,backgroundColorStyles:s}}const oe=S({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ue(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{roundedClasses:f(()=>{const t=H(e)?e.value:e.rounded,s=H(e)?e.value:e.tile,i=[];if(t===!0||t==="")i.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const l of String(t).split(" "))i.push(`rounded-${l}`);else(s||t===!1)&&i.push("rounded-0");return i})}}const Wt=S({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Z=(e,n)=>{let{slots:a}=n;const{transition:t,disabled:s,group:i,...l}=e,{component:r=i?be:ie,...u}=typeof t=="object"?t:{};return se(r,Ce(typeof t=="string"?{name:s?"":t}:u,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:i}).filter(m=>{let[g,y]=m;return y!==void 0})),l),a)};function qt(e,n){if(!Se)return;const a=n.modifiers||{},t=n.value,{handler:s,options:i}=typeof t=="object"?t:{handler:t,options:{}},l=new IntersectionObserver(function(){var y;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const m=(y=e._observe)==null?void 0:y[n.instance.$.uid];if(!m)return;const g=r.some(o=>o.isIntersecting);s&&(!a.quiet||m.init)&&(!a.once||g||m.init)&&s(g,r,u),g&&a.once?Je(e,n):m.init=!0},i);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:l},l.observe(e)}function Je(e,n){var t;const a=(t=e._observe)==null?void 0:t[n.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Xt={mounted:qt,unmounted:Je},Yt=S({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Ye(),...F(),...oe(),...Wt()},"VImg"),Mn=z()({name:"VImg",directives:{intersect:Xt},props:Yt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:a,slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:i}=ee($(e,"color")),{roundedClasses:l}=ue(e),r=X("VImg"),u=j(""),m=le(),g=j(e.eager?"loading":"idle"),y=j(),o=j(),d=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=f(()=>d.value.aspect||y.value/o.value||0);G(()=>e.src,()=>{v(g.value!=="idle")}),G(b,(h,k)=>{!h&&k&&m.value&&w(m.value)}),wt(()=>v());function v(h){if(!(e.eager&&h)&&!(Se&&!h&&!e.eager)){if(g.value="loading",d.value.lazySrc){const k=new Image;k.src=d.value.lazySrc,w(k,null)}d.value.src&&_e(()=>{var k;a("loadstart",((k=m.value)==null?void 0:k.currentSrc)||d.value.src),setTimeout(()=>{var I;if(!r.isUnmounted)if((I=m.value)!=null&&I.complete){if(m.value.naturalWidth||_(),g.value==="error")return;b.value||w(m.value,null),g.value==="loading"&&C()}else b.value||w(m.value),T()})})}}function C(){var h;r.isUnmounted||(T(),w(m.value),g.value="loaded",a("load",((h=m.value)==null?void 0:h.currentSrc)||d.value.src))}function _(){var h;r.isUnmounted||(g.value="error",a("error",((h=m.value)==null?void 0:h.currentSrc)||d.value.src))}function T(){const h=m.value;h&&(u.value=h.currentSrc||h.src)}let E=-1;re(()=>{clearTimeout(E)});function w(h){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const I=()=>{if(clearTimeout(E),r.isUnmounted)return;const{naturalHeight:N,naturalWidth:Q}=h;N||Q?(y.value=Q,o.value=N):!h.complete&&g.value==="loading"&&k!=null?E=window.setTimeout(I,k):(h.currentSrc.endsWith(".svg")||h.currentSrc.startsWith("data:image/svg+xml"))&&(y.value=1,o.value=1)};I()}const R=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),L=()=>{var I;if(!d.value.src||g.value==="idle")return null;const h=c("img",{class:["v-img__img",R.value],style:{objectPosition:e.position},src:d.value.src,srcset:d.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:m,onLoad:C,onError:_},null),k=(I=t.sources)==null?void 0:I.call(t);return c(Z,{transition:e.transition,appear:!0},{default:()=>[fe(k?c("picture",{class:"v-img__picture"},[k,h]):h,[[xt,g.value==="loaded"]])]})},O=()=>c(Z,{transition:e.transition},{default:()=>[d.value.lazySrc&&g.value!=="loaded"&&c("img",{class:["v-img__img","v-img__img--preload",R.value],style:{objectPosition:e.position},src:d.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),U=()=>t.placeholder?c(Z,{transition:e.transition,appear:!0},{default:()=>[(g.value==="loading"||g.value==="error"&&!t.error)&&c("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,A=()=>t.error?c(Z,{transition:e.transition,appear:!0},{default:()=>[g.value==="error"&&c("div",{class:"v-img__error"},[t.error()])]}):null,p=()=>e.gradient?c("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,B=j(!1);{const h=G(b,k=>{k&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{B.value=!0})}),h())})}return M(()=>{const h=Te.filterProps(e);return fe(c(Te,Ce({class:["v-img",{"v-img--booting":!B.value},s.value,l.value,e.class],style:[{width:x(e.width==="auto"?y.value:e.width)},i.value,e.style]},h,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>c(Me,null,[c(L,null,null),c(O,null,null),c(p,null,null),c(U,null,null),c(A,null,null)]),default:t.default}),[[pt("intersect"),{handler:v,options:e.options},null,{once:!0}]])}),{currentSrc:u,image:m,state:g,naturalWidth:y,naturalHeight:o}}}),Ke=S({border:[Boolean,Number,String]},"border");function Qe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{borderClasses:f(()=>{const t=H(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`border-${i}`);return s})}}const Ze=S({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function et(e){return{elevationClasses:f(()=>{const a=H(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}const Jt=[null,"default","comfortable","compact"],tt=S({density:{type:String,default:"default",validator:e=>Jt.includes(e)}},"density");function nt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{densityClasses:f(()=>`${n}--density-${e.density}`)}}const Kt=["elevated","flat","tonal","outlined","text","plain"];function Qt(e,n){return c(Me,null,[e&&c("span",{key:"overlay",class:`${n}__overlay`},null),c("span",{key:"underlay",class:`${n}__underlay`},null)])}const at=S({color:String,variant:{type:String,default:"elevated",validator:e=>Kt.includes(e)}},"variant");function Zt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();const a=f(()=>{const{variant:i}=me(e);return`${n}--variant-${i}`}),{colorClasses:t,colorStyles:s}=ke(f(()=>{const{variant:i,color:l}=me(e);return{[["elevated","flat"].includes(i)?"background":"text"]:l}}));return{colorClasses:t,colorStyles:s,variantClasses:a}}const st=S({baseColor:String,divided:Boolean,...Ke(),...F(),...tt(),...Ze(),...oe(),...Y(),...J(),...at()},"VBtnGroup"),Ee=z()({name:"VBtnGroup",props:st(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=K(e),{densityClasses:s}=nt(e),{borderClasses:i}=Qe(e),{elevationClasses:l}=et(e),{roundedClasses:r}=ue(e);Ne({VBtn:{height:"auto",baseColor:$(e,"baseColor"),color:$(e,"color"),density:$(e,"density"),flat:!0,variant:$(e,"variant")}}),M(()=>c(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,i.value,s.value,l.value,r.value,e.class],style:e.style},a))}}),en=S({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),tn=S({value:null,disabled:Boolean,selectedClass:String},"group-item");function nn(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=X("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Bt();De(Symbol.for(`${n.description}:id`),s);const i=It(n,null);if(!i){if(!a)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const l=$(e,"value"),r=f(()=>!!(i.disabled.value||e.disabled));i.register({id:s,value:l,disabled:r},t),re(()=>{i.unregister(s)});const u=f(()=>i.isSelected(s)),m=f(()=>i.items.value[0].id===s),g=f(()=>i.items.value[i.items.value.length-1].id===s),y=f(()=>u.value&&[i.selectedClass.value,e.selectedClass]);return G(u,o=>{t.emit("group:selected",{value:o})},{flush:"sync"}),{id:s,isSelected:u,isFirst:m,isLast:g,toggle:()=>i.select(s,!u.value),select:o=>i.select(s,o),selectedClass:y,value:l,disabled:r,group:i}}function an(e,n){let a=!1;const t=Pt([]),s=je(e,"modelValue",[],o=>o==null?[]:it(t,Et(o)),o=>{const d=ln(t,o);return e.multiple?d:d[0]}),i=X("useGroup");function l(o,d){const b=o,v=Symbol.for(`${n.description}:id`),_=Lt(v,i==null?void 0:i.vnode).indexOf(d);me(b.value)==null&&(b.value=_,b.useIndexAsValue=!0),_>-1?t.splice(_,0,b):t.push(b)}function r(o){if(a)return;u();const d=t.findIndex(b=>b.id===o);t.splice(d,1)}function u(){const o=t.find(d=>!d.disabled);o&&e.mandatory==="force"&&!s.value.length&&(s.value=[o.id])}Vt(()=>{u()}),re(()=>{a=!0}),Tt(()=>{for(let o=0;o<t.length;o++)t[o].useIndexAsValue&&(t[o].value=o)});function m(o,d){const b=t.find(v=>v.id===o);if(!(d&&(b!=null&&b.disabled)))if(e.multiple){const v=s.value.slice(),C=v.findIndex(T=>T===o),_=~C;if(d=d??!_,_&&e.mandatory&&v.length<=1||!_&&e.max!=null&&v.length+1>e.max)return;C<0&&d?v.push(o):C>=0&&!d&&v.splice(C,1),s.value=v}else{const v=s.value.includes(o);if(e.mandatory&&v)return;s.value=d??!v?[o]:[]}}function g(o){if(e.multiple,s.value.length){const d=s.value[0],b=t.findIndex(_=>_.id===d);let v=(b+o)%t.length,C=t[v];for(;C.disabled&&v!==b;)v=(v+o)%t.length,C=t[v];if(C.disabled)return;s.value=[t[v].id]}else{const d=t.find(b=>!b.disabled);d&&(s.value=[d.id])}}const y={register:l,unregister:r,selected:s,select:m,disabled:$(e,"disabled"),prev:()=>g(t.length-1),next:()=>g(1),isSelected:o=>s.value.includes(o),selectedClass:f(()=>e.selectedClass),items:f(()=>t),getItemIndex:o=>sn(t,o)};return De(n,y),y}function sn(e,n){const a=it(e,[n]);return a.length?e.findIndex(t=>t.id===a[0]):-1}function it(e,n){const a=[];return n.forEach(t=>{const s=e.find(l=>Ge(t,l.value)),i=e[t];(s==null?void 0:s.value)!=null?a.push(s.id):i!=null&&a.push(i.id)}),a}function ln(e,n){const a=[];return n.forEach(t=>{const s=e.findIndex(i=>i.id===t);if(~s){const i=e[s];a.push(i.value!=null?i.value:s)}}),a}const lt=Symbol.for("vuetify:v-btn-toggle"),rn=S({...st(),...en()},"VBtnToggle");z()({name:"VBtnToggle",props:rn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isSelected:t,next:s,prev:i,select:l,selected:r}=an(e,lt);return M(()=>{const u=Ee.filterProps(e);return c(Ee,Ce({class:["v-btn-toggle",e.class]},u,{style:e.style}),{default:()=>{var m;return[(m=a.default)==null?void 0:m.call(a,{isSelected:t,next:s,prev:i,select:l,selected:r})]}})}),{next:s,prev:i,select:l}}});const on=["x-small","small","default","large","x-large"],we=S({size:{type:[String,Number],default:"default"}},"size");function pe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return Fe(()=>{let a,t;return te(on,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:x(e.size),height:x(e.size)}),{sizeClasses:a,sizeStyles:t}})}const un=S({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:ge,...F(),...we(),...Y({tag:"i"}),...J()},"VIcon"),de=z()({name:"VIcon",props:un(),setup(e,n){let{attrs:a,slots:t}=n;const s=le(),{themeClasses:i}=K(e),{iconData:l}=$t(f(()=>s.value||e.icon)),{sizeClasses:r}=pe(e),{textColorClasses:u,textColorStyles:m}=ne($(e,"color"));return M(()=>{var o,d;const g=(o=t.default)==null?void 0:o.call(t);g&&(s.value=(d=zt(g).filter(b=>b.type===Rt&&b.children&&typeof b.children=="string")[0])==null?void 0:d.children);const y=!!(a.onClick||a.onClickOnce);return c(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",i.value,r.value,u.value,{"v-icon--clickable":y,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:x(e.size),height:x(e.size),width:x(e.size)},m.value,e.style],role:y?"button":void 0,"aria-hidden":!y,tabindex:y?e.disabled?-1:0:void 0},{default:()=>[g]})}),{}}});function rt(e,n){const a=le(),t=j(!1);if(Se){const s=new IntersectionObserver(i=>{t.value=!!i.find(l=>l.isIntersecting)},n);re(()=>{s.disconnect()}),G(a,(i,l)=>{l&&(s.unobserve(l),t.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:a,isIntersecting:t}}const cn=S({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...F(),...we(),...Y({tag:"div"}),...J()},"VProgressCircular"),dn=z()({name:"VProgressCircular",props:cn(),setup(e,n){let{slots:a}=n;const t=20,s=2*Math.PI*t,i=le(),{themeClasses:l}=K(e),{sizeClasses:r,sizeStyles:u}=pe(e),{textColorClasses:m,textColorStyles:g}=ne($(e,"color")),{textColorClasses:y,textColorStyles:o}=ne($(e,"bgColor")),{intersectionRef:d,isIntersecting:b}=rt(),{resizeRef:v,contentRect:C}=Nt(),_=f(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),T=f(()=>Number(e.width)),E=f(()=>u.value?Number(e.size):C.value?C.value.width:Math.max(T.value,32)),w=f(()=>t/(1-T.value/E.value)*2),R=f(()=>T.value/E.value*w.value),L=f(()=>x((100-_.value)/100*s));return Ot(()=>{d.value=i.value,v.value=i.value}),M(()=>c(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":b.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,r.value,m.value,e.class],style:[u.value,g.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:_.value},{default:()=>[c("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w.value} ${w.value}`},[c("circle",{class:["v-progress-circular__underlay",y.value],style:o.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":R.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),c("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":R.value,"stroke-dasharray":s,"stroke-dashoffset":L.value},null)]),a.default&&c("div",{class:"v-progress-circular__content"},[a.default({value:_.value})])]})),{}}}),Le={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},ot=S({location:String},"location");function ut(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=He();return{locationStyles:f(()=>{if(!e.location)return{};const{side:i,align:l}=jt(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function r(m){return a?a(m):0}const u={};return i!=="center"&&(n?u[Le[i]]=`calc(100% - ${r(i)}px)`:u[i]=0),l!=="center"?n?u[Le[l]]=`calc(100% - ${r(l)}px)`:u[l]=0:(i==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),u})}}const vn=S({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...F(),...ot({location:"top"}),...oe(),...Y(),...J()},"VProgressLinear"),fn=z()({name:"VProgressLinear",props:vn(),emits:{"update:modelValue":e=>!0},setup(e,n){var B;let{slots:a}=n;const t=je(e,"modelValue"),{isRtl:s,rtlClasses:i}=He(),{themeClasses:l}=K(e),{locationStyles:r}=ut(e),{textColorClasses:u,textColorStyles:m}=ne(e,"color"),{backgroundColorClasses:g,backgroundColorStyles:y}=ee(f(()=>e.bgColor||e.color)),{backgroundColorClasses:o,backgroundColorStyles:d}=ee(f(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:v}=ee(e,"color"),{roundedClasses:C}=ue(e),{intersectionRef:_,isIntersecting:T}=rt(),E=f(()=>parseFloat(e.max)),w=f(()=>parseFloat(e.height)),R=f(()=>Be(parseFloat(e.bufferValue)/E.value*100,0,100)),L=f(()=>Be(parseFloat(t.value)/E.value*100,0,100)),O=f(()=>s.value!==e.reverse),U=f(()=>e.indeterminate?"fade-transition":"slide-x-transition"),A=Ue&&((B=window.matchMedia)==null?void 0:B.call(window,"(forced-colors: active)").matches);function p(h){if(!_.value)return;const{left:k,right:I,width:N}=_.value.getBoundingClientRect(),Q=O.value?N-h.clientX+(I-N):h.clientX-k;t.value=Math.round(Q/N*E.value)}return M(()=>c(e.tag,{ref:_,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&T.value,"v-progress-linear--reverse":O.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,l.value,i.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?x(w.value):0,"--v-progress-linear-height":x(w.value),...e.absolute?r.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:L.value,onClick:e.clickable&&p},{default:()=>[e.stream&&c("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...m.value,[O.value?"left":"right"]:x(-w.value),borderTop:`${x(w.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${x(w.value/4)})`,width:x(100-R.value,"%"),"--v-progress-linear-stream-to":x(w.value*(O.value?1:-1))}},null),c("div",{class:["v-progress-linear__background",A?void 0:g.value],style:[y.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),c("div",{class:["v-progress-linear__buffer",A?void 0:o.value],style:[d.value,{opacity:parseFloat(e.bufferOpacity),width:x(R.value,"%")}]},null),c(ie,{name:U.value},{default:()=>[e.indeterminate?c("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(h=>c("div",{key:h,class:["v-progress-linear__indeterminate",h,A?void 0:b.value],style:v.value},null))]):c("div",{class:["v-progress-linear__determinate",A?void 0:b.value],style:[v.value,{width:x(L.value,"%")}]},null)]}),a.default&&c("div",{class:"v-progress-linear__content"},[a.default({value:L.value,buffer:R.value})])]})),{}}}),mn=S({loading:[Boolean,String]},"loader");function gn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{loaderClasses:f(()=>({[`${n}--loading`]:e.loading}))}}function Dn(e,n){var t;let{slots:a}=n;return c("div",{class:`${e.name}__loader`},[((t=a.default)==null?void 0:t.call(a,{color:e.color,isActive:e.active}))||c(fn,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const yn=["static","relative","fixed","absolute","sticky"],hn=S({position:{type:String,validator:e=>yn.includes(e)}},"position");function bn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:D();return{positionClasses:f(()=>e.position?`${n}--${e.position}`:void 0)}}function Cn(){const e=X("useRoute");return f(()=>{var n;return(n=e==null?void 0:e.proxy)==null?void 0:n.$route})}function jn(){var e,n;return(n=(e=X("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function Sn(e,n){var m,g;const a=At("RouterLink"),t=f(()=>!!(e.href||e.to)),s=f(()=>(t==null?void 0:t.value)||Ie(n,"click")||Ie(e,"click"));if(typeof a=="string"||!("useLink"in a))return{isLink:t,isClickable:s,href:$(e,"href")};const i=f(()=>({...e,to:$(()=>e.to||"")})),l=a.useLink(i.value),r=f(()=>e.to?l:void 0),u=Cn();return{isLink:t,isClickable:s,route:(m=r.value)==null?void 0:m.route,navigate:(g=r.value)==null?void 0:g.navigate,isActive:f(()=>{var y,o,d;return r.value?e.exact?u.value?((d=r.value.isExactActive)==null?void 0:d.value)&&Ge(r.value.route.value.query,u.value.query):((o=r.value.isExactActive)==null?void 0:o.value)??!1:((y=r.value.isActive)==null?void 0:y.value)??!1:!1}),href:f(()=>{var y;return e.to?(y=r.value)==null?void 0:y.route.value.href:e.href})}}const _n=S({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ve=!1;function Gn(e,n){let a=!1,t,s;Ue&&(_e(()=>{window.addEventListener("popstate",i),t=e==null?void 0:e.beforeEach((l,r,u)=>{ve?a?n(u):u():setTimeout(()=>a?n(u):u()),ve=!0}),s=e==null?void 0:e.afterEach(()=>{ve=!1})}),Ft(()=>{window.removeEventListener("popstate",i),t==null||t(),s==null||s()}));function i(l){var r;(r=l.state)!=null&&r.replaced||(a=!0,setTimeout(()=>a=!1))}}function kn(e,n){G(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&n&&_e(()=>{n(!0)})},{immediate:!0})}const ye=Symbol("rippleStop"),wn=80;function $e(e,n){e.style.transform=n,e.style.webkitTransform=n}function he(e){return e.constructor.name==="TouchEvent"}function ct(e){return e.constructor.name==="KeyboardEvent"}const pn=function(e,n){var y;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!ct(e)){const o=n.getBoundingClientRect(),d=he(e)?e.touches[e.touches.length-1]:e;t=d.clientX-o.left,s=d.clientY-o.top}let i=0,l=.3;(y=n._ripple)!=null&&y.circle?(l=.15,i=n.clientWidth/2,i=a.center?i:i+Math.sqrt((t-i)**2+(s-i)**2)/4):i=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const r=`${(n.clientWidth-i*2)/2}px`,u=`${(n.clientHeight-i*2)/2}px`,m=a.center?r:`${t-i}px`,g=a.center?u:`${s-i}px`;return{radius:i,scale:l,x:m,y:g,centerX:r,centerY:u}},ae={show(e,n){var d;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=n==null?void 0:n._ripple)!=null&&d.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",a.class&&(t.className+=` ${a.class}`);const{radius:i,scale:l,x:r,y:u,centerX:m,centerY:g}=pn(e,n,a),y=`${i*2}px`;s.className="v-ripple__animation",s.style.width=y,s.style.height=y,n.appendChild(t);const o=window.getComputedStyle(n);o&&o.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),$e(s,`translate(${r}, ${u}) scale3d(${l},${l},${l})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),$e(s,`translate(${m}, ${g}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const t=performance.now()-Number(a.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=a.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function dt(e){return typeof e>"u"||!!e}function W(e){const n={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ye])){if(e[ye]=!0,he(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(n.center=a._ripple.centered||ct(e),a._ripple.class&&(n.class=a._ripple.class),he(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{ae.show(e,a,n)},a._ripple.showTimer=window.setTimeout(()=>{var t;(t=a==null?void 0:a._ripple)!=null&&t.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},wn)}else ae.show(e,a,n)}}function ze(e){e[ye]=!0}function P(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{P(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),ae.hide(n)}}function vt(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let q=!1;function ft(e){!q&&(e.keyCode===Pe.enter||e.keyCode===Pe.space)&&(q=!0,W(e))}function mt(e){q=!1,P(e)}function gt(e){q&&(q=!1,P(e))}function yt(e,n,a){const{value:t,modifiers:s}=n,i=dt(t);if(i||ae.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,Mt(t)&&t.class&&(e._ripple.class=t.class),i&&!a){if(s.stop){e.addEventListener("touchstart",ze,{passive:!0}),e.addEventListener("mousedown",ze);return}e.addEventListener("touchstart",W,{passive:!0}),e.addEventListener("touchend",P,{passive:!0}),e.addEventListener("touchmove",vt,{passive:!0}),e.addEventListener("touchcancel",P),e.addEventListener("mousedown",W),e.addEventListener("mouseup",P),e.addEventListener("mouseleave",P),e.addEventListener("keydown",ft),e.addEventListener("keyup",mt),e.addEventListener("blur",gt),e.addEventListener("dragstart",P,{passive:!0})}else!i&&a&&ht(e)}function ht(e){e.removeEventListener("mousedown",W),e.removeEventListener("touchstart",W),e.removeEventListener("touchend",P),e.removeEventListener("touchmove",vt),e.removeEventListener("touchcancel",P),e.removeEventListener("mouseup",P),e.removeEventListener("mouseleave",P),e.removeEventListener("keydown",ft),e.removeEventListener("keyup",mt),e.removeEventListener("dragstart",P),e.removeEventListener("blur",gt)}function xn(e,n){yt(e,n,!1)}function Bn(e){delete e._ripple,ht(e)}function In(e,n){if(n.value===n.oldValue)return;const a=dt(n.oldValue);yt(e,n,a)}const Pn={mounted:xn,unmounted:Bn,updated:In},Vn=S({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:lt},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ge,appendIcon:ge,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Ke(),...F(),...tt(),...Oe(),...Ze(),...tn(),...mn(),...ot(),...hn(),...oe(),..._n(),...we(),...Y({tag:"button"}),...J(),...at({variant:"elevated"})},"VBtn"),Hn=z()({name:"VBtn",props:Vn(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:s}=K(e),{borderClasses:i}=Qe(e),{densityClasses:l}=nt(e),{dimensionStyles:r}=Ae(e),{elevationClasses:u}=et(e),{loaderClasses:m}=gn(e),{locationStyles:g}=ut(e),{positionClasses:y}=bn(e),{roundedClasses:o}=ue(e),{sizeClasses:d,sizeStyles:b}=pe(e),v=nn(e,e.symbol,!1),C=Sn(e,a),_=f(()=>{var p;return e.active!==void 0?e.active:C.isLink.value?(p=C.isActive)==null?void 0:p.value:v==null?void 0:v.isSelected.value}),T=f(()=>{var B,h;return{color:(v==null?void 0:v.isSelected.value)&&(!C.isLink.value||((B=C.isActive)==null?void 0:B.value))||!v||((h=C.isActive)==null?void 0:h.value)?e.color??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:E,colorStyles:w,variantClasses:R}=Zt(T),L=f(()=>(v==null?void 0:v.disabled.value)||e.disabled),O=f(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),U=f(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function A(p){var B;L.value||C.isLink.value&&(p.metaKey||p.ctrlKey||p.shiftKey||p.button!==0||a.target==="_blank")||((B=C.navigate)==null||B.call(C,p),v==null||v.toggle())}return kn(C,v==null?void 0:v.select),M(()=>{const p=C.isLink.value?"a":e.tag,B=!!(e.prependIcon||t.prepend),h=!!(e.appendIcon||t.append),k=!!(e.icon&&e.icon!==!0);return fe(c(p,{type:p==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":_.value,"v-btn--block":e.block,"v-btn--disabled":L.value,"v-btn--elevated":O.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,i.value,E.value,l.value,u.value,m.value,y.value,o.value,d.value,R.value,e.class],style:[w.value,r.value,g.value,b.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:L.value||void 0,href:C.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:A,value:U.value},{default:()=>{var I;return[Qt(!0,"v-btn"),!e.icon&&B&&c("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?c(ce,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):c(de,{key:"prepend-icon",icon:e.prependIcon},null)]),c("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&k?c(de,{key:"content-icon",icon:e.icon},null):c(ce,{key:"content-defaults",disabled:!k,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var N;return[((N=t.default)==null?void 0:N.call(t))??e.text]}})]),!e.icon&&h&&c("span",{key:"append",class:"v-btn__append"},[t.append?c(ce,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):c(de,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&c("span",{key:"loader",class:"v-btn__loader"},[((I=t.loader)==null?void 0:I.call(t))??c(dn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Pn,!L.value&&e.ripple,"",{center:!!e.icon}]])}),{group:v}}});export{Sn as A,jt as B,En as C,Ln as D,$n as E,zn as F,Wt as G,jn as H,Gn as I,ne as J,On as K,Dn as L,Z as M,en as N,an as O,Nn as P,tn as Q,Pn as R,nn as S,Fn as T,Xt as U,Mn as V,Ze as a,oe as b,Qe as c,et as d,ue as e,ce as f,An as g,Rn as h,Hn as i,de as j,tt as k,we as l,Ke as m,at as n,Zt as o,nt as p,pe as q,Qt as r,mn as s,ot as t,ee as u,hn as v,_n as w,gn as x,ut as y,bn as z};
