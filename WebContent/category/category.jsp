<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="com.model.category"%>
<%@page import="java.util.List"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" type="text/css" href="unitFlpm.css">
<title>Insert title here</title>
</head>
<body>
    <div style="overflow: hidden;" id="wrapper" class="wrapper">
    <div style="-ms-transform-origin: 0px 0px; -ms-transform: translate(0px, 0px);" id="scroller" class="scroller">
    <div id="top_pull" class="top_pull">
    <span id="top_icon" class="down_icon">&nbsp;</span>
    <span id="top_text" class="pull_text"></span>
    </div>
    <div id="list" class="list">
    
    <div id="list_left_tab" style="float:left;position:relative;">
<table cellpadding="0" cellspacing="0" border="0" style="float:left;position:relative;">
<tbody>
<tr>
<td >
<div id="list_head_Name" onclick="SortChange('Name','list_head_Name')">quhuo</div>
</td>
</tr>
<td id="list_Gp_1_Name_td" onclick="GotoGgHQ('12','47','2')">
 <%    if(request.getAttribute("cate")!=null)
 {
	//category category=new category();
	//category=(category)request.getAttribute("cate");
	List<String[]> cateList=(List<String[]>)request.getAttribute("cate");
	String [] data=new String [14];
	String name=null;
	String code=null;
	for(int i=0;i< cateList.size();i++)
	{
		data=cateList.get(i);
		name=data[2];
		code=data[0];
		
	
	%>
	<td><a>123456</a></td>
	
	<td id="list_Gp_1_Name_td" onclick="GotoGgHQ('<%=code %>','47','<%=name %>')">
	<div >
	<span id="list_Gp_1_Name"><%=name %></span>
	</div>
	<div >
	<span id="list_Gp_1_Code"><%=code %></span>
	</div>
	</td>
	
	
<%
	}
}
	 %> 
	 </tr>
	 </tbody>
</table>
</div>
    </div>
    <div style="top: 458px;" id="bottom_pull" class="bottom_pull">
    <span id="bottom_icon" class="up_icon">&nbsp;</span>
    <span id="bottom_text" class="pull_text">drop up</span></div></div></div>
    <a href="../index.jsp">back </a>
</body>
</html>