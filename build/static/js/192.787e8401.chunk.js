"use strict";(self.webpackChunkcubdefi_frontend=self.webpackChunkcubdefi_frontend||[]).push([[192],{23282:function(n,e,t){var i=t(1413),r=(t(47313),t(90240)),a=t(11828),s=t(1760),l=t(46417);e.Z=function(n){var e=(0,s.Z)(),t=(0,a.Z)(),d=t.login,o=t.logout,c=(0,r.hB)(d,o).onPresentConnectModal;return(0,l.jsx)(r.zx,(0,i.Z)((0,i.Z)({onClick:c},n),{},{children:e(292,"Unlock Wallet")}))}},81192:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ut}});var i,r,a=t(1413),s=t(70885),l=t(30168),d=t(47313),o=t(63830),c=t(20438),u=t(58704),x=t.n(u),p=t(82229),h=t(90240),m=t(49184),f=m.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]))),j=t(84485),g=t(91903),v=t(1689),Z=t(63199),b=function(n,e){var t=(0,d.useState)((function(){try{var t=localStorage.getItem(e);return t?JSON.parse(t):n}catch(i){return n}})),i=(0,s.Z)(t,2),r=i[0],a=i[1];return(0,d.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[r,e]),[r,a]},y=t(1760),k=t(64446),w=t(44383),P=t(16031),C=t(79581),S=t(76382),A=t(7885),T=t(4301),L=t(46417),B=m.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.colors.primary})),D=function(n){var e=n.onClick,t=n.expanded,i=null;return n.onlyArrow||(i=(0,L.jsx)(h.xv,{color:"primary",bold:!0,children:t?"Hide":"Details"})),(0,L.jsxs)(B,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return e()},children:[i,t?(0,L.jsx)(h.g8,{}):(0,L.jsx)(h.v4,{})]})};D.defaultProps={expanded:!1};var I,q,F,E,R,U,N,z,O,K,M,X,V,G,Q,H,W,J,_,$,Y,nn,en,tn,rn,an,sn,ln,dn,on,cn,un,xn,pn,hn,mn,fn,jn,gn,vn,Zn,bn,yn,kn,wn,Pn,Cn=D,Sn=t(18941),An=t(19439),Tn=m.ZP.div(I||(I=(0,l.Z)(["\n  margin-top: 24px;\n"]))),Ln=(0,m.ZP)(h.NR)(q||(q=(0,l.Z)(["\n  font-weight: 400;\n"]))),Bn=function(n){var e=n.bscScanAddress,t=n.infoAddress,i=n.removed,r=n.totalValueFormatted,a=n.lpLabel,s=n.addLiquidityUrl,l=(0,y.Z)();return(0,L.jsxs)(Tn,{children:[(0,L.jsxs)(h.kC,{justifyContent:"space-between",children:[(0,L.jsxs)(h.xv,{children:[l(354,"Total Liquidity"),":"]}),(0,L.jsx)(h.xv,{children:r})]}),!i&&(0,L.jsx)(Ln,{href:s,children:l(999,"Get ".concat(a),{name:a})}),(0,L.jsx)(Ln,{href:e,children:l(999,"View Contract")}),(0,L.jsx)(Ln,{href:t,children:l(999,"See Pair Info")})]})},Dn=function(n){return(0,L.jsx)(h.Vp,(0,a.Z)((0,a.Z)({variant:"textSubtle",outline:!0},n),{},{children:"Dual"}))},In=function(){return(0,L.jsx)(h.Vp,{variant:"success",outline:!0,startIcon:(0,L.jsx)(h.SA,{}),children:"No Fees"})},qn=(0,m.ZP)(h.kC)(F||(F=(0,l.Z)(["\n  svg {\n    margin-right: 4px;\n  }\n"]))),Fn=(0,m.ZP)(h.Vp)(E||(E=(0,l.Z)(["\n  margin-left: 4px;\n"]))),En=function(n){var e=n.lpLabel,t=n.multiplier,i=n.farmImage,r=n.tokenSymbol,a=n.depositFee;return(0,L.jsxs)(qn,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[(0,L.jsx)(h.Ee,{src:"/images/farms/".concat(i,".png"),alt:r,width:64,height:64}),(0,L.jsxs)(h.kC,{flexDirection:"column",alignItems:"flex-end",children:[(0,L.jsx)(h.X6,{mb:"4px",children:e.split(" ")[0]}),(0,L.jsxs)(h.kC,{justifyContent:"center",children:[0===a?(0,L.jsx)(In,{}):null,(0,L.jsx)(Fn,{variant:"secondary",children:t})]})]})]})},Rn=t(74165),Un=t(15861),Nn=t(30652),zn=t(48574),On=t(27163),Kn=t(89680),Mn=t(23282),Xn=t(89498),Vn=t(29608),Gn=t(68869),Qn=t(49908),Hn=m.ZP.div(R||(R=(0,l.Z)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),Wn=function(n){var e=n.stakedBalance,t=n.tokenBalance,i=n.tokenName,r=n.pid,a=n.addLiquidityUrl,l=n.isKingdom,c=n.isTokenOnly,u=n.isKingdomToken,x=(0,y.Z)(),p=(0,Xn.ZP)(r,l).onStake,m=(0,Vn.ZP)(r,l).onUnstake,f=(0,o.TH)(),j=(0,d.useCallback)((function(){var n=(0,k.mW)(e);return n>0&&n<1e-4?(0,k.NJ)(e).toLocaleString():n.toLocaleString()}),[e]),g=(0,h.dd)((0,L.jsx)(Gn.Z,{max:t,onConfirm:p,tokenName:i,addLiquidityUrl:a,isTokenOnly:c,isKingdomToken:u})),v=(0,s.Z)(g,1)[0],Z=(0,h.dd)((0,L.jsx)(Qn.Z,{max:e,onConfirm:m,tokenName:i,isTokenOnly:c,isKingdomToken:u})),b=(0,s.Z)(Z,1)[0];return(0,L.jsxs)(h.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,L.jsx)(h.X6,{color:e.eq(0)?"textDisabled":"text",children:j()}),e.eq(0)?(0,L.jsx)(h.zx,{onClick:v,disabled:f.pathname.includes("archived"),children:x(999,c||u?"Stake Token":"Stake LP")}):(0,L.jsxs)(Hn,{children:[(0,L.jsx)(h.hU,{variant:"tertiary",onClick:b,mr:"6px",children:(0,L.jsx)(h.J9,{color:"primary",width:"14px"})}),(0,L.jsx)(h.hU,{variant:"tertiary",onClick:v,children:(0,L.jsx)(h.dt,{color:"primary",width:"14px"})})]})]})},Jn=t(98059),_n=t(54545),$n=m.ZP.div(U||(U=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),Yn=function(n){var e=n.earnings,t=n.pid,i=n.isKingdom,r=(0,p.Ge)().account,a=(0,y.Z)(),l=(0,d.useState)(!1),o=(0,s.Z)(l,2),c=o[0],u=o[1],m=(0,Jn.vj)(t,i).onReward,f=(0,g.Iu)(),j=(0,Xn.ZP)(t,i).onStake,v=r?(0,k.mW)(e):0,Z=v.toLocaleString(),b=v?new(x())(v).multipliedBy(f).toNumber():0;return(0,L.jsxs)(h.kC,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[(0,L.jsxs)(h.X6,{color:0===v?"textDisabled":"text",children:[Z,b>0&&(0,L.jsx)(_n.Z,{value:b})]}),(0,L.jsxs)($n,{children:[12===t?(0,L.jsx)(h.zx,{disabled:0===v||c,size:"sm",variant:"secondary",marginBottom:"15px",onClick:(0,Un.Z)((0,Rn.Z)().mark((function n(){return(0,Rn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.next=3,j(v.toString());case 3:u(!1);case 4:case"end":return n.stop()}}),n)}))),children:a(999,"Compound")}):null,(0,L.jsx)(h.zx,{disabled:0===v||c,onClick:(0,Un.Z)((0,Rn.Z)().mark((function n(){return(0,Rn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.next=3,m();case 3:u(!1);case 4:case"end":return n.stop()}}),n)}))),children:a(562,"Harvest")})]})]})},ne=m.ZP.div(N||(N=(0,l.Z)(["\n  padding-top: 16px;\n"]))),ee=function(n){var e=n.farm,t=n.account,i=n.addLiquidityUrl,r=(0,y.Z)(),a=(0,d.useState)(!1),l=(0,s.Z)(a,2),c=l[0],u=l[1],p=e.pid,m=e.lpAddresses,f=e.isTokenOnly,j=e.isKingdomToken,g=e.isKingdom,v=e.token.address,Z=e.userData||{},b=Z.allowance,k=void 0===b?0:b,w=Z.tokenBalance,P=void 0===w?0:w,C=Z.stakedBalance,S=void 0===C?0:C,A=Z.earnings,T=void 0===A?0:A,B=new(x())(k),D=new(x())(P),I=new(x())(S),q=new(x())(T),F=(0,Nn.Kn)(m),E=(0,Nn.Kn)(v),R=e.lpSymbol.toUpperCase(),U=t&&B&&B.isGreaterThan(0),N=(0,On.Z)(),z=(0,o.TH)(),O=(0,d.useMemo)((function(){return f||j?(0,zn.jS)(E,N):(0,zn.jS)(F,N)}),[F,f,N,E,j]),K=(0,Kn.yA)(O,g).onApprove,M=(0,d.useCallback)((0,Un.Z)((0,Rn.Z)().mark((function n(){return(0,Rn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!0),n.next=4,K();case 4:u(!1),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[K]);return(0,L.jsxs)(ne,{children:[(0,L.jsxs)(h.kC,{children:[(0,L.jsx)(h.xv,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"CUB"}),(0,L.jsx)(h.xv,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(1072,"Earned")})]}),(0,L.jsx)(Yn,{earnings:q,pid:p,isKingdom:g}),(0,L.jsxs)(h.kC,{children:[(0,L.jsx)(h.xv,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:R}),(0,L.jsx)(h.xv,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(1074,"Staked")})]}),t?U?(0,L.jsx)(Wn,{stakedBalance:I,tokenBalance:D,tokenName:R,pid:p,addLiquidityUrl:i,isKingdom:g,isTokenOnly:e.isTokenOnly,isKingdomToken:e.isKingdomToken}):(0,L.jsx)(h.zx,{mt:"8px",width:"100%",disabled:c||z.pathname.includes("archived"),onClick:M,children:r(758,"Approve Contract")}):(0,L.jsx)(Mn.Z,{mt:"8px",width:"100%"})]})},te=t(22096),ie=t(22411),re=(0,m.F4)(z||(z=(0,l.Z)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),ae=m.ZP.div(O||(O=(0,l.Z)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 32px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),re),se=m.ZP.div(K||(K=(0,l.Z)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(n){return n.theme.card.background})),le=m.ZP.div(M||(M=(0,l.Z)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(n){return n.theme.colors.borderColor})),de=m.ZP.div(X||(X=(0,l.Z)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(n){return n.expanded?"100%":"0px"})),oe=function(n){var e=n.farm,t=n.removed,i=n.cakePrice,r=n.account,a=(0,y.Z)(),l=(0,d.useState)(!1),o=(0,s.Z)(l,2),c=o[0],u=o[1],x=e.lpSymbol.split(" ")[0].toLocaleLowerCase(),p=e.liquidity&&e.liquidity.toNumber()?"$".concat(e.liquidity.toNumber().toLocaleString(void 0,{maximumFractionDigits:0})):"-",m=e.lpSymbol&&e.lpSymbol.toUpperCase().replace("PANCAKE",""),f=e.dual?e.dual.earnLabel:"CUB",j=(e.apr&&e.apr.toLocaleString("en-US",{maximumFractionDigits:2}),(0,An.Z)({quoteTokenAddress:e.quoteToken.address,tokenAddress:e.token.address})),g=e.pcsVersion&&e.pcsVersion>1?Sn.LJ:Sn.wI,v="".concat(g,"/").concat(j),Z=e.lpAddresses[56],b=(0,ie.R)({numberOfDays:365,farmApr:e.apr,tokenPrice:e.token.busdPrice,roundingDecimals:2,compoundFrequency:1}),k=(0,ie.L)({amountEarned:b,amountInvested:1e3/parseFloat(e.token.busdPrice)}).toFixed(2);return(0,L.jsxs)(se,{children:["CUB"===e.token.symbol&&(0,L.jsx)(ae,{}),(0,L.jsx)(En,{lpLabel:m,multiplier:e.multiplier,isCommunityFarm:e.isCommunity,farmImage:x,tokenSymbol:e.token.symbol,depositFee:e.depositFeeBP}),!t&&(0,L.jsxs)(h.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,L.jsxs)(h.xv,{children:[a(999,"APY"),":"]}),(0,L.jsx)(h.xv,{bold:!0,style:{display:"flex",alignItems:"center"},children:e.apr?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(te.Z,{lpLabel:m,addLiquidityUrl:v,cakePrice:i,apr:e.apr}),k,"%"]}):(0,L.jsx)(h.Od,{height:24,width:80})})]}),(0,L.jsxs)(h.kC,{justifyContent:"space-between",children:[(0,L.jsxs)(h.xv,{children:[a(318,"Earn"),":"]}),(0,L.jsx)(h.xv,{bold:!0,children:f})]}),(0,L.jsxs)(h.kC,{justifyContent:"space-between",children:[(0,L.jsxs)(h.xv,{style:{fontSize:"16px"},children:[a(10001,"Deposit Fee"),":"]}),e.depositFeeBP?(0,L.jsxs)(h.xv,{bold:!0,style:{fontSize:"16px"},children:[e.depositFeeBP/100,"%"]}):"0%"]}),(0,L.jsx)(ee,{farm:e,account:r,addLiquidityUrl:v}),(0,L.jsx)(le,{}),(0,L.jsx)(Cn,{onClick:function(){return u(!c)},expanded:c}),(0,L.jsx)(de,{expanded:c,children:(0,L.jsx)(Bn,{removed:t,bscScanAddress:e.isTokenOnly?"https://bscscan.com/token/".concat(e.token.address[56]):"https://bscscan.com/token/".concat(e.lpAddresses[56]),infoAddress:"https://pancakeswap.info/pair/".concat(Z),totalValueFormatted:p,lpLabel:m,addLiquidityUrl:v})})]})},ce=function(n,e){var t=(0,d.useState)(!1),i=(0,s.Z)(t,2),r=i[0],a=i[1];return(0,d.useEffect)((function(){var t;return n&&!r?a(!0):!n&&r&&(t=setTimeout((function(){return a(!1)}),e)),function(){return clearTimeout(t)}}),[n,e,r]),r},ue=m.ZP.div(V||(V=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n\n  button {\n    width: 20px;\n    height: 20px;\n\n    svg {\n      path {\n        fill: ",";\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.textSubtle})),xe=m.ZP.div(G||(G=(0,l.Z)(["\n  min-width: 60px;\n  text-align: left;\n"]))),pe=function(n){var e=n.value,t=n.lpLabel,i=n.tokenAddress,r=n.quoteTokenAddress,a=n.cakePrice,s=n.originalValue,l=n.hideButton,d=void 0!==l&&l,o=(0,An.Z)({quoteTokenAddress:r,tokenAddress:i}),c="".concat(Sn.wI,"/").concat(o);return 0!==s?(0,L.jsx)(ue,{children:s?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(xe,{children:[e,"%"]}),!d&&(0,L.jsx)(te.Z,{lpLabel:t,cakePrice:a,apr:s,addLiquidityUrl:c})]}):(0,L.jsx)(xe,{children:(0,L.jsx)(h.Od,{width:60})})}):(0,L.jsx)(ue,{children:(0,L.jsxs)(xe,{children:[s,"%"]})})},he=(0,m.ZP)(h.Ee)(Q||(Q=(0,l.Z)(["\n  width: 24px;\n  height: 24px;\n\n  "," {\n    width: 40px;\n    height: 40px;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),me=m.ZP.div(H||(H=(0,l.Z)(["\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n\n  "," {\n    padding-left: 32px;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),fe=function(n){var e=n.image,t=n.label,i=n.pid,r=(0,g.Dx)(i).stakedBalance,a=(0,y.Z)(),s=(0,k.mW)(r);return(0,L.jsxs)(me,{children:[(0,L.jsx)(he,{src:"/images/farms/".concat(e,".png"),alt:"icon",width:40,height:40,mr:"8px"}),(0,L.jsxs)("div",{children:[s?(0,L.jsx)(h.xv,{color:"secondary",fontSize:"12px",bold:!0,children:a(999,"FARMING")}):null,(0,L.jsx)(h.xv,{bold:!0,children:t})]})]})},je=m.ZP.span(W||(W=(0,l.Z)(["\n  color: ",";\n  display: flex;\n  align-items: center;\n"])),(function(n){var e=n.earned,t=n.theme;return e?t.colors.text:t.colors.textDisabled})),ge=function(n){var e=n.earnings;return n.userDataReady?(0,L.jsx)(je,{earned:e,children:e.toLocaleString()}):(0,L.jsx)(je,{earned:0,children:(0,L.jsx)(h.Od,{width:60})})},ve=m.ZP.div(J||(J=(0,l.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  padding-right: 8px;\n  color: ",";\n\n  "," {\n    padding-right: 0px;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.mediaQueries.sm})),Ze=(0,m.ZP)(h.v4)(_||(_=(0,l.Z)(["\n  transform: ",";\n  height: 20px;\n"])),(function(n){return n.toggled?"rotate(180deg)":"rotate(0)"})),be=function(n){var e=n.actionPanelToggled,t=(0,y.Z)(),i=!(0,h.SL)().isXl;return(0,L.jsxs)(ve,{children:[!i&&t(658,"Details"),(0,L.jsx)(Ze,{color:"primary",toggled:e})]})},ye=m.ZP.div($||($=(0,l.Z)(["\n  display: inline-block;\n"]))),ke=m.ZP.div(Y||(Y=(0,l.Z)(["\n  color: ",";\n  width: 36px;\n  text-align: right;\n  margin-right: 14px;\n\n  "," {\n    text-align: left;\n    margin-right: 0;\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.mediaQueries.lg})),we=m.ZP.div(nn||(nn=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Pe=function(n){var e=n.multiplier,t=e?e.toLowerCase():(0,L.jsx)(h.Od,{width:30}),i=(0,y.Z)(),r=(0,L.jsxs)("div",{children:[i(999,"The multiplier represents the amount of CUB rewards each farm gets."),(0,L.jsx)("br",{}),(0,L.jsx)("br",{}),i(999,"For example, if a 1x farm was getting 1 CUB per block, a 40x farm would be getting 40 CUB per block.")]}),a=(0,h.lL)(r,"top-end","hover",void 0,void 0,[20,10]),s=a.targetRef,l=a.tooltip,d=a.tooltipVisible;return(0,L.jsxs)(we,{children:[(0,L.jsx)(ke,{children:t}),(0,L.jsx)(ye,{ref:s,children:(0,L.jsx)(h.by,{color:"textSubtle"})}),d&&l]})},Ce=m.ZP.div(en||(en=(0,l.Z)(["\n  display: inline-block;\n"]))),Se=m.ZP.div(tn||(tn=(0,l.Z)(["\n  min-width: 110px;\n  font-weight: 600;\n  text-align: right;\n  margin-right: 14px;\n\n  "," {\n    text-align: left;\n    margin-right: 0;\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),Ae=m.ZP.div(rn||(rn=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Te=function(n){var e=n.liquidity,t=e&&e.gt(0)?"$".concat(Number(e).toLocaleString(void 0,{maximumFractionDigits:0})):(0,L.jsx)(h.Od,{width:60}),i=(0,y.Z)(),r=(0,h.lL)(i(999,"The total value of the funds in this farm\u2019s liquidity pool"),"top-end","hover",void 0,void 0,[20,10]),a=r.targetRef,s=r.tooltip,l=r.tooltipVisible;return(0,L.jsxs)(Ae,{children:[(0,L.jsx)(Se,{children:(0,L.jsx)(h.xv,{children:t})}),(0,L.jsx)(Ce,{ref:a,children:(0,L.jsx)(h.by,{color:"textSubtle"})}),l&&s]})},Le=t(87977),Be=t(88553),De=function(n){var e=n.pid,t=n.userData,i=n.userDataReady,r=new(x())(t.earnings),a=(0,g.Iu)(),l=0,o=0,c=i?l.toLocaleString():(0,L.jsx)(h.Od,{width:60});r.isZero()||(l=(0,k.mW)(r),o=new(x())(l).multipliedBy(a).toNumber(),c=l.toLocaleString());var u=(0,d.useState)(!1),p=(0,s.Z)(u,2),m=p[0],f=p[1],j=(0,Jn.vj)(e).onReward,v=(0,y.Z)(),Z=(0,Le.$i)({start:0,end:o,duration:1,separator:",",decimals:3}),b=Z.countUp,w=Z.update,P=(0,d.useRef)(w);return(0,d.useEffect)((function(){P.current(o)}),[o,P]),(0,L.jsxs)(Be.sX,{children:[(0,L.jsxs)(Be.Ad,{children:[(0,L.jsx)(Be.Dx,{children:"CUB "}),(0,L.jsx)(Be.dr,{children:v(1072,"EARNED")})]}),(0,L.jsxs)(Be.O6,{children:[(0,L.jsxs)("div",{children:[(0,L.jsx)(Be.X6,{children:c}),b>0&&(0,L.jsxs)(Be.v7,{children:["~",b,"USD"]})]}),(0,L.jsx)(h.zx,{disabled:!l||m||!i,onClick:(0,Un.Z)((0,Rn.Z)().mark((function n(){return(0,Rn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.next=3,j();case 3:f(!1);case 4:case"end":return n.stop()}}),n)}))),ml:"4px",children:v(562,"Harvest")})]})]})},Ie=m.ZP.div(an||(an=(0,l.Z)(["\n  display: flex;\n"]))),qe=function(n){var e=n.pid,t=n.lpSymbol,i=n.lpAddresses,r=n.quoteToken,a=n.token,l=n.userDataReady,c=n.isTokenOnly,u=(0,y.Z)(),x=(0,p.Ge)().account,m=(0,d.useState)(!1),f=(0,s.Z)(m,2),j=f[0],v=f[1],Z=(0,g.Dx)(e),b=Z.allowance,w=Z.tokenBalance,P=Z.stakedBalance,C=(0,Xn.ZP)(e).onStake,S=(0,Vn.ZP)(e).onUnstake,A=(0,On.Z)(),T=(0,o.TH)(),B=(0,Nn.Kn)(a.address),D=x&&b&&b.isGreaterThan(0),I=i[56],q=(0,An.Z)({quoteTokenAddress:r.address,tokenAddress:a.address}),F="".concat(Sn.wI,"/").concat(q),E=(0,d.useCallback)((function(){var n=(0,k.mW)(P);return n>0&&n<1e-4?(0,k.NJ)(P).toLocaleString():n.toLocaleString()}),[P]),R=(0,h.dd)((0,L.jsx)(Gn.Z,{max:w,onConfirm:C,tokenName:t,addLiquidityUrl:F})),U=(0,s.Z)(R,1)[0],N=(0,h.dd)((0,L.jsx)(Qn.Z,{max:P,onConfirm:S,tokenName:t})),z=(0,s.Z)(N,1)[0],O=(0,d.useMemo)((function(){return c?(0,zn.jS)(B,A):(0,zn.jS)(I,A)}),[I,c,A,B]),K=(0,Kn.yA)(O).onApprove,M=(0,d.useCallback)((0,Un.Z)((0,Rn.Z)().mark((function n(){return(0,Rn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v(!0),n.next=4,K();case 4:v(!1),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[K]);return x?D?P.gt(0)?(0,L.jsxs)(Be.sX,{children:[(0,L.jsxs)(Be.Ad,{children:[(0,L.jsxs)(Be.Dx,{children:[t," "]}),(0,L.jsx)(Be.dr,{children:u(999,"STAKED")})]}),(0,L.jsxs)(Be.O6,{children:[(0,L.jsx)("div",{children:(0,L.jsx)(Be.X6,{children:E()})}),(0,L.jsxs)(Ie,{children:[(0,L.jsx)(h.hU,{variant:"secondary",onClick:z,mr:"6px",children:(0,L.jsx)(h.J9,{color:"primary",width:"14px"})}),(0,L.jsx)(h.hU,{variant:"secondary",onClick:U,children:(0,L.jsx)(h.dt,{color:"primary",width:"14px"})})]})]})]}):(0,L.jsxs)(Be.sX,{children:[(0,L.jsxs)(Be.Ad,{children:[(0,L.jsxs)(Be.dr,{children:[u(999,"STAKE")," "]}),(0,L.jsx)(Be.Dx,{children:t})]}),(0,L.jsx)(Be.O6,{children:(0,L.jsx)(h.zx,{width:"100%",onClick:U,variant:"secondary",disabled:T.pathname.includes("archived"),children:u(999,c?"Stake Token":"Stake LP")})})]}):l?(0,L.jsxs)(Be.sX,{children:[(0,L.jsx)(Be.Ad,{children:(0,L.jsx)(Be.dr,{children:u(999,"ENABLE FARM")})}),(0,L.jsx)(Be.O6,{children:(0,L.jsx)(h.zx,{width:"100%",disabled:j||T.pathname.includes("archived"),onClick:M,variant:"secondary",children:u(999,"Enable")})})]}):(0,L.jsxs)(Be.sX,{children:[(0,L.jsx)(Be.Ad,{children:(0,L.jsx)(Be.dr,{children:u(999,"START FARMING")})}),(0,L.jsx)(Be.O6,{children:(0,L.jsx)(h.Od,{width:180,marginBottom:28,marginTop:14})})]}):(0,L.jsxs)(Be.sX,{children:[(0,L.jsx)(Be.Ad,{children:(0,L.jsx)(Be.dr,{children:u(999,"START FARMING")})}),(0,L.jsx)(Be.O6,{children:(0,L.jsx)(Mn.Z,{width:"100%"})})]})},Fe=(0,m.F4)(sn||(sn=(0,l.Z)(["\n  from {\n    max-height: 0px;\n  }\n  to {\n    max-height: 500px;\n  }\n"]))),Ee=(0,m.F4)(ln||(ln=(0,l.Z)(["\n  from {\n    max-height: 500px;\n  }\n  to {\n    max-height: 0px;\n  }\n"]))),Re=m.ZP.div(dn||(dn=(0,l.Z)(["\n  animation: ",";\n  overflow: hidden;\n  background: ",";\n  display: flex;\n  width: 100%;\n  flex-direction: column-reverse;\n  padding: 24px;\n\n  "," {\n    flex-direction: row;\n    padding: 16px 32px;\n  }\n"])),(function(n){return n.expanded?(0,m.iv)(on||(on=(0,l.Z)(["\n          "," 300ms linear forwards\n        "])),Fe):(0,m.iv)(cn||(cn=(0,l.Z)(["\n          "," 300ms linear forwards\n        "])),Ee)}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.mediaQueries.lg})),Ue=(0,m.ZP)(h.NR)(un||(un=(0,l.Z)(["\n  font-weight: 400;\n"]))),Ne=m.ZP.div(xn||(xn=(0,l.Z)(["\n  color: ",";\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n\n  "," {\n    justify-content: flex-start;\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.mediaQueries.sm})),ze=m.ZP.div(pn||(pn=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n\n  "," {\n    margin-top: 16px;\n  }\n\n  > div {\n    height: 24px;\n    padding: 0 6px;\n    font-size: 14px;\n    margin-right: 4px;\n\n    svg {\n      width: 14px;\n    }\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),Oe=m.ZP.div(hn||(hn=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  "," {\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),Ke=m.ZP.div(mn||(mn=(0,l.Z)(["\n  min-width: 200px;\n"]))),Me=m.ZP.div(fn||(fn=(0,l.Z)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),Xe=m.ZP.div(jn||(jn=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 4px 0px;\n"]))),Ve=function(n){var e=n.details,t=n.apr,i=n.multiplier,r=n.liquidity,s=n.userDataReady,l=n.expanded,d=e,o=(0,y.Z)(),c="0X"!==d.multiplier,u=d.quoteToken,x=d.token,p=d.dual,m=d.lpSymbol&&d.lpSymbol.toUpperCase().replace("PANCAKE",""),f=(0,An.Z)({quoteTokenAddress:u.address,tokenAddress:x.address}),j=d.lpAddresses[56],g="https://bscscan.com/address/".concat(j),v="https://pancakeswap.info/pair/".concat(j),Z=d.pcsVersion&&d.pcsVersion>1?Sn.LJ:Sn.wI,b="".concat(Z,"/").concat(f);return(0,L.jsxs)(Re,{expanded:l,children:[(0,L.jsxs)(Ke,{children:[c&&(0,L.jsx)(Ne,{children:(0,L.jsx)(Ue,{href:b,children:o(999,"Get ".concat(m),{name:m})})}),(0,L.jsx)(Ue,{href:g,children:o(999,"View Contract")}),(0,L.jsx)(Ue,{href:v,children:o(999,"See Pair Info")}),(0,L.jsxs)(ze,{children:[0===d.depositFeeBP?(0,L.jsx)(In,{}):null,p?(0,L.jsx)(Dn,{}):null]}),0!==d.depositFeeBP&&(0,L.jsxs)(h.kC,{justifyContent:"flex-start",children:[(0,L.jsxs)(h.xv,{style:{fontSize:"16px"},children:[o(10001,"Deposit Fee"),":\xa0"]}),(0,L.jsxs)(h.xv,{bold:!0,style:{fontSize:"16px"},children:[d.depositFeeBP/100,"%"]})]})]}),(0,L.jsxs)(Me,{children:[(0,L.jsxs)(Xe,{children:[(0,L.jsx)(h.xv,{children:o(736,"APR")}),(0,L.jsx)(pe,(0,a.Z)({},t))]}),(0,L.jsxs)(Xe,{children:[(0,L.jsx)(h.xv,{children:o(999,"Multiplier")}),(0,L.jsx)(Pe,(0,a.Z)({},i))]}),(0,L.jsxs)(Xe,{children:[(0,L.jsx)(h.xv,{children:o(999,"Liquidity")}),(0,L.jsx)(Te,(0,a.Z)({},r))]})]}),(0,L.jsxs)(Oe,{children:[(0,L.jsx)(De,(0,a.Z)((0,a.Z)({},d),{},{userDataReady:s})),(0,L.jsx)(qe,(0,a.Z)((0,a.Z)({},d),{},{userDataReady:s}))]})]})},Ge=m.ZP.div(gn||(gn=(0,l.Z)(["\n  font-size: 12px;\n  color: ",";\n  text-align: left;\n"])),(function(n){return n.theme.colors.textSubtle})),Qe=m.ZP.div(vn||(vn=(0,l.Z)(["\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n"]))),He=function(n){var e=n.label,t=void 0===e?"":e,i=n.children;return(0,L.jsxs)("div",{children:[t&&(0,L.jsx)(Ge,{children:t}),(0,L.jsx)(Qe,{children:i})]})},We=[{id:1,name:"farm",translationId:999,sortable:!0,label:""},{id:2,name:"earned",translationId:1072,sortable:!0,label:"Earned"},{id:3,name:"apr",translationId:736,sortable:!0,label:"APR"},{id:6,name:"details",translationId:999,sortable:!0,label:""}],Je=[{id:1,name:"farm",translationId:999,sortable:!0,label:""},{id:2,name:"earned",translationId:1072,sortable:!0,label:"Earned"},{id:3,name:"apr",translationId:736,sortable:!0,label:"APR"},{id:4,name:"liquidity",translationId:999,sortable:!0,label:"Liquidity"},{id:5,name:"multiplier",translationId:999,sortable:!0,label:"Multiplier"},{id:6,name:"details",translationId:999,sortable:!0,label:""}];!function(n){n.TABLE="TABLE",n.CARD="CARD"}(Zn||(Zn={}));var _e,$e,Ye,nt,et,tt,it,rt,at={apr:pe,farm:fe,earned:ge,details:be,multiplier:Pe,liquidity:Te},st=m.ZP.div(bn||(bn=(0,l.Z)(["\n  padding: 24px 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding-right: 8px;\n\n  "," {\n    padding-right: 32px;\n  }\n"])),(function(n){return n.theme.mediaQueries.xl})),lt=m.ZP.tr(yn||(yn=(0,l.Z)(["\n  cursor: pointer;\n  border-bottom: 2px solid ",";\n"])),(function(n){return n.theme.colors.borderColor})),dt=m.ZP.td(kn||(kn=(0,l.Z)(["\n  padding: 16px 0 24px 16px;\n"]))),ot=m.ZP.td(wn||(wn=(0,l.Z)(["\n  padding-top: 16px;\n  padding-bottom: 24px;\n"]))),ct=m.ZP.td(Pn||(Pn=(0,l.Z)(["\n  padding-top: 24px;\n"]))),ut=function(n){var e=n.details,t=n.userDataReady,i=!!(0,g.Dx)(e.pid).stakedBalance.toNumber(),r=(0,d.useState)(i),l=(0,s.Z)(r,2),o=l[0],c=l[1],u=ce(o,300),x=(0,y.Z)(),p=function(){c(!o)};(0,d.useEffect)((function(){c(i)}),[i]);var m=(0,h.SL)(),f=m.isXl,j=m.isXs,v=!f,Z=v?We:Je,b=Z.map((function(n){return n.name}));return(0,L.jsxs)(L.Fragment,{children:[j?(0,L.jsxs)(lt,{onClick:p,children:[(0,L.jsxs)("td",{children:[(0,L.jsx)("tr",{children:(0,L.jsx)(ct,{children:(0,L.jsx)(He,{children:(0,L.jsx)(fe,(0,a.Z)({},n.farm))})})}),(0,L.jsxs)("tr",{children:[(0,L.jsx)(dt,{children:(0,L.jsx)(He,{label:x(1072,"Earned"),children:(0,L.jsx)(ge,(0,a.Z)((0,a.Z)({},n.earned),{},{userDataReady:t}))})}),(0,L.jsx)(ot,{children:(0,L.jsx)(He,{label:x(736,"APR"),children:(0,L.jsx)(pe,(0,a.Z)((0,a.Z)({},n.apr),{},{hideButton:!0}))})})]})]}),(0,L.jsx)("td",{children:(0,L.jsx)(st,{children:(0,L.jsx)(He,{children:(0,L.jsx)(be,{actionPanelToggled:o})})})})]}):(0,L.jsx)(lt,{onClick:p,children:Object.keys(n).map((function(e){var i=b.indexOf(e);if(-1===i)return null;switch(e){case"details":return(0,L.jsx)("td",{children:(0,L.jsx)(st,{children:(0,L.jsx)(He,{children:(0,L.jsx)(be,{actionPanelToggled:o})})})},e);case"apr":return(0,L.jsx)("td",{children:(0,L.jsx)(st,{children:(0,L.jsx)(He,{label:x(999,"APY"),children:(0,L.jsx)(pe,(0,a.Z)((0,a.Z)({},n.apr),{},{hideButton:v}))})})},e);default:return(0,L.jsx)("td",{children:(0,L.jsx)(st,{children:(0,L.jsx)(He,{label:x(Z[i].translationId,Z[i].label),children:d.createElement(at[e],(0,a.Z)((0,a.Z)({},n[e]),{},{userDataReady:t}))})})},e)}}))}),u&&(0,L.jsx)("tr",{children:(0,L.jsx)("td",{colSpan:6,children:(0,L.jsx)(Ve,(0,a.Z)((0,a.Z)({},n),{},{expanded:o}))})})]})},xt=m.ZP.div(_e||(_e=(0,l.Z)(["\n  filter: ",";\n  width: 100%;\n  background: ",";\n  border-radius: 16px;\n  margin: 16px 0px;\n"])),(function(n){return n.theme.card.dropShadow}),(function(n){return n.theme.card.background})),pt=m.ZP.div($e||($e=(0,l.Z)(["\n  overflow: visible;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),ht=m.ZP.table(Ye||(Ye=(0,l.Z)(["\n  border-collapse: collapse;\n  font-size: 14px;\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n"]))),mt=m.ZP.tbody(nt||(nt=(0,l.Z)(["\n  & tr {\n    td {\n      font-size: 16px;\n      vertical-align: middle;\n    }\n  }\n"]))),ft=m.ZP.div(et||(et=(0,l.Z)(["\n  position: relative;\n"]))),jt=m.ZP.div(tt||(tt=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),gt=function(n){var e=(0,d.useRef)(null),t=(0,y.Z)(),i=n.data,r=n.columns,s=n.userDataReady,l=(0,h.x6)(r,i,{sortable:!0,sortColumn:"farm"}).rows;return(0,L.jsx)(xt,{children:(0,L.jsxs)(ft,{children:[(0,L.jsx)(pt,{ref:e,children:(0,L.jsx)(ht,{children:(0,L.jsx)(mt,{children:l.map((function(n){return(0,d.createElement)(ut,(0,a.Z)((0,a.Z)({},n.original),{},{userDataReady:s,key:"table-row-".concat(n.id)}))}))})})}),(0,L.jsx)(jt,{children:(0,L.jsxs)(h.zx,{variant:"text",onClick:function(){e.current.scrollIntoView({behavior:"smooth"})},children:[t(999,"To Top"),(0,L.jsx)(h.g8,{color:"primary"})]})})]})})},vt=t(28303),Zt=function(n){var e,t=n.hasStakeInFinishedFarms,i=n.hasStakeInArchivedFarms,r=(0,o.$B)().url,a=(0,o.TH)(),s=(0,y.Z)();switch(a.pathname){case"/farms":default:e=0;break;case"/farms/history":e=1;break;case"/farms/archived":e=2}return(0,L.jsx)(bt,{children:(0,L.jsxs)(h.xz,{activeIndex:e,scale:"sm",variant:"subtle",children:[(0,L.jsx)(h.kg,{as:vt.rU,to:"".concat(r),children:s(1198,"Live")}),(0,L.jsx)(h.Bw,{show:t,children:(0,L.jsx)(h.kg,{as:vt.rU,to:"".concat(r,"/history"),children:s(388,"Finished")})}),(0,L.jsx)(h.Bw,{show:i,children:(0,L.jsx)(h.kg,{as:vt.rU,to:"".concat(r,"/archived"),children:s(999,"Discontinued")})})]})})},bt=m.ZP.div(it||(it=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  "," {\n    margin-left: 16px;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),yt=t(77431),kt=m.ZP.div(rt||(rt=(0,l.Z)(["\n  margin-left: -8px;\n\n  "," {\n    margin-left: 0;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),wt=function(n){var e=n.viewMode,t=n.onToggle,i=function(n){e!==n&&t(n)};return(0,L.jsxs)(kt,{children:[(0,L.jsx)(h.hU,{variant:"text",scale:"sm",onClick:function(){return i(Zn.CARD)},children:(0,L.jsx)(h.UC,{color:e===Zn.CARD?"primary":"textDisabled"})}),(0,L.jsx)(h.hU,{variant:"text",scale:"sm",onClick:function(){return i(Zn.TABLE)},children:(0,L.jsx)(h.Gz,{color:e===Zn.TABLE?"primary":"textDisabled"})})]})};function Pt(){return(0,L.jsxs)(h.ny,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 220 190",children:[(0,L.jsx)("defs",{children:(0,L.jsx)("style",{children:".cls-1{fill:#e31337;}"})}),(0,L.jsx)("title",{children:"hive-hive-logo"}),(0,L.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:(0,L.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[(0,L.jsx)("path",{className:"cls-1",d:"M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z"}),(0,L.jsx)("path",{className:"cls-1",d:"M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z"})]})})]})}var Ct,St,At,Tt,Lt,Bt,Dt=function(){return(0,L.jsx)("style",{children:".columns-cad {\n            display: flex;\n           }\n           @media screen and (max-width: 600px) {\n            .columns-cad {\n                flex-direction: column;\n            }\n           }\n           \n           .column-cad {\n            flex-grow: 1;\n           }\n           \n           .button-cad {width: 100%; }\n          "})},It=m.ZP.div(Ct||(Ct=(0,l.Z)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 32px;\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),qt=m.ZP.div(St||(St=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),h.xv),Ft=m.ZP.div(At||(At=(0,l.Z)(["\n  > "," {\n    font-size: 12px;\n  }\n"])),h.xv),Et=m.ZP.div(Tt||(Tt=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n\n  "," {\n    width: auto;\n    padding: 0;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),Rt=m.ZP.div(Lt||(Lt=(0,l.Z)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  "," {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),Ut=(m.ZP.div(Bt||(Bt=(0,l.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]))),function(n){var e=n.tokenMode,t=n.kingdomMode,i=(0,o.$B)().path,r=(0,o.TH)().pathname,l=(0,y.Z)(),u=(0,g.E2)(),m=u.data,B=u.userDataLoaded,D=(0,g.Iu)(),I=(0,d.useState)(""),q=(0,s.Z)(I,2),F=q[0],E=q[1],R=b(Zn.TABLE,"pancake_farm_view"),U=(0,s.Z)(R,2),N=U[0],z=U[1],O=(0,p.Ge)().account,K=(0,d.useState)("hot"),M=(0,s.Z)(K,2),X=M[0],V=M[1],G=(0,c.T)(),Q=(0,v.Z)().fastRefresh;(0,d.useEffect)((function(){O&&G((0,Z.IV)(O))}),[O,G,Q]);var H=r.includes("archived"),W=r.includes("history"),J=!W&&!H,_=!O||!!O&&B,$=(0,d.useState)(!J),Y=(0,s.Z)($,2),nn=Y[0],en=Y[1];(0,d.useEffect)((function(){en(!J)}),[J]),(0,d.useEffect)((function(){G((0,A.I2)(H)),H&&(G((0,A.eG)()),O&&G((0,Z.IV)(O)))}),[H,G,O]);var tn=m.filter((function(n){return t?!!n.isKingdom===!!t&&"0X"!==n.multiplier&&!(0,C.Z)(n.pid):!!n.isTokenOnly===!!e&&!!n.isKingdom===!!t&&"0X"!==n.multiplier&&!(0,C.Z)(n.pid)})),rn=m.filter((function(n){return t?!!n.isKingdom===!!t&&"0X"===n.multiplier&&!(0,C.Z)(n.pid):!!n.isTokenOnly===!!e&&!!n.isKingdom===!!t&&"0X"===n.multiplier&&!(0,C.Z)(n.pid)})),an=m.filter((function(n){return(0,C.Z)(n.pid)})),sn=tn.filter((function(n){return n.userData&&new(x())(n.userData.stakedBalance).isGreaterThan(0)})),ln=rn.filter((function(n){return n.userData&&new(x())(n.userData.stakedBalance).isGreaterThan(0)})),dn=an.filter((function(n){return n.userData&&new(x())(n.userData.stakedBalance).isGreaterThan(0)})),on=(0,d.useCallback)((function(n){var e=n.map((function(n){if(!n.lpTotalInQuoteToken)return n;var e=n.quoteToken.busdPrice,t=new(x())(n.lpTotalInQuoteToken).times(e),i=J?(0,w.yW)(n.poolWeight,D,t):0;return(0,a.Z)((0,a.Z)({},n),{},{apr:i,liquidity:t})}));if(F){var t=F.toLowerCase();e=e.filter((function(n){return n.lpSymbol.toLowerCase().includes(t)}))}return e}),[D,F,J]),cn=(0,d.useRef)(null),un=(0,d.useState)(12),xn=(0,s.Z)(un,2),pn=xn[0],hn=xn[1],mn=(0,d.useState)(!1),fn=(0,s.Z)(mn,2),jn=fn[0],gn=fn[1],vn=(0,d.useMemo)((function(){var n=[];return J&&(n=on(nn?sn:tn)),W&&(n=on(nn?ln:rn)),H&&(n=on(nn?dn:an)),function(n){switch(X){case"apr":return(0,P.orderBy)(n,(function(n){return n.apr}),"desc");case"multiplier":return(0,P.orderBy)(n,(function(n){return n.multiplier?Number(n.multiplier.slice(0,-1)):0}),"desc");case"earned":return(0,P.orderBy)(n,(function(n){return n.userData?n.userData.earnings:0}),"desc");case"liquidity":return(0,P.orderBy)(n,(function(n){return Number(n.liquidity)}),"desc");default:return n}}(n).slice(0,pn)}),[X,tn,on,rn,an,J,W,H,dn,ln,nn,sn,pn]);(0,d.useEffect)((function(){jn||(new IntersectionObserver((function(n){(0,s.Z)(n,1)[0].isIntersecting&&hn((function(n){return n+12}))}),{rootMargin:"0px",threshold:1}).observe(cn.current),gn(!0))}),[vn,jn]);var bn=vn.map((function(n){var e=n.token,t=n.quoteToken,i=e.address,r=t.address,a=n.lpSymbol&&n.lpSymbol.split(" ")[0].toUpperCase().replace("PANCAKE",""),s=(0,ie.R)({numberOfDays:365,farmApr:n.apr,tokenPrice:e.busdPrice,roundingDecimals:2,compoundFrequency:1});return{apr:{value:(0,ie.L)({amountEarned:s,amountInvested:1e3/parseFloat(e.busdPrice)}).toFixed(2),multiplier:n.multiplier,lpLabel:a,tokenAddress:i,quoteTokenAddress:r,cakePrice:D,originalValue:n.apr},farm:{image:n.lpSymbol.split(" ")[0].toLocaleLowerCase(),label:a,pid:n.pid},earned:{earnings:(0,k.mW)(new(x())(n.userData.earnings)),pid:n.pid},liquidity:{liquidity:n.liquidity},multiplier:{multiplier:n.multiplier},details:n}})),yn=l(674,"Farms"),kn=l(320,"Stake LP tokens to earn CUB");l(1e4,"Deposit Fee will be used to buyback CUB and bLEO");e&&(yn=l(674,"Dens"),kn=l(10002,"Stake tokens to earn CUB"));return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(S.Z,{children:(0,L.jsxs)("div",{className:"columns-cad",children:[(0,L.jsxs)("div",{className:"column-cad",children:[(0,L.jsx)(h.X6,{as:"h1",size:"xxl",color:"secondary",mb:"15px",children:yn}),(0,L.jsx)(h.X6,{as:"h1",size:"lg",color:"primary",mb:"20px",style:{textAlign:"left"},children:kn}),(0,L.jsx)("br",{})]}),(0,L.jsxs)("div",{className:"column-cad",style:{height:"100%",display:"flex",flexDirection:"row",flexGrow:1},children:[(0,L.jsx)(Dt,{}),(0,L.jsxs)(h.Zb,{style:{height:"100%",flexGrow:1,maxWidth:"400px",marginLeft:"auto",padding:"10px 20px"},children:[(0,L.jsxs)(h.X6,{children:[(0,L.jsx)(Pt,{})," Multi-Token Bridge"]}),(0,L.jsx)("hr",{}),(0,L.jsx)("p",{style:{marginBottom:"10px"},children:"MTB Assets (HIVE and HBD) Can Be Wrapped and Utilized to Provide Liquidity and Earn High Yields. MTB Assets Generate Revenue Which Buys and Burns CUB Each Day"}),(0,L.jsx)(h.zx,{className:"button-cad",children:(0,L.jsx)("a",{href:"https://docs.cubdefi.com/mechanics/multi-token-bridge",children:"How it Works"})})]})]})]})}),(0,L.jsxs)(j.Z,{children:[(0,L.jsxs)(It,{children:[(0,L.jsxs)(Rt,{children:[(0,L.jsx)(wt,{viewMode:N,onToggle:function(n){return z(n)}}),(0,L.jsxs)(qt,{children:[(0,L.jsx)(h.ZD,{checked:nn,onChange:function(){return en(!nn)},scale:"sm"}),(0,L.jsxs)(h.xv,{children:[" ",l(1116,"Staked only")]})]}),(0,L.jsx)(Zt,{hasStakeInFinishedFarms:ln.length>0,hasStakeInArchivedFarms:dn.length>0})]}),(0,L.jsxs)(Et,{children:[(0,L.jsxs)(Ft,{children:[(0,L.jsx)(h.xv,{children:"SORT BY"}),(0,L.jsx)(T.Z,{options:[{label:"Hot",value:"hot"},{label:"APR",value:"apr"},{label:"Multiplier",value:"multiplier"},{label:"Earned",value:"earned"},{label:"Liquidity",value:"liquidity"}],onChange:function(n){V(n.value)}})]}),(0,L.jsxs)(Ft,{style:{marginLeft:16},children:[(0,L.jsx)(h.xv,{children:"SEARCH"}),(0,L.jsx)(yt.Z,{onChange:function(n){E(n.target.value)}})]})]})]}),function(){if(N===Zn.TABLE&&bn.length){var n=Je.map((function(n){return{id:n.id,name:n.name,label:n.label,sort:function(e,t){switch(n.name){case"farm":return t.id-e.id;case"apr":return e.original.apr.value&&t.original.apr.value?Number(e.original.apr.value)-Number(t.original.apr.value):0;case"earned":return e.original.earned.earnings-t.original.earned.earnings;default:return 1}},sortable:n.sortable}}));return(0,L.jsx)(gt,{data:bn,columns:n,userDataReady:_})}return(0,L.jsx)("div",{children:(0,L.jsxs)(f,{children:[(0,L.jsx)(o.AW,{exact:!0,path:"".concat(i),children:vn.map((function(n){return(0,L.jsx)(oe,{farm:n,cakePrice:D,account:O,removed:!1},n.pid)}))}),(0,L.jsx)(o.AW,{exact:!0,path:"".concat(i,"/history"),children:vn.map((function(n){return(0,L.jsx)(oe,{farm:n,cakePrice:D,account:O,removed:!0},n.pid)}))}),(0,L.jsx)(o.AW,{exact:!0,path:"".concat(i,"/archived"),children:vn.map((function(n){return(0,L.jsx)(oe,{farm:n,cakePrice:D,account:O,removed:!0},n.pid)}))})]})})}(),(0,L.jsx)("div",{ref:cn}),(0,L.jsx)(h.Ee,{src:"/images/cub/wide.svg",alt:"illustration",width:1352,height:587,responsive:!0})]})]})})}}]);