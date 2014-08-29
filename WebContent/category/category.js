/**
 * 
 */
function GotoGgHQ(hb,ib,jb){
	
		var myForm = document.createElement("form");
		myForm.method = "post";
		myForm.action ="./ForGetData";
		document.body.appendChild(myForm);
		myForm.submit();	
		document.body.removeChild(myForm);
	}