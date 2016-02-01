function EasyNGA(){
	var loca = location.href;
	//去除大漩涡版头
	if(loca.indexOf("-7")>0){
		document.getElementsByClassName("forumbox")[0].remove();
		var elems = document.getElementsByClassName("titleadd2"),
			elemslength = elems.length;
		for(var i =0;i<elemslength;i++){
			elems[0].parentNode.parentNode.parentNode.remove();
		}
	}
};
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {  
		window.onload = function() {
		oldonload();
		func();
		}
	}
}
addLoadEvent(EasyNGA);