!function(e,n,r){var t=n.define,o=function(e){var r,t=e.split("."),o=n;for(r=0;r<t.length&&o;r++)o=o[t[r]];return o},a=n.define&&n.define.modules||n._define&&n._define.modules||{},i=n.define=function(r,f,c){var u;"function"==typeof f&&(c=f,f=[]);var l,d=[];for(l=0;l<f.length;l++)d.push(e[f[l]]?o(e[f[l]]):a[f[l]]||o(f[l]));(function(e){return"require"===e[0]&&"exports"===e[1]&&"module"===e[2]})(f)||!f.length&&c.length?(u={exports:{}},d[0]=function(n){return e[n]?o(e[n]):a[n]},d[1]=u.exports,d[2]=u):d[0]||"exports"!==f[0]?d[0]||"module"!==f[0]||(d[0]={id:r}):(u={exports:{}},d[0]=u.exports,"module"===f[1]&&(d[1]=u)),n.define=t;var s=c?c.apply(null,d):void 0;n.define=i,s=u&&u.exports?u.exports:s,a[r]=s;var p=e[r];p&&!o(p)&&(function(e){if(!e||!e.__esModule)return!1;var n={__esModule:!0,default:!0};for(var r in e)if(!n[r])return!1;return!0}(s)&&(s=s.default),function(e,r){var t,o,a,i=e.split("."),f=n;for(t=0;t<i.length-1;t++)(a=f[o=i[t]])||(a=f[o]={}),f=a;f[o=i[i.length-1]]=r}(p,s))};n.define.orig=t,n.define.modules=a,n.define.amd=!0,i("@loader",[],function(){var e=function(){};return{get:function(){return{prepareGlobal:e,retrieveGlobal:e}},global:n,__exec:function(e){r(e.source,n)}}})}({"can-namespace":"can"},"object"==typeof self&&self.Object==Object?self:window,function(__$source__,__$global__){eval("(function() { "+__$source__+" \n }).call(__$global__);")}),define("can-namespace",function(e,n,r){r.exports={}}),define("can-ndjson-stream",["require","exports","module","can-namespace"],function(e,n,r){var t=e("can-namespace");r.exports=t.ndjsonStream=function(e){var n,r=!1;return new ReadableStream({start:function(t){var o=e.getReader();n=o;var a=new TextDecoder,i="";o.read().then(function e(n){if(!n.done){for(var f=a.decode(n.value,{stream:!0}),c=(i+=f).split("\n"),u=0;u<c.length-1;++u){var l=c[u].trim();if(l.length>0)try{var d=JSON.parse(l);t.enqueue(d)}catch(e){return t.error(e),r=!0,void o.cancel()}}return i=c[c.length-1],o.read().then(e)}if(!r){if(0!==(i=i.trim()).length)try{var s=JSON.parse(i);t.enqueue(s)}catch(e){return void t.error(e)}t.close()}})},cancel:function(e){console.log("Cancel registered due to ",e),r=!0,n.cancel()}})}}),function(e){e._define=e.define,e.define=e.define.orig}("object"==typeof self&&self.Object==Object?self:window);