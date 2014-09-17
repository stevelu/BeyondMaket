/**
 * 
 */
function GotoGgHQ(hb,ib,jb){
	
	var map=[{"name":"code","value":hb},{"name":"Scode","value":ib},{"name":"name","value":jb}];
	postwith("./ForGetData",map);
	
	}

function postwith(to, p) {
	var myForm = document.createElement("form");
	myForm.method = "post";
	myForm.action = to;
	for ( var k in p) {
	var myInput = document.createElement("input");
	myInput.setAttribute("name", p[k].name);
	myInput.setAttribute("value", p[k].value);
	myInput.style.display='none';
	myForm.appendChild(myInput);
	}
	document.body.appendChild(myForm);
	myForm.submit();
	document.body.removeChild(myForm);
	}