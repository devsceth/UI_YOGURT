(this["webpackJsonpcubdefi-frontend"]=this["webpackJsonpcubdefi-frontend"]||[]).push([[2],{850:function(n,e,t){"use strict";t.d(e,"d",(function(){return i})),t.d(e,"c",(function(){return o})),t.d(e,"b",(function(){return u})),t.d(e,"f",(function(){return s})),t.d(e,"g",(function(){return d})),t.d(e,"e",(function(){return b})),t.d(e,"a",(function(){return f})),t.d(e,"h",(function(){return j}));var r=t(0),c=t(851),a=t(69),i=function(n){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.j)(n,e)}),[n,e])},o=function(n){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.a)(n,e)}),[n,e])},u=function(){var n=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.e)(n)}),[n])},s=function(){var n=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.n)(n)}),[n])},d=function(){var n=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.p)(n)}),[n])},b=function(){var n=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.m)(n)}),[n])},f=function(){var n=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.b)(n)}),[n])},j=function(n){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(a.u)(n,e)}),[n,e])}},852:function(n,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"j",(function(){return f})),t.d(e,"e",(function(){return j})),t.d(e,"f",(function(){return l})),t.d(e,"k",(function(){return p})),t.d(e,"g",(function(){return h})),t.d(e,"d",(function(){return O})),t.d(e,"c",(function(){return m})),t.d(e,"b",(function(){return x})),t.d(e,"h",(function(){return v})),t.d(e,"i",(function(){return w}));var r=t(1),c=t.n(r),a=t(6),i=t(4),o=t.n(i),u=t(46),s=t(873),d=t(27),b=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.approve(t.options.address,s.a.constants.MaxUint256).send({from:r}));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),f=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r,a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.deposit(t,new o.a(r).times(u.i).toString()).send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r,c){return n.apply(this,arguments)}}(),j=function(){var n=Object(a.a)(c.a.mark((function n(e,t){var r,a,i=arguments;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:18,a=i.length>3?i[3]:void 0,n.abrupt("return",e.methods.deposit(new o.a(t).times(d.a.pow(r)).toString()).send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.deposit().send({from:r,gas:2e5,value:new o.a(t).times(u.i).toString()}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),p=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r,a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.withdraw(t,new o.a(r).times(u.i).toString()).send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r,c){return n.apply(this,arguments)}}(),h=function(){var n=Object(a.a)(c.a.mark((function n(e,t){var r,a,i=arguments;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=i.length>2&&void 0!==i[2]?i[2]:18,a=i.length>3?i[3]:void 0,"0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"!==e.options.address){n.next=4;break}return n.abrupt("return",e.methods.emergencyWithdraw().send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 4:if("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"!==e.options.address){n.next=6;break}return n.abrupt("return",e.methods.emergencyWithdraw().send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 6:if("0x453a75908fb5a36d482d5f8fe88eca836f32ead5"!==e.options.address){n.next=8;break}return n.abrupt("return",e.methods.emergencyWithdraw().send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 8:return n.abrupt("return",e.methods.withdraw(new o.a(t).times(d.a.pow(r)).toString()).send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),O=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),m=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r,a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a){n.next=2;break}return n.abrupt("return",e.methods.withdraw(t,"0").send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 2:return n.abrupt("return",e.methods.deposit(t,"0").send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 3:case"end":return n.stop()}}),n)})));return function(e,t,r,c){return n.apply(this,arguments)}}(),x=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r,a,i,o){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.claim(r,a,i,o).send({from:t}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r,c,a,i){return n.apply(this,arguments)}}(),v=function(){var n=Object(a.a)(c.a.mark((function n(e,t){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.deposit("0").send({from:t}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),w=function(){var n=Object(a.a)(c.a.mark((function n(e,t){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.deposit().send({from:t,value:d.b}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},865:function(n,e,t){"use strict";t.d(e,"b",(function(){return j})),t.d(e,"a",(function(){return l}));var r=t(41),c=t(1),a=t.n(c),i=t(6),o=t(0),u=t(64),s=t(59),d=t(141),b=t(852),f=t(850),j=function(n,e){var t=Object(s.b)(),r=Object(u.c)().account,c=Object(f.g)(),j=Object(f.e)();return{onReward:Object(o.useCallback)(Object(i.a)(a.a.mark((function i(){var o;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(b.c)(e?j:c,n,r,e);case 2:return o=a.sent,t(Object(d.a)(r)),a.abrupt("return",o);case 5:case"end":return a.stop()}}),i)}))),[r,t,n,c,j,e])}},l=function(n){var e=Object(u.c)().account,t=Object(f.g)(),c=Object(f.e)();return{onReward:Object(o.useCallback)(Object(i.a)(a.a.mark((function i(){var o;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=n.reduce((function(n,a){return a.isKingdom?[].concat(Object(r.a)(n),[Object(b.c)(c,a.pid,e,a.isKingdom)]):[].concat(Object(r.a)(n),[Object(b.c)(t,a.pid,e,a.isKingdom)])}),[]),a.abrupt("return",Promise.all(o));case 2:case"end":return a.stop()}}),i)}))),[e,n,t,c])}}},866:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return o}));var r=t(4),c=t.n(r),a=t(46),i=function(n,e,t,r){var i=new c.a(e).times(r).times(a.f),o=new c.a(n).times(t),u=i.div(o).times(100);return u.isNaN()||!u.isFinite()?null:u.toNumber()},o=function(n,e,t,r,i){if(r){var o=a.j.times(n);"Bakery"===i?o=a.b.times(n):"Belt"===i&&(o=a.e.times(n));var u=o.times(e).div(t).times(100);return u.isNaN()||!u.isFinite()?null:u.toNumber()}var s=a.h.times(a.f).times(n),d=t.toNumber()?t:new c.a(0),b=s.times(e).div(d).times(100);return b.isNaN()||!b.isFinite()?null:b.toNumber()}},867:function(n,e,t){"use strict";var r=t(13);e.a=function(n){var e=n.quoteTokenAddress,t=n.tokenAddress,c=Object(r.v)(),a=e?e[56]:null,i=t?t[56]:null,o=i&&i!==c?i:"BNB";return"".concat(a&&a!==c?a:"BNB","/").concat(o)}},868:function(n,e,t){"use strict";t.d(e,"a",(function(){return j})),t.d(e,"b",(function(){return l}));var r=t(1),c=t.n(r),a=t(6),i=t(0),o=t(64),u=t(873),s=t(59),d=t(141),b=t(852),f=t(850),j=function(n,e){var t=Object(s.b)(),r=Object(o.c)().account,u=Object(f.g)(),j=Object(f.e)();return{onApprove:Object(i.useCallback)(Object(a.a)(c.a.mark((function a(){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(n,e?j:u,r);case 3:return i=c.sent,t(Object(d.a)(r)),c.abrupt("return",i);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[r,t,n,u,j,e])}},l=function(n,e){var t=Object(o.c)().account;return Object(i.useCallback)(Object(a.a)(c.a.mark((function r(){var a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.methods.approve(e,u.a.constants.MaxUint256).send({from:t});case 2:return a=r.sent,r.abrupt("return",a);case 4:case"end":return r.stop()}}),r)}))),[t,e,n])}},874:function(n,e,t){"use strict";var r=t(1),c=t.n(r),a=t(6),i=t(0),o=t(64),u=t(59),s=t(141),d=t(852),b=t(850);e.a=function(n,e){var t=Object(u.b)(),r=Object(o.c)().account,f=Object(b.g)(),j=Object(b.e)();return{onStake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(d.j)(e?j:f,n,i,r);case 2:t(Object(s.a)(r));case 3:case"end":return c.stop()}}),a)})));return function(n){return i.apply(this,arguments)}}(),[r,t,f,n,j,e])}}},883:function(n,e,t){"use strict";var r=t(1),c=t.n(r),a=t(6),i=t(0),o=t(64),u=t(59),s=t(141),d=t(852),b=t(850);e.a=function(n,e){var t=Object(u.b)(),r=Object(o.c)().account,f=Object(b.g)(),j=Object(b.e)();return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(d.k)(e?j:f,n,i,r);case 2:o=c.sent,t(Object(s.a)(r)),console.info(o);case 5:case"end":return c.stop()}}),a)})));return function(n){return i.apply(this,arguments)}}(),[r,t,f,n,j,e])}}},884:function(n,e,t){"use strict";var r=t(1),c=t.n(r),a=t(6),i=t(31),o=t(4),u=t.n(o),s=t(0),d=t(32),b=t(952),f=t(953),j=t(849),l=t(232),p=t(12);e.a=function(n){var e=n.max,t=n.onConfirm,r=n.onDismiss,o=n.tokenName,h=void 0===o?"":o,O=n.addLiquidityUrl,m=n.isTokenOnly,x=n.isKingdomToken,v=Object(s.useState)(""),w=Object(i.a)(v,2),g=w[0],k=w[1],y=Object(s.useState)(!1),C=Object(i.a)(y,2),S=C[0],H=C[1],F=Object(j.a)(),D=Object(s.useMemo)((function(){return Object(l.c)(e)}),[e]),z=new u.a(g),M=new u.a(D),B=Object(s.useCallback)((function(n){n.currentTarget.validity.valid&&k(n.currentTarget.value.replace(/,/g,"."))}),[k]),N=Object(s.useCallback)((function(){k(D)}),[D,k]);return Object(p.jsxs)(d.F,{title:F(1068,m||x?"Stake tokens":"Stake LP tokens"),onDismiss:r,children:[Object(p.jsx)(f.a,{value:g,onSelectMax:N,onChange:B,max:D,symbol:h,addLiquidityUrl:O,inputTitle:F(1070,"Stake")}),Object(p.jsxs)(b.a,{children:[Object(p.jsx)(d.h,{variant:"secondary",onClick:r,width:"100%",disabled:S,children:F(462,"Cancel")}),Object(p.jsx)(d.h,{width:"100%",disabled:S||!z.isFinite()||z.eq(0)||z.gt(M),onClick:Object(a.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return H(!0),n.next=3,t(g);case 3:H(!1),r();case 5:case"end":return n.stop()}}),n)}))),children:S?F(488,"Pending Confirmation"):F(464,"Confirm")})]}),Object(p.jsxs)(d.A,{href:O,style:{alignSelf:"center"},children:[F(999,"Get")," ",h]})]})}},885:function(n,e,t){"use strict";var r=t(1),c=t.n(r),a=t(6),i=t(31),o=t(4),u=t.n(o),s=t(0),d=t(32),b=t(952),f=t(953),j=t(849),l=t(232),p=t(12);e.a=function(n){var e=n.onConfirm,t=n.onDismiss,r=n.max,o=n.tokenName,h=void 0===o?"":o,O=n.isTokenOnly,m=n.isKingdomToken,x=Object(s.useState)(""),v=Object(i.a)(x,2),w=v[0],g=v[1],k=Object(s.useState)(!1),y=Object(i.a)(k,2),C=y[0],S=y[1],H=Object(j.a)(),F=Object(s.useMemo)((function(){return Object(l.c)(r)}),[r]),D=new u.a(w),z=new u.a(F),M=Object(s.useCallback)((function(n){n.currentTarget.validity.valid&&g(n.currentTarget.value.replace(/,/g,"."))}),[g]),B=Object(s.useCallback)((function(){g(F)}),[F,g]);return Object(p.jsxs)(d.F,{title:H(1126,O||m?"Unstake tokens":"Unstake LP tokens"),onDismiss:t,children:[Object(p.jsx)(f.a,{onSelectMax:B,onChange:M,value:w,max:F,symbol:h,inputTitle:H(588,"Unstake")}),Object(p.jsxs)(b.a,{children:[Object(p.jsx)(d.h,{variant:"secondary",onClick:t,width:"100%",disabled:C,children:H(462,"Cancel")}),Object(p.jsx)(d.h,{disabled:C||!D.isFinite()||D.eq(0)||D.gt(z),onClick:Object(a.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return S(!0),n.next=3,e(w);case 3:S(!1),t();case 5:case"end":return n.stop()}}),n)}))),width:"100%",children:C?H(488,"Pending Confirmation"):H(464,"Confirm")})]})]})}},905:function(n,e,t){"use strict";var r,c,a,i=t(31),o=(t(0),t(32)),u=t(49),s=t(3),d=t(849),b=function(n){var e=n.numberOfDays,t=n.farmApr,r=n.tokenPrice,c=n.roundingDecimals,a=void 0===c?2:c,i=n.compoundFrequency,o=365*(void 0===i?1:i),u=t/100,s=e/365,d=1e3/r,b=d*Math.pow(1+u/o,o*s);return parseFloat((b-d).toFixed(a))},f=function(n){return n.amountEarned/n.amountInvested*100},j=t(12),l=s.e.div(r||(r=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),p=s.e.div(c||(c=Object(u.a)(["\n  margin-bottom: '10px';\n"]))),h=Object(s.e)(o.O)(a||(a=Object(u.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),O=function(n){var e=n.onDismiss,t=n.tokenPrice,r=n.apr,c=n.linkLabel,a=n.linkHref,i=n.earningTokenSymbol,u=void 0===i?"CUB":i,s=n.roundingDecimals,O=void 0===s?2:s,m=n.compoundFrequency,x=void 0===m?1:m,v=Object(d.a)(),w=1e3/t,g=b({numberOfDays:1,farmApr:r,tokenPrice:t,roundingDecimals:O,compoundFrequency:x}),k=b({numberOfDays:7,farmApr:r,tokenPrice:t,roundingDecimals:O,compoundFrequency:x}),y=b({numberOfDays:30,farmApr:r,tokenPrice:t,roundingDecimals:O,compoundFrequency:x}),C=b({numberOfDays:365,farmApr:r,tokenPrice:t,roundingDecimals:O,compoundFrequency:x});return Object(j.jsxs)(o.F,{title:"ROI",onDismiss:e,children:[Object(j.jsxs)(l,{children:[Object(j.jsx)(p,{children:Object(j.jsx)(o.O,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:v(860,"Timeframe")})}),Object(j.jsx)(p,{children:Object(j.jsx)(o.O,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:v(858,"ROI")})}),Object(j.jsx)(p,{children:Object(j.jsxs)(o.O,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:[u," ",v(999,"per")," $1000"]})}),Object(j.jsx)(p,{children:Object(j.jsx)(o.O,{children:"1d"})}),Object(j.jsx)(p,{children:Object(j.jsxs)(o.O,{children:[f({amountEarned:g,amountInvested:w}).toFixed(O),"%"]})}),Object(j.jsx)(p,{children:Object(j.jsx)(o.O,{children:g})}),Object(j.jsx)(p,{children:Object(j.jsx)(o.O,{children:"7d"})}),Object(j.jsx)(p,{children:Object(j.jsxs)(o.O,{children:[f({amountEarned:k,amountInvested:w}).toFixed(O),"%"]})}),Object(j.jsx)(p,{children:Object(j.jsx)(o.O,{children:k})}),Object(j.jsx)(p,{children:Object(j.jsx)(o.O,{children:"30d"})}),Object(j.jsx)(p,{children:Object(j.jsxs)(o.O,{children:[f({amountEarned:y,amountInvested:w}).toFixed(O),"%"]})}),Object(j.jsx)(p,{children:Object(j.jsx)(o.O,{children:y})}),Object(j.jsx)(p,{children:Object(j.jsx)(o.O,{children:"365d(APY)"})}),Object(j.jsx)(p,{children:Object(j.jsxs)(o.O,{children:[f({amountEarned:C,amountInvested:w}).toFixed(O),"%"]})}),Object(j.jsx)(p,{children:Object(j.jsx)(o.O,{children:C})})]}),Object(j.jsx)(h,{fontSize:"12px",color:"textSubtle",children:v(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(j.jsx)(o.t,{justifyContent:"center",children:Object(j.jsx)(o.A,{href:a,children:c})})]})};e.a=function(n){var e=n.lpLabel,t=n.cakePrice,r=n.apr,c=n.addLiquidityUrl,a=Object(d.a)(),u=Object(o.W)(Object(j.jsx)(O,{linkLabel:"".concat(a(999,"Get")," ").concat(e),tokenPrice:t.toNumber(),apr:r,linkHref:c})),s=Object(i.a)(u,1)[0];return Object(j.jsx)(o.w,{onClick:function(n){n.stopPropagation(),s()},variant:"text",scale:"sm",ml:"4px",children:Object(j.jsx)(o.k,{width:"18px"})})}},911:function(n,e,t){"use strict";var r,c,a,i,o,u,s=t(5),d=t(31),b=t(49),f=t(0),j=t(3),l=t(32),p=t(12),h=j.e.div(r||(r=Object(b.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n  box-shadow: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  background: ",";\n  transition: border-radius 0.15s;\n"])),(function(n){return n.theme.shadows.inset}),(function(n){return n.theme.colors.inputSecondary}),(function(n){return n.theme.colors.input})),O=j.e.div(c||(c=Object(b.a)(["\n  min-width: 136px;\n  height: 0;\n  position: absolute;\n  overflow: hidden;\n  background: ",";\n  z-index: ",";\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  opacity: 0;\n\n  "," {\n    min-width: 168px;\n  }\n"])),(function(n){return n.theme.colors.input}),(function(n){return n.theme.zIndices.dropdown}),(function(n){return n.theme.mediaQueries.sm})),m=j.e.div(a||(a=Object(b.a)(["\n  cursor: pointer;\n  width: ","px;\n  position: relative;\n  background: ",";\n  border-radius: 16px;\n  height: 40px;\n  min-width: 136px;\n\n  "," {\n    min-width: 168px;\n  }\n\n  ","\n\n  svg {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"])),(function(n){return n.width}),(function(n){return n.theme.colors.input}),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.isOpen&&Object(j.d)(i||(i=Object(b.a)(["\n      "," {\n        border-bottom: 1px solid ",";\n        box-shadow: ",";\n        border-radius: 16px 16px 0 0;\n      }\n\n      "," {\n        height: auto;\n        transform: scaleY(1);\n        opacity: 1;\n        border: 1px solid ",";\n        border-top-width: 0;\n        border-radius: 0 0 16px 16px;\n        box-shadow: ",";\n      }\n    "])),h,(function(n){return n.theme.colors.inputSecondary}),(function(n){return n.theme.tooltip.boxShadow}),O,(function(n){return n.theme.colors.inputSecondary}),(function(n){return n.theme.tooltip.boxShadow}))})),x=j.e.ul(o||(o=Object(b.a)(["\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  z-index: ",";\n"])),(function(n){return n.theme.zIndices.dropdown})),v=j.e.li(u||(u=Object(b.a)(["\n  list-style: none;\n  padding: 8px 16px;\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.colors.inputSecondary}));e.a=function(n){var e=n.options,t=n.onChange,r=Object(f.useRef)(null),c=Object(f.useRef)(null),a=Object(f.useState)(!1),i=Object(d.a)(a,2),o=i[0],u=i[1],b=Object(f.useState)(e[0]),j=Object(d.a)(b,2),w=j[0],g=j[1],k=Object(f.useState)({width:0,height:0}),y=Object(d.a)(k,2),C=y[0],S=y[1],H=function(){return u(!o)},F=function(n){return function(){g(n),u(!1),t&&t(n)}};return Object(f.useEffect)((function(){S({width:c.current.offsetWidth,height:c.current.offsetHeight})}),[]),Object(p.jsxs)(m,Object(s.a)(Object(s.a)({isOpen:o,ref:r},C),{},{children:[0!==C.width&&Object(p.jsx)(h,{onClick:H,children:Object(p.jsx)(l.O,{children:w.label})}),Object(p.jsx)(l.b,{color:"text",onClick:H}),Object(p.jsx)(O,{children:Object(p.jsx)(x,{ref:c,children:e.map((function(n){return n.label!==w.label?Object(p.jsx)(v,{onClick:F(n),children:Object(p.jsx)(l.O,{children:n.label})},n.label):null}))})})]}))}},912:function(n,e,t){"use strict";var r,c,a,i=t(31),o=t(49),u=t(0),s=t(32),d=t(3),b=t(189),f=t.n(b),j=t(12),l=Object(d.e)(s.y)(r||(r=Object(o.a)(["\n  border-radius: 16px;\n  margin-left: auto;\n"]))),p=d.e.div(c||(c=Object(o.a)(["\n  position: relative;\n  "," {\n    width: 234px;\n    display: block;\n  }\n"])),(function(n){return n.theme.mediaQueries.sm})),h=d.e.div(a||(a=Object(o.a)([""])));e.a=function(n){var e=n.onChange,t=Object(u.useState)(!1),r=Object(i.a)(t,2),c=r[0],a=r[1],o=Object(u.useState)(""),s=Object(i.a)(o,2),d=s[0],b=s[1],O=Object(u.useMemo)((function(){return f()((function(n){return e(n)}),500)}),[e]);return Object(j.jsx)(h,{toggled:c,children:Object(j.jsx)(p,{children:Object(j.jsx)(l,{value:d,onChange:function(n){b(n.target.value),O(n)},placeholder:"Search",onBlur:function(){return a(!1)}})})})}},952:function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var r,c,a,i=t(49),o=t(0),u=t.n(o),s=t(3),d=t(12),b=s.e.div(r||(r=Object(i.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(n){return n.size}),(function(n){return n.size})),f=function(n){var e,t=n.size,r=void 0===t?"md":t,c=Object(o.useContext)(s.a).spacing;switch(r){case"lg":e=c[6];break;case"sm":e=c[2];break;case"md":default:e=c[4]}return Object(d.jsx)(b,{size:e})},j=s.e.div(c||(c=Object(i.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px 0;\n"])),(function(n){return n.theme.colors.primaryDark}),(function(n){return n.theme.spacing[4]})),l=s.e.div(a||(a=Object(i.a)(["\n  flex: 1;\n"]))),p=function(n){var e=n.children,t=u.a.Children.toArray(e).length;return Object(d.jsx)(j,{children:u.a.Children.map(e,(function(n,e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{children:n}),e<t-1&&Object(d.jsx)(f,{})]})}))})}},953:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var r,c,a,i=t(49),o=(t(0),t(3)),u=t(32),s=t(849),d=t(12),b=o.e.div(r||(r=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])),(function(n){return n.theme.colors.input}),(function(n){var e=n.isWarning,t=void 0!==e&&e,r=n.theme;return t?r.shadows.warning:r.shadows.inset}),(function(n){return n.theme.colors.text})),f=Object(o.e)(u.y)(c||(c=Object(i.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n\n  "," {\n    width: 80px;\n  }\n\n  "," {\n    width: auto;\n  }\n"])),(function(n){return n.theme.mediaQueries.xs}),(function(n){return n.theme.mediaQueries.sm})),j=Object(o.e)(u.O)(a||(a=Object(i.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),l=function(n){var e=n.max,t=n.symbol,r=n.onChange,c=n.onSelectMax,a=n.value,i=n.addLiquidityUrl,o=n.inputTitle,l=Object(s.a)(),p="0"===e||!e;return Object(d.jsxs)("div",{style:{position:"relative"},children:[Object(d.jsxs)(b,{isWarning:p,children:[Object(d.jsxs)(u.t,{justifyContent:"space-between",pl:"16px",children:[Object(d.jsx)(u.O,{fontSize:"14px",children:o}),Object(d.jsxs)(u.O,{fontSize:"14px",children:[l(1120,"Balance"),": ",function(n){if(p)return"0";var e=Number(n);return e>0&&e<1e-4?e.toLocaleString(void 0,{maximumFractionDigits:20}):e.toLocaleString()}(e)]})]}),Object(d.jsxs)(u.t,{alignItems:"flex-end",justifyContent:"space-around",children:[Object(d.jsx)(f,{pattern:"^[0-9]*[.,]?[0-9]*$",inputMode:"decimal",step:"any",min:"0",onChange:r,placeholder:"0",value:a}),Object(d.jsx)(u.h,{scale:"sm",onClick:c,mr:"8px",children:l(452,"Max")}),Object(d.jsx)(u.O,{fontSize:"16px",children:t})]})]}),p&&Object(d.jsxs)(j,{fontSize:"14px",color:"failure",children:["No tokens to stake:"," ",Object(d.jsxs)(u.z,{fontSize:"14px",bold:!1,href:i,external:!0,color:"failure",children:[l(999,"get")," ",t]})]})]})}}}]);
//# sourceMappingURL=2.aecc9a3b.chunk.js.map