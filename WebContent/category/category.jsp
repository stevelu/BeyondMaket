<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.model.category"%>
<%@page import="java.util.List"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="category.css">
<title>Insert title here</title>
    <script type="text/javascript" src="js/iscroll.js"></script>
    <script type="text/javascript" src="js/CreateTabMob.js"></script>
    <script type="text/javascript" src="js/tools.js"></script>
    <script type="text/javascript" src="category/category.js"></script>
</head>
<body style="background: none repeat scroll 0% 0% rgb(16, 20, 25); color: rgb(255, 255, 255);">
    <div style=" overflow: hidden;" id="wrapper" class="wrapper">
    <div style="-ms-transform-origin: 0px 0px; -ms-transform: translate(0px, 0px);" id="scroller" class="scroller">
    <div id="list" class="list">
    
 <!--    LEFT -->
   <%--  <div id="list_left_tab" style="float:left;position:relative;">
<table cellpadding="0" cellspacing="0" border="0" style="float:left;position:relative;">
<tbody>
<tr>
<td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
<div id="list_head_Name" style="height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);" onclick="SortChange('Name','list_head_Name')">qihuo</div>
</td>
</tr>

 <%    if(request.getAttribute("cate")!=null)
 {
	//category category=new category();
	//category=(category)request.getAttribute("cate");
	List<String[]> cateList=(List<String[]>)request.getAttribute("cate");
	String [] data=new String [14];
	String name=null;
	String code=null;
	int num=0;
	for(int i=0;i< cateList.size()-1;i++)
	{
		data=cateList.get(i);
		name=data[2];
		code=data[0];
		num=i+1;
		
	
	%>
	<tr>
	
	<td id="list_Gp_<%=num%>_Name_td"  style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background:rgb(16,20,25);" onclick="GotoGgHQ('<%=code %>','47','<%=name %>')">
	<div style="font-size:16px;">
	<span id="list_Gp_<%=num%>_Name" style="height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);"><%=name %></span>
	</div>
	<div style="font-size:12px;">
	<span id="list_Gp_<%=num%>_Code" style="height:13px;line-height:13px;padding:1px;display:-moz-inline-box;display:inline-block;color:rgb(138,141,148);"><%=code %></span>
	</div>
	</td>
	 </tr>
	
	
<%
	}
}
	 %> 
	
	 </tbody>
</table>
</div> --%>
 <!--    RIGHT -->
  <!--    RIGHT -->
 <!--    RIGHT -->
 <div id="list_right_tab" style="float: left; position: relative; overflow: hidden; width: 1180px; height: 779px;">
	<table cellpadding="0" cellspacing="0" border="0" id="list_pull_tab" style="float: left; position: relative; width: 1180px; transition-property: transform; transform-origin: 0px 0px 0px; transition-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1); transform: translate(0px, 0px) scale(1) translateZ(0px); transition-duration: 0ms;">
	<tbody>
	 <!--    TITLE -->
	<tr>
	<!-- add by beyond -->
	<td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
	<div id="list_head_Now" onclick="SortChange('Now','list_head_Now')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
	<span style="display:-moz-inline-box;display:inline-block;">guzhiqihuo</span>
	<span style="display: none; color: rgb(255, 61, 1);">↓</span>
	</div>
	</td>
	<!-- add by beyond -->
	<td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
	<div id="list_head_Now" onclick="SortChange('Now','list_head_Now')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
	<span style="display:-moz-inline-box;display:inline-block;">zuojie</span>
	<span style="display: none; color: rgb(255, 61, 1);">↓</span>
	</div>
	</td>
	<td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
	<div id="list_head_Gains" onclick="SortChange('Gains','list_head_Gains')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
	<span style="display:-moz-inline-box;display:inline-block;">jinkai</span>
	<span style="display: none; color: rgb(255, 61, 1);">↓</span>
	</div>
	</td>
	<td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
	<div id="list_head_Volume" onclick="SortChange('Volume','list_head_Volume')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
	<span style="display:-moz-inline-box;display:inline-block;">zuigao</span>
	<span style="display: none; color: rgb(255, 61, 1);">↓</span>
	</div>
	</td>
	<td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
	<div id="list_head_Ccl" onclick="SortChange('Ccl','list_head_Ccl')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
	<span style="display:-moz-inline-box;display:inline-block;">zuidi</span>
	<span style="display: none; color: rgb(255, 61, 1);">↓</span>
	</div>
	</td>
	<td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
	<div id="list_head_Cc" onclick="SortChange('Cc','list_head_Cc')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
	<span style="display:-moz-inline-box;display:inline-block;">xianjia</span>
	<span style="display: none; color: rgb(255, 61, 1);">↓</span>
	</div>
	</td>
	<td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
	<div id="list_head_Jsj" onclick="SortChange('Jsj','list_head_Jsj')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
	<span style="display:-moz-inline-box;display:inline-block;">zongliang</span>
	<span style="display: none; color: rgb(255, 61, 1);">↓</span>
	</div></td>
	<td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
	<div id="list_head_Lb" onclick="SortChange('Lb','list_head_Lb')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
	<span style="display:-moz-inline-box;display:inline-block;">liangbi</span>
	<span style="display: none; color: rgb(255, 61, 1);">↓</span>
	</div></td>
	<td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
	<div id="list_head_Open" onclick="SortChange('Open','list_head_Open')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
	<span style="display:-moz-inline-box;display:inline-block;">qian chi cang liang</span>
	<span style="display: none; color: rgb(255, 61, 1);">↓</span>
	</div>
	</td>
	<td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
	<div id="list_head_Max" onclick="SortChange('Max','list_head_Max')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
	<span style="display:-moz-inline-box;display:inline-block;">chi cang liang</span>
	<span style="display: none; color: rgb(255, 61, 1);">↓</span>
	</div>
	</td>
	<td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
	<div id="list_head_Min" onclick="SortChange('Min','list_head_Min')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
	<span style="display:-moz-inline-box;display:inline-block;">jie suan jia</span>
	<span style="display: none; color: rgb(255, 61, 1);">↓</span>
	</div>
	</td>

	</tr>
	<!--    TITLE -->
	
	
	 <%    if(request.getAttribute("cate")!=null)
	 {
		//category category=new category();
		//category=(category)request.getAttribute("cate");
		List<String[]> cateList=(List<String[]>)request.getAttribute("cate");
		String [] data=new String [14];
		String name=null;
		String code=null;
		int num=0;
		for(int i=0;i< cateList.size()-1;i++)
		{
			data=cateList.get(i);
			name=data[2];
			code=data[0];
			num=i+1;
			%><tr><%
			for (int j=0;j<11;j++)
			{
			
		
					%>
				<td id="list_Gp_<%=num %>_<%=j+1 %>" onclick="GotoGgHQ('<%=code %>','47','<%=name %>')" style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background:rgb(16,20,25);">
				<div style="float:right;position:relative;font-size:16px;">
				<span id="list_Gp_<%=num %>_<%=j+1 %>" style="height: 20px; line-height: 20px; padding: 1px; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; display: inline-block; color: rgb(255, 61, 1); border: 0px;"><%= data[j+2] %></span>
				</div>
				</td>
				<%
			}
			%></tr><%
		}
	 }
	%>
	
	
	
	
	</tbody>
	</table>
</div>
 
 
 
 
 
 
 
    </div>
    
    
    </div>
    </div>
</body>
</html>