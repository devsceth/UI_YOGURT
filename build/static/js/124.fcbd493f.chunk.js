"use strict";(self.webpackChunkcubdefi_frontend=self.webpackChunkcubdefi_frontend||[]).push([[124],{23282:function(n,e,t){var r=t(1413),i=(t(47313),t(34312)),o=t(11828),s=t(1760),c=t(46417);e.Z=function(n){var e=(0,s.Z)(),t=(0,o.Z)(),a=t.login,u=t.logout,l=(0,i.hB)(a,u).onPresentConnectModal;return(0,c.jsx)(i.zx,(0,r.Z)((0,r.Z)({onClick:l},n),{},{children:e(292,"Unlock Wallet")}))}},89680:function(n,e,t){t.d(e,{D8:function(){return h},yA:function(){return f}});var r=t(74165),i=t(15861),o=t(47313),s=t(82229),c=t(6321),a=t(20438),u=t(63199),l=t(66285),d=t(33866),f=function(n,e){var t=(0,a.T)(),c=(0,s.Ge)().account,f=(0,d.y8)(),h=(0,d._l)();return{onApprove:(0,o.useCallback)((0,i.Z)((0,r.Z)().mark((function i(){var o;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,l.dE)(n,e?h:f,c);case 3:return o=r.sent,t((0,u.IV)(c)),r.abrupt("return",o);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",!1);case 11:case"end":return r.stop()}}),i,null,[[0,8]])}))),[c,t,n,f,h,e])}},h=function(n,e){var t=(0,s.Ge)().account;return(0,o.useCallback)((0,i.Z)((0,r.Z)().mark((function i(){var o;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.methods.approve(e,c.Bz).send({from:t});case 2:return o=r.sent,r.abrupt("return",o);case 4:case"end":return r.stop()}}),i)}))),[t,e,n])}},33866:function(n,e,t){t.d(e,{AH:function(){return l},Ny:function(){return s},X_:function(){return c},_l:function(){return u},y8:function(){return a}});var r=t(47313),i=t(27163),o=t(48574),s=function(n){var e=(0,i.Z)();return(0,r.useMemo)((function(){return(0,o.I9)(n,e)}),[n,e])},c=function(n){var e=(0,i.Z)();return(0,r.useMemo)((function(){return(0,o.jS)(n,e)}),[n,e])},a=function(){var n=(0,i.Z)();return(0,r.useMemo)((function(){return(0,o.aE)(n)}),[n])},u=function(){var n=(0,i.Z)();return(0,r.useMemo)((function(){return(0,o.R)(n)}),[n])},l=function(){var n=(0,i.Z)();return(0,r.useMemo)((function(){return(0,o.V9)(n)}),[n])}},1760:function(n,e,t){var r=t(47313),i=t(16031),o=t(81470);e.Z=function(){var n=(0,r.useContext)(o.y).translations;return function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===n.length)return t;var o=n.find((function(n){return n.data.stringId===e}));if(o){var s=o.data.text,c=s.includes("%");if(c){var a=s;return(0,i.isEmpty)(r)?t:(Object.keys(r).forEach((function(n){var e=new RegExp("%".concat(n,"%"),"g");a=a.replace(e,r[n])})),a)}return s}return t}}},74451:function(n,e,t){t.d(e,{ZP:function(){return m},rQ:function(){return p},A5:function(){return x}});var r=t(74165),i=t(15861),o=t(70885),s=t(47313),c=t(58704),a=t.n(c),u=t(82229),l=t(48574),d=t(38301),f=t(27163),h=t(1689),x=function(){var n=(0,h.Z)().slowRefresh,e=(0,s.useState)(),t=(0,o.Z)(e,2),c=t[0],u=t[1];return(0,s.useEffect)((function(){function n(){return(n=(0,i.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,l.XT)(),n.next=3,e.methods.totalSupply().call();case 3:t=n.sent,u(new(a())(t));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[n]),c},p=function(n){var e=(0,s.useState)(d.H),t=(0,o.Z)(e,2),c=t[0],u=t[1],x=(0,h.Z)().slowRefresh,p=(0,f.Z)();return(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.jS)(n,p),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:i=e.sent,u(new(a())(i));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[p,n,x]),c},m=function(n){var e=(0,s.useState)(d.H),t=(0,o.Z)(e,2),c=t[0],x=t[1],p=(0,u.Ge)().account,m=(0,f.Z)(),v=(0,h.Z)().fastRefresh;return(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.jS)(n,m),e.next=3,t.methods.balanceOf(p).call();case 3:i=e.sent,x(new(a())(i));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();p&&e()}),[p,n,m,v]),c}},27163:function(n,e,t){var r=t(70885),i=t(47313),o=t(11107),s=t.n(o),c=t(82229),a=t(7964);e.Z=function(){var n=(0,c.Ge)().library,e=(0,i.useRef)(n),t=(0,i.useState)(n?new(s())(n):(0,a.l)()),o=(0,r.Z)(t,2),u=o[0],l=o[1];return(0,i.useEffect)((function(){n!==e.current&&(l(n?new(s())(n):(0,a.l)()),e.current=n)}),[n]),u}},66285:function(n,e,t){t.d(e,{HV:function(){return d},LK:function(){return l},QS:function(){return h},dE:function(){return u},gL:function(){return f}});var r=t(74165),i=t(15861),o=t(58704),s=t.n(o),c=t(18941),a=t(6321),u=(t(38301),function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.approve(t.options.address,a.Bz).send({from:i}));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i,o){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.deposit(t,new(s())(i).times(c.o3).toString()).send({from:o}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r,i){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i,o){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.withdraw(t,new(s())(i).times(c.o3).toString()).send({from:o}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r,i){return n.apply(this,arguments)}}(),f=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i,o){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!o){n.next=2;break}return n.abrupt("return",e.methods.withdraw(t,"0").send({from:i}).on("transactionHash",(function(n){return n.transactionHash})));case 2:return n.abrupt("return",e.methods.deposit(t,"0").send({from:i}).on("transactionHash",(function(n){return n.transactionHash})));case 3:case"end":return n.stop()}}),n)})));return function(e,t,r,i){return n.apply(this,arguments)}}(),h=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t,i,o,s,c){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.claim(i,o,s,c).send({from:t}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r,i,o,s){return n.apply(this,arguments)}}()},62124:function(n,e,t){t.r(e),t.d(e,{default:function(){return oe}});var r,i,o,s,c,a,u,l,d,f,h,x,p,m,v,g,Z,j,b,w,y,k,S,C,A,D,P,B,U=t(47313),E=t(63830),I=t(54808),z=t(30168),O=t(49184),L=t(28303),N=t(34312),H=t(46417),M=O.ZP.div(r||(r=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 39px;\n"]))),T=function(){var n=(0,E.$B)(),e=n.url,t=n.isExact;return(0,H.jsx)(M,{children:(0,H.jsxs)(N.xz,{activeIndex:t?0:1,scale:"sm",variant:"subtle",children:[(0,H.jsx)(N.kg,{as:L.rU,to:"".concat(e),children:"Next IDO"}),(0,H.jsx)(N.kg,{as:L.rU,to:"".concat(e,"/history"),children:"Past IDOs"})]})})},F=t(1760),R=(0,O.ZP)(N.X6).attrs({as:"h1",size:"xl"})(i||(i=(0,z.Z)(["\n  color: ",";\n  margin-bottom: 24px;\n"])),(function(n){return n.theme.colors.secondary})),_=O.ZP.div(o||(o=(0,z.Z)(["\n  background-image: linear-gradient(139.73deg, #E6FDFF 0%, #eff8ff 100%);\n  padding-bottom: 40px;\n  padding-top: 40px;\n  margin-bottom: 32px;\n"]))),G=O.ZP.div(s||(s=(0,z.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]))),X=function(){var n=(0,F.Z)();return(0,H.jsx)(_,{children:(0,H.jsxs)(I.Z,{children:[(0,H.jsx)(R,{children:n(500,"IDO: Initial DEX Offerings")}),(0,H.jsx)(N.X6,{as:"h2",color:"secondary",children:n(502,"Participate in new platform tokens via decentralized IDOs! 50% of the raise burns CUB and 50% goes to the project team who initiated the IDO.")}),(0,H.jsx)("br",{}),(0,H.jsx)(G,{children:(0,H.jsx)(N.zx,{size:"sm",children:(0,H.jsx)("a",{href:"https://docs.cubdefi.com/major-feature-releases/initial-dex-offering-ido",children:"Learn More"})})})]})})},W=t(72731),J=t(74165),Q=t(15861),V=t(70885),Y=t(82229),K=t(58704),$=t.n(K),q=t(18941),nn=t(20717),en=function(){return(0,U.useContext)(nn.J)},tn=t(33866),rn=t(23282),on=(0,O.ZP)(N.kC)(c||(c=(0,z.Z)(["\n  & > div {\n    flex: 1;\n  }\n"]))),sn=(0,O.ZP)(N.X6).attrs({as:"h3",size:"lg"})(a||(a=(0,z.Z)(["\n  margin-bottom: 4px;\n  text-align: right;\n"]))),cn=(0,O.ZP)(N.xv)(u||(u=(0,z.Z)(["\n  color: ",";\n  font-size: 14px;\n  text-align: right;\n"])),(function(n){return n.theme.colors.textSubtle})),an=function(n){var e=n.ifoId,t=n.name,r=n.subTitle;return(0,H.jsxs)(on,{mb:"24px",alignItems:"center",children:[(0,H.jsx)("img",{src:"/images/ifos/".concat(e,".svg"),alt:e,width:"64px",height:"64px"}),(0,H.jsxs)("div",{children:[(0,H.jsx)(sn,{children:t}),(0,H.jsx)(cn,{children:r})]})]})},un=O.ZP.div(l||(l=(0,z.Z)(["\n  margin-bottom: 16px;\n"]))),ln=function(n){var e=n.progress;return(0,H.jsx)(un,{children:(0,H.jsx)(N.Ex,{primaryStep:e})})},dn=O.ZP.div(d||(d=(0,z.Z)(["\n  margin-top: 24px;\n  margin-bottom: 24px;\n"]))),fn=O.ZP.div(f||(f=(0,z.Z)(["\n  background-color: ",";\n  height: 1px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n"])),(function(n){return n.theme.colors.borderColor})),hn=O.ZP.button(h||(h=(0,z.Z)(["\n  background: transparent;\n  border: none;\n  color: ",";\n  cursor: pointer;\n  display: block;\n  font-weight: 600;\n  outline: 0;\n  padding: 24px 16px;\n  width: 100%;\n"])),(function(n){return n.theme.colors.primary})),xn=(0,O.ZP)(N.xv)(x||(x=(0,z.Z)(["\n  color: ",";\n  display: ",";\n"])),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.isOpen?"block":"none"})),pn=function(n){var e=n.defaultIsOpen,t=void 0===e||e,r=n.description,i=(0,U.useState)(t),o=(0,V.Z)(i,2),s=o[0],c=o[1],a=(0,F.Z)();return(0,H.jsxs)(dn,{children:[(0,H.jsx)(fn,{}),(0,H.jsx)(hn,{onClick:function(){return c(!s)},children:a(999,s?"Hide":"Show")}),(0,H.jsx)(xn,{isOpen:s,children:r})]})},mn=O.ZP.div(p||(p=(0,z.Z)(["\n  margin-bottom: 24px;\n"]))),vn=O.ZP.div(m||(m=(0,z.Z)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n"])),(function(n){return n.theme.colors.secondary})),gn=(0,O.ZP)(N.xv)(v||(v=(0,z.Z)(["\n  flex: 1;\n"]))),Zn=function(n){var e=n.launchDate,t=n.launchTime,r=n.saleAmount,i=n.raiseAmount,o=n.cakeToBurn,s=n.projectSiteUrl,c=n.raisingAmount,a=n.totalAmount,u=(0,F.Z)();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(mn,{children:[(0,H.jsxs)(vn,{children:[(0,H.jsx)(gn,{children:u(582,"Launch Time")}),(0,H.jsxs)(N.xv,{children:[e,",",(0,H.jsx)(N.rU,{href:"https://www.timeanddate.com/worldclock/singapore/singapore",target:"blank",rel:"noopener noreferrer",ml:"4px",style:{display:"inline"},children:t})]})]}),(0,H.jsxs)(vn,{children:[(0,H.jsx)(gn,{children:u(584,"For Sale")}),(0,H.jsx)(N.xv,{children:r})]}),(0,H.jsxs)(vn,{children:[(0,H.jsx)(gn,{children:u(999,"To raise (USD)")}),(0,H.jsx)(N.xv,{children:i})]}),(0,H.jsxs)(vn,{children:[(0,H.jsx)(gn,{children:u(586,"CUB to burn (USD)")}),(0,H.jsx)(N.xv,{children:o})]}),(0,H.jsxs)(vn,{children:[(0,H.jsx)(gn,{children:u(999,"Total raised (% of target)")}),(0,H.jsx)(N.xv,{children:"".concat(a.div(c).times(100).toFixed(2),"%")})]})]}),(0,H.jsx)(N.NR,{href:s,style:{margin:"auto"},children:u(412,"View project site")})]})},jn=3600,bn=86400,wn=2629800,yn=31557600,kn=function(n){var e=Math.abs(n),t={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return e>=yn&&(t.years=Math.floor(e/yn),e-=t.years*yn),e>=wn&&(t.months=Math.floor(e/wn),e-=t.months*wn),e>=bn&&(t.days=Math.floor(e/bn),e-=t.days*bn),e>=jn&&(t.hours=Math.floor(e/jn),e-=t.hours*jn),e>=60&&(t.minutes=Math.floor(e/60),e-=60*t.minutes),t.seconds=e,t},Sn=O.ZP.div(g||(g=(0,z.Z)(["\n  align-items: center;\n  display: flex;\n  height: 24px;\n  justify-content: center;\n  margin-bottom: 24px;\n"]))),Cn=O.ZP.div(Z||(Z=(0,z.Z)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n"])),(function(n){return n.theme.colors.secondary})),An=function(n){var e=n.isLoading,t=n.status,r=n.secondsUntilStart,i=n.secondsUntilEnd,o=n.block,s=(0,F.Z)(),c="coming_soon"===t?r:i,a=kn(c),u="coming_soon"===t?"start":"finish";return e?(0,H.jsx)(Sn,{children:s(656,"Loading...")}):c<=0?(0,H.jsx)(Sn,{children:(0,H.jsx)(N.xv,{bold:!0,children:s(999,"Finished!")})}):(0,H.jsxs)(Sn,{children:[(0,H.jsx)(Cn,{children:"".concat(a.days,"d, ").concat(a.hours,"h, ").concat(a.minutes,"m until ").concat(u)}),(0,H.jsx)(N.rU,{href:"https://bscscan.com/block/countdown/".concat(o),target:"blank",rel:"noopener noreferrer",ml:"8px",children:"(blocks)"})]})},Dn=t(38301),Pn=(t(1689),t(89680)),Bn=t(64446),Un=O.ZP.div(j||(j=(0,z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: solid 1px;\n  border-radius: ",";\n  border-color: ",";\n  padding-left: 16px;\n"])),(function(n){return n.theme.radii.default}),(function(n){return n.theme.colors.borderColor})),En=function(n){var e=n.value,t=n.label,r=n.buttonLabel,i=n.onClick,o=n.disabled,s=void 0!==o&&o;return(0,H.jsxs)("div",{children:[t&&(0,H.jsx)(N.xv,{fontSize:"14px",color:"textSubtle",children:t}),(0,H.jsxs)(Un,{children:[(0,H.jsx)(N.xv,{bold:!0,fontSize:"20px",children:e}),(0,H.jsx)(N.zx,{onClick:i,disabled:s,children:r})]})]})},In=O.ZP.div(b||(b=(0,z.Z)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(n){return n.theme.colors.input}),(function(n){return n.theme.radii.default}),(function(n){return n.theme.spacing[3]})),zn=O.ZP.input(w||(w=(0,z.Z)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(n){return n.theme.colors.primary})),On=function(n){var e=n.endAdornment,t=n.onChange,r=n.placeholder,i=n.startAdornment,o=n.value;return(0,H.jsxs)(In,{children:[!!i&&i,(0,H.jsx)(zn,{placeholder:r,value:o,onChange:t}),!!e&&e]})},Ln=O.ZP.div(y||(y=(0,z.Z)(["\n  width: ","px;\n"])),(function(n){return n.theme.spacing[3]})),Nn=O.ZP.div(k||(k=(0,z.Z)(["\n  align-items: center;\n  display: flex;\n"]))),Hn=O.ZP.div(S||(S=(0,z.Z)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(n){return n.theme.colors.primary})),Mn=O.ZP.span(C||(C=(0,z.Z)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(n){return n.theme.colors.primary})),Tn=function(n){var e=n.max,t=n.symbol,r=n.onChange,i=n.onSelectMax,o=n.value,s=(0,F.Z)();return(0,H.jsxs)("div",{children:[(0,H.jsx)(On,{endAdornment:(0,H.jsxs)(Nn,{children:[(0,H.jsx)(Mn,{children:t}),(0,H.jsx)(Ln,{}),(0,H.jsx)("div",{children:(0,H.jsx)(N.zx,{size:"sm",onClick:i,children:s(452,"Max")})})]}),onChange:r,placeholder:"0",value:o}),(0,H.jsx)(Hn,{children:s(454,"".concat(e.toLocaleString()," ").concat(t," Available"))})]})},Fn=t(74451),Rn=function(n){var e=n.currency,t=n.contract,r=n.currencyAddress,i=n.onDismiss,o=(0,U.useState)(""),s=(0,V.Z)(o,2),c=s[0],a=s[1],u=(0,U.useState)(!1),l=(0,V.Z)(u,2),d=l[0],f=l[1],h=(0,Y.Ge)().account,x=(0,Bn.NJ)((0,Fn.ZP)(r));return(0,H.jsxs)(N.u_,{title:"Contribute ".concat(e),onDismiss:i,children:[(0,H.jsx)(Tn,{value:c,onChange:function(n){return a(n.currentTarget.value)},symbol:e,max:x,onSelectMax:function(){return a(x.toString())}}),(0,H.jsxs)(N.kC,{justifyContent:"space-between",mb:"24px",children:[(0,H.jsx)(N.zx,{variant:"secondary",onClick:i,mr:"8px",children:"Cancel"}),(0,H.jsx)(N.zx,{disabled:d,onClick:(0,Q.Z)((0,J.Z)().mark((function n(){return(0,J.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.next=3,t.methods.deposit(new($())(c).times(new($())(10).pow(18)).toString()).send({from:h});case 3:f(!1),i();case 5:case"end":return n.stop()}}),n)}))),children:"Confirm"})]}),(0,H.jsx)(N.NR,{href:"https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x50D809c74e0B8e49e7B4c65BB3109AbE3Ff4C1C1",style:{margin:"auto"},children:"Get ".concat(e)})]})},_n=function(n){var e=n.address,t=n.currency,r=n.currencyAddress,i=n.contract,o=n.status,s=n.raisingAmount,c=n.tokenDecimals,a=(0,U.useState)(!1),u=(0,V.Z)(a,2),l=u[0],d=u[1],f=(0,U.useState)(new($())(0)),h=(0,V.Z)(f,2),x=h[0],p=h[1],m=(0,U.useState)({amount:0,claimed:!1}),v=(0,V.Z)(m,2),g=v[0],Z=v[1],j=(0,Y.Ge)().account,b=(0,tn.X_)(r),w=function(n,e,t){var r=(0,Y.Ge)().account,i=(0,U.useState)(Dn.H),o=(0,V.Z)(i,2),s=o[0],c=o[1];return(0,U.useEffect)((function(){var t=function(){var t=(0,Q.Z)((0,J.Z)().mark((function t(){var i;return(0,J.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.methods.allowance(r,e).call();case 3:i=t.sent,c(new($())(i)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();r&&t()}),[r,e,n,t]),s}(b,e,l),y=(0,Pn.D8)(b,e),k=(0,N.dd)((0,H.jsx)(Rn,{currency:t,contract:i,currencyAddress:r})),S=(0,V.Z)(k,1)[0];if((0,U.useEffect)((function(){var n=function(){var n=(0,Q.Z)((0,J.Z)().mark((function n(){var e,t;return(0,J.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=$(),n.next=3,i.methods.getOfferingAmount(j).call();case 3:return n.t1=n.sent,e=new n.t0(n.t1),n.next=7,i.methods.userInfo(j).call();case 7:t=n.sent,Z(t),p(e);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();j&&n()}),[j,i.methods,l]),null===w)return null;var C=function(){var n=(0,Q.Z)((0,J.Z)().mark((function n(){return(0,J.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.next=3,i.methods.harvest().send({from:j});case 3:d(!1);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),A="finished"===o,D=new($())(g.amount).div(s).times(100);return w.toNumber()<=0?(0,H.jsx)(N.zx,{disabled:l||A,onClick:(0,Q.Z)((0,J.Z)().mark((function n(){return(0,J.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),n.next=4,y();case 4:d(!1),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),d(!1),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])}))),children:"Approve"}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(En,{disabled:l||g.claimed,buttonLabel:A?"Claim":"Contribute",label:A?"Your tokens to claim":"Your contribution (".concat(t,")"),value:A?g.claimed?"Claimed":(0,Bn.mW)(x,c).toFixed(4):(0,Bn.mW)(new($())(g.amount)).toFixed(4),onClick:A?C:S}),(0,H.jsx)(N.xv,{fontSize:"14px",color:"textSubtle",children:A?"You'll be refunded any excess tokens when you claim":"".concat(D.toFixed(5),"% of total")})]})},Gn=(0,O.ZP)(N.Zb)(A||(A=(0,z.Z)(["\n  /* background-image: ",";\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding-top: 112px;*/\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 437px;\n  width: 100%;\n"])),(function(n){var e=n.ifoId;return"url('/images/ifos/".concat(e,"-bg.svg')")})),Xn=O.ZP.img(D||(D=(0,z.Z)(["\n  max-height: 112px;\n  width: 100%;\n"]))),Wn=function(n,e,t){return n<e?"coming_soon":n>=e&&n<=t?"live":n>t?"finished":null},Jn=function(n){var e=n.ifo,t=e.id,r=e.address,i=e.name,o=e.subTitle,s=e.description,c=e.launchDate,a=e.launchTime,u=e.saleAmount,l=e.raiseAmount,d=e.cakeToBurn,f=e.projectSiteUrl,h=e.currency,x=e.currencyAddress,p=e.tokenDecimals,m=e.releaseBlockNumber,v=(0,U.useState)({isLoading:!0,status:null,blocksRemaining:0,secondsUntilStart:0,progress:0,secondsUntilEnd:0,raisingAmount:new($())(0),totalAmount:new($())(0),startBlockNum:0,endBlockNum:0}),g=(0,V.Z)(v,2),Z=g[0],j=g[1],b=(0,Y.Ge)().account,w=(0,tn.Ny)(r),y=en(),k=(0,F.Z)(),S=function(n,e){return"coming_soon"===n?(0,H.jsx)(N.PJ,{variantColor:"textDisabled",text:e(999,"Coming Soon")}):"live"===n?(0,H.jsx)(N.PJ,{variantColor:"primary",text:e(999,"LIVE NOW!")}):null}(Z.status,k);(0,U.useEffect)((function(){var n=function(){var n=(0,Q.Z)((0,J.Z)().mark((function n(){var e,t,r,i,o,s,c,a,u,l,d,f;return(0,J.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([w.methods.startBlock().call(),w.methods.endBlock().call(),w.methods.raisingAmount().call(),w.methods.totalAmount().call()]);case 2:e=n.sent,t=(0,V.Z)(e,4),r=t[0],i=t[1],o=t[2],s=t[3],c=parseInt(r,10),a=parseInt(i,10),u=Wn(y,c,a),l=a-c,f=y>c?(y-c)/l*100:(y-m)/(c-m)*100,j({isLoading:!1,secondsUntilEnd:(d=a-y)*q.hJ,secondsUntilStart:(c-y)*q.hJ,raisingAmount:new($())(o),totalAmount:new($())(s),status:u,progress:f,blocksRemaining:d,startBlockNum:c,endBlockNum:a});case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[y,w,m,j]);var C="live"===Z.status,A="finished"===Z.status;return(0,H.jsxs)(Gn,{ifoId:t,ribbon:S,isActive:C,children:[(0,H.jsx)(Xn,{ifoId:t,src:"/images/ifos/".concat(t,"-bg.svg")}),(0,H.jsxs)(N.eW,{children:[(0,H.jsx)(an,{ifoId:t,name:i,subTitle:o}),(0,H.jsx)(ln,{progress:Z.progress}),(0,H.jsx)(An,{isLoading:Z.isLoading,status:Z.status,secondsUntilStart:Z.secondsUntilStart,secondsUntilEnd:Z.secondsUntilEnd,block:C||A?Z.endBlockNum:Z.startBlockNum}),!b&&(0,H.jsx)(rn.Z,{fullWidth:!0}),(C||A)&&(0,H.jsx)(_n,{address:r,currency:h,currencyAddress:x,contract:w,status:Z.status,raisingAmount:Z.raisingAmount,tokenDecimals:p}),(0,H.jsx)(pn,{description:s}),(0,H.jsx)(Zn,{launchDate:c,launchTime:a,saleAmount:u,raiseAmount:l,cakeToBurn:d,projectSiteUrl:f,raisingAmount:Z.raisingAmount,totalAmount:Z.totalAmount})]})]})},Qn=(0,O.ZP)(N.X6).attrs({size:"lg"})(P||(P=(0,z.Z)(["\n  color: ",";\n  margin-bottom: 16px;\n"])),(function(n){return n.theme.colors.secondary})),Vn=O.ZP.div(B||(B=(0,z.Z)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  padding-bottom: 40px;\n  padding-top: 40px;\n\n  "," {\n    grid-template-columns: ",";\n  }\n"])),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.theme.mediaQueries.md}),(function(n){var e=n.isSingle;return"repeat(".concat(e?1:2,", 1fr)")}));Vn.defaultProps={isSingle:!1};var Yn,Kn,$n=Vn,qn=(0,O.ZP)(N.IE)(Yn||(Yn=(0,z.Z)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  margin: 0 auto;\n  padding: 32px 0;\n\n  "," {\n    grid-template-columns: 1fr 1fr;\n  }\n"])),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.theme.mediaQueries.sm})),ne=O.ZP.ul(Kn||(Kn=(0,z.Z)(["\n  color: ",";\n  margin-bottom: 16px;\n\n  & > li {\n    line-height: 1.4;\n    margin-bottom: 8px;\n  }\n"])),(function(n){return n.theme.colors.text})),ee=W.Q2.find((function(n){return n.isActive})),te=function(){var n=(0,F.Z)();return(0,H.jsxs)("div",{children:[(0,H.jsx)($n,{isSingle:!0,children:ee?(0,H.jsx)(Jn,{ifo:ee}):(0,H.jsx)(N.xv,{children:"No Active IDOs"})}),(0,H.jsxs)(qn,{children:[(0,H.jsxs)("div",{children:[(0,H.jsx)(Qn,{as:"h2",children:n(592,"How to Participate in Decentralized IDOs on CubFinance")}),(0,H.jsxs)(N.X6,{mb:"16px",children:[n(594,"Before IDO"),":"]}),(0,H.jsxs)(ne,{children:[(0,H.jsx)("li",{children:n(596,"Buy CUB and BUSD Tokens")}),(0,H.jsx)("li",{children:n(598,"Get CUB-BUSD LP tokens (PCSv2 Only) on PancakeSwap")})]}),(0,H.jsxs)(N.kC,{mb:"16px",children:[(0,H.jsx)(N.NR,{href:"https://exchange.cubdefi.com/",mr:"16px",children:n(999,"Buy CUB")}),(0,H.jsx)(N.NR,{href:"https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x50D809c74e0B8e49e7B4c65BB3109AbE3Ff4C1C1",children:n(999,"Get LP tokens")})]}),(0,H.jsxs)(N.X6,{mb:"16px",children:[n(600,"During IDO"),":"]}),(0,H.jsx)(ne,{children:(0,H.jsx)("li",{children:n(602,"While the IDO is live, commit your CUB-BUSD LP tokens to participate in the decentralized raise at the predetermined token price")})}),(0,H.jsxs)(N.X6,{mb:"16px",children:[n(604,"After IDO"),":"]}),(0,H.jsxs)(ne,{children:[(0,H.jsx)("li",{children:n(606,'Click "Claim" to claim the IDO tokens you purchased along with any unspent CUB-BUSD LP.')}),(0,H.jsx)("li",{children:n(608,"Done!")})]}),(0,H.jsx)("img",{src:"images/cub/header_logo_wide.svg",alt:"cub"}),(0,H.jsx)(N.xv,{as:"div",pt:"16px",children:(0,H.jsx)(N.zx,{as:"a",variant:"secondary",href:"https://docs.cubdefi.com/major-feature-releases/initial-dex-offering-ido",children:n(610,"Read more")})})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)(N.Ee,{src:"/images/cub/wide.svg",alt:"ifo bunny",width:436,height:406,responsive:!0}),(0,H.jsxs)("div",{children:[(0,H.jsx)(Qn,{as:"h2",children:n(512,"Want to launch your own IDO?")}),(0,H.jsx)(N.xv,{mb:3,children:n(514,"Launch your project with CubDefi to bring your token directly to the most active and rapidly growing community on BSC.")}),(0,H.jsx)(N.zx,{as:"a",href:"https://forms.gle/qRRKAefPsh6D83Ys9",external:!0,children:n(516,"Apply to launch")})]})]})]})]})},re=W.Q2.filter((function(n){return!n.isActive})),ie=function(){return(0,H.jsx)($n,{children:re.map((function(n){return(0,H.jsx)(Jn,{ifo:n},n.id)}))})},oe=function(){var n=(0,E.$B)().path;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(X,{}),(0,H.jsxs)(I.Z,{children:[(0,H.jsx)(T,{}),(0,H.jsx)(E.AW,{exact:!0,path:"".concat(n),children:(0,H.jsx)(te,{})}),(0,H.jsx)(E.AW,{path:"".concat(n,"/history"),children:(0,H.jsx)(ie,{})})]})]})}}}]);