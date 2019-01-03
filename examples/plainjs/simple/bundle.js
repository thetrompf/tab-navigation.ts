(function () {
	'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	var l="function"===typeof Symbol&&Symbol.for,p=l?Symbol.for("react.element"):60103,q=l?Symbol.for("react.portal"):60106,r=l?Symbol.for("react.fragment"):60107,t=l?Symbol.for("react.strict_mode"):60108,u=l?Symbol.for("react.profiler"):60114,v=l?Symbol.for("react.provider"):60109,w=l?Symbol.for("react.context"):60110,x=l?Symbol.for("react.concurrent_mode"):60111,y=l?Symbol.for("react.forward_ref"):60112,z=l?Symbol.for("react.suspense"):60113,A=l?Symbol.for("react.memo"):
	60115,aa=l?Symbol.for("react.lazy"):60116,B="function"===typeof Symbol&&Symbol.iterator;function ba(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var m=[d,c,e,g,h,f],n=0;a=Error(b.replace(/%s/g,function(){return m[n++]}));a.name="Invariant Violation";}a.framesToPop=1;throw a;}}
	function C(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d);}var D={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};
	function F(a,b,d){this.props=a;this.context=b;this.refs=E;this.updater=d||D;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?C("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function G(){}G.prototype=F.prototype;function H(a,b,d){this.props=a;this.context=b;this.refs=E;this.updater=d||D;}var I=H.prototype=new G;
	I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null,currentDispatcher:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var m=Array(f),n=0;n<f;n++)m[n]=arguments[n+2];e.children=m;}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return {$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
	function ca(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return {result:a,keyPrefix:b,func:d,context:c,count:0}}
	function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a);}
	function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c);}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
	0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,C("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function da(a,b){a.func.call(a.context,b,a.count++);}
	function ea(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=ca(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a));}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,ea,b);R(b);}function W(){var a=J.currentDispatcher;null===a?C("298"):void 0;return a}
	var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,da,b);R(b);},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:C("143");return a}},createRef:function(){return {current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
	_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return {$$typeof:y,render:a}},lazy:function(a){return {$$typeof:aa,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return {$$typeof:A,type:a,compare:void 0===b?null:b}},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?C("267",a):void 0;var c=void 0,e=objectAssign({},a.props),g=a.key,h=a.ref,f=a._owner;
	if(null!=b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var m=void 0;a.type&&a.type.defaultProps&&(m=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==m?m[c]:b[c]);}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){m=Array(c);for(var n=0;n<c;n++)m[n]=arguments[n+2];e.children=m;}return {$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.7.0-alpha.2",
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,assign:objectAssign}};X.ConcurrentMode=x;X.Profiler=u;X.useCallback=function(a,b){return W().useCallback(a,b)};X.useContext=function(a,b){return W().useContext(a,b)};X.useEffect=function(a,b){return W().useEffect(a,b)};X.useImperativeMethods=function(a,b,d){return W().useImperativeMethods(a,b,d)};X.useLayoutEffect=function(a,b){return W().useLayoutEffect(a,b)};X.useMemo=function(a,b){return W().useMemo(a,b)};
	X.useMutationEffect=function(a,b){return W().useMutationEffect(a,b)};X.useReducer=function(a,b,d){return W().useReducer(a,b,d)};X.useRef=function(a){return W().useRef(a)};X.useState=function(a){return W().useState(a)};var Y={default:X},Z=Y&&X||Y;var react_production_min=Z.default||Z;

	var react = createCommonjsModule(function (module) {

	{
	  module.exports = react_production_min;
	}
	});
	var react_1 = react.Component;
	var react_2 = react.createContext;
	var react_3 = react.createElement;
	var react_4 = react.createRef;
	var react_5 = react.Fragment;
	var react_6 = react.forwardRef;

	var scheduler_production_min = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});var d=null,f=!1,h=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a);}}
	function u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c;}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var e=h,Q=l;h=a;l=b;try{var g=c();}finally{h=e,l=Q;}if("function"===typeof g)if(g={callback:g,priorityLevel:a,expirationTime:b,next:null,previous:null},null===d)d=g.next=g.previous=g;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next;}while(a!==d);null===c?c=d:c===d&&(d=g,p());b=c.previous;b.next=c.previous=g;g.next=c;g.previous=
	b;}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1,null!==d?p():n=!1;}}}function t(a){m=!0;var b=f;f=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1,f=b,null!==d?p():n=!1,v();}}
	var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b);});D=y(function(){B(C);a(exports.unstable_now());},100);}
	if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()};}else exports.unstable_now=function(){return x.now()};var r,q,w;
	if("undefined"!==typeof window&&window._schedMock){var G=window._schedMock;r=G[0];q=G[1];w=G[2];}else if("undefined"===typeof window||"function"!==typeof window.addEventListener){var H=null,I=-1,J=function(a,b){if(null!==H){var c=H;H=null;try{I=b,c(a);}finally{I=-1;}}};r=function(a,b){-1!==I?setTimeout(r,0,a,b):(H=a,setTimeout(J,b,!0,b),setTimeout(J,1073741823,!1,1073741823));};q=function(){H=null;};w=function(){return !1};exports.unstable_now=function(){return -1===I?0:I};}else{"undefined"!==typeof console&&
	("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T="__reactIdleCallback$"+Math.random().toString(36).slice(2);
	window.addEventListener("message",function(a){if(a.source===window&&a.data===T){L=!1;a=K;var b=M;K=null;M=-1;var c=exports.unstable_now(),e=!1;if(0>=P-c)if(-1!==b&&b<=c)e=!0;else{N||(N=!0,E(U));K=a;M=b;return}if(null!==a){O=!0;try{a(e);}finally{O=!1;}}}},!1);var U=function(a){if(null!==K){E(U);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,window.postMessage(T,"*"));}else N=!1;};r=function(a,b){K=a;M=b;O||0>b?window.postMessage(T,"*"):N||(N=!0,E(U));};q=function(){K=null;L=!1;M=-1;};}
	exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=h,e=k;h=a;k=exports.unstable_now();try{return b()}finally{h=c,k=e,v();}};
	exports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=c+b.timeout;else switch(h){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3;}a={callback:a,priorityLevel:h,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a,p();else{c=null;var e=d;do{if(e.expirationTime>b){c=e;break}e=e.next;}while(e!==d);null===c?c=d:c===d&&(d=a,p());
	b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b;}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c;}a.next=a.previous=null;}};exports.unstable_wrapCallback=function(a){var b=h;return function(){var c=h,e=k;h=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{h=c,k=e,v();}}};exports.unstable_getCurrentPriorityLevel=function(){return h};
	exports.unstable_shouldYield=function(){return !f&&(null!==d&&d.expirationTime<l||w())};
	});

	unwrapExports(scheduler_production_min);
	var scheduler_production_min_1 = scheduler_production_min.unstable_now;
	var scheduler_production_min_2 = scheduler_production_min.unstable_ImmediatePriority;
	var scheduler_production_min_3 = scheduler_production_min.unstable_UserBlockingPriority;
	var scheduler_production_min_4 = scheduler_production_min.unstable_NormalPriority;
	var scheduler_production_min_5 = scheduler_production_min.unstable_IdlePriority;
	var scheduler_production_min_6 = scheduler_production_min.unstable_LowPriority;
	var scheduler_production_min_7 = scheduler_production_min.unstable_runWithPriority;
	var scheduler_production_min_8 = scheduler_production_min.unstable_scheduleCallback;
	var scheduler_production_min_9 = scheduler_production_min.unstable_cancelCallback;
	var scheduler_production_min_10 = scheduler_production_min.unstable_wrapCallback;
	var scheduler_production_min_11 = scheduler_production_min.unstable_getCurrentPriorityLevel;
	var scheduler_production_min_12 = scheduler_production_min.unstable_shouldYield;

	var scheduler = createCommonjsModule(function (module) {

	{
	  module.exports = scheduler_production_min;
	}
	});

	function ca$1(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[c,d,e,f,g,h],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation";}a.framesToPop=1;throw a;}}
	function u$1(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ca$1(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c);}react?void 0:u$1("227");function da$1(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}
	var ea$1=!1,fa=null,ha=!1,ia=null,ja={onError:function(a){ea$1=!0;fa=a;}};function ka(a,b,c,d,e,f,g,h,k){ea$1=!1;fa=null;da$1.apply(ja,arguments);}function la(a,b,c,d,e,f,g,h,k){ka.apply(this,arguments);if(ea$1){if(ea$1){var l=fa;ea$1=!1;fa=null;}else u$1("198"),l=void 0;ha||(ha=!0,ia=l);}}var ma=null,na={};
	function oa(){if(ma)for(var a in na){var b=na[a],c=ma.indexOf(a);-1<c?void 0:u$1("96",a);if(!qa[c]){b.extractEvents?void 0:u$1("97",a);qa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;ra.hasOwnProperty(h)?u$1("99",h):void 0;ra[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&sa(k[e],g,h);e=!0;}else f.registrationName?(sa(f.registrationName,g,h),e=!0):e=!1;e?void 0:u$1("98",d,a);}}}}
	function sa(a,b,c){ta[a]?u$1("100",a):void 0;ta[a]=b;ua[a]=b.eventTypes[c].dependencies;}var qa=[],ra={},ta={},ua={},va=null,wa=null,xa=null;function ya(a,b,c){var d=a.type||"unknown-event";a.currentTarget=xa(c);la(d,b,void 0,a);a.currentTarget=null;}function za(a,b){null==b?u$1("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
	function Aa(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a);}var Ba=null;function Ca(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)ya(a,b[d],c[d]);else b&&ya(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a);}}
	var Da={injectEventPluginOrder:function(a){ma?u$1("101"):void 0;ma=Array.prototype.slice.call(a);oa();},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];na.hasOwnProperty(c)&&na[c]===d||(na[c]?u$1("102",c):void 0,na[c]=d,b=!0);}b&&oa();}};
	function Ea(a,b){var c=a.stateNode;if(!c)return null;var d=va(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;c&&"function"!==typeof c?u$1("231",b,typeof c):void 0;
	return c}function Fa(a){null!==a&&(Ba=za(Ba,a));a=Ba;Ba=null;if(a&&(Aa(a,Ca),Ba?u$1("95"):void 0,ha))throw a=ia,ha=!1,ia=null,a;}var Ga=Math.random().toString(36).slice(2),Ha="__reactInternalInstance$"+Ga,Ia="__reactEventHandlers$"+Ga;function Ja(a){if(a[Ha])return a[Ha];for(;!a[Ha];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ha];return 5===a.tag||6===a.tag?a:null}function Ka(a){a=a[Ha];return !a||5!==a.tag&&6!==a.tag?null:a}
	function La(a){if(5===a.tag||6===a.tag)return a.stateNode;u$1("33");}function Ma(a){return a[Ia]||null}function Na(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Oa(a,b,c){if(b=Ea(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=za(c._dispatchListeners,b),c._dispatchInstances=za(c._dispatchInstances,a);}
	function Pa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Na(b);for(b=c.length;0<b--;)Oa(c[b],"captured",a);for(b=0;b<c.length;b++)Oa(c[b],"bubbled",a);}}function Qa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ea(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=za(c._dispatchListeners,b),c._dispatchInstances=za(c._dispatchInstances,a));}function Ra(a){a&&a.dispatchConfig.registrationName&&Qa(a._targetInst,null,a);}
	function Sa(a){Aa(a,Pa);}var Ta=!("undefined"===typeof window||!window.document||!window.document.createElement);function Ua(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Va={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},Wa={},Xa={};
	Ta&&(Xa=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function Ya(a){if(Wa[a])return Wa[a];if(!Va[a])return a;var b=Va[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Xa)return Wa[a]=b[c];return a}
	var Za=Ya("animationend"),$a=Ya("animationiteration"),ab=Ya("animationstart"),bb=Ya("transitionend"),cb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),db=null,eb=null,fb=null;
	function gb(){if(fb)return fb;var a,b=eb,c=b.length,d,e="value"in db?db.value:db.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return fb=e.slice(a,1<d?1-d:void 0)}function hb(){return !0}function ib(){return !1}
	function v$1(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?hb:ib;this.isPropagationStopped=ib;return this}
	objectAssign(v$1.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=hb);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=hb);},persist:function(){this.isPersistent=hb;},isPersistent:ib,destructor:function(){var a=this.constructor.Interface,
	b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ib;this._dispatchInstances=this._dispatchListeners=null;}});v$1.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
	v$1.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;objectAssign(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=objectAssign({},d.Interface,a);c.extend=d.extend;jb(c);return c};jb(v$1);function kb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function lb(a){a instanceof this?void 0:u$1("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a);}
	function jb(a){a.eventPool=[];a.getPooled=kb;a.release=lb;}var mb=v$1.extend({data:null}),nb=v$1.extend({data:null}),ob=[9,13,27,32],qb=Ta&&"CompositionEvent"in window,rb=null;Ta&&"documentMode"in document&&(rb=document.documentMode);
	var sb=Ta&&"TextEvent"in window&&!rb,tb=Ta&&(!qb||rb&&8<rb&&11>=rb),ub=String.fromCharCode(32),vb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
	captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},wb=!1;
	function xb(a,b){switch(a){case "keyup":return -1!==ob.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return !0;default:return !1}}function yb(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var zb=!1;function Ab(a,b){switch(a){case "compositionend":return yb(b);case "keypress":if(32!==b.which)return null;wb=!0;return ub;case "textInput":return a=b.data,a===ub&&wb?null:a;default:return null}}
	function Bb(a,b){if(zb)return "compositionend"===a||!qb&&xb(a,b)?(a=gb(),fb=eb=db=null,zb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return tb&&"ko"!==b.locale?null:b.data;default:return null}}
	var Cb={eventTypes:vb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(qb)b:{switch(a){case "compositionstart":e=vb.compositionStart;break b;case "compositionend":e=vb.compositionEnd;break b;case "compositionupdate":e=vb.compositionUpdate;break b}e=void 0;}else zb?xb(a,c)&&(e=vb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=vb.compositionStart);e?(tb&&"ko"!==c.locale&&(zb||e!==vb.compositionStart?e===vb.compositionEnd&&zb&&(f=gb()):(db=d,eb="value"in db?db.value:db.textContent,zb=
	!0)),e=mb.getPooled(e,b,c,d),f?e.data=f:(f=yb(c),null!==f&&(e.data=f)),Sa(e),f=e):f=null;(a=sb?Ab(a,c):Bb(a,c))?(b=nb.getPooled(vb.beforeInput,b,c,d),b.data=a,Sa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Db=null,Eb=null,Fb=null;function Gb(a){if(a=wa(a)){"function"!==typeof Db?u$1("280"):void 0;var b=va(a.stateNode);Db(a.stateNode,a.type,b);}}function Hb(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a;}function Ib(){if(Eb){var a=Eb,b=Fb;Fb=Eb=null;Gb(a);if(b)for(a=0;a<b.length;a++)Gb(b[a]);}}
	function Jb(a,b){return a(b)}function Kb(a,b,c){return a(b,c)}function Lb(){}var Mb=!1;function Nb(a,b){if(Mb)return a(b);Mb=!0;try{return Jb(a,b)}finally{if(Mb=!1,null!==Eb||null!==Fb)Lb(),Ib();}}var Ob={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!Ob[a.type]:"textarea"===b?!0:!1}
	function Qb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Rb(a){if(!Ta)return !1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Tb(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function Ub(a){var b=Tb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
	null;delete a[b];}}}}function Vb(a){a._valueTracker||(a._valueTracker=Ub(a));}function Wb(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Tb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
	var Xb=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yb=/^(.*)[\\\/]/,B$1="function"===typeof Symbol&&Symbol.for,Zb=B$1?Symbol.for("react.element"):60103,$b=B$1?Symbol.for("react.portal"):60106,ac=B$1?Symbol.for("react.fragment"):60107,bc=B$1?Symbol.for("react.strict_mode"):60108,cc=B$1?Symbol.for("react.profiler"):60114,dc=B$1?Symbol.for("react.provider"):60109,ec=B$1?Symbol.for("react.context"):60110,fc=B$1?Symbol.for("react.concurrent_mode"):60111,gc=B$1?Symbol.for("react.forward_ref"):60112,hc=B$1?Symbol.for("react.suspense"):
	60113,ic=B$1?Symbol.for("react.memo"):60115,jc=B$1?Symbol.for("react.lazy"):60116,kc="function"===typeof Symbol&&Symbol.iterator;function lc(a){if(null===a||"object"!==typeof a)return null;a=kc&&a[kc]||a["@@iterator"];return "function"===typeof a?a:null}
	function mc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case fc:return "ConcurrentMode";case ac:return "Fragment";case $b:return "Portal";case cc:return "Profiler";case bc:return "StrictMode";case hc:return "Suspense"}if("object"===typeof a)switch(a.$$typeof){case ec:return "Context.Consumer";case dc:return "Context.Provider";case gc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
	")":"ForwardRef");case ic:return mc(a.type);case jc:if(a=1===a._status?a._result:null)return mc(a)}return null}function nc(a){var b="";do{a:switch(a.tag){case 2:case 16:case 0:case 1:case 5:case 8:case 13:var c=a._debugOwner,d=a._debugSource,e=mc(a.type);var f=null;c&&(f=mc(c.type));c=e;e="";d?e=" (at "+d.fileName.replace(Yb,"")+":"+d.lineNumber+")":f&&(e=" (created by "+f+")");f="\n    in "+(c||"Unknown")+e;break a;default:f="";}b+=f;a=a.return;}while(a);return b}
	var oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc=Object.prototype.hasOwnProperty,qc={},rc={};
	function sc(a){if(pc.call(rc,a))return !0;if(pc.call(qc,a))return !1;if(oc.test(a))return rc[a]=!0;qc[a]=!0;return !1}function tc(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
	function uc(a,b,c,d){if(null===b||"undefined"===typeof b||tc(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function E$1(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;}var F$1={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){F$1[a]=new E$1(a,0,!1,a,null);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];F$1[b]=new E$1(b,1,!1,a[1],null);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){F$1[a]=new E$1(a,2,!1,a.toLowerCase(),null);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){F$1[a]=new E$1(a,2,!1,a,null);});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){F$1[a]=new E$1(a,3,!1,a.toLowerCase(),null);});["checked","multiple","muted","selected"].forEach(function(a){F$1[a]=new E$1(a,3,!0,a,null);});
	["capture","download"].forEach(function(a){F$1[a]=new E$1(a,4,!1,a,null);});["cols","rows","size","span"].forEach(function(a){F$1[a]=new E$1(a,6,!1,a,null);});["rowSpan","start"].forEach(function(a){F$1[a]=new E$1(a,5,!1,a.toLowerCase(),null);});var vc=/[\-:]([a-z])/g;function wc(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(vc,
	wc);F$1[b]=new E$1(b,1,!1,a,null);});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(vc,wc);F$1[b]=new E$1(b,1,!1,a,"http://www.w3.org/1999/xlink");});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(vc,wc);F$1[b]=new E$1(b,1,!1,a,"http://www.w3.org/XML/1998/namespace");});F$1.tabIndex=new E$1("tabIndex",1,!1,"tabindex",null);
	function xc(a,b,c,d){var e=F$1.hasOwnProperty(b)?F$1[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(uc(b,c,e,d)&&(c=null),d||null===e?sc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
	function yc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function zc(a,b){var c=b.checked;return objectAssign({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
	function Ac(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=yc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function Bc(a,b){b=b.checked;null!=b&&xc(a,"checked",b,!1);}
	function Cc(a,b){Bc(a,b);var c=yc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Dc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Dc(a,b.type,yc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
	function Ec(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
	function Dc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var Fc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Gc(a,b,c){a=v$1.getPooled(Fc.change,a,b,c);a.type="change";Hb(c);Sa(a);return a}var Hc=null,Ic=null;function Jc(a){Fa(a);}
	function Kc(a){var b=La(a);if(Wb(b))return a}function Lc(a,b){if("change"===a)return b}var Nc=!1;Ta&&(Nc=Rb("input")&&(!document.documentMode||9<document.documentMode));function Oc(){Hc&&(Hc.detachEvent("onpropertychange",Pc),Ic=Hc=null);}function Pc(a){"value"===a.propertyName&&Kc(Ic)&&(a=Gc(Ic,a,Qb(a)),Nb(Jc,a));}function Qc(a,b,c){"focus"===a?(Oc(),Hc=b,Ic=c,Hc.attachEvent("onpropertychange",Pc)):"blur"===a&&Oc();}function Rc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Kc(Ic)}
	function Sc(a,b){if("click"===a)return Kc(b)}function Tc(a,b){if("input"===a||"change"===a)return Kc(b)}
	var Uc={eventTypes:Fc,_isInputEventSupported:Nc,extractEvents:function(a,b,c,d){var e=b?La(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Lc:Pb(e)?Nc?f=Tc:(f=Rc,g=Qc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Sc);if(f&&(f=f(a,b)))return Gc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Dc(e,"number",e.value);}},Vc=v$1.extend({view:null,detail:null}),Wc={Alt:"altKey",
	Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Wc[a])?!!b[a]:!1}function Yc(){return Xc}
	var $c=0,ad=0,bd=!1,cd=!1,dd=Vc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Yc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=$c;$c=a.screenX;return bd?"mousemove"===a.type?a.screenX-b:0:(bd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
	var b=ad;ad=a.screenY;return cd?"mousemove"===a.type?a.screenY-b:0:(cd=!0,0)}}),ed=dd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
	dependencies:["pointerout","pointerover"]}},gd={eventTypes:fd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ja(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=dd,h=fd.mouseLeave,k=fd.mouseEnter,l="mouse";
	else if("pointerout"===a||"pointerover"===a)g=ed,h=fd.pointerLeave,k=fd.pointerEnter,l="pointer";var m=null==f?e:La(f);e=null==b?e:La(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Na(g))l++;g=0;for(k=e;k;k=Na(k))g++;for(;0<l-g;)b=Na(b),l--;for(;0<g-l;)e=Na(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Na(b);e=Na(e);}b=null;}else b=null;e=b;for(b=[];f&&f!==e;){l=
	f.alternate;if(null!==l&&l===e)break;b.push(f);f=Na(f);}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Na(d);}for(d=0;d<b.length;d++)Qa(b[d],"bubbled",a);for(d=f.length;0<d--;)Qa(f[d],"captured",c);return [a,c]}},hd=Object.prototype.hasOwnProperty;function id(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
	function jd(a,b){if(id(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!hd.call(b,c[d])||!id(a[c[d]],b[c[d]]))return !1;return !0}function kd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function ld(a){2!==kd(a)?u$1("188"):void 0;}
	function md(a){var b=a.alternate;if(!b)return b=kd(a),3===b?u$1("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return ld(e),a;if(g===d)return ld(e),b;g=g.sibling;}u$1("188");}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}g?
	void 0:u$1("189");}}c.alternate!==d?u$1("190"):void 0;}3!==c.tag?u$1("188"):void 0;return c.stateNode.current===c?a:b}function nd(a){a=md(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
	var od=v$1.extend({animationName:null,elapsedTime:null,pseudoElement:null}),pd=v$1.extend({clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),qd=Vc.extend({relatedTarget:null});function rd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
	var sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
	116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ud=Vc.extend({key:function(a){if(a.key){var b=sd[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=rd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?td[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Yc,charCode:function(a){return "keypress"===
	a.type?rd(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===a.type?rd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),vd=dd.extend({dataTransfer:null}),wd=Vc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Yc}),xd=v$1.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),yd=dd.extend({deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in
	a?-a.wheelDeltaX:0},deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),zd=[["abort","abort"],[Za,"animationEnd"],[$a,"animationIteration"],[ab,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
	["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
	["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[bb,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Ad={},Bd={};function Cd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Ad[a]=b;Bd[c]=b;}
	[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
	["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Cd(a,!0);});zd.forEach(function(a){Cd(a,!1);});
	var Dd={eventTypes:Ad,isInteractiveTopLevelEventType:function(a){a=Bd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Bd[a];if(!e)return null;switch(a){case "keypress":if(0===rd(c))return null;case "keydown":case "keyup":a=ud;break;case "blur":case "focus":a=qd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=dd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
	vd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=wd;break;case Za:case $a:case ab:a=od;break;case bb:a=xd;break;case "scroll":a=Vc;break;case "wheel":a=yd;break;case "copy":case "cut":case "paste":a=pd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=ed;break;default:a=v$1;}b=a.getPooled(e,b,c,d);Sa(b);return b}},Ed=Dd.isInteractiveTopLevelEventType,
	Fd=[];function Gd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ja(d);}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Qb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<qa.length;h++){var k=qa[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=za(g,k));}Fa(g);}}var Hd=!0;
	function G$1(a,b){if(!b)return null;var c=(Ed(a)?Id:Jd).bind(null,a);b.addEventListener(a,c,!1);}function Kd(a,b){if(!b)return null;var c=(Ed(a)?Id:Jd).bind(null,a);b.addEventListener(a,c,!0);}function Id(a,b){Kb(Jd,a,b);}
	function Jd(a,b){if(Hd){var c=Qb(b);c=Ja(c);null===c||"number"!==typeof c.tag||2===kd(c)||(c=null);if(Fd.length){var d=Fd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d;}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Nb(Gd,a);}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Fd.length&&Fd.push(a);}}}var Ld={},Md=0,Nd="_reactListenersID"+(""+Math.random()).slice(2);
	function Od(a){Object.prototype.hasOwnProperty.call(a,Nd)||(a[Nd]=Md++,Ld[a[Nd]]={});return Ld[a[Nd]]}function Pd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Qd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Rd(a,b){var c=Qd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Qd(c);}}function Sd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Sd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
	function Td(){for(var a=window,b=Pd();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView;}catch(c){break}b=Pd(a.document);}return b}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
	var Vd=Ta&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
	function ae(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if($d||null==Xd||Xd!==Pd(c))return null;c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Zd&&jd(Zd,c)?null:(Zd=c,a=v$1.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Sa(a),a)}
	var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Od(e);f=ua.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0;}f=!e;}if(f)return null;e=b?La(b):window;switch(a){case "focus":if(Pb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":case "dragend":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
	case "keydown":case "keyup":return ae(c,d)}return null}};Da.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));va=Ma;wa=Ka;xa=La;Da.injectEventPluginsByName({SimpleEventPlugin:Dd,EnterLeaveEventPlugin:gd,ChangeEventPlugin:Uc,SelectEventPlugin:be,BeforeInputEventPlugin:Cb});function ce(a){var b="";react.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}
	function de(a,b){a=objectAssign({children:void 0},b);if(b=ce(b.children))a.children=b;return a}function ee(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else{c=""+yc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
	function fe(a,b){null!=b.dangerouslySetInnerHTML?u$1("91"):void 0;return objectAssign({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ge(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?u$1("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:u$1("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:yc(c)};}
	function he(a,b){var c=yc(b.value),d=yc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function ie(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b);}var je={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
	function ke(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function le(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ke(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var me=void 0,ne=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==je.svg||"innerHTML"in a)a.innerHTML=b;else{me=me||document.createElement("div");me.innerHTML="<svg>"+b+"</svg>";for(b=me.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
	function oe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
	var pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
	floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(pe).forEach(function(a){qe.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pe[b]=pe[a];});});function re(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pe.hasOwnProperty(a)&&pe[a]?(""+b).trim():b+"px"}
	function se(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=re(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var te=objectAssign({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
	function ue(a,b){b&&(te[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?u$1("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?u$1("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:u$1("61")),null!=b.style&&"object"!==typeof b.style?u$1("62",""):void 0);}
	function ve(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}
	function we(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Od(a);b=ua[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Kd("scroll",a);break;case "focus":case "blur":Kd("focus",a);Kd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Rb(e)&&Kd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===cb.indexOf(e)&&G$1(e,a);}c[e]=!0;}}}function xe(){}var ye=null,ze=null;
	function Ae(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}function Ce(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var De="function"===typeof setTimeout?setTimeout:void 0,Ee="function"===typeof clearTimeout?clearTimeout:void 0;
	function Fe(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ge(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}var He=[],Ie=-1;function H$1(a){0>Ie||(a.current=He[Ie],He[Ie]=null,Ie--);}function I$1(a,b){Ie++;He[Ie]=a.current;a.current=b;}var Je={},J$1={current:Je},K$1={current:!1},Ke=Je;
	function Le(a,b){var c=a.type.contextTypes;if(!c)return Je;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L$1(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Me(a){H$1(K$1,a);H$1(J$1,a);}function Ne(a){H$1(K$1,a);H$1(J$1,a);}
	function Oe(a,b,c){J$1.current!==Je?u$1("168"):void 0;I$1(J$1,b,a);I$1(K$1,c,a);}function Pe(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:u$1("108",mc(b)||"Unknown",e);return objectAssign({},c,d)}function Qe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Je;Ke=J$1.current;I$1(J$1,b,a);I$1(K$1,K$1.current,a);return !0}
	function Re(a,b,c){var d=a.stateNode;d?void 0:u$1("169");c?(b=Pe(a,b,Ke),d.__reactInternalMemoizedMergedChildContext=b,H$1(K$1,a),H$1(J$1,a),I$1(J$1,b,a)):H$1(K$1,a);I$1(K$1,c,a);}var Se=null,Te=null;function Ue(a){return function(b){try{return a(b)}catch(c){}}}
	function Ve(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return !1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return !0;try{var c=b.inject(a);Se=Ue(function(a){return b.onCommitFiberRoot(c,a)});Te=Ue(function(a){return b.onCommitFiberUnmount(c,a)});}catch(d){}return !0}
	function We(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null;}function M$1(a,b,c,d){return new We(a,b,c,d)}
	function Xe(a){a=a.prototype;return !(!a||!a.isReactComponent)}function Ye(a){if("function"===typeof a)return Xe(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gc)return 11;if(a===ic)return 14}return 2}
	function Ze(a,b){var c=a.alternate;null===c?(c=M$1(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.firstContextDependency=a.firstContextDependency;c.sibling=a.sibling;
	c.index=a.index;c.ref=a.ref;return c}
	function $e(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Xe(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ac:return af(c.children,e,f,b);case fc:return bf(c,e|3,f,b);case bc:return bf(c,e|2,f,b);case cc:return a=M$1(12,c,b,e|4),a.elementType=cc,a.type=cc,a.expirationTime=f,a;case hc:return a=M$1(13,c,b,e),a.elementType=hc,a.type=hc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case dc:g=10;break a;case ec:g=9;break a;case gc:g=11;break a;case ic:g=
	14;break a;case jc:g=16;d=null;break a}u$1("130",null==a?a:typeof a,"");}b=M$1(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function af(a,b,c,d){a=M$1(7,a,d,b);a.expirationTime=c;return a}function bf(a,b,c,d){a=M$1(8,a,d,b);b=0===(b&1)?bc:fc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function cf(a,b,c){a=M$1(6,a,null,b);a.expirationTime=c;return a}
	function df(a,b,c){b=M$1(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function ef(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);ff(b,a);}
	function gf(a,b){a.didError=!1;var c=a.latestPingedTime;0!==c&&c>=b&&(a.latestPingedTime=0);c=a.earliestPendingTime;var d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);ff(b,a);}
	function hf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function ff(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a;}var jf=!1;
	function kf(a){return {baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function lf(a){return {baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
	function mf(a){return {expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function nf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b);}
	function of(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=kf(a.memoizedState));}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=kf(a.memoizedState),e=c.updateQueue=kf(c.memoizedState)):d=a.updateQueue=lf(e):null===e&&(e=c.updateQueue=lf(d));null===e||d===e?nf(d,b):null===d.lastUpdate||null===e.lastUpdate?(nf(d,b),nf(e,b)):(nf(d,b),e.lastUpdate=b);}
	function pf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=kf(a.memoizedState):qf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b);}function qf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=lf(b));return b}
	function rf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return objectAssign({},d,e);case 2:jf=!0;}return d}
	function sf(a,b,c,d,e){jf=!1;b=qf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(l=rf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next;}m=null;for(k=b.firstCapturedUpdate;null!==k;){var q=k.expirationTime;q<e?(null===m&&(m=k,null===g&&(f=l)),h<q&&(h=q)):(l=rf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=
	32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next;}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l;}
	function tf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);uf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;uf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null;}function uf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?u$1("191",c):void 0;c.call(d);}a=a.nextEffect;}}
	function vf(a,b){return {value:a,source:b,stack:nc(b)}}var wf={current:null},xf=null,yf=null,zf=null;function Af(a,b){var c=a.type._context;I$1(wf,c._currentValue,a);c._currentValue=b;}function Bf(a){var b=wf.current;H$1(wf,a);a.type._context._currentValue=b;}function Cf(a){xf=a;zf=yf=null;a.firstContextDependency=null;}
	function Df(a,b){if(zf!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)zf=a,b=1073741823;b={context:a,observedBits:b,next:null};null===yf?(null===xf?u$1("293"):void 0,xf.firstContextDependency=yf=b):yf=yf.next=b;}return a._currentValue}function Ef(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if((d!==e||0===d&&1/d!==1/e)&&(d===d||e===e))return !1}return !0}var Ff=0,N$1=null,Gf=null,O$1=null,Hf=null,Q$1=null,If=0,Jf=null,Kf=!1,Lf=!1,Mf=null,Nf=0;
	function Of(){null===N$1?u$1("298"):void 0;return N$1}function Pf(a,b,c,d){for(;Lf;)Lf=!1,Nf+=1,Jf=Q$1=O$1=null,c=a(b,d);Mf=null;Nf=0;a=N$1;a.memoizedState=Hf;a.expirationTime=If;a.updateQueue=Jf;a=null!==O$1&&null!==O$1.next;Ff=0;Q$1=Hf=O$1=Gf=N$1=null;If=0;Jf=null;a?u$1("300"):void 0;return c}function Qf(){Ff=0;Q$1=Hf=O$1=Gf=N$1=null;If=0;Jf=null;Lf=!1;Mf=null;Nf=0;}function Rf(){return {memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null}}
	function Sf(a){return {memoizedState:a.memoizedState,baseState:a.memoizedState,queue:a.queue,baseUpdate:a.baseUpdate,next:null}}function Tf(){if(null===Q$1)null===Hf?(Kf=!1,O$1=Gf,Hf=Q$1=null===O$1?Rf():Sf(O$1)):(Kf=!0,O$1=Gf,Q$1=Hf);else if(null===Q$1.next){Kf=!1;if(null===O$1)var a=Rf();else O$1=O$1.next,a=null===O$1?Rf():Sf(O$1);Q$1=Q$1.next=a;}else Kf=!0,Q$1=Q$1.next,O$1=null!==O$1?O$1.next:null;return Q$1}function Uf(a,b){return "function"===typeof b?b(a):b}
	function Vf(a,b,c){N$1=Of();Q$1=Tf();var d=Q$1.queue;if(null!==d){if(Kf){b=d.dispatch;if(null!==Mf){var e=Mf.get(d);if(void 0!==e){Mf.delete(d);c=Q$1.memoizedState;do c=a(c,e.action),e=e.next;while(null!==e);Q$1.memoizedState=c;Q$1.baseUpdate===d.last&&(Q$1.baseState=c);return [c,b]}}return [Q$1.memoizedState,b]}b=d.last;var f=Q$1.baseUpdate;null!==f?(null!==b&&(b.next=null),b=f.next):b=null!==b?b.next:null;if(null!==b){c=Q$1.baseState;var g=e=null,h=b,k=!1;do{var l=h.expirationTime;l<Ff?(k||(k=!0,g=f,e=c),l>If&&(If=l)):
	c=a(c,h.action);f=h;h=h.next;}while(null!==h&&h!==b);k||(g=f,e=c);Q$1.memoizedState=c;Q$1.baseUpdate=g;Q$1.baseState=e;}return [Q$1.memoizedState,d.dispatch]}a===Uf?"function"===typeof b&&(b=b()):void 0!==c&&null!==c&&(b=a(b,c));Q$1.memoizedState=Q$1.baseState=b;d=Q$1.queue={last:null,dispatch:null};a=d.dispatch=Wf.bind(null,N$1,d);return [Q$1.memoizedState,a]}
	function Xf(a,b,c,d){a={tag:a,create:b,destroy:c,inputs:d,next:null};null===Jf?(Jf={lastEffect:null},Jf.lastEffect=a.next=a):(b=Jf.lastEffect,null===b?Jf.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,Jf.lastEffect=a));return a}function Yf(a,b,c,d){N$1=Of();Q$1=Tf();d=void 0!==d&&null!==d?d:[c];var e=null;if(null!==O$1){var f=O$1.memoizedState;e=f.destroy;if(Ef(d,f.inputs)){Xf(0,c,e,d);return}}N$1.effectTag|=a;Q$1.memoizedState=Xf(b,c,e,d);}
	function Wf(a,b,c){25>Nf?void 0:u$1("301");var d=a.alternate;if(a===N$1||null!==d&&d===N$1)if(Lf=!0,a={expirationTime:Ff,action:c,next:null},null===Mf&&(Mf=new Map),d=Mf.get(b),void 0===d)Mf.set(b,a);else{for(b=d;null!==b.next;)b=b.next;b.next=a;}else{d=Zf();d=$f(d,a);c={expirationTime:d,action:c,next:null};ag();var e=b.last;if(null===e)c.next=c;else{var f=e.next;null!==f&&(c.next=f);e.next=c;}b.last=c;bg(a,d);}}var cg={},dg={current:cg},eg={current:cg},fg={current:cg};
	function gg(a){a===cg?u$1("174"):void 0;return a}function hg(a,b){I$1(fg,b,a);I$1(eg,a,a);I$1(dg,cg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:le(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=le(b,c);}H$1(dg,a);I$1(dg,b,a);}function ig(a){H$1(dg,a);H$1(eg,a);H$1(fg,a);}function jg(a){gg(fg.current);var b=gg(dg.current);var c=le(b,a.type);b!==c&&(I$1(eg,a,a),I$1(dg,c,a));}function kg(a){eg.current===a&&(H$1(dg,a),H$1(eg,a));}
	function lg(a,b){if(a&&a.defaultProps){b=objectAssign({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);}return b}function mg(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:throw a._status=0,b=a._ctor,b=b(),b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);}),a._result=b,b;}}var ng=Xb.ReactCurrentOwner,og=(new react.Component).refs;
	function pg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:objectAssign({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c);}
	var qg={isMounted:function(a){return (a=a._reactInternalFiber)?2===kd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Zf();d=$f(d,a);var e=mf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ag();of(a,e);bg(a,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Zf();d=$f(d,a);var e=mf(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);ag();of(a,e);bg(a,d);},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Zf();c=$f(c,a);var d=mf(c);d.tag=
	2;void 0!==b&&null!==b&&(d.callback=b);ag();of(a,d);bg(a,c);}};function rg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!jd(c,d)||!jd(e,f):!0}
	function sg(a,b,c){var d=!1,e=Je;var f=b.contextType;"object"===typeof f&&null!==f?f=ng.currentDispatcher.readContext(f):(e=L$1(b)?Ke:J$1.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Le(a,e):Je);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=qg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
	function tg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&qg.enqueueReplaceState(b,b.state,null);}
	function ug(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=og;var f=b.contextType;"object"===typeof f&&null!==f?e.context=ng.currentDispatcher.readContext(f):(f=L$1(b)?Ke:J$1.current,e.context=Le(a,f));f=a.updateQueue;null!==f&&(sf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(pg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&
	"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&qg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(sf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4);}var vg=Array.isArray;
	function wg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?u$1("289"):void 0,d=c.stateNode);d?void 0:u$1("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===og&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}"string"!==typeof a?u$1("284"):void 0;c._owner?void 0:u$1("290",a);}return a}
	function xg(a,b){"textarea"!==a.type&&u$1("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}
	function yg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Ze(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
	2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=cf(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=wg(a,b,c),d.return=a,d;d=$e(c.type,c.key,c.props,null,a.mode,d);d.ref=wg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
	c.implementation)return b=df(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=af(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function q(a,b,c){if("string"===typeof b||"number"===typeof b)return b=cf(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Zb:return c=$e(b.type,b.key,b.props,null,a.mode,c),c.ref=wg(a,null,b),c.return=a,c;case $b:return b=df(b,a.mode,c),b.return=a,b}if(vg(b)||
	lc(b))return b=af(b,a.mode,c,null),b.return=a,b;xg(a,b);}return null}function z(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Zb:return c.key===e?c.type===ac?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $b:return c.key===e?l(a,b,c,d):null}if(vg(c)||lc(c))return null!==e?null:m(a,b,c,d,null);xg(a,c);}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
	a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Zb:return a=a.get(null===d.key?c:d.key)||null,d.type===ac?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $b:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(vg(d)||lc(d))return a=a.get(c)||null,m(b,a,d,e,null);xg(b,d);}return null}function C(e,g,h,k){for(var l=null,p=null,m=g,r=g=0,t=null;null!==m&&r<h.length;r++){m.index>r?(t=m,m=null):t=m.sibling;var w=z(e,m,h[r],k);if(null===w){null===m&&(m=t);break}a&&
	m&&null===w.alternate&&b(e,m);g=f(w,g,r);null===p?l=w:p.sibling=w;p=w;m=t;}if(r===h.length)return c(e,m),l;if(null===m){for(;r<h.length;r++)if(m=q(e,h[r],k))g=f(m,g,r),null===p?l=m:p.sibling=m,p=m;return l}for(m=d(e,m);r<h.length;r++)if(t=A(m,e,r,h[r],k))a&&null!==t.alternate&&m.delete(null===t.key?r:t.key),g=f(t,g,r),null===p?l=t:p.sibling=t,p=t;a&&m.forEach(function(a){return b(e,a)});return l}function V(e,g,h,k){var l=lc(h);"function"!==typeof l?u$1("150"):void 0;h=l.call(h);null==h?u$1("151"):void 0;
	for(var m=l=null,p=g,r=g=0,t=null,w=h.next();null!==p&&!w.done;r++,w=h.next()){p.index>r?(t=p,p=null):t=p.sibling;var x=z(e,p,w.value,k);if(null===x){p||(p=t);break}a&&p&&null===x.alternate&&b(e,p);g=f(x,g,r);null===m?l=x:m.sibling=x;m=x;p=t;}if(w.done)return c(e,p),l;if(null===p){for(;!w.done;r++,w=h.next())w=q(e,w.value,k),null!==w&&(g=f(w,g,r),null===m?l=w:m.sibling=w,m=w);return l}for(p=d(e,p);!w.done;r++,w=h.next())w=A(p,e,r,w.value,k),null!==w&&(a&&null!==w.alternate&&p.delete(null===w.key?r:
	w.key),g=f(w,g,r),null===m?l=w:m.sibling=w,m=w);a&&p.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ac&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Zb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===ac:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ac?f.props.children:f.props,h);d.ref=wg(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
	k.sibling;}f.type===ac?(d=af(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=$e(f.type,f.key,f.props,null,a.mode,h),h.ref=wg(a,d,f),h.return=a,a=h);}return g(a);case $b:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling;}d=df(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
	""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=cf(f,a.mode,h),d.return=a,a=d),g(a);if(vg(f))return C(a,d,f,h);if(lc(f))return V(a,d,f,h);l&&xg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,u$1("152",h.displayName||h.name||"Component");}return c(a,d)}}var zg=yg(!0),Ag=yg(!1),Bg=null,Cg=null,Dg=!1;
	function Eg(a,b){var c=M$1(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function Fg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return !1}}
	function Gg(a){if(Dg){var b=Cg;if(b){var c=b;if(!Fg(a,b)){b=Fe(c);if(!b||!Fg(a,b)){a.effectTag|=2;Dg=!1;Bg=a;return}Eg(Bg,c);}Bg=a;Cg=Ge(b);}else a.effectTag|=2,Dg=!1,Bg=a;}}function Hg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;Bg=a;}function Ig(a){if(a!==Bg)return !1;if(!Dg)return Hg(a),Dg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ce(b,a.memoizedProps))for(b=Cg;b;)Eg(a,b),b=Fe(b);Hg(a);Cg=Bg?Fe(a.stateNode):null;return !0}function Jg(){Cg=Bg=null;Dg=!1;}var Kg=Xb.ReactCurrentOwner;
	function R$1(a,b,c,d){b.child=null===a?Ag(b,null,c,d):zg(b,a.child,c,d);}function Lg(a,b,c,d,e){c=c.render;var f=b.ref;Cf(b,e);Ff=e;N$1=b;Gf=null!==a?a.memoizedState:null;var g=c(d,f);g=Pf(c,d,g,f);b.effectTag|=1;R$1(a,b,g,e);return b.child}
	function Mg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Xe(g)&&void 0===g.defaultProps&&null===c.compare)return b.tag=15,b.type=g,Ng(a,b,g,d,e,f);a=$e(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:jd,c(e,d)&&a.ref===b.ref))return Og(a,b,f);b.effectTag|=1;a=Ze(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
	function Ng(a,b,c,d,e,f){return null!==a&&e<f&&jd(a.memoizedProps,d)&&a.ref===b.ref?Og(a,b,f):Pg(a,b,c,d,f)}function Qg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128;}function Pg(a,b,c,d,e){var f=L$1(c)?Ke:J$1.current;f=Le(b,f);Cf(b,e);Ff=e;N$1=b;Gf=null!==a?a.memoizedState:null;var g=c(d,f);g=Pf(c,d,g,f);b.effectTag|=1;R$1(a,b,g,e);return b.child}
	function Rg(a,b,c,d,e){if(L$1(c)){var f=!0;Qe(b);}else f=!1;Cf(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),sg(b,c,d,e),ug(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=ng.currentDispatcher.readContext(l):(l=L$1(c)?Ke:J$1.current,l=Le(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
	"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&tg(b,g,d,l);jf=!1;var z=b.memoizedState;k=g.state=z;var A=b.updateQueue;null!==A&&(sf(b,A,d,g,e),k=b.memoizedState);h!==d||z!==k||K$1.current||jf?("function"===typeof m&&(pg(b,c,m,d),k=b.memoizedState),(h=jf||rg(b,c,h,d,z,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
	g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1);}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:lg(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=ng.currentDispatcher.readContext(l):(l=L$1(c)?Ke:J$1.current,l=Le(b,l)),m=
	c.getDerivedStateFromProps,(q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&tg(b,g,d,l),jf=!1,k=b.memoizedState,z=g.state=k,A=b.updateQueue,null!==A&&(sf(b,A,d,g,e),z=b.memoizedState),h!==d||k!==z||K$1.current||jf?("function"===typeof m&&(pg(b,c,m,d),z=b.memoizedState),(m=jf||rg(b,c,h,d,k,z,l))?(q||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==
	typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,z,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,z,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||
	(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=z),g.props=d,g.state=z,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return Sg(a,b,c,d,f,e)}
	function Sg(a,b,c,d,e,f){Qg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Re(b,c,!1),Og(a,b,f);d=b.stateNode;Kg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=zg(b,a.child,null,f),b.child=zg(b,null,h,f)):R$1(a,b,h,f);b.memoizedState=d.state;e&&Re(b,c,!0);return b.child}function Tg(a){var b=a.stateNode;b.pendingContext?Oe(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Oe(a,b.context,!1);hg(a,b.containerInfo);}
	function Ug(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1;}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;null===a?g?(g=e.fallback,e=af(null,d,0,null),0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=af(g,d,c,null),e.sibling=d,c=e,c.return=d.return=b):c=d=Ag(b,null,e.children,c):null!==a.memoizedState?(d=a.child,a=d.sibling,g?(c=e.fallback,e=Ze(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==b.memoizedState?
	b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Ze(a,c,a.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=zg(b,d.child,e.children,c)):(a=a.child,g?(g=e.fallback,e=af(null,d,0,null),e.child=a,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=af(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=zg(b,a,e.children,c));b.memoizedState=f;b.child=c;return d}
	function Og(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?u$1("153"):void 0;if(null!==b.child){a=b.child;c=Ze(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ze(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null;}return b.child}
	function Vg(a,b,c){var d=b.expirationTime;if(null!==a&&a.memoizedProps===b.pendingProps&&!K$1.current&&d<c){switch(b.tag){case 3:Tg(b);Jg();break;case 5:jg(b);break;case 1:L$1(b.type)&&Qe(b);break;case 4:hg(b,b.stateNode.containerInfo);break;case 10:Af(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Ug(a,b,c);b=Og(a,b,c);return null!==b?b.sibling:null}}return Og(a,b,c)}b.expirationTime=0;switch(b.tag){case 2:d=b.elementType;null!==
	a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Le(b,J$1.current);Cf(b,c);Ff=c;N$1=b;Gf=null;var f=d(a,e);b.effectTag|=1;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof){b.tag=1;Qf();L$1(d)?(e=!0,Qe(b)):e=!1;b.memoizedState=null!==f.state&&void 0!==f.state?f.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&pg(b,d,g,a);f.updater=qg;b.stateNode=f;f._reactInternalFiber=b;ug(b,d,a,c);b=Sg(null,b,d,!0,e,c);}else b.tag=0,f=Pf(d,
	a,f,e),R$1(null,b,f,c),b=b.child;return b;case 16:f=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);e=b.pendingProps;a=mg(f);b.type=a;f=b.tag=Ye(a);e=lg(a,e);g=void 0;switch(f){case 0:g=Pg(null,b,a,e,c);break;case 1:g=Rg(null,b,a,e,c);break;case 11:g=Lg(null,b,a,e,c);break;case 14:g=Mg(null,b,a,lg(a.type,e),d,c);break;default:u$1("283",a);}return g;case 0:return d=b.type,f=b.pendingProps,f=b.elementType===d?f:lg(d,f),Pg(a,b,d,f,c);case 1:return d=b.type,f=b.pendingProps,f=b.elementType===
	d?f:lg(d,f),Rg(a,b,d,f,c);case 3:Tg(b);d=b.updateQueue;null===d?u$1("282"):void 0;f=b.memoizedState;f=null!==f?f.element:null;sf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===f)Jg(),b=Og(a,b,c);else{f=b.stateNode;if(f=(null===a||null===a.child)&&f.hydrate)Cg=Ge(b.stateNode.containerInfo),Bg=b,f=Dg=!0;f?(b.effectTag|=2,b.child=Ag(b,null,d,c)):(R$1(a,b,d,c),Jg());b=b.child;}return b;case 5:return jg(b),null===a&&Gg(b),d=b.type,f=b.pendingProps,e=null!==a?a.memoizedProps:null,g=f.children,Ce(d,
	f)?g=null:null!==e&&Ce(d,e)&&(b.effectTag|=16),Qg(a,b),1!==c&&b.mode&1&&f.hidden?(b.expirationTime=1,b=null):(R$1(a,b,g,c),b=b.child),b;case 6:return null===a&&Gg(b),null;case 13:return Ug(a,b,c);case 4:return hg(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=zg(b,null,d,c):R$1(a,b,d,c),b.child;case 11:return d=b.type,f=b.pendingProps,f=b.elementType===d?f:lg(d,f),Lg(a,b,d,f,c);case 7:return R$1(a,b,b.pendingProps,c),b.child;case 8:return R$1(a,b,b.pendingProps.children,c),b.child;case 12:return R$1(a,
	b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;f=b.pendingProps;g=b.memoizedProps;e=f.value;Af(b,e);if(null!==g){var h=g.value;e=h===e&&(0!==h||1/h===1/e)||h!==h&&e!==e?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,e):1073741823)|0;if(0===e){if(g.children===f.children&&!K$1.current){b=Og(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){h=g.firstContextDependency;if(null!==h){do{if(h.context===d&&0!==(h.observedBits&e)){if(1===g.tag){var k=
	mf(c);k.tag=2;of(g,k);}g.expirationTime<c&&(g.expirationTime=c);k=g.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);for(var l=g.return;null!==l;){k=l.alternate;if(l.childExpirationTime<c)l.childExpirationTime=c,null!==k&&k.childExpirationTime<c&&(k.childExpirationTime=c);else if(null!==k&&k.childExpirationTime<c)k.childExpirationTime=c;else break;l=l.return;}}k=g.child;h=h.next;}while(null!==h)}else k=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==k)k.return=g;else for(k=g;null!==
	k;){if(k===b){k=null;break}g=k.sibling;if(null!==g){g.return=k.return;k=g;break}k=k.return;}g=k;}}R$1(a,b,f.children,c);b=b.child;}return b;case 9:return f=b.type,e=b.pendingProps,d=e.children,Cf(b,c),f=Df(f,e.unstable_observedBits),d=d(f),b.effectTag|=1,R$1(a,b,d,c),b.child;case 14:return f=b.type,e=lg(f.type,b.pendingProps),Mg(a,b,f,e,d,c);case 15:return Ng(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,f=b.pendingProps,f=b.elementType===d?f:lg(d,f),null!==a&&(a.alternate=null,b.alternate=null,
	b.effectTag|=2),b.tag=1,L$1(d)?(a=!0,Qe(b)):a=!1,Cf(b,c),sg(b,d,f,c),ug(b,d,f,c),Sg(null,b,d,!0,a,c);default:u$1("156");}}function Wg(a){a.effectTag|=4;}var Xg=void 0,Yg=void 0,Zg=void 0,$g=void 0;Xg=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Yg=function(){};
	Zg=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;gg(dg.current);a=null;switch(c){case "input":f=zc(g,f);d=zc(g,d);a=[];break;case "option":f=de(g,f);d=de(g,d);a=[];break;case "select":f=objectAssign({},f,{value:void 0});d=objectAssign({},d,{value:void 0});a=[];break;case "textarea":f=fe(g,f);d=fe(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=xe);}ue(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
	c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="");}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ta.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
	(h={}),h[g]=l[g]);}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ta.hasOwnProperty(c)?(null!=l&&we(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l));}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&Wg(b);}};$g=function(a,b,c,d){c!==d&&Wg(b);};
	function ah(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=nc(c));null!==c&&mc(c.type);b=b.value;null!==a&&1===a.tag&&mc(a.type);try{console.error(b);}catch(e){setTimeout(function(){throw e;});}}function eh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){fh(a,c);}else b.current=null;}
	function gh(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if(0!==(d.tag&a)){var e=d.destroy;d.destroy=null;null!==e&&e();}0!==(d.tag&b)&&(e=d.create,e=e(),"function"!==typeof e&&(e=null),d.destroy=e);d=d.next;}while(d!==c)}}
	function hh(a){"function"===typeof Te&&Te(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(null!==d){var e=a;try{d();}catch(f){fh(e,f);}}c=c.next;}while(c!==b)}break;case 1:eh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount();}catch(f){fh(a,f);}break;case 5:eh(a);break;case 4:ih(a);}}
	function jh(a){return 5===a.tag||3===a.tag||4===a.tag}
	function kh(a){a:{for(var b=a.return;null!==b;){if(jh(b)){var c=b;break a}b=b.return;}u$1("160");c=void 0;}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:u$1("161");}c.effectTag&16&&(oe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||jh(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
	if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h);}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=xe)):b.appendChild(e.stateNode);
	else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return;}e.sibling.return=e.return;e=e.sibling;}}
	function ih(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?u$1("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return;}c=!0;}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(hh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return;}g.sibling.return=g.return;g=g.sibling;}e?
	(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode);}else if(4===b.tag?(d=b.stateNode.containerInfo,e=!0):hh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1);}b.sibling.return=b.return;b=b.sibling;}}
	function lh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:gh(4,8,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ia]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bc(c,d);ve(a,e);b=ve(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?se(c,h):"dangerouslySetInnerHTML"===g?ne(c,h):"children"===g?oe(c,h):xc(c,g,h,b);}switch(a){case "input":Cc(c,d);break;case "textarea":he(c,
	d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?ee(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?ee(c,!!d.multiple,d.defaultValue,!0):ee(c,!!d.multiple,d.multiple?[]:"",!1));}}}break;case 6:null===b.stateNode?u$1("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=Zf()));if(null!==a)a:for(b=c=a;;){if(5===
	b.tag)a=b.stateNode,d?a.style.display="none":(a=b.stateNode,f=b.memoizedProps.style,f=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null,a.style.display=re("display",f));else if(6===b.tag)b.stateNode.nodeValue=d?"":b.memoizedProps;else if(13===b.tag&&null!==b.memoizedState){a=b.child.sibling;a.return=b;b=a;continue}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===c)break a;for(;null===b.sibling;){if(null===b.return||b.return===c)break a;b=b.return;}b.sibling.return=
	b.return;b=b.sibling;}break;case 17:break;default:u$1("163");}}function mh(a,b,c){c=mf(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){nh(d);ah(a,b);};return c}
	function oh(a,b,c){c=mf(c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===ph?ph=new Set([this]):ph.add(this));var c=b.value,e=b.stack;ah(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""});});return c}
	function qh(a){switch(a.tag){case 1:L$1(a.type)&&Me(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return ig(a),Ne(a),b=a.effectTag,0!==(b&64)?u$1("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return kg(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 4:return ig(a),null;case 10:return Bf(a),null;default:return null}}
	var rh={readContext:Df,useCallback:function(a,b){N$1=Of();Q$1=Tf();b=void 0!==b&&null!==b?b:[a];var c=Q$1.memoizedState;if(null!==c&&Ef(b,c[1]))return c[0];Q$1.memoizedState=[a,b];return a},useContext:function(a,b){Of();return Df(a,b)},useEffect:function(a,b){Yf(516,192,a,b);},useImperativeMethods:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):[a,b];Yf(4,36,function(){if("function"===typeof a){var c=b();a(c);return function(){return a(null)}}if(null!==a&&void 0!==a)return c=b(),a.current=c,function(){a.current=
	null;}},c);},useLayoutEffect:function(a,b){Yf(4,36,a,b);},useMemo:function(a,b){N$1=Of();Q$1=Tf();b=void 0!==b&&null!==b?b:[a];var c=Q$1.memoizedState;if(null!==c&&Ef(b,c[1]))return c[0];a=a();Q$1.memoizedState=[a,b];return a},useMutationEffect:function(a,b){Yf(260,10,a,b);},useReducer:Vf,useRef:function(a){N$1=Of();Q$1=Tf();null===Q$1.memoizedState?(a={current:a},Q$1.memoizedState=a):a=Q$1.memoizedState;return a},useState:function(a){return Vf(Uf,a)}},sh=Xb.ReactCurrentOwner,th=1073741822,uh=0,vh=!1,S$1=null,wh=null,T$1=
	0,xh=-1,yh=!1,U$1=null,zh=!1,Ah=null,Bh=null,Ch=null,ph=null;function Dh(){if(null!==S$1)for(var a=S$1.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Me(b);break;case 3:ig(b);Ne(b);break;case 5:kg(b);break;case 4:ig(b);break;case 10:Bf(b);}a=a.return;}wh=null;T$1=0;xh=-1;yh=!1;S$1=null;}
	function Eh(a,b){Ch=Bh=Ah=null;var c=W$1;W$1=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;gh(128,0,f);gh(0,64,f);}catch(g){d=!0,e=g;}d&&fh(b,e);}b=b.nextEffect;}while(null!==b);W$1=c;c=a.expirationTime;0!==c&&Fh(a,c);}function ag(){null!==Ch&&(scheduler.unstable_cancelCallback(Bh),Ch());}
	function Gh(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){S$1=a;a:{var e=b;b=a;var f=T$1;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:L$1(b.type)&&Me(b);break;case 3:ig(b);Ne(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Ig(b),b.effectTag&=-3;Yg(b);break;case 5:kg(b);var h=gg(fg.current);f=b.type;if(null!==e&&null!=b.stateNode)Zg(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
	128);else if(g){var k=gg(dg.current);if(Ig(b)){g=b;e=g.stateNode;var l=g.type,m=g.memoizedProps,q=h;e[Ha]=g;e[Ia]=m;f=void 0;h=l;switch(h){case "iframe":case "object":G$1("load",e);break;case "video":case "audio":for(l=0;l<cb.length;l++)G$1(cb[l],e);break;case "source":G$1("error",e);break;case "img":case "image":case "link":G$1("error",e);G$1("load",e);break;case "form":G$1("reset",e);G$1("submit",e);break;case "details":G$1("toggle",e);break;case "input":Ac(e,m);G$1("invalid",e);we(q,"onChange");break;case "select":e._wrapperState=
	{wasMultiple:!!m.multiple};G$1("invalid",e);we(q,"onChange");break;case "textarea":ge(e,m),G$1("invalid",e),we(q,"onChange");}ue(h,m);l=null;for(f in m)m.hasOwnProperty(f)&&(k=m[f],"children"===f?"string"===typeof k?e.textContent!==k&&(l=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(l=["children",""+k]):ta.hasOwnProperty(f)&&null!=k&&we(q,f));switch(h){case "input":Vb(e);Ec(e,m,!0);break;case "textarea":Vb(e);ie(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
	(e.onclick=xe);}f=l;g.updateQueue=f;g=null!==f?!0:!1;g&&Wg(b);}else{m=b;e=f;q=g;l=9===h.nodeType?h:h.ownerDocument;k===je.html&&(k=ke(e));k===je.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof q.is?l=l.createElement(e,{is:q.is}):(l=l.createElement(e),"select"===e&&q.multiple&&(l.multiple=!0)):l=l.createElementNS(k,e);e=l;e[Ha]=m;e[Ia]=g;Xg(e,b,!1,!1);q=e;l=f;m=g;var z=h,A=ve(l,m);switch(l){case "iframe":case "object":G$1("load",
	q);h=m;break;case "video":case "audio":for(h=0;h<cb.length;h++)G$1(cb[h],q);h=m;break;case "source":G$1("error",q);h=m;break;case "img":case "image":case "link":G$1("error",q);G$1("load",q);h=m;break;case "form":G$1("reset",q);G$1("submit",q);h=m;break;case "details":G$1("toggle",q);h=m;break;case "input":Ac(q,m);h=zc(q,m);G$1("invalid",q);we(z,"onChange");break;case "option":h=de(q,m);break;case "select":q._wrapperState={wasMultiple:!!m.multiple};h=objectAssign({},m,{value:void 0});G$1("invalid",q);we(z,"onChange");break;case "textarea":ge(q,
	m);h=fe(q,m);G$1("invalid",q);we(z,"onChange");break;default:h=m;}ue(l,h);k=void 0;var C=l,V=q,w=h;for(k in w)if(w.hasOwnProperty(k)){var r=w[k];"style"===k?se(V,r):"dangerouslySetInnerHTML"===k?(r=r?r.__html:void 0,null!=r&&ne(V,r)):"children"===k?"string"===typeof r?("textarea"!==C||""!==r)&&oe(V,r):"number"===typeof r&&oe(V,""+r):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ta.hasOwnProperty(k)?null!=r&&we(z,k):null!=r&&xc(V,k,r,A));}switch(l){case "input":Vb(q);
	Ec(q,m,!1);break;case "textarea":Vb(q);ie(q,m);break;case "option":null!=m.value&&q.setAttribute("value",""+yc(m.value));break;case "select":h=q;h.multiple=!!m.multiple;q=m.value;null!=q?ee(h,!!m.multiple,q,!1):null!=m.defaultValue&&ee(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(q.onclick=xe);}(g=Ae(f,g))&&Wg(b);b.stateNode=e;}null!==b.ref&&(b.effectTag|=128);}else null===b.stateNode?u$1("166"):void 0;break;case 6:e&&null!=b.stateNode?$g(e,b,e.memoizedProps,g):("string"!==
	typeof g&&(null===b.stateNode?u$1("166"):void 0),e=gg(fg.current),gg(dg.current),Ig(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Ha]=g,(g=f.nodeValue!==e)&&Wg(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Ha]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;S$1=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
	b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g!==f||0===(b.effectTag&1)&&g)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:ig(b);Yg(b);break;case 10:Bf(b);break;case 9:break;case 14:break;case 17:L$1(b.type)&&Me(b);break;default:u$1("156");}S$1=null;}b=a;if(1===T$1||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g;}if(null!==S$1)return S$1;null!==c&&0===(c.effectTag&1024)&&(null===
	c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));}else{a=qh(a,T$1);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024);}if(null!==d)return d;if(null!==c)a=c;else break}return null}
	function Hh(a){var b=Vg(a.alternate,a,T$1);a.memoizedProps=a.pendingProps;null===b&&(b=Gh(a));sh.current=null;return b}
	function Ih(a,b){vh?u$1("243"):void 0;ag();vh=!0;sh.currentDispatcher=rh;var c=a.nextExpirationTimeToWorkOn;if(c!==T$1||a!==wh||null===S$1)Dh(),wh=a,T$1=c,S$1=Ze(wh.current,null,T$1),a.pendingCommitExpirationTime=0;var d=!1;do{try{if(b)for(;null!==S$1&&!Jh();)S$1=Hh(S$1);else for(;null!==S$1;)S$1=Hh(S$1);}catch(C){if(zf=yf=xf=null,Qf(),null===S$1)d=!0,nh(C);else{null===S$1?u$1("271"):void 0;var e=S$1,f=e.return;if(null===f)d=!0,nh(C);else{a:{var g=a,h=f,k=e,l=C;f=T$1;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===
	typeof l&&"function"===typeof l.then){var m=l;l=h;var q=-1,z=-1;do{if(13===l.tag){var A=l.alternate;if(null!==A&&(A=A.memoizedState,null!==A)){z=10*(1073741822-A.timedOutAt);break}A=l.pendingProps.maxDuration;if("number"===typeof A)if(0>=A)q=0;else if(-1===q||A<q)q=A;}l=l.return;}while(null!==l);l=h;do{if(A=13===l.tag)A=void 0===l.memoizedProps.fallback?!1:null===l.memoizedState;if(A){h=Kh.bind(null,g,l,k,0===(l.mode&1)?1073741823:f);m.then(h,h);if(0===(l.mode&1)){l.effectTag|=64;k.effectTag&=-1957;
	1===k.tag&&null===k.alternate&&(k.tag=17);k.expirationTime=f;break a}-1===q?g=1073741823:(-1===z&&(z=10*(1073741822-hf(g,f))-5E3),g=z+q);0<=g&&xh<g&&(xh=g);l.effectTag|=2048;l.expirationTime=f;break a}l=l.return;}while(null!==l);l=Error((mc(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+nc(k));}yh=!0;l=vf(l,k);g=h;do{switch(g.tag){case 3:k=
	l;g.effectTag|=2048;g.expirationTime=f;f=mh(g,k,f);pf(g,f);break a;case 1:if(k=l,h=g.type,m=g.stateNode,0===(g.effectTag&64)&&("function"===typeof h.getDerivedStateFromError||null!==m&&"function"===typeof m.componentDidCatch&&(null===ph||!ph.has(m)))){g.effectTag|=2048;g.expirationTime=f;f=oh(g,k,f);pf(g,f);break a}}g=g.return;}while(null!==g)}S$1=Gh(e);continue}}}break}while(1);vh=!1;zf=yf=xf=sh.currentDispatcher=null;Qf();if(d)wh=null,a.finishedWork=null;else if(null!==S$1)a.finishedWork=null;else{d=
	a.current.alternate;null===d?u$1("281"):void 0;wh=null;if(yh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<c||0!==f&&f<c||0!==g&&g<c){gf(a,c);Lh(a,d,c,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;c=a.nextExpirationTimeToWorkOn=c;b=a.expirationTime=1073741823;Lh(a,d,c,b,-1);return}}b&&-1!==xh?(gf(a,c),b=10*(1073741822-hf(a,c)),b<xh&&(xh=b),b=10*(1073741822-Zf()),b=xh-b,Lh(a,d,c,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=c,a.finishedWork=
	d);}}function fh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===ph||!ph.has(d))){a=vf(b,a);a=oh(c,a,1073741823);of(c,a);bg(c,1073741823);return}break;case 3:a=vf(b,a);a=mh(c,a,1073741823);of(c,a);bg(c,1073741823);return}c=c.return;}3===a.tag&&(c=vf(b,a),c=mh(a,c,1073741823),of(a,c),bg(a,1073741823));}
	function $f(a,b){0!==uh?a=uh:vh?a=zh?1073741823:T$1:b.mode&1?(a=Mh?1073741822-10*(((1073741822-a+15)/10|0)+1):1073741822-25*(((1073741822-a+500)/25|0)+1),null!==wh&&a===T$1&&--a):a=1073741823;Mh&&(0===Nh||a<Nh)&&(Nh=a);return a}
	function Kh(a,b,c,d){var e=a.earliestSuspendedTime;var f=a.latestSuspendedTime;if(0!==e&&d<=e&&d>=f){f=e=d;a.didError=!1;var g=a.latestPingedTime;if(0===g||g>f)a.latestPingedTime=f;ff(f,a);}else e=Zf(),e=$f(e,b),ef(a,e);0!==(b.mode&1)&&a===wh&&T$1===d&&(wh=null);Oh(b,e);0===(b.mode&1)&&(Oh(c,e),1===c.tag&&null!==c.stateNode&&(b=mf(e),b.tag=2,of(c,b)));c=a.expirationTime;0!==c&&Fh(a,c);}
	function Oh(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return;}return e}
	function bg(a,b){a=Oh(a,b);null!==a&&(!vh&&0!==T$1&&b>T$1&&Dh(),ef(a,b),vh&&!zh&&wh===a||Fh(a,a.expirationTime),Ph>Qh&&(Ph=0,u$1("185")));}function Rh(a,b,c,d,e){var f=uh;uh=1073741823;try{return a(b,c,d,e)}finally{uh=f;}}var Sh=null,X$1=null,Th=0,Uh=void 0,W$1=!1,Vh=null,Y$1=0,Nh=0,Wh=!1,Xh=null,Z$1=!1,Yh=!1,Mh=!1,Zh=null,$h=scheduler.unstable_now(),ai=1073741822-($h/10|0),bi=ai,Qh=50,Ph=0,ci=null;function di(){ai=1073741822-((scheduler.unstable_now()-$h)/10|0);}
	function ei(a,b){if(0!==Th){if(b<Th)return;null!==Uh&&scheduler.unstable_cancelCallback(Uh);}Th=b;a=scheduler.unstable_now()-$h;Uh=scheduler.unstable_scheduleCallback(fi,{timeout:10*(1073741822-b)-a});}function Lh(a,b,c,d,e){a.expirationTime=d;0!==e||Jh()?0<e&&(a.timeoutHandle=De(gi.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b);}function gi(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;di();bi=ai;hi(a,c);}function Zf(){if(W$1)return bi;ii();if(0===Y$1||1===Y$1)di(),bi=ai;return bi}
	function Fh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===X$1?(Sh=X$1=a,a.nextScheduledRoot=a):(X$1=X$1.nextScheduledRoot=a,X$1.nextScheduledRoot=Sh)):b>a.expirationTime&&(a.expirationTime=b);W$1||(Z$1?Yh&&(Vh=a,Y$1=1073741823,ji(a,1073741823,!1)):1073741823===b?ki(1073741823,!1):ei(a,b));}
	function ii(){var a=0,b=null;if(null!==X$1)for(var c=X$1,d=Sh;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===X$1?u$1("244"):void 0;if(d===d.nextScheduledRoot){Sh=X$1=d.nextScheduledRoot=null;break}else if(d===Sh)Sh=e=d.nextScheduledRoot,X$1.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===X$1){X$1=c;X$1.nextScheduledRoot=Sh;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot;}else{e>a&&(a=e,b=d);if(d===X$1)break;if(1073741823===
	a)break;c=d;d=d.nextScheduledRoot;}}Vh=b;Y$1=a;}var li=!1;function Jh(){return li?!0:scheduler.unstable_shouldYield()?li=!0:!1}function fi(){try{if(!Jh()&&null!==Sh){di();var a=Sh;do{var b=a.expirationTime;0!==b&&ai<=b&&(a.nextExpirationTimeToWorkOn=ai);a=a.nextScheduledRoot;}while(a!==Sh)}ki(0,!0);}finally{li=!1;}}
	function ki(a,b){ii();if(b)for(di(),bi=ai;null!==Vh&&0!==Y$1&&a<=Y$1&&!(li&&ai>Y$1);)ji(Vh,Y$1,ai>Y$1),ii(),di(),bi=ai;else for(;null!==Vh&&0!==Y$1&&a<=Y$1;)ji(Vh,Y$1,!1),ii();b&&(Th=0,Uh=null);0!==Y$1&&ei(Vh,Y$1);Ph=0;ci=null;if(null!==Zh)for(a=Zh,Zh=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete();}catch(d){Wh||(Wh=!0,Xh=d);}}if(Wh)throw a=Xh,Xh=null,Wh=!1,a;}function hi(a,b){W$1?u$1("253"):void 0;Vh=a;Y$1=b;ji(a,b,!1);ki(1073741823,!1);}
	function ji(a,b,c){W$1?u$1("245"):void 0;W$1=!0;if(c){var d=a.finishedWork;null!==d?mi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Ee(d)),Ih(a,c),d=a.finishedWork,null!==d&&(Jh()?a.finishedWork=d:mi(a,d,b)));}else d=a.finishedWork,null!==d?mi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Ee(d)),Ih(a,c),d=a.finishedWork,null!==d&&mi(a,d,b));W$1=!1;}
	function mi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===Zh?Zh=[d]:Zh.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===ci?Ph++:(ci=a,Ph=0);zh=vh=!0;a.current===b?u$1("177"):void 0;c=a.pendingCommitExpirationTime;0===c?u$1("261"):void 0;a.pendingCommitExpirationTime=0;d=b.expirationTime;var e=b.childExpirationTime;d=e>d?e:d;a.didError=!1;0===d?(a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=
	0):(e=a.latestPendingTime,0!==e&&(e>d?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>d&&(a.earliestPendingTime=a.latestPendingTime)),e=a.earliestSuspendedTime,0===e?ef(a,d):d<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,ef(a,d)):d>e&&ef(a,d));ff(0,a);sh.current=null;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ye=Hd;e=Td();if(Ud(e)){if("selectionStart"in e)var f={start:e.selectionStart,
	end:e.selectionEnd};else a:{f=(f=e.ownerDocument)&&f.defaultView||window;var g=f.getSelection&&f.getSelection();if(g&&0!==g.rangeCount){f=g.anchorNode;var h=g.anchorOffset,k=g.focusNode;g=g.focusOffset;try{f.nodeType,k.nodeType;}catch(pb){f=null;break a}var l=0,m=-1,q=-1,z=0,A=0,C=e,V=null;b:for(;;){for(var w;;){C!==f||0!==h&&3!==C.nodeType||(m=l+h);C!==k||0!==g&&3!==C.nodeType||(q=l+g);3===C.nodeType&&(l+=C.nodeValue.length);if(null===(w=C.firstChild))break;V=C;C=w;}for(;;){if(C===e)break b;V===f&&
	++z===h&&(m=l);V===k&&++A===g&&(q=l);if(null!==(w=C.nextSibling))break;C=V;V=C.parentNode;}C=w;}f=-1===m||-1===q?null:{start:m,end:q};}else f=null;}f=f||{start:0,end:0};}else f=null;ze={focusedElem:e,selectionRange:f};Hd=!1;for(U$1=d;null!==U$1;){e=!1;f=void 0;try{for(;null!==U$1;){if(U$1.effectTag&256)a:{var r=U$1.alternate;h=U$1;switch(h.tag){case 0:case 11:case 15:gh(2,0,h);break a;case 1:if(h.effectTag&256&&null!==r){var p=r.memoizedProps,x=r.memoizedState,P=h.stateNode,ti=P.getSnapshotBeforeUpdate(h.elementType===
	h.type?p:lg(h.type,p),x);P.__reactInternalSnapshotBeforeUpdate=ti;}break a;case 3:case 5:case 6:case 4:case 17:break a;default:u$1("163");}}U$1=U$1.nextEffect;}}catch(pb){e=!0,f=pb;}e&&(null===U$1?u$1("178"):void 0,fh(U$1,f),null!==U$1&&(U$1=U$1.nextEffect));}for(U$1=d;null!==U$1;){r=!1;p=void 0;try{for(;null!==U$1;){var y=U$1.effectTag;y&16&&oe(U$1.stateNode,"");if(y&128){var D=U$1.alternate;if(null!==D){var t=D.ref;null!==t&&("function"===typeof t?t(null):t.current=null);}}switch(y&14){case 2:kh(U$1);U$1.effectTag&=-3;break;case 6:kh(U$1);
	U$1.effectTag&=-3;lh(U$1.alternate,U$1);break;case 4:lh(U$1.alternate,U$1);break;case 8:x=U$1,ih(x),x.return=null,x.child=null,x.alternate&&(x.alternate.child=null,x.alternate.return=null);}U$1=U$1.nextEffect;}}catch(pb){r=!0,p=pb;}r&&(null===U$1?u$1("178"):void 0,fh(U$1,p),null!==U$1&&(U$1=U$1.nextEffect));}t=ze;D=Td();y=t.focusedElem;p=t.selectionRange;if(D!==y&&y&&y.ownerDocument&&Sd(y.ownerDocument.documentElement,y)){null!==p&&Ud(y)&&(D=p.start,t=p.end,void 0===t&&(t=D),"selectionStart"in y?(y.selectionStart=D,y.selectionEnd=
	Math.min(t,y.value.length)):(t=(D=y.ownerDocument||document)&&D.defaultView||window,t.getSelection&&(t=t.getSelection(),x=y.textContent.length,r=Math.min(p.start,x),p=void 0===p.end?r:Math.min(p.end,x),!t.extend&&r>p&&(x=p,p=r,r=x),x=Rd(y,r),P=Rd(y,p),x&&P&&(1!==t.rangeCount||t.anchorNode!==x.node||t.anchorOffset!==x.offset||t.focusNode!==P.node||t.focusOffset!==P.offset)&&(D=D.createRange(),D.setStart(x.node,x.offset),t.removeAllRanges(),r>p?(t.addRange(D),t.extend(P.node,P.offset)):(D.setEnd(P.node,
	P.offset),t.addRange(D))))));D=[];for(t=y;t=t.parentNode;)1===t.nodeType&&D.push({element:t,left:t.scrollLeft,top:t.scrollTop});"function"===typeof y.focus&&y.focus();for(y=0;y<D.length;y++)t=D[y],t.element.scrollLeft=t.left,t.element.scrollTop=t.top;}ze=null;Hd=!!ye;ye=null;a.current=b;for(U$1=d;null!==U$1;){y=!1;D=void 0;try{for(t=a,r=c;null!==U$1;){var pa=U$1.effectTag;if(pa&36){var Sb=U$1.alternate;p=U$1;x=r;switch(p.tag){case 0:case 11:case 15:gh(16,32,p);break;case 1:var Mc=p.stateNode;if(p.effectTag&4)if(null===
	Sb)Mc.componentDidMount();else{var Di=p.elementType===p.type?Sb.memoizedProps:lg(p.type,Sb.memoizedProps);Mc.componentDidUpdate(Di,Sb.memoizedState,Mc.__reactInternalSnapshotBeforeUpdate);}var bh=p.updateQueue;null!==bh&&tf(p,bh,Mc,x);break;case 3:var ch=p.updateQueue;if(null!==ch){P=null;if(null!==p.child)switch(p.child.tag){case 5:P=p.child.stateNode;break;case 1:P=p.child.stateNode;}tf(p,ch,P,x);}break;case 5:var Ei=p.stateNode;null===Sb&&p.effectTag&4&&Ae(p.type,p.memoizedProps)&&Ei.focus();break;
	case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:u$1("163");}}if(pa&128){var Zc=U$1.ref;if(null!==Zc){var dh=U$1.stateNode;switch(U$1.tag){case 5:var Be=dh;break;default:Be=dh;}"function"===typeof Zc?Zc(Be):Zc.current=Be;}}pa&512&&(Ah=t);U$1=U$1.nextEffect;}}catch(pb){y=!0,D=pb;}y&&(null===U$1?u$1("178"):void 0,fh(U$1,D),null!==U$1&&(U$1=U$1.nextEffect));}null!==d&&null!==Ah&&(pa=Eh.bind(null,a,d),Bh=scheduler.unstable_scheduleCallback(pa),Ch=pa);vh=zh=!1;"function"===typeof Se&&Se(b.stateNode);pa=b.expirationTime;
	b=b.childExpirationTime;b=b>pa?b:pa;0===b&&(ph=null);a.expirationTime=b;a.finishedWork=null;}function nh(a){null===Vh?u$1("246"):void 0;Vh.expirationTime=0;Wh||(Wh=!0,Xh=a);}function ni(a,b){var c=Z$1;Z$1=!0;try{return a(b)}finally{(Z$1=c)||W$1||ki(1073741823,!1);}}function oi(a,b){if(Z$1&&!Yh){Yh=!0;try{return a(b)}finally{Yh=!1;}}return a(b)}function pi(a,b,c){if(Mh)return a(b,c);Z$1||W$1||0===Nh||(ki(Nh,!1),Nh=0);var d=Mh,e=Z$1;Z$1=Mh=!0;try{return a(b,c)}finally{Mh=d,(Z$1=e)||W$1||ki(1073741823,!1);}}
	function qi(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===kd(c)&&1===c.tag?void 0:u$1("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(L$1(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return;}while(null!==g);u$1("171");g=void 0;}if(1===c.tag){var h=c.type;if(L$1(h)){c=Pe(c,h,g);break a}}c=g;}else c=Je;null===b.context?b.context=c:b.pendingContext=c;b=e;e=mf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
	ag();of(f,e);bg(f,d);return d}function ri(a,b,c,d){var e=b.current,f=Zf();e=$f(f,e);return qi(a,b,c,e,d)}function si(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function ui(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:$b,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
	Db=function(a,b,c){switch(b){case "input":Cc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ma(d);e?void 0:u$1("90");Wb(d);Cc(d,e);}}}break;case "textarea":he(a,c);break;case "select":b=c.value,null!=b&&ee(a,!!c.multiple,b,!1);}};
	function vi(a){var b=1073741822-25*(((1073741822-Zf()+500)/25|0)+1);b>=th&&(b=th-1);this._expirationTime=th=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0;}vi.prototype.render=function(a){this._defer?void 0:u$1("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new wi;qi(a,b,null,c,d._onCommit);return d};
	vi.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a);}};
	vi.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:u$1("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?u$1("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this;}this._defer=!1;hi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children);}else this._next=
	null,this._defer=!1;};vi.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0, a[b])();}};function wi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this);}wi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a);}};
	wi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?u$1("191",c):void 0;c();}}};
	function xi(a,b,c){b=M$1(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a;}
	xi.prototype.render=function(a,b){var c=this._internalRoot,d=new wi;b=void 0===b?null:b;null!==b&&d.then(b);ri(a,c,null,d._onCommit);return d};xi.prototype.unmount=function(a){var b=this._internalRoot,c=new wi;a=void 0===a?null:a;null!==a&&c.then(a);ri(null,b,null,c._onCommit);return c};xi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new wi;c=void 0===c?null:c;null!==c&&e.then(c);ri(b,d,a,e._onCommit);return e};
	xi.prototype.createBatch=function(){var a=new vi(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a);}return a};function yi(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Jb=ni;Kb=pi;Lb=function(){W$1||0===Nh||(ki(Nh,!1),Nh=0);};
	function zi(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new xi(a,!1,b)}
	function Ai(a,b,c,d,e){yi(c)?void 0:u$1("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=si(f._internalRoot);g.call(a);};}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e);}else{f=c._reactRootContainer=zi(c,d);if("function"===typeof e){var h=e;e=function(){var a=si(f._internalRoot);h.call(a);};}oi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e);});}return si(f._internalRoot)}
	function Bi(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;yi(b)?void 0:u$1("200");return ui(a,b,null,c)}
	var Ci={createPortal:Bi,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?u$1("188"):u$1("268",Object.keys(a)));a=nd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return Ai(null,a,b,!0,c)},render:function(a,b,c){return Ai(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?u$1("38"):void 0;return Ai(a,b,c,!1,d)},unmountComponentAtNode:function(a){yi(a)?
	void 0:u$1("40");return a._reactRootContainer?(oi(function(){Ai(null,null,a,!1,function(){a._reactRootContainer=null;});}),!0):!1},unstable_createPortal:function(){return Bi.apply(void 0,arguments)},unstable_batchedUpdates:ni,unstable_interactiveUpdates:pi,flushSync:function(a,b){W$1?u$1("187"):void 0;var c=Z$1;Z$1=!0;try{return Rh(a,b)}finally{Z$1=c,ki(1073741823,!1);}},unstable_flushControlled:function(a){var b=Z$1;Z$1=!0;try{Rh(a);}finally{(Z$1=b)||W$1||ki(1073741823,!1);}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ka,
	La,Ma,Da.injectEventPluginsByName,ra,Sa,function(a){Aa(a,Ra);},Hb,Ib,Jd,Fa]},createRoot:function(a,b){yi(a)?void 0:u$1("299","createRoot");return new xi(a,!0,null!=b&&!0===b.hydrate)}};(function(a){var b=a.findFiberByHostInstance;return Ve(objectAssign({},a,{findHostInstanceByFiber:function(a){a=nd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ja,bundleType:0,version:"16.7.0-alpha.2",rendererPackageName:"react-dom"});
	var Fi={default:Ci},Gi=Fi&&Ci||Fi;var reactDom_production_min=Gi.default||Gi;

	var reactDom = createCommonjsModule(function (module) {

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  module.exports = reactDom_production_min;
	}
	});
	var reactDom_1 = reactDom.render;

	/**
	 * The base error for this package.
	 */
	class CollectionError extends Error {
	    constructor(message) {
	        super(message);
	        this.name = 'CollectionError';
	        Object.setPrototypeOf(this, CollectionError.prototype);
	    }
	}

	/**
	 * Error type for sets.
	 */
	class SetError extends CollectionError {
	    constructor(message) {
	        super(message);
	        this.name = 'SetError';
	        Object.setPrototypeOf(this, SetError.prototype);
	    }
	    /**
	     * Error thrown when trying to set a new value
	     * that already exists.
	     */
	    static duplicate(value) {
	        return new SetError(`The value ${value} does already exist`);
	    }
	    /**
	     * Error thrown when trying to set a new value
	     * that already exists.
	     */
	    static noElements() {
	        return new SetError('The set is empty');
	    }
	    /**
	     * Error thrown when trying to set a new value
	     * that already exists.
	     */
	    static notExists(value) {
	        return new SetError(`The value ${value} does not exist`);
	    }
	}

	/**
	 * Internal data structure used to model doubly linked items.
	 */
	class DoubleLinkedItem {
	    constructor(value, prev, next) {
	        this.value = value;
	        this.prev = prev;
	        this.next = next;
	    }
	}

	/**
	 * Doubly Linked Ordered Set.
	 */
	class DoublyLinkedOrderedSet {
	    constructor(values) {
	        /**
	         * Adds `value` to the set.
	         */
	        this.internalAdd = (value) => {
	            const lastItem = this.lastItem;
	            const item = new DoubleLinkedItem(value, lastItem, null);
	            if (lastItem != null) {
	                lastItem.next = item;
	            }
	            this.arrayList.push(item);
	            this.valueMap.set(value, item);
	        };
	        /**
	         * Enables iterating in `for..of` loops.
	         */
	        this[Symbol.iterator] = function* () {
	            if (this.isEmpty) {
	                return;
	            }
	            let item = this.firstItem;
	            while (item != null) {
	                yield item.value;
	                item = item.next;
	            }
	            return;
	        };
	        /**
	         * Adds `value` to the set.
	         * If the `value` already exist a `SetError` is thrown.
	         */
	        this.add = (value) => {
	            if (this.valueMap.has(value)) {
	                throw new SetError(`The value: ${value} already exists`);
	            }
	            this.internalAdd(value);
	        };
	        /**
	         * Returns an entries iterator.
	         */
	        this.entries = function* () {
	            if (this.isEmpty) {
	                return null;
	            }
	            let item = this.firstItem;
	            while (item != null) {
	                yield [item.value, item.value];
	                item = item.next;
	            }
	            return null;
	        };
	        this.arrayList = [];
	        this.valueMap = new Map();
	        if (values != null) {
	            for (const value of Array.from(values)) {
	                this.add(value);
	            }
	        }
	    }
	    /**
	     * The first value of the ordered set.
	     * Throws a `SetError` if the set is empty.
	     */
	    get first() {
	        const firstItem = this.firstItem;
	        if (firstItem == null) {
	            throw SetError.noElements();
	        }
	        return firstItem.value;
	    }
	    /**
	     * The first internal data structure item of the ordered set.
	     * Throws a `SetError` if the set is empty.
	     */
	    get firstItem() {
	        if (this.isEmpty) {
	            return null;
	        }
	        return this.arrayList[0];
	    }
	    /**
	     * The property is true if the set is empty.
	     */
	    get isEmpty() {
	        return this.size === 0;
	    }
	    /**
	     * The last value of the set.
	     * Throws a `SetError` if the set is empty.
	     */
	    get last() {
	        const lastItem = this.lastItem;
	        if (lastItem == null) {
	            throw SetError.noElements();
	        }
	        return lastItem.value;
	    }
	    /**
	     * The last internal data structure item of the ordered set.
	     * Throws a `SetError` if the set is empty.
	     */
	    get lastItem() {
	        if (this.isEmpty) {
	            return null;
	        }
	        return this.arrayList[this.arrayList.length - 1];
	    }
	    /**
	     * The amount of values in the set.
	     */
	    get size() {
	        return this.arrayList.length;
	    }
	    /**
	     * Constructs an empty `DoublyLinkedOrderedSet`.
	     */
	    static empty() {
	        return new DoublyLinkedOrderedSet();
	    }
	    /**
	     * Constructs a `DoublyLinkedOrderedSet` from an Iterable.
	     */
	    // tslint:disable-next-line:no-reserved-keywords
	    static from(values) {
	        return new DoublyLinkedOrderedSet(values);
	    }
	    /**
	     * Constructs a `DoublyLinkedOrderedSet` from
	     * with a value from each argument.
	     * If no arguments are provided it constructs an empty set.
	     */
	    // tslint:disable-next-line:no-reserved-keywords
	    static of(...values) {
	        return DoublyLinkedOrderedSet.from(values);
	    }
	    /**
	     * Sets `value` `afterValue`.
	     * If `value` already exist a `SetError` is thrown.
	     * If `afterValue` does not exist a `SetError` is thrown.
	     */
	    addAfter(value, afterValue) {
	        if (this.valueMap.has(value)) {
	            throw SetError.duplicate(value);
	        }
	        const afterItem = this.valueMap.get(afterValue);
	        if (afterItem == null) {
	            throw SetError.notExists(afterValue);
	        }
	        const afterIdx = this.arrayList.indexOf(afterItem);
	        if (afterIdx === -1) {
	            throw new Error(`The after value exist in valueMap but item does not exist in internal array list`);
	        }
	        const newItem = new DoubleLinkedItem(value, afterItem, afterItem.next);
	        if (afterItem.next != null) {
	            afterItem.next.prev = newItem;
	        }
	        afterItem.next = newItem;
	        this.arrayList.splice(afterIdx + 1, 0, newItem);
	        this.valueMap.set(value, newItem);
	    }
	    /**
	     * Sets `value` `beforeValue`.
	     * If `value` already exist a `SetError` is thrown.
	     * If `beforeValue` does not exist a `SetError` is thrown.
	     */
	    addBefore(value, beforeValue) {
	        if (this.valueMap.has(value)) {
	            throw SetError.duplicate(value);
	        }
	        const beforeItem = this.valueMap.get(beforeValue);
	        if (beforeItem == null) {
	            throw SetError.notExists(beforeValue);
	        }
	        const beforeIdx = this.arrayList.indexOf(beforeItem);
	        if (beforeIdx === -1) {
	            throw new Error(`The after value exist in valueMap but item does not exist in internal array list`);
	        }
	        const newItem = new DoubleLinkedItem(value, beforeItem.prev, beforeItem);
	        if (beforeItem.prev != null) {
	            beforeItem.prev.next = newItem;
	        }
	        beforeItem.prev = newItem;
	        this.arrayList.splice(beforeIdx, 0, newItem);
	        this.valueMap.set(value, newItem);
	    }
	    /**
	     * Clears the set for all values.
	     */
	    clear() {
	        this.arrayList = [];
	        this.valueMap.clear();
	    }
	    /**
	     * Deletes a single `value` from the set.
	     * If the value does not exist, a `SetError` is thrown.
	     */
	    // tslint:disable-next-line:no-reserved-keywords
	    delete(value) {
	        const item = this.valueMap.get(value);
	        if (item == null) {
	            throw new SetError(`The value ${value} does not exist`);
	        }
	        const idx = this.arrayList.indexOf(item);
	        if (idx === -1) {
	            throw new SetError(`The value ${value} was not found in internal array but in valueMap`);
	        }
	        if (item.prev != null) {
	            item.prev.next = item.next;
	        }
	        if (item.next != null) {
	            item.next.prev = item.prev;
	        }
	        this.arrayList.splice(idx, 1);
	        this.valueMap.delete(value);
	    }
	    /**
	     * Enables to call `iter` on each value in the set.
	     */
	    forEeach(iter) {
	        this.arrayList.forEach((e, i) => iter(e.value, i));
	    }
	    /**
	     * Returns true if `value` exists in the set, otherwise false.
	     */
	    has(value) {
	        return this.valueMap.has(value);
	    }
	    /**
	     * Returns the value after `value`.
	     * If `value` does not exist a `SetError` is thrown.
	     * If `value` is the _last_ value `null` is returned.
	     */
	    next(value) {
	        const item = this.valueMap.get(value);
	        if (item == null) {
	            throw SetError.notExists(value);
	        }
	        if (item.next == null) {
	            return null;
	        }
	        return item.next.value;
	    }
	    /**
	     * Returns the value before `value`.
	     * If `value` does not exist a `SetError` is thrown.
	     * If `value` is the _first_ value `null` is returned.
	     */
	    prev(value) {
	        const item = this.valueMap.get(value);
	        if (item == null) {
	            throw SetError.notExists(value);
	        }
	        if (item.prev == null) {
	            return null;
	        }
	        return item.prev.value;
	    }
	    /**
	     * Overwrites an `existingValue` with `newValue`.
	     * If `newValue` already exist a `SetError` is thrown.
	     * If `existingValue` does not exist a `SetError` is thrown.
	     */
	    // tslint:disable-next-line:no-reserved-keywords
	    set(existingValue, newValue) {
	        if (this.valueMap.has(newValue)) {
	            throw SetError.duplicate(newValue);
	        }
	        const item = this.valueMap.get(existingValue);
	        if (item == null) {
	            throw SetError.notExists(existingValue);
	        }
	        item.value = newValue;
	        this.valueMap.delete(existingValue);
	        this.valueMap.set(newValue, item);
	    }
	    /**
	     * Moves `existingValue` after `afterValue` in the set.
	     * If any of `existingValue` or `afterValue` don't exist
	     * a `SetError` is thrown.
	     */
	    setAfter(existingValue, afterValue) {
	        if (!this.valueMap.has(existingValue)) {
	            throw SetError.notExists(existingValue);
	        }
	        const afterItem = this.valueMap.get(afterValue);
	        if (afterItem == null) {
	            throw SetError.notExists(afterValue);
	        }
	        if (existingValue === afterValue) {
	            throw SetError.duplicate(existingValue);
	        }
	        this.delete(existingValue);
	        this.addAfter(existingValue, afterValue);
	    }
	    /**
	     * Moves `existingValue` before `beforeValue` in the set.
	     * If any of `existingValue` or `beforeValue` don't exist
	     * a `SetError` is thrown.
	     */
	    setBefore(existingValue, beforeValue) {
	        if (!this.valueMap.has(existingValue)) {
	            throw SetError.notExists(existingValue);
	        }
	        const beforeItem = this.valueMap.get(beforeValue);
	        if (beforeItem == null) {
	            throw SetError.notExists(beforeValue);
	        }
	        if (existingValue === beforeValue) {
	            throw SetError.duplicate(existingValue);
	        }
	        this.delete(existingValue);
	        this.addBefore(existingValue, beforeValue);
	    }
	    /**
	     * Returns string representation of the values in the set.
	     */
	    toString() {
	        if (this.arrayList.length > 3) {
	            return 'DoublyLinkedOrderedSet[\n' + this.arrayList.map(e => '    ' + e.value).join(',\n') + '\n]';
	        }
	        else {
	            return `DoublyLinkedOrderedSet[${this.arrayList.map(e => e.value).join(', ')}]`;
	        }
	    }
	    /**
	     * Returns an iterator of the values in the set.
	     */
	    values() {
	        return this[Symbol.iterator]();
	    }
	}

	const focusOriginNone = { focusOrigin: 'none' };
	const focusOriginNext = { focusOrigin: 'next' };
	const focusOriginPrev = { focusOrigin: 'prev' };
	const focusOriginChild = { focusOrigin: 'child' };
	/**
	 * Library class for controlling complex nested linked structures.
	 */
	class TabRegistry {
	    /**
	     * Constructs a registry with optional parent registry.
	     */
	    constructor(options) {
	        /**
	         * When this is true, the registry won't jump boundries
	         * but just focus the opposite end of the tab registry.
	         */
	        this.cycle = false;
	        /**
	         * Indicator for if focus cycle is running.
	         * This is used for detect infinite loops.
	         */
	        this.focusCycleStartKey = null;
	        /**
	         * Enabling iterating through all the focusers.
	         */
	        this[Symbol.iterator] = function* () {
	            if (this.isEmpty) {
	                return;
	            }
	            let key = this.firstKey;
	            while (key) {
	                if (key instanceof TabRegistry) {
	                    yield* Array.from(key);
	                }
	                else {
	                    yield this.focuserMap.get(key);
	                }
	                key = this.getNextKey(key);
	            }
	        };
	        /**
	         * Returns an iterator of all the `keys` in this registry.
	         */
	        this.keys = function* () {
	            if (this.registry.isEmpty) {
	                return;
	            }
	            let key = this.registry.first;
	            while (key) {
	                yield key;
	                key = this.getNextKey(key);
	            }
	        };
	        /**
	         * Returns an iterator of all the `keys` in this
	         * and all nested registries.
	         */
	        this.keysRecursive = function* () {
	            if (this.registry.isEmpty) {
	                return;
	            }
	            let key = this.registry.first;
	            while (key) {
	                const focuser = this.focuserMap.get(key);
	                if (focuser instanceof TabRegistry) {
	                    yield* Array.from(focuser.keysRecursive());
	                }
	                else {
	                    yield key;
	                }
	                key = this.getNextKey(key);
	            }
	        };
	        this.focuserMap = new Map();
	        this.registry = new DoublyLinkedOrderedSet();
	        this.internalParentRegistry = null;
	        if (options == null) {
	            this.cycle = false;
	            this.focusFirstOnOriginNext = false;
	            this.focusParentOnChildOrigin = false;
	        }
	        else {
	            this.cycle = options.cycle === true;
	            this.focusFirstOnOriginNext = options.focusFirstOnOriginNext === true;
	            this.focusParentOnChildOrigin = options.focusParentOnChildOrigin === true;
	        }
	    }
	    get first() {
	        const first = this.firstKey;
	        if (first == null) {
	            return null;
	        }
	        return this.focuserMap.get(first);
	    }
	    /**
	     * The first key of the registry.
	     * Is `null` if registry is empty.
	     */
	    get firstKey() {
	        if (this.isEmpty) {
	            return null;
	        }
	        return this.registry.first;
	    }
	    /**
	     * Property is `true` when tab cycling is enabled.
	     */
	    get isCycleEnabled() {
	        return this.cycle === true;
	    }
	    /**
	     * Property is `true` if the registry is empty.
	     */
	    get isEmpty() {
	        return this.registry.isEmpty;
	    }
	    get last() {
	        const last = this.lastKey;
	        if (last == null) {
	            return null;
	        }
	        return this.focuserMap.get(last);
	    }
	    /**
	     * The last key of the registry.
	     * Is `null` if registry is empty.
	     */
	    get lastKey() {
	        if (this.isEmpty) {
	            return null;
	        }
	        return this.registry.last;
	    }
	    /**
	     * Get the parent registry if exists.
	     */
	    get parentRegistry() {
	        return this.internalParentRegistry;
	    }
	    /**
	     * Get the root registry, recurse to toplevel.
	     * If `this` registry has no parent return itself.
	     */
	    get rootRegistry() {
	        let registry = this;
	        while (registry.parentRegistry != null) {
	            registry = registry.parentRegistry;
	        }
	        return registry;
	    }
	    /**
	     * Constructs any empty registry with default options.
	     */
	    static empty() {
	        return new TabRegistry();
	    }
	    /**
	     * Construct registry from nested map structure.
	     */
	    static fromMap(map, options) {
	        const registry = new TabRegistry(options);
	        map.forEach((value, key) => {
	            if (value instanceof Map) {
	                const r = TabRegistry.fromMap(value);
	                registry.add(key, r);
	            }
	            else {
	                registry.add(key, value);
	            }
	        });
	        return registry;
	    }
	    /**
	     * Pretty print all the keys recursively.
	     */
	    _toString(iterable, padding, level) {
	        const lvl = level == null ? 1 : level;
	        let result = '';
	        let first = true;
	        for (const key of Array.from(iterable)) {
	            if (first) {
	                first = false;
	            }
	            else {
	                result += ',\n';
	            }
	            const val = this.focuserMap.get(key);
	            if (val instanceof TabRegistry) {
	                result += this._toString.call(val, val.keys(), padding + '    ', lvl + 1);
	            }
	            else {
	                result += padding + key;
	            }
	        }
	        return result;
	    }
	    /**
	     * Add a `focuser` to the registry referenced by `key`.
	     */
	    add(key, focuser) {
	        this.registry.add(key);
	        this.focuserMap.set(key, focuser);
	        if (focuser instanceof TabRegistry) {
	            focuser.setParentRegistry(key, this);
	        }
	    }
	    /**
	     * Add a `focuser` to the registry after the `afterKey`
	     * referenced by `key`.
	     */
	    addAfter(key, focuser, afterKey) {
	        this.registry.addAfter(key, afterKey);
	        this.focuserMap.set(key, focuser);
	        if (focuser instanceof TabRegistry) {
	            focuser.setParentRegistry(key, this);
	        }
	    }
	    /**
	     * Add a `focuser` to the registry before the `beforeKey`
	     * referenced by `key`.
	     */
	    addBefore(key, focuser, beforeKey) {
	        this.registry.addBefore(key, beforeKey);
	        this.focuserMap.set(key, focuser);
	        if (focuser instanceof TabRegistry) {
	            focuser.setParentRegistry(key, this);
	        }
	    }
	    /**
	     * Delete `key` from the registry.
	     */
	    // tslint:disable-next-line:no-reserved-keywords
	    delete(key) {
	        this.registry.delete(key);
	        this.focuserMap.delete(key);
	    }
	    /**
	     * Disable tab cycling.
	     */
	    disableCycle() {
	        this.cycle = false;
	        return this;
	    }
	    /**
	     * Enable tab cycling.
	     */
	    enableCycle() {
	        this.cycle = true;
	        return this;
	    }
	    /**
	     * Execute focuser for `key`.
	     * Returns `true` if the focuser was successful.
	     * Returns `false` if the focuser does not exist.
	     */
	    focus(key, options) {
	        const opts = options || focusOriginNone;
	        if (this.focusParentOnChildOrigin && opts.focusOrigin === 'child') {
	            return this.focusParent();
	        }
	        let internalKey = key;
	        if (internalKey == null) {
	            if (options != null && options.focusOrigin === 'next' && !options.focusFirstOnOriginNext) {
	                internalKey = this.lastKey;
	            }
	            else {
	                internalKey = this.firstKey;
	            }
	            if (internalKey == null) {
	                return false;
	            }
	        }
	        const focuser = this.focuserMap.get(internalKey);
	        if (focuser == null) {
	            return false;
	        }
	        return focuser instanceof TabRegistry
	            ? focuser.focus(undefined, Object.assign({}, opts, { focusFirstOnOriginNext: focuser.focusFirstOnOriginNext }))
	            : focuser(opts);
	    }
	    /**
	     * Execute first focuser in the registry.
	     * If the first entry is not focusable recursive through
	     * the registry until a focuser returns `true`.
	     *
	     * Returns `true` if a focuser is successful.
	     * Returns `false` if no focuser was sucessful.
	     */
	    focusFirst() {
	        if (this.registry.isEmpty) {
	            return false;
	        }
	        const first = this.registry.first;
	        const focuser = this.focuserMap.get(first);
	        if (focuser == null) {
	            return false;
	        }
	        const result = focuser instanceof TabRegistry ? focuser.focusFirst() : focuser(focusOriginPrev);
	        if (result) {
	            return true;
	        }
	        else {
	            if (this.cycle && this.focusCycleStartKey == null) {
	                this.focusCycleStartKey = first;
	            }
	            return this.focusNext(first);
	        }
	    }
	    /**
	     * Excute focuser that matches the `keys` path
	     * from the first key in the registry.
	     */
	    focusFirstIn(keys) {
	        if (this.registry.isEmpty) {
	            return false;
	        }
	        const first = this.registry.first;
	        if (first == null) {
	            return false;
	        }
	        return this.focusIn([first, ...keys], focusOriginPrev);
	    }
	    /**
	     * Execute focuser that matchs the `keys` path
	     * the first key will be the root identifier.
	     */
	    focusIn(keys, options) {
	        let key = keys.shift();
	        if (key == null) {
	            return false;
	        }
	        let registry = this;
	        while (registry.has(key)) {
	            const focuser = registry.get(key);
	            if (focuser == null) {
	                return false;
	            }
	            const k = keys.shift();
	            if (k != null) {
	                key = k;
	                if (focuser instanceof TabRegistry) {
	                    registry = focuser;
	                }
	                else {
	                    return false;
	                }
	            }
	            else {
	                if (focuser instanceof TabRegistry) {
	                    return focuser.focus(undefined, options);
	                }
	                else {
	                    if (options == null) {
	                        return focuser(focusOriginNone);
	                    }
	                    else {
	                        return focuser(options);
	                    }
	                }
	            }
	        }
	        return false;
	    }
	    /**
	     * Execute last focuser in the registry.
	     * If the last entry is not focusable recursive backwards through
	     * the registry until a focuser returns `true`.
	     *
	     * Returns `true` if a focuser is successful.
	     * Returns `false` if no focuser was sucessful.
	     */
	    focusLast() {
	        if (this.registry.isEmpty) {
	            return false;
	        }
	        const last = this.registry.last;
	        const focuser = this.focuserMap.get(last);
	        if (focuser == null) {
	            return false;
	        }
	        const result = focuser instanceof TabRegistry ? focuser.focusLast() : focuser(focusOriginNext);
	        if (result) {
	            return true;
	        }
	        else {
	            if (this.cycle && this.focusCycleStartKey == null) {
	                this.focusCycleStartKey = last;
	            }
	            return this.focusPrev(last);
	        }
	    }
	    /**
	     * Excute focuser that matches the `keys` path
	     * from the last key in the registry.
	     */
	    focusLastIn(keys) {
	        if (this.registry.isEmpty) {
	            return false;
	        }
	        const last = this.registry.last;
	        if (last == null) {
	            return false;
	        }
	        return this.focusIn([last, ...keys], focusOriginNext);
	    }
	    /**
	     * Execute the focuser after `key`.
	     * If the focuser was not successful recurse through
	     * the registry until a focuser returns `true`.
	     *
	     * Returns `true` if a focuser is successful.
	     * Returns `false` if no focuser was sucessful.
	     */
	    focusNext(key) {
	        // remember to unset the focusCycleStartKey
	        // for every return path of this function
	        // if cycly is enabled.
	        let focuser;
	        let current;
	        let next = this.getNextKey(key);
	        const totalCount = this.registry.size;
	        for (let i = totalCount; i > 0; i--) {
	            if (next == null) {
	                break;
	            }
	            current = next;
	            focuser = this.focuserMap.get(current);
	            next = this.getNextKey(current);
	            if (focuser == null) {
	                continue;
	            }
	            const result = focuser instanceof TabRegistry ? focuser.focusFirst() : focuser(focusOriginPrev);
	            if (result) {
	                this.focusCycleStartKey = null;
	                return true;
	            }
	            // stop cycling if we have seen the key before.
	            if (this.cycle && current === this.focusCycleStartKey) {
	                this.focusCycleStartKey = null;
	                return false;
	            }
	        }
	        if (this.cycle) {
	            // if no cycle start key has been set before
	            // then set it to the key this focusNext loop was started with.
	            if (this.focusCycleStartKey == null) {
	                this.focusCycleStartKey = key;
	                // if the focus cycle start key is the same as
	                // the key we started this loop with
	            }
	            else if (this.focusCycleStartKey === key) {
	                this.focusCycleStartKey = null;
	                return false;
	            }
	            return this.focusFirst();
	        }
	        if (this.internalParentRegistry != null) {
	            this.focusCycleStartKey = null;
	            this.internalParentRegistry.focusNext(this.parentRegistryKey);
	            return true;
	        }
	        this.focusCycleStartKey = null;
	        return false;
	    }
	    /**
	     * Excute focuser that matches the `keys` path
	     * from the key after the first key in `keys`.
	     */
	    focusNextIn(keys) {
	        const key = keys.shift();
	        if (key == null) {
	            return false;
	        }
	        const next = this.getNextKey(key);
	        if (next == null) {
	            return false;
	        }
	        return this.focusIn([next, ...keys], focusOriginPrev);
	    }
	    /**
	     * Focus the parent registry.
	     */
	    focusParent() {
	        if (this.internalParentRegistry != null) {
	            return this.internalParentRegistry.focus(undefined, focusOriginChild);
	        }
	        return false;
	    }
	    /**
	     * Execute the focuser before `key`.
	     * If the focuser was not successful recurse backwards through
	     * the registry until a focuser returns `true`.
	     *
	     * Returns `true` if a focuser is successful.
	     * Returns `false` if no focuser was sucessful.
	     */
	    focusPrev(key) {
	        // remember to unset the focusCycleStartKey
	        // for every return path of this function
	        // if cycly is enabled.
	        let focuser;
	        let current;
	        let prev = this.getPrevKey(key);
	        const totalCount = this.registry.size;
	        for (let i = totalCount; i > 0; i--) {
	            if (prev == null) {
	                break;
	            }
	            current = prev;
	            focuser = this.focuserMap.get(prev);
	            prev = this.getPrevKey(prev);
	            if (focuser == null) {
	                continue;
	            }
	            const result = focuser instanceof TabRegistry ? focuser.focusLast() : focuser(focusOriginNext);
	            if (result) {
	                this.focusCycleStartKey = null;
	                return true;
	            }
	            // stop cycling if we have seen the key before.
	            if (this.cycle && current === this.focusCycleStartKey) {
	                this.focusCycleStartKey = null;
	                return false;
	            }
	        }
	        if (this.cycle) {
	            // if no cycle start key has been set before
	            // then set it to the key this focusPrev loop was started with.
	            if (this.focusCycleStartKey == null) {
	                this.focusCycleStartKey = key;
	                // if the focus cycle start key is the same as
	                // the key we started this loop with
	            }
	            else if (this.focusCycleStartKey === key) {
	                this.focusCycleStartKey = null;
	                return false;
	            }
	            return this.focusLast();
	        }
	        if (this.internalParentRegistry != null) {
	            this.focusCycleStartKey = null;
	            this.internalParentRegistry.focusPrev(this.parentRegistryKey);
	            return true;
	        }
	        this.focusCycleStartKey = null;
	        return false;
	    }
	    /**
	     * Excute focuser that matches the `keys` path
	     * from the key before the first key in `keys`.
	     */
	    focusPrevIn(keys) {
	        const key = keys.shift();
	        if (key == null) {
	            return false;
	        }
	        const prev = this.getPrevKey(key);
	        if (prev == null) {
	            return false;
	        }
	        return this.focusIn([prev, ...keys], focusOriginNext);
	    }
	    /**
	     * Returns focuser for `key` if it exists
	     * otherwise return `null`.
	     */
	    // tslint:disable-next-line:no-reserved-keywords
	    get(key) {
	        const focuser = this.focuserMap.get(key);
	        if (focuser == null) {
	            return null;
	        }
	        else {
	            return focuser;
	        }
	    }
	    /**
	     * Returns the forcuser after `key` if it exists
	     * otherwise return `null`.
	     */
	    getNext(key) {
	        const next = this.getNextKey(key);
	        if (next == null) {
	            return null;
	        }
	        const focuser = this.focuserMap.get(next);
	        if (focuser == null) {
	            return null;
	        }
	        return focuser;
	    }
	    /**
	     * Returns the key next to the key parameter.
	     */
	    getNextKey(key) {
	        return this.registry.next(key);
	    }
	    /**
	     * Returns the forcuser before `key` if it exists
	     * otherwise return `null`.
	     */
	    getPrev(key) {
	        const prev = this.getPrevKey(key);
	        if (prev == null) {
	            return null;
	        }
	        const focuser = this.focuserMap.get(prev);
	        if (focuser == null) {
	            return null;
	        }
	        return focuser;
	    }
	    /**
	     * Returns the key previous to the key parameter.
	     */
	    getPrevKey(key) {
	        return this.registry.prev(key);
	    }
	    /**
	     * Returns whether or not the focuser for `key` exists.
	     */
	    has(key) {
	        return this.focuserMap.has(key);
	    }
	    /**
	     * Test if nested focuser that matchs the `keys` path
	     * from the first key exist.
	     */
	    hasIn(keys) {
	        let key = keys.shift();
	        if (key == null) {
	            return false;
	        }
	        let registry = this;
	        while (registry.has(key)) {
	            const focuser = registry.get(key);
	            if (focuser == null) {
	                return false;
	            }
	            const k = keys.shift();
	            if (k != null) {
	                key = k;
	                if (focuser instanceof TabRegistry) {
	                    registry = focuser;
	                }
	                else {
	                    return false;
	                }
	            }
	            else {
	                return true;
	            }
	        }
	        return false;
	    }
	    /**
	     * Returns whether or not there exists a focuser after `key`.
	     */
	    hasNext(key) {
	        if (!this.registry.has(key)) {
	            return false;
	        }
	        return this.getNextKey(key) != null;
	    }
	    /**
	     * Returns whether or not there exists a focuser prev `key`.
	     */
	    hasPrev(key) {
	        if (!this.registry.has(key)) {
	            return false;
	        }
	        return this.getPrevKey(key) != null;
	    }
	    /**
	     * Move a focuser to the next spot in the registry.
	     */
	    moveNext(key) {
	        const focuser = this.focuserMap.get(key);
	        if (focuser == null) {
	            throw new Error(`Focuser for ${key} was not found`);
	        }
	        const next = this.getNextKey(key);
	        if (next != null) {
	            this.registry.setAfter(key, next);
	        }
	    }
	    /**
	     * Move a focuser to the previous spot in the registry.
	     */
	    movePrev(key) {
	        const focuser = this.focuserMap.get(key);
	        if (focuser == null) {
	            throw new Error(`Focuser for ${key} was not found`);
	        }
	        const prev = this.getPrevKey(key);
	        if (prev != null) {
	            this.registry.setBefore(key, prev);
	        }
	    }
	    /**
	     * Overwrite focuser for `key`.
	     * It throws if `key` does not exist.
	     */
	    // tslint:disable-next-line:no-reserved-keywords
	    set(key, focuser) {
	        const existingFocuser = this.focuserMap.get(key);
	        if (existingFocuser == null) {
	            throw new Error(`Key does not exist: ${key}`);
	        }
	        else {
	            this.focuserMap.set(key, focuser);
	        }
	    }
	    /**
	     * Set the `key` of this registry from
	     * the `parentRegistry`.
	     */
	    setParentRegistry(parentRegistryKey, parentRegistry) {
	        this.internalParentRegistry = parentRegistry;
	        this.parentRegistryKey = parentRegistryKey;
	    }
	    /**
	     * Returns a string representation of this
	     * and all nested registries.
	     */
	    toString() {
	        return 'TabRegistry[\n' + this._toString(this.registry, '    ') + '\n' + ']';
	    }
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
	            t[p[i]] = s[p[i]];
	    return t;
	}

	/**
	 * Helper for type-wise asserting that passing an object of type never
	 * if however anything is passed to the function it will throw
	 * with the message of `msg`.
	 */
	/**
	 * Filtering componet props from DOM compatible props
	 * of type `TComp`.
	 */
	function filterPropKeys(props, filterFn) {
	    const propKeys = Object.keys(props);
	    return propKeys
	        .filter((propKey) => {
	        return filterFn(propKey);
	    })
	        .reduce((carry, propKey) => {
	        const intrinsicProp = propKey;
	        carry[intrinsicProp] = props[intrinsicProp];
	        return carry;
	    }, {});
	}
	/**
	 * Capture the control props, and return an object only containing those.
	 */
	function spreadControlProps(props) {
	    return Object.keys(props)
	        .filter(key => {
	        switch (key) {
	            case 'autoFocus':
	            case 'disabled':
	            case 'onArrowDown':
	            case 'onArrowKeys':
	            case 'onArrowLeft':
	            case 'onArrowRight':
	            case 'onArrowUp':
	            case 'onBlur':
	            case 'onDelete':
	            case 'onEnter':
	            case 'onEscape':
	            case 'onFocus':
	            case 'onMinus':
	            case 'onNavigationKeys':
	            case 'onPlus':
	            case 'onQuestionMark':
	            case 'onSpace':
	                return true;
	            default:
	                return false;
	        }
	    })
	        .reduce((carry, item) => {
	        carry[item] = props[item];
	        return carry;
	    }, {});
	}

	function hasNameProperty(obj) {
	    return obj != null && typeof obj.name === 'string';
	}
	const NavigationContext = react_2(null);
	class TabBoundaryWithTabRegistry extends react_1 {
	    constructor(props) {
	        super(props);
	        this.filterPropKeys = (propKey) => {
	            switch (propKey) {
	                case 'as':
	                case 'boundaryKey':
	                case 'cycle':
	                case 'focusFirstOnOriginNext':
	                case 'focusParentOnEscape':
	                case 'focusParentOnChildOrigin':
	                case 'parentRegistry':
	                case 'tabRegistryRef':
	                    return false;
	                default:
	                    return true;
	            }
	        };
	        this.onKeyDown = (e) => {
	            if (e.key === 'Tab' && hasNameProperty(e.target)) {
	                e.preventDefault();
	                e.stopPropagation();
	                if (e.shiftKey) {
	                    this.tabRegistry.focusPrev(e.target.name);
	                }
	                else {
	                    this.tabRegistry.focusNext(e.target.name);
	                }
	            }
	            else if (e.key === 'Escape' && this.props.focusParentOnEscape) {
	                e.preventDefault();
	                e.stopPropagation();
	                this.tabRegistry.focusParent();
	            }
	            if (this.props.onKeyDown != null) {
	                this.props.onKeyDown(e);
	            }
	        };
	        this.tabRegistry = new TabRegistry({
	            cycle: props.cycle,
	            focusFirstOnOriginNext: props.focusFirstOnOriginNext,
	            focusParentOnChildOrigin: props.focusParentOnChildOrigin,
	        });
	        if (props.tabRegistryRef != null) {
	            props.tabRegistryRef.current = this.tabRegistry;
	        }
	    }
	    componentDidMount() {
	        if (this.props.boundaryKey != null && this.props.parentRegistry != null) {
	            this.props.parentRegistry.add(this.props.boundaryKey, this.tabRegistry);
	        }
	    }
	    componentWillReceiveProps(nextProps) {
	        if (this.props.cycle !== nextProps.cycle) {
	            nextProps.cycle ? this.tabRegistry.enableCycle() : this.tabRegistry.disableCycle();
	        }
	        if (this.props.focusParentOnChildOrigin !== nextProps.focusParentOnChildOrigin) {
	            this.tabRegistry.focusParentOnChildOrigin = nextProps.focusParentOnChildOrigin === true;
	        }
	        if (this.props.focusFirstOnOriginNext !== nextProps.focusFirstOnOriginNext) {
	            this.tabRegistry.focusFirstOnOriginNext = nextProps.focusFirstOnOriginNext === true;
	        }
	        if (this.props.boundaryKey !== nextProps.boundaryKey &&
	            this.props.parentRegistry != null &&
	            this.props.parentRegistry.has(this.props.boundaryKey)) {
	            this.props.parentRegistry.delete(this.props.boundaryKey);
	        }
	    }
	    componentDidUpdate(prevProps) {
	        if (this.props.boundaryKey !== prevProps.boundaryKey &&
	            this.props.parentRegistry != null &&
	            this.props.boundaryKey != null) {
	            this.props.parentRegistry.add(this.props.boundaryKey, this.tabRegistry);
	        }
	    }
	    componentWillUnmount() {
	        if (this.props.boundaryKey != null && this.props.parentRegistry != null) {
	            this.props.parentRegistry.delete(this.props.boundaryKey);
	        }
	    }
	    render() {
	        const props = filterPropKeys(this.props, this.filterPropKeys);
	        const comp = this.props.as == null ? 'div' : this.props.as;
	        const children = react_3(comp, Object.assign({}, props, { onKeyDown: this.onKeyDown }), this.props.children);
	        return react_3(NavigationContext.Provider, { value: this.tabRegistry }, children);
	    }
	}
	TabBoundaryWithTabRegistry.displayName = 'TabBoundary';
	class TabBoundaryWithForwardRef extends react_1 {
	    constructor() {
	        super(...arguments);
	        this.renderChildren = (parentRegistry) => {
	            const _a = this.props, { forwardedRef } = _a, props = __rest(_a, ["forwardedRef"]);
	            return react_3(TabBoundaryWithTabRegistry, Object.assign({}, props, { parentRegistry: parentRegistry, ref: forwardedRef }));
	        };
	    }
	    render() {
	        return react_3(NavigationContext.Consumer, { children: this.renderChildren });
	    }
	}
	TabBoundaryWithForwardRef.displayName = 'TabRegistry(TabBoundary)';
	const forwardRef = () => react_6((props, ref) => (react_3(TabBoundaryWithForwardRef, Object.assign({}, props, { forwardedRef: ref }))));
	const TabBoundary = forwardRef();

	const emptyChangeHandler = () => {
	    return;
	};
	const styles = {
	    border: 'none',
	    display: 'inline',
	    float: 'left',
	    fontSize: 0,
	    height: 0,
	    lineHeight: 0,
	    margin: 0,
	    outline: 'none',
	    padding: 0,
	    width: 0,
	};
	class FocuserWithTabRegistry extends react_1 {
	    constructor() {
	        super(...arguments);
	        this.refFocuser = null;
	        this.onBlur = (e) => {
	            if (this.props.onBlur != null) {
	                this.props.onBlur(e, this.props.focusKey);
	            }
	        };
	        this.onKeyDown = (e) => {
	            if (this.props.disabled) {
	                return;
	            }
	            let shouldPrevent = false;
	            const modifierKeys = {
	                altKey: e.altKey,
	                ctrlKey: e.ctrlKey,
	                metaKey: e.metaKey,
	                shiftKey: e.shiftKey,
	            };
	            if (e.key === 'Enter') {
	                if (this.props.onEnter != null) {
	                    shouldPrevent = true;
	                    this.props.onEnter(e, this.props.focusKey);
	                }
	                if (this.props.onNavigationKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onNavigationKeys(this.props.focusKey, 'Enter', modifierKeys);
	                }
	            }
	            else if (e.key === ' ') {
	                if (this.props.onSpace != null) {
	                    shouldPrevent = true;
	                    this.props.onSpace(e, this.props.focusKey);
	                }
	                if (this.props.onNavigationKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onNavigationKeys(this.props.focusKey, 'Space', modifierKeys);
	                }
	            }
	            else if (e.key === 'Escape') {
	                if (this.props.onEscape != null) {
	                    shouldPrevent = true;
	                    this.props.onEscape(e, this.props.focusKey);
	                }
	                if (this.props.onNavigationKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onNavigationKeys(this.props.focusKey, 'Escape', modifierKeys);
	                }
	            }
	            else if (e.key === 'Delete') {
	                if (this.props.onDelete != null) {
	                    shouldPrevent = true;
	                    this.props.onDelete(e, this.props.focusKey);
	                }
	                if (this.props.onNavigationKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onNavigationKeys(this.props.focusKey, 'Delete', modifierKeys);
	                }
	            }
	            else if (e.key === '+') {
	                if (this.props.onPlus != null) {
	                    shouldPrevent = true;
	                    this.props.onPlus(e, this.props.focusKey);
	                }
	                if (this.props.onNavigationKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onNavigationKeys(this.props.focusKey, 'Plus', modifierKeys);
	                }
	            }
	            else if (e.key === '-') {
	                if (this.props.onMinus != null) {
	                    shouldPrevent = true;
	                    this.props.onMinus(e, this.props.focusKey);
	                }
	                if (this.props.onNavigationKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onNavigationKeys(this.props.focusKey, 'Minus', modifierKeys);
	                }
	            }
	            else if (e.key === '?') {
	                if (this.props.onQuestionMark != null) {
	                    shouldPrevent = true;
	                    this.props.onQuestionMark(e, this.props.focusKey);
	                }
	                if (this.props.onNavigationKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onNavigationKeys(this.props.focusKey, 'QuestionMark', modifierKeys);
	                }
	            }
	            else if (e.key === 'ArrowUp') {
	                if (this.props.onArrowUp != null) {
	                    shouldPrevent = true;
	                    this.props.onArrowUp(e, this.props.focusKey);
	                }
	                if (this.props.onArrowKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onArrowKeys(this.props.focusKey, 'ArrowUp', modifierKeys);
	                }
	                if (this.props.onNavigationKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onNavigationKeys(this.props.focusKey, 'ArrowUp', modifierKeys);
	                }
	            }
	            else if (e.key === 'ArrowDown') {
	                if (this.props.onArrowDown != null) {
	                    shouldPrevent = true;
	                    this.props.onArrowDown(e, this.props.focusKey);
	                }
	                if (this.props.onArrowKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onArrowKeys(this.props.focusKey, 'ArrowDown', modifierKeys);
	                }
	                if (this.props.onNavigationKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onNavigationKeys(this.props.focusKey, 'ArrowDown', modifierKeys);
	                }
	            }
	            else if (e.key === 'ArrowLeft') {
	                if (this.props.onArrowLeft != null) {
	                    shouldPrevent = true;
	                    this.props.onArrowLeft(e, this.props.focusKey);
	                }
	                if (this.props.onArrowKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onArrowKeys(this.props.focusKey, 'ArrowLeft', modifierKeys);
	                }
	                if (this.props.onNavigationKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onNavigationKeys(this.props.focusKey, 'ArrowLeft', modifierKeys);
	                }
	            }
	            else if (e.key === 'ArrowRight') {
	                if (this.props.onArrowRight != null) {
	                    shouldPrevent = true;
	                    this.props.onArrowRight(e, this.props.focusKey);
	                }
	                if (this.props.onArrowKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onArrowKeys(this.props.focusKey, 'ArrowRight', modifierKeys);
	                }
	                if (this.props.onNavigationKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onNavigationKeys(this.props.focusKey, 'ArrowRight', modifierKeys);
	                }
	            }
	            else if (e.key === 'Tab') {
	                if (e.shiftKey) {
	                    if (this.props.tabRegistry != null) {
	                        shouldPrevent = true;
	                        this.props.tabRegistry.focusPrev(this.props.focusKey);
	                    }
	                }
	                else {
	                    if (this.props.tabRegistry != null) {
	                        shouldPrevent = true;
	                        this.props.tabRegistry.focusNext(this.props.focusKey);
	                    }
	                }
	                if (this.props.onNavigationKeys != null) {
	                    shouldPrevent = true;
	                    this.props.onNavigationKeys(this.props.focusKey, 'Tab', modifierKeys);
	                }
	            }
	            else if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)) {
	                shouldPrevent = true;
	            }
	            if (shouldPrevent) {
	                e.preventDefault();
	                e.stopPropagation();
	            }
	        };
	        this.setFocuserRef = (ref) => {
	            this.refFocuser = ref;
	        };
	        this.focus = (opts) => {
	            if (this.props.disabled || this.refFocuser == null) {
	                return false;
	            }
	            this.refFocuser.focus();
	            if (this.props.onFocus) {
	                this.props.onFocus(opts, this.props.focusKey);
	            }
	            return true;
	        };
	    }
	    componentDidMount() {
	        if (this.props.tabRegistry != null) {
	            this.props.tabRegistry.add(this.props.focusKey, this.focus);
	        }
	    }
	    componentWillReceiveProps(nextProps) {
	        if (this.props.focusKey !== nextProps.focusKey &&
	            this.props.tabRegistry != null &&
	            this.props.tabRegistry.has(this.props.focusKey)) {
	            this.props.tabRegistry.delete(this.props.focusKey);
	        }
	    }
	    componentDidUpdate(prevProps) {
	        if (this.props.focusKey !== prevProps.focusKey && this.props.tabRegistry != null) {
	            this.props.tabRegistry.add(this.props.focusKey, this.focus);
	        }
	    }
	    componentWillUnmount() {
	        if (this.props.tabRegistry != null) {
	            this.props.tabRegistry.delete(this.props.focusKey);
	        }
	    }
	    render() {
	        return (react_3("input", { autoComplete: "off", autoFocus: this.props.autoFocus, className: this.props.className || 'focuser', disabled: this.props.disabled, key: "focuser", name: this.props.focusKey, onBlur: this.onBlur, onChange: emptyChangeHandler, onKeyDown: this.onKeyDown, ref: this.setFocuserRef, style: styles, tabIndex: -1, value: "" }));
	    }
	}
	FocuserWithTabRegistry.defaultProps = {
	    autoFocus: false,
	    disabled: false,
	};
	FocuserWithTabRegistry.displayName = 'Focuser';
	class FocuserWithForwardRef extends react_1 {
	    constructor() {
	        super(...arguments);
	        this.renderChildren = (tabRegistry) => {
	            const _a = this.props, { forwardedRef } = _a, props = __rest(_a, ["forwardedRef"]);
	            return react_3(FocuserWithTabRegistry, Object.assign({}, props, { ref: forwardedRef, tabRegistry: tabRegistry }));
	        };
	    }
	    render() {
	        return react_3(NavigationContext.Consumer, { children: this.renderChildren });
	    }
	}
	FocuserWithForwardRef.displayName = 'TabRegistry(Focuser)';
	const Focuser = react_6((props, ref) => (react_3(FocuserWithForwardRef, Object.assign({}, props, { forwardedRef: ref }))));

	class FieldWithTabRegistry extends react_1 {
	    constructor(props) {
	        super(props);
	        this.refContainer = null;
	        this.refFocuser = null;
	        this.clickOutside = (e) => {
	            if (this.state.isEditing && this.props.submitOnClickOutside) {
	                if (this.refContainer != null && !this.refContainer.contains(e.target)) {
	                    this.props.onSubmit(this.stopEditing, 'click-outside');
	                }
	            }
	        };
	        this.onBlur = (e) => {
	            // don't prevent default on blur event
	            // or else the field actually won't get blurred.
	            e.stopPropagation();
	            if (!this.state.isEditing || !this.props.submitOnBlur) {
	                return;
	            }
	            this.props.onSubmit(this.stopEditing, 'blur');
	        };
	        this.onClick = (e) => {
	            e.preventDefault();
	            e.stopPropagation();
	            this.startEditing();
	        };
	        this.onContainerClick = (e) => {
	            e.stopPropagation();
	            e.preventDefault();
	        };
	        this.onEnter = (e, focusKey) => {
	            this.startEditing();
	            if (this.props.onEnter != null) {
	                this.props.onEnter(e, focusKey);
	            }
	        };
	        this.onEscape = (e, focusKey) => {
	            if (this.props.onEscape != null) {
	                this.props.onEscape(e, focusKey);
	            }
	            if (this.state.isEditing) {
	                this.stopEditing();
	            }
	            else {
	                if (this.props.tabRegistry != null) {
	                    this.props.tabRegistry.focusParent();
	                }
	            }
	        };
	        this.onFieldKeyDown = (e) => {
	            if (this.props.disabled) {
	                return;
	            }
	            const modifier = e.shiftKey || e.metaKey || e.ctrlKey || e.altKey;
	            if (e.key === 'Enter' && !modifier) {
	                e.preventDefault();
	                e.stopPropagation();
	                this.props.onSubmit(this.stopEditing, 'enter-key');
	            }
	            else if (e.key === 'Escape' && !modifier) {
	                e.preventDefault();
	                e.stopPropagation();
	                this.stopEditing();
	            }
	        };
	        this.onLabelClick = (e) => {
	            e.preventDefault();
	            e.stopPropagation();
	            this.focus({
	                focusOrigin: 'mouse',
	            });
	        };
	        this.onSpace = (e, focusKey) => {
	            this.startEditing();
	            if (this.props.onSpace != null) {
	                this.props.onSpace(e, focusKey);
	            }
	        };
	        this.setContainerRef = (ref) => {
	            this.refContainer = ref;
	        };
	        this.setFocuserRef = (ref) => {
	            this.refFocuser = ref;
	        };
	        this.startEditing = () => {
	            if (this.props.disabled || this.state.isEditing) {
	                return;
	            }
	            this.setState({
	                isEditing: true,
	            });
	            if (this.props.onEditStart != null) {
	                this.props.onEditStart(this.stopEditing);
	            }
	        };
	        this.stopEditing = (preventFocus) => {
	            if (!this.state.isEditing) {
	                return;
	            }
	            this.setState({
	                isEditing: false,
	            }, () => {
	                if (preventFocus) {
	                    return;
	                }
	                this.focus({
	                    focusOrigin: 'user',
	                });
	            });
	            if (this.props.onEditStop != null) {
	                this.props.onEditStop();
	            }
	        };
	        this.state = {
	            isEditing: false,
	        };
	    }
	    componentDidMount() {
	        document.addEventListener('click', this.clickOutside, false);
	    }
	    componentWillReceiveProps(nextProps) {
	        if (!this.props.disabled && nextProps.disabled) {
	            this.stopEditing(true);
	        }
	    }
	    componentWillUnmount() {
	        document.removeEventListener('click', this.clickOutside, false);
	    }
	    focus(opts) {
	        if (this.props.disabled || this.refFocuser == null) {
	            return false;
	        }
	        return this.refFocuser.focus(opts);
	    }
	    renderErrorMessage() {
	        if (this.props.errorMessage == null) {
	            return null;
	        }
	        return react_3("div", { className: "error-message" }, this.props.errorMessage);
	    }
	    render() {
	        return (react_3("div", { className: this.props.className || 'field-container', onClick: this.onContainerClick, ref: this.setContainerRef },
	            react_3(Focuser, Object.assign({ focusKey: this.props.label, key: "focuser" }, spreadControlProps(this.props), { onEnter: this.onEnter, onEscape: this.onEscape, onSpace: this.onSpace, ref: this.setFocuserRef })),
	            react_3("div", { className: 'field' + (this.props.errorMessage == null ? '' : ' has-error'), onBlur: this.onBlur, onClick: this.onClick, onKeyDown: this.onFieldKeyDown },
	                react_3("label", { onClick: this.onLabelClick }, this.props.label),
	                this.props.renderEditor(this.state.isEditing, this.stopEditing),
	                this.renderErrorMessage())));
	    }
	}
	FieldWithTabRegistry.defaultProps = {
	    disabled: false,
	    submitOnBlur: false,
	    submitOnClickOutside: false,
	};
	FieldWithTabRegistry.displayName = 'Field';
	class FieldWithForwardRef extends react_1 {
	    constructor() {
	        super(...arguments);
	        this.renderChildren = (tabRegistry) => {
	            const _a = this.props, { forwardedRef } = _a, props = __rest(_a, ["forwardedRef"]);
	            return react_3(FieldWithTabRegistry, Object.assign({}, props, { ref: forwardedRef, tabRegistry: tabRegistry }));
	        };
	    }
	    render() {
	        return react_3(NavigationContext.Consumer, { children: this.renderChildren });
	    }
	}
	FieldWithForwardRef.displayName = 'TabRegistry(Field)';
	const Field = react_6((props, ref) => (react_3(FieldWithForwardRef, Object.assign({}, props, { forwardedRef: ref }))));

	class SectionWithTabRegistry extends react_1 {
	    constructor(props) {
	        super(props);
	        this.refFocuser = null;
	        this.filterPropKeys = (propKey) => {
	            switch (propKey) {
	                case 'as':
	                case 'autoFocus':
	                case 'className':
	                case 'cycle':
	                case 'disabled':
	                case 'focusKey':
	                case 'focusOnClick':
	                case 'navigationHandler':
	                case 'onArrowDown':
	                case 'onArrowKeys':
	                case 'onArrowLeft':
	                case 'onArrowRight':
	                case 'onArrowUp':
	                case 'onBlur':
	                case 'onDelete':
	                case 'onEnter':
	                case 'onEscape':
	                case 'onFocus':
	                case 'onMinus':
	                case 'onNavigationKeys':
	                case 'onPlus':
	                case 'onQuestionMark':
	                case 'onSpace':
	                case 'tabRegistry':
	                case 'tabRegistryRef':
	                    return false;
	                default:
	                    return true;
	            }
	        };
	        this.navigationHandler = (_, navKey, modifierKeys) => {
	            if (this.props.navigationHandler != null) {
	                this.props.navigationHandler(this.props.focusKey, navKey, modifierKeys);
	            }
	        };
	        this.onClick = (e) => {
	            e.preventDefault();
	            e.stopPropagation();
	            if (this.props.focusOnClick !== false) {
	                // prettier-ignore
	                const tabRegistry = (this.props.focusOnClick !== 'section' &&
	                    this.tabRegistryRef != null &&
	                    this.tabRegistryRef.current) || null;
	                switch (this.props.focusOnClick) {
	                    case 'section':
	                        if (this.refFocuser != null) {
	                            this.refFocuser.focus({
	                                focusOrigin: 'mouse',
	                            });
	                        }
	                        break;
	                    case 'first-child':
	                        if (tabRegistry != null) {
	                            tabRegistry.focusFirst();
	                        }
	                        break;
	                    case 'last-child':
	                        if (tabRegistry != null) {
	                            tabRegistry.focusLast();
	                        }
	                        break;
	                    default:
	                        if (tabRegistry != null) {
	                            tabRegistry.focus(this.props.focusOnClick);
	                        }
	                        break;
	                }
	            }
	            if (this.props.onClick != null) {
	                this.props.onClick(e);
	            }
	        };
	        this.onEnterKey = () => {
	            if (this.props.tabRegistry != null) {
	                this.props.tabRegistry.focusIn([this.props.focusKey, this.props.focusKey + '-section'], {
	                    focusOrigin: 'parent',
	                });
	            }
	        };
	        this.onEscapeKey = () => {
	            if (this.props.tabRegistry != null) {
	                const reg = this.props.tabRegistry.get(this.props.focusKey);
	                if (reg instanceof TabRegistry) {
	                    reg.focusParent();
	                }
	            }
	        };
	        this.setFocuserRef = (ref) => {
	            this.refFocuser = ref;
	        };
	        this.tabRegistryRef = props.tabRegistryRef || react_4();
	    }
	    render() {
	        const navigationHandler = this.props.navigationHandler == null ? undefined : this.navigationHandler;
	        const boundaryProps = filterPropKeys(this.props, this.filterPropKeys);
	        return (react_3(TabBoundary, Object.assign({ className: this.props.className || 'section-container' }, boundaryProps, { as: this.props.as, boundaryKey: this.props.focusKey, focusFirstOnOriginNext: true, onClick: this.onClick }),
	            react_3(Focuser, Object.assign({}, spreadControlProps(this.props), { focusKey: this.props.focusKey, onEnter: this.onEnterKey, onEscape: this.onEscapeKey, onNavigationKeys: navigationHandler, ref: this.setFocuserRef })),
	            react_3(TabBoundary, { boundaryKey: this.props.focusKey + '-section', className: "section", cycle: this.props.cycle, focusParentOnChildOrigin: true, focusParentOnEscape: true, tabRegistryRef: this.tabRegistryRef }, this.props.children)));
	    }
	}
	SectionWithTabRegistry.defaultProps = {
	    focusOnClick: 'section',
	};
	SectionWithTabRegistry.displayName = 'Section';
	class SectionWithForwardRef extends react_1 {
	    constructor() {
	        super(...arguments);
	        this.renderChildren = (tabRegistry) => {
	            const _a = this.props, { forwardedRef } = _a, props = __rest(_a, ["forwardedRef"]);
	            return react_3(SectionWithTabRegistry, Object.assign({}, props, { ref: forwardedRef, tabRegistry: tabRegistry }));
	        };
	    }
	    render() {
	        return react_3(NavigationContext.Consumer, { children: this.renderChildren });
	    }
	}
	SectionWithForwardRef.displayName = 'TabRegistry(Section)';
	const forwardRef$1 = () => react_6((props, ref) => (react_3(SectionWithForwardRef, Object.assign({}, props, { forwardedRef: ref }))));
	const Section = forwardRef$1();

	function Tabbable(Comp) {
	    return class extends react_1 {
	        constructor() {
	            super(...arguments);
	            this.refComponent = null;
	            this.tabRegistry = null;
	            this.focusTabbable = () => {
	                if (this.refComponent instanceof HTMLElement) {
	                    this.refComponent.focus();
	                    return true;
	                }
	                return false;
	            };
	            this.renderWithTabRegistry = (tabRegistry) => {
	                if (this.tabRegistry != null && tabRegistry !== this.tabRegistry) {
	                    this.tabRegistry.delete(this.props.name);
	                }
	                if (tabRegistry != null) {
	                    tabRegistry.add(this.props.name, this.focusTabbable);
	                }
	                this.tabRegistry = tabRegistry;
	                const WrappedComponent = Comp;
	                return react_3(WrappedComponent, Object.assign({}, this.props, this.state, { ref: this.setComponentRef }));
	            };
	            this.setComponentRef = (ref) => {
	                this.refComponent = ref;
	            };
	        }
	        componentWillUnmount() {
	            if (this.tabRegistry != null) {
	                this.tabRegistry.delete(this.props.name);
	                this.tabRegistry = null;
	            }
	        }
	        render() {
	            return react_3(NavigationContext.Consumer, null, this.renderWithTabRegistry);
	        }
	    };
	}
	const Button = Tabbable('button');
	const Input = Tabbable('input');
	const Select = Tabbable('select');

	class App extends react_1 {
	    constructor(props) {
	        super(props);
	        this.focusFirst = (e) => {
	            // this is not the real implementation
	            // but a quick hack to proof that the concept works.
	            if (this.tabRegistryRef.current != null) {
	                this.tabRegistryRef.current.focusFirst();
	            }
	        };
	        this.preventDefault = (e) => e.preventDefault();
	        this.tabRegistryRef = react_4();
	    }
	    render() {
	        return (
	        // tslint:disable-next-line:jsx-no-lambda
	        react_3("form", { onSubmit: this.preventDefault },
	            react_3(TabBoundary, { cycle: true, tabRegistryRef: this.tabRegistryRef },
	                react_3("label", { htmlFor: "username" }, "Username:"),
	                react_3("div", null,
	                    react_3(Input, { id: "username", name: "username" })),
	                react_3("label", { htmlFor: "password" }, "Password:"),
	                react_3("div", null,
	                    react_3(Input, { id: "password", name: "password", type: "password" })),
	                react_3("label", { htmlFor: "password-repeat" }, "Repeat password:"),
	                react_3("div", null,
	                    react_3(Input, { id: "password-repeat", name: "password-repeat", type: "password" })),
	                react_3("label", { htmlFor: "gender" }, "Gender:"),
	                react_3("div", null,
	                    react_3(Select, { id: "gender", name: "gender" },
	                        react_3("option", { value: "" }, ''),
	                        react_3("option", { value: "female" }, "Female"),
	                        react_3("option", { value: "male" }, "Male"))),
	                react_3("label", { htmlFor: "submit" }, "Form controls"),
	                react_3(TabBoundary, { boundaryKey: "controls" },
	                    react_3(Input, { name: "reset", 
	                        // tslint:disable-next-line:jsx-no-multiline-js jsx-no-lambda react-tsx-curly-spacing
	                        onClick: this.focusFirst, type: "reset", value: "Reset" }),
	                    react_3(Button, { id: "submit", name: "submit" }, "Submit")))));
	    }
	}
	reactDom_1(react_3(App), document.querySelector('#root'));

}());
