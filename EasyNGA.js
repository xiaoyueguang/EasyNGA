var config = [];

function getConfig(conf){
	chrome.runtime.sendMessage({conf:conf}, function(response) {
		config[conf] = response;
	});
};
getConfig("ban");
getConfig("fen");


function EasyNGA(){
	var loca = location.href;
	if(loca.indexOf("-7")>0){
		
		//	去除大漩涡版头
		if(config['ban'] == "true"){
			document.getElementsByClassName("forumbox")[0].remove();
		}
		
		//	去除大漩涡分版提示
		if(config['fen'] == "true"){
			var elems = document.getElementsByClassName("titleadd2"),
				elemslength = elems.length;
			for(var i =0;i<elemslength;i++){
				elems[0].parentNode.parentNode.parentNode.remove();
			}
		}
	}
}

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