//	测试功能
chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
	var conf = request.conf;
	if(request.type === "config"){
		sendResponse(localStorage[conf]);
	}
});