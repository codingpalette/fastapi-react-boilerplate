(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{211:function(e,t,r){"use strict";var a=r(104);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(105)),o=r(1),i=(0,n.default)((0,o.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"}),"MoveToInbox");t.default=i},217:function(e,t,r){"use strict";var a=r(5),n=r(3),o=r(2),i=r(0),c=(r(11),r(7)),s=r(182),d=r(64),l=r(185),p=r(4),u=r(9),b=r(195),m=r(46),v=r(34),f=r(14),h=r(81),g=r(149),j=r(183);function O(e){return Object(g.a)("MuiListItem",e)}var x=Object(j.a)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var y=Object(j.a)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function w(e){return Object(g.a)("MuiListItemSecondaryAction",e)}Object(j.a)("MuiListItemSecondaryAction",["root","disableGutters"]);var S=r(1),I=["className"],k=Object(p.a)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return Object(o.a)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),A=i.forwardRef((function(e,t){var r=Object(u.a)({props:e,name:"MuiListItemSecondaryAction"}),a=r.className,d=Object(n.a)(r,I),l=i.useContext(h.a),p=Object(o.a)({},r,{disableGutters:l.disableGutters}),b=function(e){var t=e.disableGutters,r=e.classes,a={root:["root",t&&"disableGutters"]};return Object(s.a)(a,w,r)}(p);return Object(S.jsx)(k,Object(o.a)({className:Object(c.a)(b.root,a),ownerState:p,ref:t},d))}));A.muiName="ListItemSecondaryAction";var R=A,C=["className"],L=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],T=Object(p.a)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.dense&&t.dense,"flex-start"===r.alignItems&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters,!r.disablePadding&&t.padding,r.button&&t.button,r.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,r=e.theme,n=e.ownerState;return Object(o.a)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&Object(o.a)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&Object(a.a)({},"& > .".concat(y.root),{paddingRight:48}),(t={},Object(a.a)(t,"&.".concat(x.focusVisible),{backgroundColor:r.palette.action.focus}),Object(a.a)(t,"&.".concat(x.selected),Object(a.a)({backgroundColor:Object(l.a)(r.palette.primary.main,r.palette.action.selectedOpacity)},"&.".concat(x.focusVisible),{backgroundColor:Object(l.a)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)})),Object(a.a)(t,"&.".concat(x.disabled),{opacity:r.palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat(r.palette.divider),backgroundClip:"padding-box"},n.button&&Object(a.a)({transition:r.transitions.create("background-color",{duration:r.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:r.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(x.selected,":hover"),{backgroundColor:Object(l.a)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:Object(l.a)(r.palette.primary.main,r.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})})),M=Object(p.a)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),N=i.forwardRef((function(e,t){var r=Object(u.a)({props:e,name:"MuiListItem"}),a=r.alignItems,l=void 0===a?"center":a,p=r.autoFocus,g=void 0!==p&&p,j=r.button,y=void 0!==j&&j,w=r.children,I=r.className,k=r.component,A=r.components,N=void 0===A?{}:A,P=r.componentsProps,E=void 0===P?{}:P,D=r.ContainerComponent,B=void 0===D?"li":D,V=r.ContainerProps,G=(V=void 0===V?{}:V).className,z=r.dense,F=void 0!==z&&z,W=r.disabled,H=void 0!==W&&W,Y=r.disableGutters,X=void 0!==Y&&Y,J=r.disablePadding,_=void 0!==J&&J,q=r.divider,K=void 0!==q&&q,Q=r.focusVisibleClassName,U=r.secondaryAction,Z=r.selected,$=void 0!==Z&&Z,ee=Object(n.a)(r.ContainerProps,C),te=Object(n.a)(r,L),re=i.useContext(h.a),ae={dense:F||re.dense||!1,alignItems:l,disableGutters:X},ne=i.useRef(null);Object(v.a)((function(){g&&ne.current&&ne.current.focus()}),[g]);var oe=i.Children.toArray(w),ie=oe.length&&Object(m.a)(oe[oe.length-1],["ListItemSecondaryAction"]),ce=Object(o.a)({},r,{alignItems:l,autoFocus:g,button:y,dense:ae.dense,disabled:H,disableGutters:X,disablePadding:_,divider:K,hasSecondaryAction:ie,selected:$}),se=function(e){var t=e.alignItems,r=e.button,a=e.classes,n=e.dense,o=e.disabled,i={root:["root",n&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",r&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return Object(s.a)(i,O,a)}(ce),de=Object(f.a)(ne,t),le=N.Root||T,pe=E.root||{},ue=Object(o.a)({className:Object(c.a)(se.root,pe.className,I),disabled:H},te),be=k||"li";return y&&(ue.component=k||"div",ue.focusVisibleClassName=Object(c.a)(x.focusVisible,Q),be=b.a),ie?(be=ue.component||k?be:"div","li"===B&&("li"===be?be="div":"li"===ue.component&&(ue.component="div")),Object(S.jsx)(h.a.Provider,{value:ae,children:Object(S.jsxs)(M,Object(o.a)({as:B,className:Object(c.a)(se.container,G),ref:de,ownerState:ce},ee,{children:[Object(S.jsx)(le,Object(o.a)({},pe,!Object(d.a)(le)&&{as:be,ownerState:Object(o.a)({},ce,pe.ownerState)},ue,{children:oe})),oe.pop()]}))})):Object(S.jsx)(h.a.Provider,{value:ae,children:Object(S.jsxs)(le,Object(o.a)({},pe,{as:be,ref:de,ownerState:ce},!Object(d.a)(le)&&{ownerState:Object(o.a)({},ce,pe.ownerState)},ue,{children:[oe,U&&Object(S.jsx)(R,{children:U})]}))})}));t.a=N},218:function(e,t,r){"use strict";var a=r(3),n=r(2),o=r(0),i=(r(11),r(7)),c=r(182),s=r(194),d=r(153),l=r(45),p=r(14),u=r(32),b=r(35),m=r(39),v=r(37),f=r(1),h=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function g(e,t,r){var a,n=function(e,t,r){var a,n=t.getBoundingClientRect(),o=r&&r.getBoundingClientRect(),i=Object(v.a)(t);if(t.fakeTransform)a=t.fakeTransform;else{var c=i.getComputedStyle(t);a=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("transform")}var s=0,d=0;if(a&&"none"!==a&&"string"===typeof a){var l=a.split("(")[1].split(")")[0].split(",");s=parseInt(l[4],10),d=parseInt(l[5],10)}return"left"===e?"translateX(".concat(o?o.right+s-n.left:i.innerWidth+s-n.left,"px)"):"right"===e?"translateX(-".concat(o?n.right-o.left-s:n.left+n.width-s,"px)"):"up"===e?"translateY(".concat(o?o.bottom+d-n.top:i.innerHeight+d-n.top,"px)"):"translateY(-".concat(o?n.top-o.top+n.height-d:n.top+n.height-d,"px)")}(e,t,"function"===typeof(a=r)?a():a);n&&(t.style.webkitTransform=n,t.style.transform=n)}var j={enter:b.c.easeOut,exit:b.c.sharp},O={enter:b.b.enteringScreen,exit:b.b.leavingScreen},x=o.forwardRef((function(e,t){var r=e.addEndListener,i=e.appear,c=void 0===i||i,s=e.children,b=e.container,x=e.direction,y=void 0===x?"down":x,w=e.easing,S=void 0===w?j:w,I=e.in,k=e.onEnter,A=e.onEntered,R=e.onEntering,C=e.onExit,L=e.onExited,T=e.onExiting,M=e.style,N=e.timeout,P=void 0===N?O:N,E=e.TransitionComponent,D=void 0===E?d.a:E,B=Object(a.a)(e,h),V=Object(u.a)(),G=o.useRef(null),z=Object(p.a)(s.ref,G),F=Object(p.a)(z,t),W=function(e){return function(t){e&&(void 0===t?e(G.current):e(G.current,t))}},H=W((function(e,t){g(y,e,b),Object(m.b)(e),k&&k(e,t)})),Y=W((function(e,t){var r=Object(m.a)({timeout:P,style:M,easing:S},{mode:"enter"});e.style.webkitTransition=V.transitions.create("-webkit-transform",Object(n.a)({},r)),e.style.transition=V.transitions.create("transform",Object(n.a)({},r)),e.style.webkitTransform="none",e.style.transform="none",R&&R(e,t)})),X=W(A),J=W(T),_=W((function(e){var t=Object(m.a)({timeout:P,style:M,easing:S},{mode:"exit"});e.style.webkitTransition=V.transitions.create("-webkit-transform",t),e.style.transition=V.transitions.create("transform",t),g(y,e,b),C&&C(e)})),q=W((function(e){e.style.webkitTransition="",e.style.transition="",L&&L(e)})),K=o.useCallback((function(){G.current&&g(y,G.current,b)}),[y,b]);return o.useEffect((function(){if(!I&&"down"!==y&&"right"!==y){var e=Object(l.a)((function(){G.current&&g(y,G.current,b)})),t=Object(v.a)(G.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}}),[y,I,b]),o.useEffect((function(){I||K()}),[I,K]),Object(f.jsx)(D,Object(n.a)({nodeRef:G,onEnter:H,onEntered:X,onEntering:Y,onExit:_,onExited:q,onExiting:J,addEndListener:function(e){r&&r(G.current,e)},appear:c,in:I,timeout:P},B,{children:function(e,t){return o.cloneElement(s,Object(n.a)({ref:F,style:Object(n.a)({visibility:"exited"!==e||I?void 0:"hidden"},M,s.props.style)},t))}}))})),y=r(200),w=r(8),S=r(9),I=r(4),k=r(149),A=r(183);function R(e){return Object(k.a)("MuiDrawer",e)}Object(A.a)("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);var C=["BackdropProps"],L=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],T=function(e,t){var r=e.ownerState;return[t.root,("permanent"===r.variant||"persistent"===r.variant)&&t.docked,t.modal]},M=Object(I.a)(s.a,{name:"MuiDrawer",slot:"Root",overridesResolver:T})((function(e){return{zIndex:e.theme.zIndex.drawer}})),N=Object(I.a)("div",{shouldForwardProp:I.b,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:T})({flex:"0 0 auto"}),P=Object(I.a)(y.a,{name:"MuiDrawer",slot:"Paper",overridesResolver:function(e,t){var r=e.ownerState;return[t.paper,t["paperAnchor".concat(Object(w.a)(r.anchor))],"temporary"!==r.variant&&t["paperAnchorDocked".concat(Object(w.a)(r.anchor))]]}})((function(e){var t=e.theme,r=e.ownerState;return Object(n.a)({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:t.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},"left"===r.anchor&&{left:0},"top"===r.anchor&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},"right"===r.anchor&&{right:0},"bottom"===r.anchor&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},"left"===r.anchor&&"temporary"!==r.variant&&{borderRight:"1px solid ".concat(t.palette.divider)},"top"===r.anchor&&"temporary"!==r.variant&&{borderBottom:"1px solid ".concat(t.palette.divider)},"right"===r.anchor&&"temporary"!==r.variant&&{borderLeft:"1px solid ".concat(t.palette.divider)},"bottom"===r.anchor&&"temporary"!==r.variant&&{borderTop:"1px solid ".concat(t.palette.divider)})})),E={left:"right",right:"left",top:"down",bottom:"up"};var D={enter:b.b.enteringScreen,exit:b.b.leavingScreen},B=o.forwardRef((function(e,t){var r=Object(S.a)({props:e,name:"MuiDrawer"}),s=r.anchor,d=void 0===s?"left":s,l=r.BackdropProps,p=r.children,b=r.className,m=r.elevation,v=void 0===m?16:m,h=r.hideBackdrop,g=void 0!==h&&h,j=r.ModalProps,O=(j=void 0===j?{}:j).BackdropProps,y=r.onClose,I=r.open,k=void 0!==I&&I,A=r.PaperProps,T=void 0===A?{}:A,B=r.SlideProps,V=r.TransitionComponent,G=void 0===V?x:V,z=r.transitionDuration,F=void 0===z?D:z,W=r.variant,H=void 0===W?"temporary":W,Y=Object(a.a)(r.ModalProps,C),X=Object(a.a)(r,L),J=Object(u.a)(),_=o.useRef(!1);o.useEffect((function(){_.current=!0}),[]);var q=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?E[t]:t}(J,d),K=d,Q=Object(n.a)({},r,{anchor:K,elevation:v,open:k,variant:H},X),U=function(e){var t=e.classes,r=e.anchor,a=e.variant,n={root:["root"],docked:[("permanent"===a||"persistent"===a)&&"docked"],modal:["modal"],paper:["paper","paperAnchor".concat(Object(w.a)(r)),"temporary"!==a&&"paperAnchorDocked".concat(Object(w.a)(r))]};return Object(c.a)(n,R,t)}(Q),Z=Object(f.jsx)(P,Object(n.a)({elevation:"temporary"===H?v:0,square:!0},T,{className:Object(i.a)(U.paper,T.className),ownerState:Q,children:p}));if("permanent"===H)return Object(f.jsx)(N,Object(n.a)({className:Object(i.a)(U.root,U.docked,b),ownerState:Q,ref:t},X,{children:Z}));var $=Object(f.jsx)(G,Object(n.a)({in:k,direction:E[q],timeout:F,appear:_.current},B,{children:Z}));return"persistent"===H?Object(f.jsx)(N,Object(n.a)({className:Object(i.a)(U.root,U.docked,b),ownerState:Q,ref:t},X,{children:$})):Object(f.jsx)(M,Object(n.a)({BackdropProps:Object(n.a)({},l,O,{transitionDuration:F}),className:Object(i.a)(U.root,U.modal,b),open:k,ownerState:Q,onClose:y,hideBackdrop:g,ref:t},X,Y,{children:$}))}));t.a=B},219:function(e,t,r){"use strict";var a=r(2),n=r(3),o=r(0),i=(r(11),r(7)),c=r(71),s=r(184),d=r(191),l=r(52),p=r(1),u=["className","component"];var b=r(99),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,r=Object(c.a)("div")(s.a),b=o.forwardRef((function(e,o){var c=Object(l.a)(t),s=Object(d.a)(e),b=s.className,m=s.component,v=void 0===m?"div":m,f=Object(n.a)(s,u);return Object(p.jsx)(r,Object(a.a)({as:v,ref:o,className:Object(i.a)(b,"MuiBox-root"),theme:c},f))}));return b}({defaultTheme:Object(b.a)()});t.a=m},220:function(e,t,r){"use strict";var a=r(3),n=r(2),o=r(0),i=(r(11),r(7)),c=r(182),s=r(4),d=r(9),l=r(149),p=r(183);function u(e){return Object(l.a)("MuiListItemIcon",e)}Object(p.a)("MuiListItemIcon",["root","alignItemsFlexStart"]);var b=r(81),m=r(1),v=["className"],f=Object(s.a)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,"flex-start"===r.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.theme,r=e.ownerState;return Object(n.a)({minWidth:56,color:t.palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===r.alignItems&&{marginTop:8})})),h=o.forwardRef((function(e,t){var r=Object(d.a)({props:e,name:"MuiListItemIcon"}),s=r.className,l=Object(a.a)(r,v),p=o.useContext(b.a),h=Object(n.a)({},r,{alignItems:p.alignItems}),g=function(e){var t=e.alignItems,r=e.classes,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return Object(c.a)(a,u,r)}(h);return Object(m.jsx)(f,Object(n.a)({className:Object(i.a)(g.root,s),ownerState:h,ref:t},l))}));t.a=h},221:function(e,t,r){"use strict";var a=r(5),n=r(3),o=r(2),i=r(0),c=(r(11),r(7)),s=r(182),d=r(206),l=r(81),p=r(9),u=r(4),b=r(149),m=r(183);function v(e){return Object(b.a)("MuiListItemText",e)}var f=Object(m.a)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),h=r(1),g=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],j=Object(u.a)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[Object(a.a)({},"& .".concat(f.primary),t.primary),Object(a.a)({},"& .".concat(f.secondary),t.secondary),t.root,r.inset&&t.inset,r.primary&&r.secondary&&t.multiline,r.dense&&t.dense]}})((function(e){var t=e.ownerState;return Object(o.a)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),O=i.forwardRef((function(e,t){var r=Object(p.a)({props:e,name:"MuiListItemText"}),a=r.children,u=r.className,b=r.disableTypography,m=void 0!==b&&b,f=r.inset,O=void 0!==f&&f,x=r.primary,y=r.primaryTypographyProps,w=r.secondary,S=r.secondaryTypographyProps,I=Object(n.a)(r,g),k=i.useContext(l.a).dense,A=null!=x?x:a,R=w,C=Object(o.a)({},r,{disableTypography:m,inset:O,primary:!!A,secondary:!!R,dense:k}),L=function(e){var t=e.classes,r=e.inset,a=e.primary,n=e.secondary,o={root:["root",r&&"inset",e.dense&&"dense",a&&n&&"multiline"],primary:["primary"],secondary:["secondary"]};return Object(s.a)(o,v,t)}(C);return null==A||A.type===d.a||m||(A=Object(h.jsx)(d.a,Object(o.a)({variant:k?"body2":"body1",className:L.primary,component:"span",display:"block"},y,{children:A}))),null==R||R.type===d.a||m||(R=Object(h.jsx)(d.a,Object(o.a)({variant:"body2",className:L.secondary,color:"text.secondary",display:"block"},S,{children:R}))),Object(h.jsxs)(j,Object(o.a)({className:Object(c.a)(L.root,u),ownerState:C,ref:t},I,{children:[A,R]}))}));t.a=O},222:function(e,t,r){"use strict";var a=r(3),n=r(2),o=r(0),i=(r(11),r(7)),c=r(182),s=r(185),d=r(4),l=r(9),p=r(149),u=r(183);function b(e){return Object(p.a)("MuiDivider",e)}Object(u.a)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var m=r(1),v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=Object(d.a)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,r=e.ownerState;return Object(n.a)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:t.palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:Object(s.a)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,r=e.ownerState;return Object(n.a)({},r.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat(t.palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,r=e.ownerState;return Object(n.a)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat(t.palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return Object(n.a)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),h=Object(d.a)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var r=e.ownerState;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,r=e.ownerState;return Object(n.a)({display:"inline-block",paddingLeft:t.spacing(1.2),paddingRight:t.spacing(1.2)},"vertical"===r.orientation&&{paddingTop:t.spacing(1.2),paddingBottom:t.spacing(1.2)})})),g=o.forwardRef((function(e,t){var r=Object(l.a)({props:e,name:"MuiDivider"}),o=r.absolute,s=void 0!==o&&o,d=r.children,p=r.className,u=r.component,g=void 0===u?d?"div":"hr":u,j=r.flexItem,O=void 0!==j&&j,x=r.light,y=void 0!==x&&x,w=r.orientation,S=void 0===w?"horizontal":w,I=r.role,k=void 0===I?"hr"!==g?"separator":void 0:I,A=r.textAlign,R=void 0===A?"center":A,C=r.variant,L=void 0===C?"fullWidth":C,T=Object(a.a)(r,v),M=Object(n.a)({},r,{absolute:s,component:g,flexItem:O,light:y,orientation:S,role:k,textAlign:R,variant:L}),N=function(e){var t=e.absolute,r=e.children,a=e.classes,n=e.flexItem,o=e.light,i=e.orientation,s=e.textAlign,d={root:["root",t&&"absolute",e.variant,o&&"light","vertical"===i&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===i&&"withChildrenVertical","right"===s&&"vertical"!==i&&"textAlignRight","left"===s&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return Object(c.a)(d,b,a)}(M);return Object(m.jsx)(f,Object(n.a)({as:g,className:Object(i.a)(N.root,p),role:k,ref:t,ownerState:M},T,{children:d?Object(m.jsx)(h,{className:N.wrapper,ownerState:M,children:d}):null}))}));t.a=g}}]);