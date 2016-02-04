var config = [];

function getConfig(conf){
	chrome.runtime.sendMessage({type:"config",conf:conf}, function(response) {
		config[conf] = response;
	});
};
getConfig("ban");
getConfig("fen");


function EasyNGA(){
	var loca = location.href;
	if(loca.indexOf("-7")>0){
		
		
		
		//	去除大漩涡分版提示
		if(config['fen'] == "true"){
			var elems = document.getElementsByClassName("titleadd2"),
				elemslength = elems.length;
			for(var i =0;i<elemslength;i++){
				elems[0].parentNode.parentNode.parentNode.remove();
			}
		}
	}
	if(loca.indexOf("tid") > "-1"){
		shieldBtnInit();
	}else{
		//	去除大漩涡版头
		if(config['ban'] == "true"){
			document.getElementsByClassName("forumbox")[0].remove();
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
function shieldBtnInit(){
	var author = document.getElementsByClassName("author"),
		button = document.createElement("button"),
		buttontext = document.createTextNode("屏蔽"),
		buttonarr = [];
	button.className = "shield";
	button.appendChild(buttontext);
	for(var i =0;i<author.length;i++){
		button[i] = button.cloneNode(true);
		author[i].parentNode.appendChild(button[i]);
		button[i].onclick = function(){
			var button = this,
				buttonparent = button.parentNode,
				a = buttonparent.getElementsByTagName('a'),
				uid,
				name;
			if(a.length === 3){
				name = a[1].innerHTML;
				uid = a[2].innerHTML;
			}else if (a.length === 2){
				name = a[0].innerHTML;
				uid = a[1].innerHTML;
			}else if (a.length === 1){
				name = a[0].innerHTML;
				uid = a[0].href.substr(a[0].href.indexOf("uid=")+4);
			}
			chrome.runtime.sendMessage({type:"addshield",uid:uid,name:name}, function(response) {
				alert(response);
			});
		};
	}
	
}
function shieldInit(){
	var loca = location.href;
	if(loca.indexOf("-7")>0){
		
	}
	//	帖子详情 屏蔽
	if(loca.indexOf("tid") > "-1"){
		chrome.runtime.sendMessage({type:"getshield"}, function(response) {
			var shield = response,
				i,
				author = document.getElementsByClassName("author"),
				elem,
				elemnode;
			for(i=0;i<author.length;i++){
				elem = author[i];
				elemnode = elem.innerHTML;
				if(shield.indexOf(elemnode)>0){
					if(elem.parentNode.parentNode.tagName === "DIV"){
						elem.parentNode.parentNode.remove();
					}else{
						elem.parentNode.parentNode.parentNode.parentNode.remove();
					}
				}
			}
		});
	}
	//	帖子列表 屏蔽
	if(loca.indexOf("?fid=-7") > "-1"){
		chrome.runtime.sendMessage({type:"getshield"}, function(response) {
			var shield = response,
				i,
				author = document.getElementsByClassName("author"),
				elem,
				elemnode;
			for(i=0;i<author.length;i++){
				elem = author[i];
				elemnode = elem.innerHTML;
				if(shield.indexOf(elemnode)>0){
					elem.parentNode.parentNode.parentNode.remove();
				}
			}
		});
	}
}
addLoadEvent(EasyNGA);
addLoadEvent(shieldInit);