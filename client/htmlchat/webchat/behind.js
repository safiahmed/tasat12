var biRadixBase=2,biRadixBits=16,bitsPerDigit=biRadixBits,biRadix=65536,biHalfRadix=biRadix>>>1,biRadixSquared=biRadix*biRadix,maxDigitVal=biRadix-1,maxInteger=9999999999999998,maxDigits,ZERO_ARRAY,bigZero,bigOne;function setMaxDigits(a){maxDigits=a;ZERO_ARRAY=Array(maxDigits);for(a=0;a<ZERO_ARRAY.length;a++)ZERO_ARRAY[a]=0;bigZero=new BigInt;bigOne=new BigInt;bigOne.digits[0]=1}setMaxDigits(20);var dpl10=15,lr10=biFromNumber(1E15);
function BigInt(a){this.digits="boolean"==typeof a&&!0==a?null:ZERO_ARRAY.slice(0);this.isNeg=!1}function biFromDecimal(a){for(var b="-"==a.charAt(0),e=b?1:0,f;e<a.length&&"0"==a.charAt(e);)++e;if(e==a.length)f=new BigInt;else{var g=(a.length-e)%dpl10;0==g&&(g=dpl10);f=biFromNumber(Number(a.substr(e,g)));for(e+=g;e<a.length;)f=biAdd(biMultiply(f,lr10),biFromNumber(Number(a.substr(e,dpl10)))),e+=dpl10;f.isNeg=b}return f}
function biCopy(a){var b=new BigInt(!0);b.digits=a.digits.slice(0);b.isNeg=a.isNeg;return b}function biFromNumber(a){var b=new BigInt;b.isNeg=0>a;for(var a=Math.abs(a),e=0;0<a;)b.digits[e++]=a&maxDigitVal,a=Math.floor(a/biRadix);return b}function reverseStr(a){for(var b="",e=a.length-1;-1<e;--e)b+=a.charAt(e);return b}var hexatrigesimalToChar="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
function biToString(a,b){var e=new BigInt;e.digits[0]=b;for(var f=biDivideModulo(a,e),g=hexatrigesimalToChar[f[1].digits[0]];1==biCompare(f[0],bigZero);)f=biDivideModulo(f[0],e),digit=f[1].digits[0],g+=hexatrigesimalToChar[f[1].digits[0]];return(a.isNeg?"-":"")+reverseStr(g)}function biToDecimal(a){var b=new BigInt;b.digits[0]=10;for(var e=biDivideModulo(a,b),f=""+e[1].digits[0];1==biCompare(e[0],bigZero);)e=biDivideModulo(e[0],b),f+=""+e[1].digits[0];return(a.isNeg?"-":"")+reverseStr(f)}
var hexToChar="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f".split(",");function digitToHex(a){var b="";for(i=0;4>i;++i)b+=hexToChar[a&15],a>>>=4;return reverseStr(b)}function biToHex(a){var b="";biHighIndex(a);for(var e=biHighIndex(a);-1<e;--e)b+=digitToHex(a.digits[e]);return b}function charToHex(a){return 48<=a&&57>=a?a-48:65<=a&&90>=a?10+a-65:97<=a&&122>=a?10+a-97:0}function hexToDigit(a){for(var b=0,e=Math.min(a.length,4),f=0;f<e;++f)b<<=4,b|=charToHex(a.charCodeAt(f));return b}
function biFromHex(a){for(var b=new BigInt,e=a.length,f=0;0<e;e-=4,++f)b.digits[f]=hexToDigit(a.substr(Math.max(e-4,0),Math.min(e,4)));return b}function biFromString(a,b){var e="-"==a.charAt(0),f=e?1:0,g=new BigInt,h=new BigInt;h.digits[0]=1;for(var k=a.length-1;k>=f;k--)var l=a.charCodeAt(k),l=charToHex(l),l=biMultiplyDigit(h,l),g=biAdd(g,l),h=biMultiplyDigit(h,b);g.isNeg=e;return g}function biDump(a){return(a.isNeg?"-":"")+a.digits.join(" ")}
function biAdd(a,b){var e;if(a.isNeg!=b.isNeg)b.isNeg=!b.isNeg,e=biSubtract(a,b),b.isNeg=!b.isNeg;else{e=new BigInt;for(var f=0,g=0;g<a.digits.length;++g)f=a.digits[g]+b.digits[g]+f,e.digits[g]=f%biRadix,f=Number(f>=biRadix);e.isNeg=a.isNeg}return e}
function biSubtract(a,b){var e;if(a.isNeg!=b.isNeg)b.isNeg=!b.isNeg,e=biAdd(a,b),b.isNeg=!b.isNeg;else{e=new BigInt;for(var f,g=f=0;g<a.digits.length;++g)f=a.digits[g]-b.digits[g]+f,e.digits[g]=f%biRadix,0>e.digits[g]&&(e.digits[g]+=biRadix),f=0-Number(0>f);if(-1==f){for(g=f=0;g<a.digits.length;++g)f=0-e.digits[g]+f,e.digits[g]=f%biRadix,0>e.digits[g]&&(e.digits[g]+=biRadix),f=0-Number(0>f);e.isNeg=!a.isNeg}else e.isNeg=a.isNeg}return e}
function biHighIndex(a){for(var b=a.digits.length-1;0<b&&0==a.digits[b];)--b;return b}function biNumBits(a){var b=biHighIndex(a),a=a.digits[b],b=(b+1)*bitsPerDigit,e;for(e=b;e>b-bitsPerDigit&&!(0!=(a&32768));--e)a<<=1;return e}function biMultiply(a,b){for(var e=new BigInt,f,g=biHighIndex(a),h=biHighIndex(b),k,l=0;l<=h;++l){f=0;k=l;for(j=0;j<=g;++j,++k)f=e.digits[k]+a.digits[j]*b.digits[l]+f,e.digits[k]=f&maxDigitVal,f>>>=biRadixBits;e.digits[l+g+1]=f}e.isNeg=a.isNeg!=b.isNeg;return e}
function biMultiplyDigit(a,b){var e,f;result=new BigInt;e=biHighIndex(a);for(var g=f=0;g<=e;++g)f=result.digits[g]+a.digits[g]*b+f,result.digits[g]=f&maxDigitVal,f>>>=biRadixBits;result.digits[1+e]=f;return result}function arrayCopy(a,b,e,f,g){for(g=Math.min(b+g,a.length);b<g;++b,++f)e[f]=a[b]}var highBitMasks=[0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535];
function biShiftLeft(a,b){var e=Math.floor(b/bitsPerDigit),f=new BigInt;arrayCopy(a.digits,0,f.digits,e,f.digits.length-e);for(var e=b%bitsPerDigit,g=bitsPerDigit-e,h=f.digits.length-1,k=h-1;0<h;--h,--k)f.digits[h]=f.digits[h]<<e&maxDigitVal|(f.digits[k]&highBitMasks[e])>>>g;f.digits[0]=f.digits[h]<<e&maxDigitVal;f.isNeg=a.isNeg;return f}var lowBitMasks=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];
function biShiftRight(a,b){var e=Math.floor(b/bitsPerDigit),f=new BigInt;arrayCopy(a.digits,e,f.digits,0,a.digits.length-e);for(var e=b%bitsPerDigit,g=bitsPerDigit-e,h=0,k=h+1;h<f.digits.length-1;++h,++k)f.digits[h]=f.digits[h]>>>e|(f.digits[k]&lowBitMasks[e])<<g;f.digits[f.digits.length-1]>>>=e;f.isNeg=a.isNeg;return f}function biMultiplyByRadixPower(a,b){var e=new BigInt;arrayCopy(a.digits,0,e.digits,b,e.digits.length-b);return e}
function biDivideByRadixPower(a,b){var e=new BigInt;arrayCopy(a.digits,b,e.digits,0,e.digits.length-b);return e}function biModuloByRadixPower(a,b){var e=new BigInt;arrayCopy(a.digits,0,e.digits,0,b);return e}function biCompare(a,b){if(a.isNeg!=b.isNeg)return 1-2*Number(a.isNeg);for(var e=a.digits.length-1;0<=e;--e)if(a.digits[e]!=b.digits[e])return a.isNeg?1-2*Number(a.digits[e]>b.digits[e]):1-2*Number(a.digits[e]<b.digits[e]);return 0}
function biDivideModulo(a,b){var e=biNumBits(a),f=biNumBits(b),g=b.isNeg,h,k;if(e<f)return a.isNeg?(h=biCopy(bigOne),h.isNeg=!b.isNeg,a.isNeg=!1,b.isNeg=!1,k=biSubtract(b,a),a.isNeg=!0,b.isNeg=g):(h=new BigInt,k=biCopy(a)),[h,k];h=new BigInt;k=a;for(var l=Math.ceil(f/bitsPerDigit)-1,m=0;b.digits[l]<biHalfRadix;)b=biShiftLeft(b,1),++m,++f,l=Math.ceil(f/bitsPerDigit)-1;k=biShiftLeft(k,m);e=Math.ceil((e+m)/bitsPerDigit)-1;for(f=biMultiplyByRadixPower(b,e-l);-1!=biCompare(k,f);)++h.digits[e-l],k=biSubtract(k,
f);for(;e>l;--e){var f=e>=k.digits.length?0:k.digits[e],n=e-1>=k.digits.length?0:k.digits[e-1],v=e-2>=k.digits.length?0:k.digits[e-2],u=l>=b.digits.length?0:b.digits[l],B=l-1>=b.digits.length?0:b.digits[l-1];h.digits[e-l-1]=f==u?maxDigitVal:Math.floor((f*biRadix+n)/u);for(var q=h.digits[e-l-1]*(u*biRadix+B),A=f*biRadixSquared+(n*biRadix+v);q>A;)--h.digits[e-l-1],q=h.digits[e-l-1]*(u*biRadix|B),A=f*biRadix*biRadix+(n*biRadix+v);f=biMultiplyByRadixPower(b,e-l-1);k=biSubtract(k,biMultiplyDigit(f,h.digits[e-
l-1]));k.isNeg&&(k=biAdd(k,f),--h.digits[e-l-1])}k=biShiftRight(k,m);h.isNeg=a.isNeg!=g;a.isNeg&&(h=g?biAdd(h,bigOne):biSubtract(h,bigOne),b=biShiftRight(b,m),k=biSubtract(b,k));if(0==k.digits[0]&&0==biHighIndex(k))k.isNeg=!1;return[h,k]}function biDivide(a,b){return biDivideModulo(a,b)[0]}function biModulo(a,b){return biDivideModulo(a,b)[1]}function biMultiplyMod(a,b,e){return biModulo(biMultiply(a,b),e)}
function biPow(a,b){for(var e=bigOne,f=a;;){0!=(b&1)&&(e=biMultiply(e,f));b>>=1;if(0==b)break;f=biMultiply(f,f)}return e}function biPowMod(a,b,e){for(var f=bigOne;;){0!=(b.digits[0]&1)&&(f=biMultiplyMod(f,a,e));b=biShiftRight(b,1);if(0==b.digits[0]&&0==biHighIndex(b))break;a=biMultiplyMod(a,a,e)}return f}
function BarrettMu(a){this.modulus=biCopy(a);this.k=biHighIndex(this.modulus)+1;a=new BigInt;a.digits[2*this.k]=1;this.mu=biDivide(a,this.modulus);this.bkplus1=new BigInt;this.bkplus1.digits[this.k+1]=1;this.modulo=BarrettMu_modulo;this.multiplyMod=BarrettMu_multiplyMod;this.powMod=BarrettMu_powMod}
function BarrettMu_modulo(a){var b=biDivideByRadixPower(a,this.k-1),b=biMultiply(b,this.mu),b=biDivideByRadixPower(b,this.k+1),a=biModuloByRadixPower(a,this.k+1),b=biMultiply(b,this.modulus),b=biModuloByRadixPower(b,this.k+1),a=biSubtract(a,b);a.isNeg&&(a=biAdd(a,this.bkplus1));for(b=0<=biCompare(a,this.modulus);b;)a=biSubtract(a,this.modulus),b=0<=biCompare(a,this.modulus);return a}function BarrettMu_multiplyMod(a,b){return this.modulo(biMultiply(a,b))}
function BarrettMu_powMod(a,b){var e=new BigInt;e.digits[0]=1;for(var f=a,g=b;;){0!=(g.digits[0]&1)&&(e=this.multiplyMod(e,f));g=biShiftRight(g,1);if(0==g.digits[0]&&0==biHighIndex(g))break;f=this.multiplyMod(f,f)}return e}function RSAKeyPair(a,b){this.e=biFromHex(a);this.m=biFromHex(b);this.chunkSize=2*biHighIndex(this.m);this.radix=16;this.barrett=new BarrettMu(this.m)}function twoDigit(a){return(10>a?"0":"")+(""+a)}
function encryptedString(a,b){for(var e=b.length,f="",g=0;g<e;g+=a.chunkSize){for(var h=new BigInt,k=Math.min(e-g,a.chunkSize),l=0;l<k;l+=2){var m=k-l-1,m=(m-m%2)/2,n=b.charCodeAt(l+g)<<8,v=0;l+1<k&&(v=b.charCodeAt(l+g+1));h.digits[m]=n+v}h=a.barrett.powMod(h,a.e);h=16==a.radix?biToHex(h):biToString(h,a.radix);""!=f&&(f+="l");f+=h}return f}
function decryptedString(a,b){var e=b.split("l"),f="",g,h,k;for(g=0;g<e.length;++g){h=16==a.radix?biFromHex(e[g]):biFromString(e[g],a.radix);k=a.barrett.powMod(h,a.e);for(h=biHighIndex(k);0<=h;h--)f+=String.fromCharCode(k.digits[h]>>8),f+=String.fromCharCode(k.digits[h]&255)}return f}function fcEncode(a,b){for(var e="",f=0,g=b.length,h=a.length,k=0;k<g;k++)0<k&&(e+="l"),f=f%h+1,e+=Number(b.charCodeAt(k)^a.charCodeAt(f-1));return e}
function fcDecode(a,b){var e="",f=b.split("l"),g=0,h=f.length,k=a.length;for(x=0;x<h;x++)var g=g%k+1,l=Number(f[x])^a.charCodeAt(g-1),e=e+String.fromCharCode(l);return e}function genFCKey(){for(var a="",b=0;64>b;b++)var e=Math.random(),e=parseInt(""+1E3*e),e=e%94+33,e=String.fromCharCode(e),a=a+e;return a}function getEncryptedMsgWithRsaKeyPair(a,b,e){a=new RSAKeyPair(a,b);return encryptedByPublicKeyString(a,e)}var HOST="127.0.0.1",PORT=35555,MY_PUBKEY_STR,MY_HASH_KEY,MY_PUBKEY,FLASH_ID="topcmm_flashchat";
if(!isSupportFlash()){var my_domain="";if(void 0==my_domain||""==my_domain)my_domain=getShortDomain();document.domain=my_domain;var swfElement=document.getElementById(FLASH_ID);swfElement&&swfElement.parentNode.removeChild(swfElement)}function isIP(a){var b=!1;if(0<a.length)try{var e=a.split(".");if(4!=e.length)b=!1;else{for(a=0;a<e.length;a++)if(!isIntegerInRange(e[a],0,255)){b=!1;break}b=!0}}catch(f){b=!1}else b=!1;return b}
function isIntegerInRange(a,b,e){if(isEmpty(a))return 1==isIntegerInRange.arguments.length?!1:!0==isIntegerInRange.arguments[1];if(!isInteger(a,!1))return!1;a=parseInt(a);return a>=b&&a<=e}function isInteger(a){var b;if(isEmpty(a))return 1==isInteger.arguments.length?0:!0==isInteger.arguments[1];for(b=0;b<a.length;b++){var e=a.charAt(b);if(!isDigit(e))return!1}return!0}function isEmpty(a){return null==a||0==a.length}function isDigit(a){return"0"<=a&&"9">=a}
function getDomain(){var a="";try{hostStr=window.location.host,a=-1==hostStr.indexOf(":")?hostStr:hostStr.substring(0,hostStr.indexOf(":"))}catch(b){a=""}return a}function getShortDomain(){var a="";try{if(hostStr=window.location.host,a=-1==hostStr.indexOf(":")?hostStr:hostStr.substring(0,hostStr.indexOf(":")),!isIP(a)){var b=a.split(".");2<b.length&&(a=b[b.length-2]+"."+b[b.length-1])}}catch(e){a=""}return a}function getMovie(a){try{return isIE()?window[a]:document[a]}catch(b){}}
function isIE(){return-1!=getUserAgent().indexOf("msie")}function getLanguage(){return isIE()?navigator.browserLanguage:navigator.language}function isMobile(){return null!=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(BlackBerry)|(webOS)/i)}function getUserAgent(){return navigator.userAgent.toLowerCase()}
function isSupportFlash(){var a=!1;if(!isMobile())try{if(navigator.plugins&&0<navigator.plugins.length){var b=navigator.plugins["Shockwave Flash"];b&&(a=!0)}a||(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))&&(a=!0)}catch(e){a=!1}return a}function flashConnect(a,b){var e=getMovie(FLASH_ID);return void 0==e||void 0==e.connect?!1:e.connect(a,b)}function flashSendMessage(a){getMovie(FLASH_ID).sendMessage(a)}function flashClose(){}
function httpConnect(a,b){HOST=a;PORT=b;onConnected();return!0}function httpSendMessage(a){message=a+"0";message=encodeURIComponent(encodeURIComponent(message));var a=Math.floor(999999999999*Math.random()),b="http://"+HOST+":"+PORT+"/123flashchat_"+a,e="protocol="+message;0==message.indexOf("%253CInit")?J(b,e,"l"):J(b,e,"s"+a)}
function c(a){var b=null,e=a+"_div";if(document.getElementById(a))return document.getElementById(a);try{var f=document.createElement("iframe");f.setAttribute("id",a);f.setAttribute("name",a);f.setAttribute("style","border-width:0;height:0;width:0;visibility:hidden;");var g=document.createElement("div");g.setAttribute("id",e);g.setAttribute("style","position:absolute;top:0;left:0;width:0;height:0;overflow:hidden;");g.appendChild(f);document.body.appendChild(g);"undefined"!=typeof document.frames&&
(b=document.frames[a]);if(!b||"undefined"==typeof b.nodeType)b=document.getElementById(a)}catch(h){f='<iframe id="'+a+'" name="'+a+'" style="border-width:0;height:0;width:0;visibility:hidden;"></iframe>',document.getElementById(e)?document.getElementById(e).innerHTML=f:(g=document.createElement("div"),g.setAttribute("id",e),g.setAttribute("style","position:absolute;top:0;left:0;width:0;height:0;overflow:hidden;"),g.innerHTML=f,document.getElementsByTagName("DIV")[0].appendChild(g)),b=document.getElementById(a)}b.onreadystatechange=
function(){"complete"==b.readyState&&(d(b),b.parentNode.removeChild(b))};return b}function J(a,b,e){try{var a=a+"?"+b,f=c(e),g=d(f)}catch(h){}try{g.location?g.location.replace(a):g.location=a}catch(k){f.src=a}}function d(a){if(a.contentDocument)return a.contentDocument;if(a.contentWindow)return a.contentWindow.document;if(a.document)return a.document}function I(a){receiveMessage(a)}function setPublicKey(a){MY_PUBKEY_STR=a;MY_HASH_KEY=genFCKey();MY_PUBKEY=new RSAKeyPair("11",MY_PUBKEY_STR)}
function getSK(a,b){MY_PUBKEY_STR=a;MY_PUBKEY=new RSAKeyPair("11",MY_PUBKEY_STR);return encryptedString(MY_PUBKEY,b)}function encryptPassword(a){return encryptedString(MY_PUBKEY,a)}function encryptPasswordByPublicKey(a,b){var e=new RSAKeyPair("11",b);return encryptedString(e,a)}function encodeMessage(a,b){return""==b||void 0==b?fcEncode(MY_HASH_KEY,a):fcEncode(b,a)}function decodeMessage(a,b){var e="",e=""==b||void 0==b?fcDecode(MY_HASH_KEY,a):fcDecode(b,a);return e.split("\\").join("\\\\")}
function encryptWithRsaKeyPair(a,b,e){return getEncryptedMsgWithRsaKeyPair(a,b,e)}function getEncryptedMsgWithRsaKeyPair(a,b,e){a=new RSAKeyPair(a,b);return encryptedString(a,e)}var dbits,canary=244837814094590,j_lm=15715070==(canary&16777215);function BigInteger(a,b,e){null!=a&&("number"==typeof a?this.fromNumber(a,b,e):null==b&&"string"!=typeof a?this.fromString(a,256):this.fromString(a,b))}function nbi(){return new BigInteger(null)}
function am1(a,b,e,f,g,h){for(;0<=--h;){var k=b*this[a++]+e[f]+g,g=Math.floor(k/67108864);e[f++]=k&67108863}return g}function am2(a,b,e,f,g,h){for(var k=b&32767,b=b>>15;0<=--h;){var l=this[a]&32767,m=this[a++]>>15,n=b*l+m*k,l=k*l+((n&32767)<<15)+e[f]+(g&1073741823),g=(l>>>30)+(n>>>15)+b*m+(g>>>30);e[f++]=l&1073741823}return g}
function am3(a,b,e,f,g,h){for(var k=b&16383,b=b>>14;0<=--h;){var l=this[a]&16383,m=this[a++]>>14,n=b*l+m*k,l=k*l+((n&16383)<<14)+e[f]+g,g=(l>>28)+(n>>14)+b*m;e[f++]=l&268435455}return g}j_lm&&"Microsoft Internet Explorer"==navigator.appName?(BigInteger.prototype.am=am2,dbits=30):j_lm&&"Netscape"!=navigator.appName?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28);BigInteger.prototype.DB=dbits;BigInteger.prototype.DM=(1<<dbits)-1;BigInteger.prototype.DV=1<<dbits;
var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP);BigInteger.prototype.F1=BI_FP-dbits;BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=[],rr,vv;rr=48;for(vv=0;9>=vv;++vv)BI_RC[rr++]=vv;rr=97;for(vv=10;36>vv;++vv)BI_RC[rr++]=vv;rr=65;for(vv=10;36>vv;++vv)BI_RC[rr++]=vv;function int2char(a){return BI_RM.charAt(a)}function intAt(a,b){var e=BI_RC[a.charCodeAt(b)];return null==e?-1:e}
function bnpCopyTo(a){for(var b=this.t-1;0<=b;--b)a[b]=this[b];a.t=this.t;a.s=this.s}function bnpFromInt(a){this.t=1;this.s=0>a?-1:0;0<a?this[0]=a:-1>a?this[0]=a+DV:this.t=0}function nbv(a){var b=nbi();b.fromInt(a);return b}
function bnpFromString(a,b){var e;if(16==b)e=4;else if(8==b)e=3;else if(256==b)e=8;else if(2==b)e=1;else if(32==b)e=5;else if(4==b)e=2;else{this.fromRadix(a,b);return}this.s=this.t=0;for(var f=a.length,g=!1,h=0;0<=--f;){var k=8==e?a[f]&255:intAt(a,f);0>k?"-"==a.charAt(f)&&(g=!0):(g=!1,0==h?this[this.t++]=k:h+e>this.DB?(this[this.t-1]|=(k&(1<<this.DB-h)-1)<<h,this[this.t++]=k>>this.DB-h):this[this.t-1]|=k<<h,h+=e,h>=this.DB&&(h-=this.DB))}if(8==e&&0!=(a[0]&128))this.s=-1,0<h&&(this[this.t-1]|=(1<<
this.DB-h)-1<<h);this.clamp();g&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){for(var a=this.s&this.DM;0<this.t&&this[this.t-1]==a;)--this.t}
function bnToString(a){if(0>this.s)return"-"+this.negate().toString(a);if(16==a)a=4;else if(8==a)a=3;else if(2==a)a=1;else if(32==a)a=5;else if(4==a)a=2;else return this.toRadix(a);var b=(1<<a)-1,e,f=!1,g="",h=this.t,k=this.DB-h*this.DB%a;if(0<h--){if(k<this.DB&&0<(e=this[h]>>k))f=!0,g=int2char(e);for(;0<=h;)k<a?(e=(this[h]&(1<<k)-1)<<a-k,e|=this[--h]>>(k+=this.DB-a)):(e=this[h]>>(k-=a)&b,0>=k&&(k+=this.DB,--h)),0<e&&(f=!0),f&&(g+=int2char(e))}return f?g:"0"}
function bnNegate(){var a=nbi();BigInteger.ZERO.subTo(this,a);return a}function bnAbs(){return 0>this.s?this.negate():this}function bnCompareTo(a){var b=this.s-a.s;if(0!=b)return b;var e=this.t,b=e-a.t;if(0!=b)return 0>this.s?-b:b;for(;0<=--e;)if(0!=(b=this[e]-a[e]))return b;return 0}function nbits(a){var b=1,e;if(0!=(e=a>>>16))a=e,b+=16;if(0!=(e=a>>8))a=e,b+=8;if(0!=(e=a>>4))a=e,b+=4;if(0!=(e=a>>2))a=e,b+=2;0!=a>>1&&(b+=1);return b}
function bnBitLength(){return 0>=this.t?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(a,b){var e;for(e=this.t-1;0<=e;--e)b[e+a]=this[e];for(e=a-1;0<=e;--e)b[e]=0;b.t=this.t+a;b.s=this.s}function bnpDRShiftTo(a,b){for(var e=a;e<this.t;++e)b[e-a]=this[e];b.t=Math.max(this.t-a,0);b.s=this.s}
function bnpLShiftTo(a,b){var e=a%this.DB,f=this.DB-e,g=(1<<f)-1,h=Math.floor(a/this.DB),k=this.s<<e&this.DM,l;for(l=this.t-1;0<=l;--l)b[l+h+1]=this[l]>>f|k,k=(this[l]&g)<<e;for(l=h-1;0<=l;--l)b[l]=0;b[h]=k;b.t=this.t+h+1;b.s=this.s;b.clamp()}
function bnpRShiftTo(a,b){b.s=this.s;var e=Math.floor(a/this.DB);if(e>=this.t)b.t=0;else{var f=a%this.DB,g=this.DB-f,h=(1<<f)-1;b[0]=this[e]>>f;for(var k=e+1;k<this.t;++k)b[k-e-1]|=(this[k]&h)<<g,b[k-e]=this[k]>>f;0<f&&(b[this.t-e-1]|=(this.s&h)<<g);b.t=this.t-e;b.clamp()}}
function bnpSubTo(a,b){for(var e=0,f=0,g=Math.min(a.t,this.t);e<g;)f+=this[e]-a[e],b[e++]=f&this.DM,f>>=this.DB;if(a.t<this.t){for(f-=a.s;e<this.t;)f+=this[e],b[e++]=f&this.DM,f>>=this.DB;f+=this.s}else{for(f+=this.s;e<a.t;)f-=a[e],b[e++]=f&this.DM,f>>=this.DB;f-=a.s}b.s=0>f?-1:0;-1>f?b[e++]=this.DV+f:0<f&&(b[e++]=f);b.t=e;b.clamp()}
function bnpMultiplyTo(a,b){var e=this.abs(),f=a.abs(),g=e.t;for(b.t=g+f.t;0<=--g;)b[g]=0;for(g=0;g<f.t;++g)b[g+e.t]=e.am(0,f[g],b,g,0,e.t);b.s=0;b.clamp();this.s!=a.s&&BigInteger.ZERO.subTo(b,b)}function bnpSquareTo(a){for(var b=this.abs(),e=a.t=2*b.t;0<=--e;)a[e]=0;for(e=0;e<b.t-1;++e){var f=b.am(e,b[e],a,2*e,0,1);if((a[e+b.t]+=b.am(e+1,2*b[e],a,2*e+1,f,b.t-e-1))>=b.DV)a[e+b.t]-=b.DV,a[e+b.t+1]=1}0<a.t&&(a[a.t-1]+=b.am(e,b[e],a,2*e,0,1));a.s=0;a.clamp()}
function bnpDivRemTo(a,b,e){var f=a.abs();if(!(0>=f.t)){var g=this.abs();if(g.t<f.t)null!=b&&b.fromInt(0),null!=e&&this.copyTo(e);else{null==e&&(e=nbi());var h=nbi(),k=this.s,a=a.s,l=this.DB-nbits(f[f.t-1]);0<l?(f.lShiftTo(l,h),g.lShiftTo(l,e)):(f.copyTo(h),g.copyTo(e));f=h.t;g=h[f-1];if(0!=g){var m=g*(1<<this.F1)+(1<f?h[f-2]>>this.F2:0),n=this.FV/m,m=(1<<this.F1)/m,v=1<<this.F2,u=e.t,B=u-f,q=null==b?nbi():b;h.dlShiftTo(B,q);0<=e.compareTo(q)&&(e[e.t++]=1,e.subTo(q,e));BigInteger.ONE.dlShiftTo(f,
q);for(q.subTo(h,h);h.t<f;)h[h.t++]=0;for(;0<=--B;){var A=e[--u]==g?this.DM:Math.floor(e[u]*n+(e[u-1]+v)*m);if((e[u]+=h.am(0,A,e,B,0,f))<A){h.dlShiftTo(B,q);for(e.subTo(q,e);e[u]<--A;)e.subTo(q,e)}}null!=b&&(e.drShiftTo(f,b),k!=a&&BigInteger.ZERO.subTo(b,b));e.t=f;e.clamp();0<l&&e.rShiftTo(l,e);0>k&&BigInteger.ZERO.subTo(e,e)}}}}function bnMod(a){var b=nbi();this.abs().divRemTo(a,null,b);0>this.s&&0<b.compareTo(BigInteger.ZERO)&&a.subTo(b,b);return b}function Classic(a){this.m=a}
function cConvert(a){return 0>a.s||0<=a.compareTo(this.m)?a.mod(this.m):a}function cRevert(a){return a}function cReduce(a){a.divRemTo(this.m,null,a)}function cMulTo(a,b,e){a.multiplyTo(b,e);this.reduce(e)}function cSqrTo(a,b){a.squareTo(b);this.reduce(b)}Classic.prototype.convert=cConvert;Classic.prototype.revert=cRevert;Classic.prototype.reduce=cReduce;Classic.prototype.mulTo=cMulTo;Classic.prototype.sqrTo=cSqrTo;
function bnpInvDigit(){if(1>this.t)return 0;var a=this[0];if(0==(a&1))return 0;var b=a&3,b=b*(2-(a&15)*b)&15,b=b*(2-(a&255)*b)&255,b=b*(2-((a&65535)*b&65535))&65535,b=b*(2-a*b%this.DV)%this.DV;return 0<b?this.DV-b:-b}function Montgomery(a){this.m=a;this.mp=a.invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<a.DB-15)-1;this.mt2=2*a.t}
function montConvert(a){var b=nbi();a.abs().dlShiftTo(this.m.t,b);b.divRemTo(this.m,null,b);0>a.s&&0<b.compareTo(BigInteger.ZERO)&&this.m.subTo(b,b);return b}function montRevert(a){var b=nbi();a.copyTo(b);this.reduce(b);return b}
function montReduce(a){for(;a.t<=this.mt2;)a[a.t++]=0;for(var b=0;b<this.m.t;++b){var e=a[b]&32767,f=e*this.mpl+((e*this.mph+(a[b]>>15)*this.mpl&this.um)<<15)&a.DM,e=b+this.m.t;for(a[e]+=this.m.am(0,f,a,b,0,this.m.t);a[e]>=a.DV;)a[e]-=a.DV,a[++e]++}a.clamp();a.drShiftTo(this.m.t,a);0<=a.compareTo(this.m)&&a.subTo(this.m,a)}function montSqrTo(a,b){a.squareTo(b);this.reduce(b)}function montMulTo(a,b,e){a.multiplyTo(b,e);this.reduce(e)}Montgomery.prototype.convert=montConvert;
Montgomery.prototype.revert=montRevert;Montgomery.prototype.reduce=montReduce;Montgomery.prototype.mulTo=montMulTo;Montgomery.prototype.sqrTo=montSqrTo;function bnpIsEven(){return 0==(0<this.t?this[0]&1:this.s)}function bnpExp(a,b){if(4294967295<a||1>a)return BigInteger.ONE;var e=nbi(),f=nbi(),g=b.convert(this),h=nbits(a)-1;for(g.copyTo(e);0<=--h;)if(b.sqrTo(e,f),0<(a&1<<h))b.mulTo(f,g,e);else var k=e,e=f,f=k;return b.revert(e)}
function bnModPowInt(a,b){var e;e=256>a||b.isEven()?new Classic(b):new Montgomery(b);return this.exp(a,e)}BigInteger.prototype.copyTo=bnpCopyTo;BigInteger.prototype.fromInt=bnpFromInt;BigInteger.prototype.fromString=bnpFromString;BigInteger.prototype.clamp=bnpClamp;BigInteger.prototype.dlShiftTo=bnpDLShiftTo;BigInteger.prototype.drShiftTo=bnpDRShiftTo;BigInteger.prototype.lShiftTo=bnpLShiftTo;BigInteger.prototype.rShiftTo=bnpRShiftTo;BigInteger.prototype.subTo=bnpSubTo;
BigInteger.prototype.multiplyTo=bnpMultiplyTo;BigInteger.prototype.squareTo=bnpSquareTo;BigInteger.prototype.divRemTo=bnpDivRemTo;BigInteger.prototype.invDigit=bnpInvDigit;BigInteger.prototype.isEven=bnpIsEven;BigInteger.prototype.exp=bnpExp;BigInteger.prototype.toString=bnToString;BigInteger.prototype.negate=bnNegate;BigInteger.prototype.abs=bnAbs;BigInteger.prototype.compareTo=bnCompareTo;BigInteger.prototype.bitLength=bnBitLength;BigInteger.prototype.mod=bnMod;BigInteger.prototype.modPowInt=bnModPowInt;
BigInteger.ZERO=nbv(0);BigInteger.ONE=nbv(1);function Arcfour(){this.j=this.i=0;this.S=[]}function ARC4init(a){var b,e,f;for(b=0;256>b;++b)this.S[b]=b;for(b=e=0;256>b;++b)e=e+this.S[b]+a[b%a.length]&255,f=this.S[b],this.S[b]=this.S[e],this.S[e]=f;this.j=this.i=0}function ARC4next(){var a;this.i=this.i+1&255;this.j=this.j+this.S[this.i]&255;a=this.S[this.i];this.S[this.i]=this.S[this.j];this.S[this.j]=a;return this.S[a+this.S[this.i]&255]}Arcfour.prototype.init=ARC4init;Arcfour.prototype.next=ARC4next;
function prng_newstate(){return new Arcfour}var rng_psize=256,rng_state,rng_pool,rng_pptr;function rng_seed_int(a){rng_pool[rng_pptr++]^=a&255;rng_pool[rng_pptr++]^=a>>8&255;rng_pool[rng_pptr++]^=a>>16&255;rng_pool[rng_pptr++]^=a>>24&255;rng_pptr>=rng_psize&&(rng_pptr-=rng_psize)}function rng_seed_time(){rng_seed_int((new Date).getTime())}
if(null==rng_pool){rng_pool=[];rng_pptr=0;var t;if("Netscape"==navigator.appName&&"5">navigator.appVersion&&window.crypto){var z=window.crypto.random(32);for(t=0;t<z.length;++t)rng_pool[rng_pptr++]=z.charCodeAt(t)&255}for(;rng_pptr<rng_psize;)t=Math.floor(65536*Math.random()),rng_pool[rng_pptr++]=t>>>8,rng_pool[rng_pptr++]=t&255;rng_pptr=0;rng_seed_time()}
function rng_get_byte(){if(null==rng_state){rng_seed_time();rng_state=prng_newstate();rng_state.init(rng_pool);for(rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return rng_state.next()}function rng_get_bytes(a){var b;for(b=0;b<a.length;++b)a[b]=rng_get_byte()}function SecureRandom(){}SecureRandom.prototype.nextBytes=rng_get_bytes;function parseBigInt(a,b){return new BigInteger(a,b)}
function linebrk(a,b){for(var e="",f=0;f+b<a.length;)e+=a.substring(f,f+b)+"\n",f+=b;return e+a.substring(f,a.length)}function byte2Hex(a){return 16>a?"0"+a.toString(16):a.toString(16)}
function pkcs1pad2(a,b){if(b<a.length+11)return alert("Message too long for RSA"),null;for(var e=[],f=a.length-1;0<=f&&0<b;){var g=a.charCodeAt(f--);128>g?e[--b]=g:127<g&&2048>g?(e[--b]=g&63|128,e[--b]=g>>6|192):(e[--b]=g&63|128,e[--b]=g>>6&63|128,e[--b]=g>>12|224)}e[--b]=0;f=new SecureRandom;for(g=[];2<b;){for(g[0]=0;0==g[0];)f.nextBytes(g);e[--b]=g[0]}e[--b]=2;e[--b]=0;return new BigInteger(e)}function RSAKey(){this.n=null;this.e=0;this.coeff=this.dmq1=this.dmp1=this.q=this.p=this.d=null}
function RSASetPublic(a,b){null!=a&&null!=b&&0<a.length&&0<b.length?(this.n=parseBigInt(a,16),this.e=parseInt(b,16)):alert("Invalid RSA public key")}function RSADoPublic(a){return a.modPowInt(this.e,this.n)}function RSAEncrypt(a){a=pkcs1pad2(a,this.n.bitLength()+7>>3);if(null==a)return null;a=this.doPublic(a);if(null==a)return null;a=a.toString(16);return 0==(a.length&1)?a:"0"+a}RSAKey.prototype.doPublic=RSADoPublic;RSAKey.prototype.setPublic=RSASetPublic;RSAKey.prototype.encrypt=RSAEncrypt;
(function(a){if(!a.Base64){var b=function(a){for(var b={},e=0,f=a.length;e<f;e++)b[a.charAt(e)]=e;return b}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),e=function(a){a=a.charCodeAt(0)<<16|a.charCodeAt(1)<<8|a.charCodeAt(2);return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a>>>18)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a>>>12&63)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a>>>6&63)+
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a&63)},f=function(a){if(a.match(/[^\x00-\xFF]/))throw"unsupported character found";for(var b=0;a.length%3;)a+="\x00",b++;a=a.replace(/[\x00-\xFF]{3}/g,e);if(!b)return a;for(a=a.substr(0,a.length-b);b--;)a+="=";return a},g=a.btoa||f,h=function(a){a=b[a.charAt(0)]<<18|b[a.charAt(1)]<<12|b[a.charAt(2)]<<6|b[a.charAt(3)];return String.fromCharCode(a>>16)+String.fromCharCode(a>>8&255)+String.fromCharCode(a&255)},k=function(a){for(var a=
a.replace(/[^A-Za-z0-9\+\/]/g,""),b=0;a.length%4;)a+="A",b++;a=a.replace(/[A-Za-z0-9\+\/]{4}/g,h);2<=b&&(a=a.substring(0,a.length-[0,0,2,1][b]));return a},l=a.atob||k,m=/[^\x00-\x7F]/g,n=function(a){a=a.charCodeAt(0);return 2048>a?String.fromCharCode(192|a>>>6)+String.fromCharCode(128|a&63):String.fromCharCode(224|a>>>12&15)+String.fromCharCode(128|a>>>6&63)+String.fromCharCode(128|a&63)},v=function(a){return a.replace(m,n)},u=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
B=function(a){var b=a.charCodeAt(0),e=a.charCodeAt(1);if(224>b)return String.fromCharCode((b&31)<<6|e&63);a=a.charCodeAt(2);return String.fromCharCode((b&15)<<12|(e&63)<<6|a&63)},q=function(a){return a.replace(u,B)};a.Base64={fromBase64:k,toBase64:f,atob:l,btoa:g,utob:v,btou:q,encode:function(a){return g(v(a))},encodeURI:function(a){return g(v(a)).replace(/[+\/]/g,function(a){return"+"==a?"-":"_"}).replace(/=+$/,"")},decode:function(a){return q(l(a.replace(/[-_]/g,function(a){return"-"==a?"+":"/"})))}}}})(this);
(function(){var a,b,e=null,f,g,h,k,l,m,n,v,u,B,q,A,L,M,Z=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],S=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],T=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],V=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],W=[16,17,18,0,8,7,9,6,10,
5,11,4,12,3,13,2,14,1,15],X=function(){this.list=this.next=null},Y=function(){this.n=this.b=this.e=0;this.t=null},Q=function(a,b,e,f,g,h){this.BMAX=16;this.N_MAX=288;this.status=0;this.root=null;this.m=0;var k=Array(this.BMAX+1),l,o,n,C,p,r,m,q=Array(this.BMAX+1),u,w,v,s=new Y,y=Array(this.BMAX);C=Array(this.N_MAX);var F,A=Array(this.BMAX+1),B,K,P;P=this.root=null;for(p=0;p<k.length;p++)k[p]=0;for(p=0;p<q.length;p++)q[p]=0;for(p=0;p<y.length;p++)y[p]=null;for(p=0;p<C.length;p++)C[p]=0;for(p=0;p<A.length;p++)A[p]=
0;l=256<b?a[256]:this.BMAX;u=a;w=0;p=b;do k[u[w]]++,w++;while(0<--p);if(k[0]==b)this.root=null,this.status=this.m=0;else{for(r=1;r<=this.BMAX&&!(0!=k[r]);r++);m=r;h<r&&(h=r);for(p=this.BMAX;0!=p&&!(0!=k[p]);p--);n=p;h>p&&(h=p);for(B=1<<r;r<p;r++,B<<=1)if(0>(B-=k[r])){this.status=2;this.m=h;return}if(0>(B-=k[p]))this.status=2,this.m=h;else{k[p]+=B;A[1]=r=0;u=k;w=1;for(v=2;0<--p;)A[v++]=r+=u[w++];u=a;p=w=0;do if(0!=(r=u[w++]))C[A[r]++]=p;while(++p<b);b=A[n];A[0]=p=0;u=C;w=0;C=-1;F=q[0]=0;v=null;for(K=
0;m<=n;m++)for(a=k[m];0<a--;){for(;m>F+q[1+C];){F+=q[1+C];C++;K=(K=n-F)>h?h:K;if((o=1<<(r=m-F))>a+1){o-=a+1;for(v=m;++r<K&&!((o<<=1)<=k[++v]);)o-=k[v]}F+r>l&&F<l&&(r=l-F);K=1<<r;q[1+C]=r;v=Array(K);for(o=0;o<K;o++)v[o]=new Y;P=null==P?this.root=new X:P.next=new X;P.next=null;P.list=v;y[C]=v;if(0<C)A[C]=p,s.b=q[C],s.e=16+r,s.t=v,r=(p&(1<<F)-1)>>F-q[C],y[C-1][r].e=s.e,y[C-1][r].b=s.b,y[C-1][r].n=s.n,y[C-1][r].t=s.t}s.b=m-F;w>=b?s.e=99:u[w]<e?(s.e=256>u[w]?16:15,s.n=u[w++]):(s.e=g[u[w]-e],s.n=f[u[w++]-
e]);o=1<<m-F;for(r=p>>F;r<K;r+=o)v[r].e=s.e,v[r].b=s.b,v[r].n=s.n,v[r].t=s.t;for(r=1<<m-1;0!=(p&r);r>>=1)p^=r;for(p^=r;(p&(1<<F)-1)!=A[C];)F-=q[C],C--}this.m=q[1];this.status=0!=B&&1!=n?1:0}}},s=function(a){for(;k<a;)h|=(L.length==M?-1:L.charCodeAt(M++)&255)<<k,k+=8},y=function(a){return h&Z[a]},w=function(a){h>>=a;k-=a},R=function(e,f,g){var h,k,m;if(0==g)return 0;for(m=0;;){s(q);k=u.list[y(q)];for(h=k.e;16<h;){if(99==h)return-1;w(k.b);h-=16;s(h);k=k.t[y(h)];h=k.e}w(k.b);if(16==h)b&=32767,e[f+m++]=
a[b++]=k.n;else{if(15==h)break;s(h);n=k.n+y(h);w(h);s(A);k=B.list[y(A)];for(h=k.e;16<h;){if(99==h)return-1;w(k.b);h-=16;s(h);k=k.t[y(h)];h=k.e}w(k.b);s(h);v=b-k.n-y(h);for(w(h);0<n&&m<g;)n--,v&=32767,b&=32767,e[f+m++]=a[b++]=a[v++]}if(m==g)return g}l=-1;return m},$=function(a,b,e){var f,g,h,k,l,o,m,n=Array(316);for(f=0;f<n.length;f++)n[f]=0;s(5);o=257+y(5);w(5);s(5);m=1+y(5);w(5);s(4);f=4+y(4);w(4);if(286<o||30<m)return-1;for(g=0;g<f;g++)s(3),n[W[g]]=y(3),w(3);for(;19>g;g++)n[W[g]]=0;q=7;g=new Q(n,
19,19,null,null,q);if(0!=g.status)return-1;u=g.root;q=g.m;k=o+m;for(f=h=0;f<k;)if(s(q),l=u.list[y(q)],g=l.b,w(g),g=l.n,16>g)n[f++]=h=g;else if(16==g){s(2);g=3+y(2);w(2);if(f+g>k)return-1;for(;0<g--;)n[f++]=h}else{17==g?(s(3),g=3+y(3),w(3)):(s(7),g=11+y(7),w(7));if(f+g>k)return-1;for(;0<g--;)n[f++]=0;h=0}q=9;g=new Q(n,o,257,S,T,q);if(0==q)g.status=1;if(0!=g.status)return-1;u=g.root;q=g.m;for(f=0;f<m;f++)n[f]=n[f+o];A=6;g=new Q(n,m,0,U,V,A);B=g.root;A=g.m;return 0==A&&257<o||0!=g.status?-1:R(a,b,e)},
aa=function(N,O,H){var D,G;for(D=0;D<H&&!(m&&-1==l);){if(0<n){if(0!=l)for(;0<n&&D<H;)n--,v&=32767,b&=32767,N[O+D++]=a[b++]=a[v++];else{for(;0<n&&D<H;)n--,b&=32767,s(8),N[O+D++]=a[b++]=y(8),w(8);0==n&&(l=-1)}if(D==H)break}if(-1==l){if(m)break;s(1);0!=y(1)&&(m=!0);w(1);s(2);l=y(2);w(2);u=null;n=0}switch(l){case 0:G=N;var L=O+D,M=H-D,E=void 0,E=k&7;w(E);s(16);E=y(16);w(16);s(16);if(E!=(~h&65535))G=-1;else{w(16);n=E;for(E=0;0<n&&E<M;)n--,b&=32767,s(8),G[L+E++]=a[b++]=y(8),w(8);0==n&&(l=-1);G=E}break;
case 1:if(null!=u)G=R(N,O+D,H-D);else a:{G=N;L=O+D;M=H-D;if(null==e){for(var o=void 0,E=Array(288),o=void 0,o=0;144>o;o++)E[o]=8;for(;256>o;o++)E[o]=9;for(;280>o;o++)E[o]=7;for(;288>o;o++)E[o]=8;g=7;o=new Q(E,288,257,S,T,g);if(0!=o.status){alert("HufBuild error: "+o.status);G=-1;break a}e=o.root;g=o.m;for(o=0;30>o;o++)E[o]=5;zip_fixed_bd=5;o=new Q(E,30,0,U,V,zip_fixed_bd);if(1<o.status){e=null;alert("HufBuild error: "+o.status);G=-1;break a}f=o.root;zip_fixed_bd=o.m}u=e;B=f;q=g;A=zip_fixed_bd;G=R(G,
L,M)}break;case 2:G=null!=u?R(N,O+D,H-D):$(N,O+D,H-D);break;default:G=-1}if(-1==G)return m?0:-1;D+=G}return D};window.RawDeflate||(RawDeflate={});RawDeflate.inflate=function(e){var f;null==a&&(a=Array(65536));k=h=b=0;l=-1;m=!1;n=v=0;u=null;L=e;M=0;for(var g=Array(1024),q=[];0<(e=aa(g,0,g.length));){var s=Array(e);for(f=0;f<e;f++)s[f]=String.fromCharCode(g[f]);q[q.length]=s.join("")}L=null;return q.join("")}})();