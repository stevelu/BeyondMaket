<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="0; "url="../ForGetList.action">
<title>Insert title here</title>
</head>
<body onload="loadData()">
        	    <form id="form" visible="false" action="../ForGetList">
            <input style=" display: none;" type="submit">   
        </form>

</body>
<script language="javascript"> 
function loadData()
{
	var myForm = document.getElementById("form");
	myForm.method = "post";
	myForm.submit();
	}
</script> 
</html>