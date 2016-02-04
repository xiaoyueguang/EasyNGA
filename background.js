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

function readShield(){
	var shieldarr = localStorage.shield.split("^&*");
		shieldarr.pop();
	return shieldarr.map(function(data){
		return JSON.parse(data);
	});
}