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
//	屏蔽菜单初始化
function shieldInit(){
	var elem,
		elemnode,
		button,
		buttonnode,
		shield = $("shield"),
		shielddata = readShield();
		
	for(var i =0;i<shielddata.length;i++){
		var name = shielddata[i].name,
			uid = shielddata[i].uid;
		elem = document.createElement("li");
		elemnode = document.createTextNode(name);
		button = document.createElement("button");
		button.setAttribute("data-uid",uid);
		buttonnode = document.createTextNode("删除");
		
		elem.appendChild(elemnode);
		button.appendChild(buttonnode);
		elem.appendChild(button);
		button.onclick = function(){
			var uid = this.getAttribute("data-uid");
			delShield(uid);
			location.reload();
		}
		shield.appendChild(elem);
	}
}