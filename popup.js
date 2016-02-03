window.onload = function(){
	optionInit();
	shieldInit();
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
//	测试功能
function shieldInit(){
	var elem,
		elemnode,
		shield = $("shield"),
		shielddata = readShield();
	
	for(var i =0;i<shielddata.length;i++){
		elem = document.createElement("li");
		elemnode = document.createTextNode(shielddata[i].name);
		elem.appendChild(elemnode);
		shield.appendChild(elem);
	}
}