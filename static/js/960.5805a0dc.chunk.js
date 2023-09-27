"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[960],{7960:function(n,t,e){e.r(t),e.d(t,{default:function(){return Q}});var o,r,i,a,d,c,s,p,x,h,l,u,m=e(6856),g=e(3853),f=e(168),b=e(6487),Z=b.ZP.table(o||(o=(0,f.Z)(["\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 40px;\n"]))),j=b.ZP.thead(r||(r=(0,f.Z)(["\n  width: 100px;\n  border-bottom-width: 1px;\n  position: sticky;\n  top: 4rem;\n  z-index: 10;\n  background-color: rgba(255, 255, 255, 1);\n  font-size: 18px;\n"]))),v=b.ZP.tr(i||(i=(0,f.Z)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n"]))),w=b.ZP.th(a||(a=(0,f.Z)(["\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  font-weight: 400;\n  font-size: 16px;\n  background-color: ",";\n  color: ",";\n\n  @media screen and (min-width: 767px) {\n    font-size: 18px;\n    font-weight: 500;\n  }\n"])),(function(n){return n.theme.colors.contactsList.bg}),(function(n){return n.theme.colors.header.text})),k=b.ZP.thead(d||(d=(0,f.Z)(["\n  padding-top: 14px;\n  padding-bottom: 14px;\n  font-size: 14px;\n\n  td {\n    padding-top: 14px;\n    padding-bottom: 14px;\n    font-weight: 500;\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.header.text})),P=b.ZP.tr(c||(c=(0,f.Z)(["\n  position: relative;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  @media screen and (min-width: 767px) {\n    &:hover {\n      .ButtonsWrapper {\n        display: block;\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.contactsList.hover})),z=b.ZP.td(s||(s=(0,f.Z)(["\n  padding: 1px 10px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  font-size: 18px;\n\n  @media screen and (min-width: 767px) {\n    padding: 1px 16px;\n  }\n"]))),C=b.ZP.span(p||(p=(0,f.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n  line-height: 24px;\n  font-size: 16px;\n  color: ",";\n\n  @media screen and (min-width: 767px) {\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.colors.header.text})),y=b.ZP.td(x||(x=(0,f.Z)(["\n  padding: 1px 10px;\n  font-size: 18px;\n  line-height: 24px;\n  font-size: 14px;\n  color: ",";\n\n  @media screen and (min-width: 767px) {\n    font-size: 18px;\n    padding: 1px 16px;\n  }\n"])),(function(n){return n.theme.colors.header.text})),B=b.ZP.td(h||(h=(0,f.Z)(["\n  display: none;\n  position: absolute;\n  top: 14px;\n  right: 8px;\n"]))),L=b.ZP.button(l||(l=(0,f.Z)(["\n  padding: 4px 6px;\n  background: transparent;\n  margin-right: 10px;\n  border: none;\n  color: ",";\n  cursor: pointer;\n\n  &:hover {\n    color: rgba(0, 0, 0, 1);\n  }\n"])),(function(n){return n.theme.colors.contactsList.hoveredBtnColor})),N=b.ZP.button(u||(u=(0,f.Z)(["\n  padding: 4px 6px;\n  background: transparent;\n  border: none;\n  color: ",";\n  cursor: pointer;\n\n  &:hover {\n    color: rgba(0, 0, 0, 1);\n  }\n"])),(function(n){return n.theme.colors.contactsList.hoveredBtnColor})),T=e(3044),_=e(9434),A=e(8178),F=e(1775),I=e(7689),W=e(2791),D=e(184);function E(){for(var n="#",t=0;t<6;t++)n+="0123456789ABCDEF"[Math.floor(16*Math.random())];return n}var M=function(n){var t=n.stateItem,e=(0,_.v9)(F.G$),o=(0,_.v9)(F.PT),r=(0,I.s0)(),i=(0,_.I0)();(0,W.useEffect)((function(){i((0,A.XQ)())}),[i]);return(0,D.jsx)(D.Fragment,{children:(0,D.jsxs)(Z,{children:[(0,D.jsx)(j,{children:(0,D.jsxs)(v,{children:[(0,D.jsx)(w,{children:"Name"}),(0,D.jsx)(w,{children:"Phone Number"})]})}),(0,D.jsx)(k,{children:(0,D.jsx)("tr",{children:(0,D.jsxs)("td",{children:["CONTACTS (",e,")"]})})}),(0,D.jsx)("tbody",{children:o.map((function(n){var e=n.name.slice(0,1).toUpperCase(),o=n.name.charAt(0).toUpperCase()+n.name.slice(1);return(0,D.jsxs)(P,{onClick:function(){return e=n.id,void r("contact/".concat(e),{state:t});var e},children:[(0,D.jsxs)(z,{children:[(0,D.jsx)(T.Z,{sx:{bgcolor:E(),width:40,height:40},children:e}),(0,D.jsx)(C,{children:o})]}),(0,D.jsx)(y,{children:n.number}),(0,D.jsxs)(B,{className:"ButtonsWrapper",children:[(0,D.jsx)(L,{onClick:function(t){t.stopPropagation(),r("contact/".concat(n.id,"/edit"))},children:(0,D.jsx)(g.vPQ,{size:25})}),(0,D.jsx)(N,{onClick:function(t){t.stopPropagation(),window.confirm("Delete contact?")&&i((0,A.zY)(n.id))},children:(0,D.jsx)(m.ZkW,{size:25})})]})]},n.id)}))})]})})},Q=function(){var n=(0,I.TH)();return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(M,{stateItem:{from:n}})})}}}]);
//# sourceMappingURL=960.5805a0dc.chunk.js.map