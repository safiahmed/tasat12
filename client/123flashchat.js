var version="9.7";var versionstr="9.7";var v=0;var buildNumber="20121010";var my_domain="";var objectId="";var defaultObjectId="topcmm_123flashchat";jsInclude("123flashchat_ad.js");function jsInclude(a){document.write('<script src="',a,'" type="text/javaScript"><\/script>')}if(my_domain==undefined||my_domain==""){my_domain=getDomain()}function isIP(f){var a=false;if(f.length>0){try{var b=f.split(".");if(b.length!=4){a=false}else{for(var g=0;g<b.length;g++){if(!isIntegerInRange(b[g],0,255)){a=false;break}else{a=true}}}}catch(h){a=false}}else{a=false}return a}function isIntegerInRange(i,g,f){if(isEmpty(i)){if(isIntegerInRange.arguments.length==1){return false}else{return(isIntegerInRange.arguments[1]==true)}}if(!isInteger(i,false)){return false}var h=parseInt(i);return((h>=g)&&(h<=f))}function isInteger(b){var a;if(isEmpty(b)){if(isInteger.arguments.length==1){return 0}else{return(isInteger.arguents[1]==true)}}for(var a=0;a<b.length;a++){var f=b.charAt(a);if(!isDigit(f)){return false}}return true}function isEmpty(a){return((a==null)||(a.length==0))}function isDigit(a){return((a>="0")&&(a<="9"))}function getDomain(){var h=":";var j=".";var f="";try{hostStr=window.location.host;f=hostStr.indexOf(h)==-1?hostStr:hostStr.substring(0,hostStr.indexOf(h));if(!isIP(f)){var b=f.split(".");var a=b.length;var g="";if(a>2){while(--a>0){if(g==""){g=b[a]}else{g=b[a]+"."+g}}f=g}}}catch(i){f=""}return f}function getMovie(){try{var a="topcmm_flashchat";if(isIE()){return window[a]}else{return document[a]}}catch(b){return undefined}}var L=true;try{document.domain=my_domain}catch(e){}var userAgent=navigator.userAgent.toLowerCase();var is_webtv=userAgent.indexOf("webtv")!=-1;var is_kon=userAgent.indexOf("konqueror")!=-1;var is_mac=userAgent.indexOf("mac")!=-1;var is_chrome=userAgent.indexOf("chrome")!=-1;var is_saf=!is_chrome&&(userAgent.indexOf("applewebkit")!=-1||navigator.vendor=="Apple Computer, Inc.");var is_opera=userAgent.indexOf("opera")!=-1&&opera.version();var is_moz=!is_chrome&&!is_saf&&(navigator.product=="Gecko")&&userAgent.substr(userAgent.indexOf("firefox")+8,3);var is_ns=!is_opera&&!is_webtv&&!is_saf&&userAgent.indexOf("compatible")==-1&&userAgent.indexOf("mozilla")!=-1;var is_ie=!is_opera&&!is_saf&&!is_webtv&&userAgent.indexOf("msie")!=-1&&userAgent.substr(userAgent.indexOf("msie")+5,3);if(urlLink==undefined){var urlLink;try{urlLink=window.location.href}catch(e){try{urlLink=document.URL}catch(e){urlLink=""}}}function d(a){if(a.contentDocument){return(a.contentDocument)}else{if(a.contentWindow){return(a.contentWindow.document)}else{if(a.document){return(a.document)}else{return(undefined)}}}}function c(m){var q=null;var f=m;var i=m+"_div";var p="border-width:0;height:0;width:0;visibility:hidden;";var h="position:absolute;top:0;left:0;width:0;height:0;overflow:hidden;";if(document.getElementById(f)){return(document.getElementById(f))}try{var a=document.createElement("iframe");a.setAttribute("id",f);a.setAttribute("name",f);a.setAttribute("style",p);var b=document.createElement("div");b.setAttribute("id",i);b.setAttribute("style",h);b.appendChild(a);document.body.appendChild(b);if(typeof document.frames!="undefined"){q=document.frames[f]}if(!q||typeof q.nodeType=="undefined"){q=document.getElementById(f)}}catch(l){var g='<iframe id="'+f+'" name="'+f+'" style="'+p+'"></iframe>';if(!document.getElementById(i)){b=document.createElement("div");b.setAttribute("id",i);b.setAttribute("style",h);b.innerHTML=g;document.getElementsByTagName("DIV")[0].appendChild(b)}else{document.getElementById(i).innerHTML=g}q=document.getElementById(f)}return q}function D(){var a=navigator.userAgent.toLowerCase();SV("cometObject.type",a,1)}function F(){var a=urlLink.indexOf(my_domain)==-1?"0":"1";SV("checkCometObj.cometDomain",my_domain,1);SV("checkCometObj.K",a,1)}function G(){var a=navigator.userAgent.toLowerCase();SV("cometObject.wb",a,1)}function H(){var a=urlLink;SV("cometObject.url",a)}function I(a){SV("cometObject.xmlStr",a,1)}function J(j,o,n){try{var a=is_ie;var k=j+"?"+o;var i=c(n);var h=d(i)}catch(b){}try{if(!h.location){h.location=k}else{h.location.replace(k)}}catch(b){i.src=k}}function SV(g,a,b){if(b>0){window.document.topcmm_123flashchat.setCometFunc(g,a)}else{try{window.document.topcmm_123flashchat.SetVariable(g,a)}catch(f){window.document.topcmm_123flashchat[1].SetVariable(g,a)}}}var ROOT_URL=urlLink.substring(0,urlLink.lastIndexOf("/"));var init_user;var init_password;var init_nickname;var init_root;var init_room;var init_room_pwd;var init_lang;var init_skin;var admin_mode;var init_ad;var loading_bkground;var init_private;var init_private_message;var init_listroom;var init_invisible;var init_group;var init_host;var init_port;var init_host_s;var init_port_s;var init_host_h;var init_port_h;var view_private;var init_avatar;var init_lcid;var init_url;var init_fullscreen_text;var init_fullscreen_url;var init_position;var init_maximize;var init_width;var init_height;function getParameter(a){a=(a=="")?(a):(a+"&");return a}function openSWF(k,q,o,p,f,a){if(p==undefined){p="flashchat"}if(f==undefined){objectId=defaultObjectId}else{objectId=f}if(a==undefined){a="9.0.0"}var m=k.indexOf(".swf");var g=k.indexOf("?");var j="";var r="";var n="";if(g!=-1){r=k.substring(0,g);n=k.substring(g+1)}else{r=k}if(init_user!=undefined&&n.indexOf("init_user")==-1){n=getParameter(n);n+="init_user="+init_user}if(init_password!=undefined&&n.indexOf("init_password")==-1){n=getParameter(n);n+="init_password="+init_password}if(init_nickname!=undefined&&n.indexOf("init_nickname")==-1){n=getParameter(n);n+="init_nickname="+init_nickname}if(init_root!=undefined&&n.indexOf("init_root")==-1){n=getParameter(n);n+="init_root="+init_root}if(init_room!=undefined&&n.indexOf("init_room")==-1){n=getParameter(n);n+="init_room="+init_room}if(init_room_pwd!=undefined&&n.indexOf("init_room_pwd")==-1){n=getParameter(n);n+="init_room_pwd="+init_room_pwd}if(init_lang!=undefined&&n.indexOf("init_lang")==-1){n=getParameter(n);n+="init_lang="+init_lang}if(init_skin!=undefined&&n.indexOf("init_skin")==-1){n=getParameter(n);n+="init_skin="+init_skin}if(admin_mode!=undefined&&n.indexOf("admin_mode")==-1){n=getParameter(n);n+="admin_mode="+admin_mode}if(init_ad!=undefined&&n.indexOf("init_ad")==-1){n=getParameter(n);n+="init_ad="+init_ad}if(loading_bkground!=undefined&&n.indexOf("loading_bkground")==-1){n=getParameter(n);n+="loading_bkground="+loading_bkground}if(init_private!=undefined&&n.indexOf("init_private")==-1){n=getParameter(n);n+="init_private="+init_private}if(init_private_message!=undefined&&n.indexOf("init_private_message")==-1){n=getParameter(n);n+="init_private_message="+init_private_message}if(init_listroom!=undefined&&n.indexOf("init_listroom")==-1){n=getParameter(n);n+="init_listroom="+init_listroom}if(init_invisible!=undefined&&n.indexOf("init_invisible")==-1){n=getParameter(n);n+="init_invisible="+init_invisible}if(init_group!=undefined&&n.indexOf("init_group")==-1){n=getParameter(n);n+="init_group="+init_group}if(init_host!=undefined&&n.indexOf("init_host")==-1){n=getParameter(n);n+="init_host="+init_host}if(init_port!=undefined&&n.indexOf("init_port")==-1){n=getParameter(n);n+="init_port="+init_port}if(init_host_s!=undefined&&n.indexOf("init_host_s")==-1){n=getParameter(n);n+="init_host_s="+init_host_s}if(init_port_s!=undefined&&n.indexOf("init_port_s")==-1){n=getParameter(n);n+="init_port_s="+init_port_s}if(init_host_h!=undefined&&n.indexOf("init_host_h")==-1){n=getParameter(n);n+="init_host_h="+init_host_h}if(init_port_h!=undefined&&n.indexOf("init_port_h")==-1){n=getParameter(n);n+="init_port_h="+init_port_h}if(view_private!=undefined&&n.indexOf("view_private")==-1){n=getParameter(n);n+="view_private="+view_private}if(init_avatar!=undefined&&n.indexOf("init_avatar")==-1){n=getParameter(n);n+="init_avatar="+init_avatar}if(init_lcid!=undefined&&n.indexOf("init_lcid")==-1){n=getParameter(n);n+="init_lcid="+init_lcid}if(init_fullscreen_text!=undefined&&n.indexOf("init_fullscreen_text")==-1){n=getParameter(n);n+="init_fullscreen_text="+init_fullscreen_text}if(init_fullscreen_url!=undefined&&n.indexOf("init_fullscreen_url")==-1){n=getParameter(n);n+="init_fullscreen_url="+init_fullscreen_url}if(m==-1){j=r+".swf"}else{j=r}j=j+"?b="+buildNumber;document.write('<DIV id="'+p+'">');document.write("</DIV>");var b={};var h={FlashVars:n,allowScriptAccess:"always"};var i={id:objectId,name:objectId,allowScriptAccess:"always",wmode:is_saf?"window":"opaque"};swfobject.embedSWF(j,p,q,o,a,"expressInstall.swf",b,h,i);try{if(j.indexOf("123flashchat.swf")!=-1&&j.indexOf("_123flashchat.swf")==-1&&window.embedAd){embedAd()}}catch(l){}}var swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);
/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/
return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return}f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){J.parentNode.removeChild(J);E()}}function E(){if(e){return}if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return}}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return}var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return}var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return}AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();var POSITION_TOP_LEFT=1;var POSITION_TOP_RIGHT=2;var POSITION_BOTTOM_LEFT=3;var POSITION_BOTTOM_RIGHT=4;var MINIMIZE=0;var MAXIMIZE=1;var Point=function(a,b){return{x:parseInt(a),y:parseInt(b)}};var Dimension=function(b,a){return{width:parseInt(b),height:parseInt(a)}};function FlashFloatingWindow(){this.bodySize=new Dimension(document.body.clientWidth,document.body.clientHeight||document.documentElement.clientHeight);this.position=POSITION_BOTTOM_RIGHT;this.maximize=MAXIMIZE;this.containerSize=new Dimension(202,318);this.url="";this.lastStatus={width:0,height:0};this.objectId="topcmm_flashchat_lite";this.divElement=new function(){this.id="flashchat_lite"};this.setUrl=function(newUrl){this.url=newUrl};this.setContainerSize=function(width,height){try{this.containerSize=new Dimension(width,height)}catch(e){this.containerSize=new Dimension(202,318)}};this.setPosition=function(newPostion){try{this.position=newPostion}catch(e){this.position=POSITION_BOTTOM_RIGHT}};this.setMaximize=function(newMaximize){try{this.maximize=newMaximize}catch(e){this.maximize=MAXIMIZE}};this.setObjectId=function(newObjectId){this.objectId=newObjectId};this.show=function(){if(document.body==null){return}var cdiv=document.createElement("DIV");cdiv.id=this.divElement.id;with(cdiv.style){if(is_moz||is_chrome||is_saf){position="fixed"}else{position="absolute"}}this.lastStatus.width=this.containerSize.width;this.lastStatus.height=this.containerSize.height;var initHeight=this.containerSize.height;var initY;if(this.maximize==MINIMIZE){initHeight="32";initY=this.bodySize.height-32}else{initY=this.bodySize.height-this.containerSize.height}var pos=new Point(this.bodySize.width-this.containerSize.width,initY);var innerHTML='<div id="'+this.divElement.id+'" style="z-index:10;width:'+this.containerSize.width+"px; height:"+initHeight+"px; left:"+pos.x+"px; top:"+(pos.y)+'px;"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="100%" height="100%" id="'+this.objectId+'" align="middle">       <param name="allowScriptAccess" value="always" />       <param name="allowFullScreen" value="false" />       <param name="movie" value="'+this.url+'" />       <param name="quality" value="high" />       <param name="scale" value="noscale" />       <param name="salign" value="tl" />       <param name="devicefont" value="true" />       <param name="bgcolor" value="#ffffff" />       <embed src="'+this.url+'" quality="high" scale="noscale" salign="tl" devicefont="true" bgcolor="#ffffff" width="100%" height="100%" name="blue" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />      </object></div>';document.write(innerHTML);this.divElement=document.getElementById(this.divElement.id);with(this.divElement.style){if(is_moz||is_opera||is_chrome||is_saf){position="fixed"}else{position="absolute"}}this.moveTo(this.position);if(is_ie){setInterval("getFlashFloatingWindowInstance().moveTo("+this.position+")",20)}};this.setModel=function(){document.write('<link href="'+this.domain+'/style/fixed.css" rel="stylesheet" type="text/css" title="Fixed content">')};this.setLocation=function(point){document.getElementById(this.divElement.id).style.left=parseInt(point.x)+"px";document.getElementById(this.divElement.id).style.top=parseInt(point.y)+"px"};this.getRect=function(){this.divElement=document.getElementById(this.divElement.id)};this.moveTo=function(type){var margin=0,scrollTop=0,clientHeight;if(document.compatMode=="CSS1Compat"){if(is_opera){clientHeight=document.body.clientHeight||document.documentElement.clientHeight}else{clientHeight=document.documentElement.clientHeight||document.body.clientHeight}}else{clientHeight=document.body.clientHeight||document.documentElement.clientHeight}if(document.documentElement&&document.documentElement.scrollTop){scrollTop=document.documentElement.scrollTop}else{if(document.body&&document.body.scrollTop){scrollTop=document.body.scrollTop}else{scrollTop=document.body.scrollTop}}if(is_moz||is_chrome||is_saf){margin=15;scrollTop=0}if(type==POSITION_BOTTOM_LEFT){document.getElementById(this.divElement.id).style.left=0;document.getElementById(this.divElement.id).style.top=clientHeight-document.getElementById(this.divElement.id).offsetHeight+scrollTop+"px"}else{if(type==POSITION_TOP_RIGHT){document.getElementById(this.divElement.id).style.left=this.bodySize.width-this.containerSize.width-margin+"px";document.getElementById(this.divElement.id).style.top=scrollTop+"px"}else{if(type==POSITION_TOP_LEFT){document.getElementById(this.divElement.id).style.left=0;document.getElementById(this.divElement.id).style.top=scrollTop+"px"}else{document.getElementById(this.divElement.id).style.left=this.bodySize.width-this.containerSize.width-margin+"px";document.getElementById(this.divElement.id).style.top=clientHeight-this.divElement.offsetHeight+scrollTop+"px"}}}};this.min=function(){this.divElement.style.height="32px";document.getElementById(this.objectId).style.height="32px";this.moveTo(this.position)};this.res=function(){this.divElement.style.height=this.lastStatus.height+"px";document.getElementById(this.objectId).style.height=this.lastStatus.height+"px";this.moveTo(this.position)};this.close=function(){this.setDisplay(false)};this.setDisplay=function(flag){if(flag==true){this.divElement.style.display="block"}else{this.divElement.style.display="none"}};this.setInitSize=function(){this.divElement.style.width=this.containerSize.width;if(this.maximize==MINIMIZE){this.divElement.style.height="32px";document.getElementById(this.objectId).style.height="32px"}else{this.divElement.style.height=this.containerSize.height;document.getElementById(this.objectId).style.height=this.containerSize.height}this.moveTo(this.position)}}function showFCWindow(){if(document.body==null||document.body==undefined){openSWF(init_url,init_width,init_height)}else{if(init_fullscreen_text!=undefined){init_url=getParameter(init_url);init_url+="init_fullscreen_text="+init_fullscreen_text}if(init_fullscreen_url!=undefined){init_url=getParameter(init_url);init_url+="init_fullscreen_url="+init_fullscreen_url}getFlashFloatingWindowInstance().setUrl(init_url);getFlashFloatingWindowInstance().setPosition(init_position);getFlashFloatingWindowInstance().setMaximize(init_maximize);getFlashFloatingWindowInstance().setContainerSize(init_width,init_height);getFlashFloatingWindowInstance().show()}}var flashFloatingWindow=null;function getFlashFloatingWindowInstance(){if(flashFloatingWindow==null){flashFloatingWindow=new FlashFloatingWindow()}return flashFloatingWindow}function maxWindow(b,g,a){var f=window.open(ROOT_URL+"?init_room="+b+"&init_user="+g+"&init_password="+a,"newWin","width=634,height=476,left=0,top=0,toolbar=No,location=No,scrollbars=No,status=Yes,resizable=Yes,fullscreen=No");f.focus()}function closeFrame(){getFlashFloatingWindowInstance().close()}function minFrame(){getFlashFloatingWindowInstance().min()}function resFrame(){getFlashFloatingWindowInstance().res()}function showFrame(){getFlashFloatingWindowInstance().setInitSize()}if(0==objectId.length){objectId=defaultObjectId}function topcmmSocialConnect(b){var a=navigator.appName.indexOf("Microsoft")!=-1?window[objectId]:document[objectId];if(null==a){return}var f=window.open(b,"topcmmSocialWin","menubar=no,width=1000,height=745,toolbar=no");if(!f||null==f){a.toTopcmmChat("block");return}var g=setInterval(function(){if(f.closed){clearInterval(g);a.toTopcmmChat("closed")}},1000)}function isTopcmmSocialReady(){return"function"==typeof(topcmmSocialConnect)};