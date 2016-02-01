//	测试功能

chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
	if(request.type === "config"){
		var conf = request.conf;
		sendResponse(localStorage[conf]);
	}else if(request.type === "addshield"){
		sendResponse(localStorage[]);
	}
	
});

function addShield(){
	
}