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
		return "已添加";
	}else{
		return "已存在";
	}
	
}
