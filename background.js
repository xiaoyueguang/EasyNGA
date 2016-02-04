//	测试功能

chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
	if(request.type === "config"){
		var conf = request.conf;
		sendResponse(localStorage[conf]);
	}else if(request.type === "addshield"){
		var obj = {
			name:request.name,
			uid:request.uid
		},
			result = addShield(obj);
		
		sendResponse(result);
	}else if(request.type === "getshield"){
		sendResponse(localStorage.shield);
	}
	
});

function addShield(obj){
	if(localStorage.shield === undefined){
		localStorage.shield = "";
	}
	if(localStorage.shield.indexOf(JSON.stringify(obj)) === -1){
		localStorage.shield += JSON.stringify(obj)+"^&*";
		return obj.name + "已添加到屏蔽菜单";
	}else{
		return obj.name + "已存在";
	}
}

//	返回 包含对象的数组
function readShield(){
	var shieldarr = localStorage.shield.split("^&*");
	
	shieldarr.pop();
	return shieldarr.map(function(data){
		return JSON.parse(data);
	});
}

function delShield(id){
	var shieldarr = localStorage.shield.split("^&*"),
		index,
		uid = parseInt(id);
	shieldarr.pop();
	shieldarr = shieldarr.map(function(data){
		return JSON.parse(data);
	});
	for(var i = 0;i<shieldarr.length;i++){
		if(parseInt(shieldarr[i].uid) === uid){
			index = i;
		}
	}
	if(index >= 0){
		shieldarr.splice(index,1);
	}
	
	shieldarr = shieldarr.map(function(data){
		return JSON.stringify(data);
	});
	shieldarr.push("");
	localStorage.shield = shieldarr.join("^&*");
}