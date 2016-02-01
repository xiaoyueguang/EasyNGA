window.onload = function(){
	optionInit();
}

$("submit").onclick = function(){
	var ban = $("ban").checked,
		fen = $("fen").checked;
	save("ban",ban);
	save("fen",fen);
};
function optionInit(){
	if(get("ban") === "true"){
		$("ban").checked = true;
	}
	if(get("fen") === "true"){
		$("fen").checked = true;
	}
}
function save(key,value){
	localStorage[key] = value;
}
function get(key){
	return localStorage[key];
}
function $(id){
	return document.getElementById(id);
}
chrome.extension.onMessage.addListener(function(){
	return get("ban");
})