<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.model.category"%>
<%@page import="java.util.List"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" type="text/css" href="category.css">
    <title>Insert title here</title>
    <script type="text/javascript" src="js/iscroll.js"></script>
    <script type="text/javascript" src="js/CreateTabMob.js"></script>
    <script type="text/javascript" src="js/tools.js"></script>
    <script type="text/javascript" src="category/category.js"></script>
    <script type="text/javascript" src="detail/detail.js"></script>
</head>
<body style="background: none repeat scroll 0% 0% rgb(16, 20, 25); color: rgb(255, 255, 255);" onload="pushData()">
    <div style=" overflow: hidden;" id="wrapper" class="wrapper">
        <div style="-ms-transform-origin: 0px 0px; -ms-transform: translate(0px, 0px);" id="scroller" class="scroller">
            <div id="list" class="list">

                <!-- left -->
                <div id="list_left_tab">
                    <%String AttName =(String)request.getAttribute("name");
                    String AttCode =(String)request.getAttribute("code");
                    %>

                    <table cellpadding="0" cellspacing="0" border="0" id="list_pull_tab" style="float: left; position: relative; width: 200px; transition-property: transform; transform-origin: 0px 0px 0px; transition-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1); transform: translate(0px, 0px) scale(1) translateZ(0px); transition-duration: 0ms;">
                        <tr>
                            <td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
                                <div id="list_head_left" style="float:left;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
                                    <span style="display:-moz-inline-box;display:inline-block;"><%=AttName %></span>
                                </div>
                            </td>
                        </tr>


                        <tr>
                            <td>
                                <span style="display:-moz-inline-box;display:inline-block;">现量过滤：</span>
                            </td>
                        </tr>

                        <tr>
                            <td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
                                <form action="./ForGetData" method="post" name="select">
                                    现量：<select name="max">

                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                    <input name="task" style="display:none;" value="now" />
                                    <input name="code" style="display:none;" value="<%=AttCode%>" />
                                    <input name="name" style="display:none;" value="<%=AttName%>" />
                                    <input type="submit" />
                                </form>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <span style="display:-moz-inline-box;display:inline-block;">过滤：</span>
                            </td>
                        </tr>

                        <tr>
                            <td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
                                <form action="./ForGetData" method="post" name="all" >
                                    <ul>
                                        <li>
                                            过滤值：<select name="filter">

                                                <option value="1">现量</option>
                                                <option value="2">增仓</option>
                                            </select>
                                            <input name="task" style="display:none;" value="kind" />
                                            <input name="code" style="display:none;" value="<%=AttCode%>" />
                                            <input name="name" style="display:none;" value="<%=AttName%>" />
                                        </li>
                                        <li>
                                            最小：<input name="min" />
                                        </li>
                                        <li>
                                            最大：<input name="max" />
                                        </li>

                                        <li>
                                            类型：<select name="kind">
                                                <option value="no">--</option>
                                                <option value="双开">双开</option>
                                                <option value="双平">双平</option>
                                                <option value="多换">多换</option>
                                                <option value="空换">空换</option>
                                                <option value="多开">多开</option>
                                                <option value="空开">空开</option>
                                                <option value="空开">空平</option>
                                                <option value="多平">多平</option>
                                                <option value="换手">换手</option>
                                                <option value="开仓">开仓</option>
                                                <option value="平仓">平仓</option>
                                            </select>
                                        </li>
                                        <li>
                                            <input type="submit" />
                                        </li>
                                    </ul>
                                </form>
                            </td>
                        </tr>
                    </table>
                </div>

                <!--    RIGHT -->
                <!--    RIGHT -->
                <!--    RIGHT -->
                <!--  <div id="list_right_tab" style="float: left; position: relative; overflow: hidden; width: 1180px; height: 779px;"> -->
                <div id="list_right_tab" style="float: left; position: relative;  width: 1000px; ">
                    <table cellpadding="0" cellspacing="0" border="0" id="list_pull_tab" style="float: left; position: relative; width: 1000px; transition-property: transform; transform-origin: 0px 0px 0px; transition-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1); transform: translate(0px, 0px) scale(1) translateZ(0px); transition-duration: 0ms;">
                        <tbody>
                            <!--    TITLE -->
                            <tr>
                                <!-- add by beyond -->
                                <td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
                                    <div id="list_head_Now" onclick="SortChange('Now','list_head_Now')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
                                        <span style="display:-moz-inline-box;display:inline-block;">shijian</span>
                                        <span style="display: none; color: rgb(255, 61, 1);">↓</span>
                                    </div>
                                </td>
                                <!-- add by beyond -->
                                <td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
                                    <div id="list_head_Now" onclick="SortChange('Now','list_head_Now')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
                                        <span style="display:-moz-inline-box;display:inline-block;">jiage</span>
                                        <span style="display: none; color: rgb(255, 61, 1);">↓</span>
                                    </div>
                                </td>
                                <td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
                                    <div id="list_head_Gains" onclick="SortChange('Gains','list_head_Gains')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
                                        <span style="display:-moz-inline-box;display:inline-block;">xianlian</span>
                                        <span style="display: none; color: rgb(255, 61, 1);">↓</span>
                                    </div>
                                </td>
                                <td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
                                    <div id="list_head_Volume" onclick="SortChange('Volume','list_head_Volume')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
                                        <span style="display:-moz-inline-box;display:inline-block;">zengcang</span>
                                        <span style="display: none; color: rgb(255, 61, 1);">↓</span>
                                    </div>
                                </td>
                                <td style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background-image:-webkit-gradient(linear,0 0,0 100%,from(rgb(29,34,40)),to(rgb(29,34,40)));background-image:-moz-linear-gradient(rgb(29,34,40),rgb(29,34,40));background-image:-o-linear-gradient(rgb(29,34,40),rgb(29,34,40));">
                                    <div id="list_head_Ccl" onclick="SortChange('Ccl','list_head_Ccl')" style="float:right;position:relative;height:40px;line-height:40px;font-size:18px;color:rgb(255,255,255);">
                                        <span style="display:-moz-inline-box;display:inline-block;">xingzhi</span>
                                        <span style="display: none; color: rgb(255, 61, 1);">↓</span>
                                    </div>
                                </td>


                            </tr>
                            <!--    TITLE -->
                            <%    if(request.getAttribute("tickk")!=null)
                            {
                            //category category=new category();
                            //category=(category)request.getAttribute("cate");
 		                            List<String[]> cateList=(List<String[]>)request.getAttribute("tickk");
                                    String[] head =(String[])request.getAttribute("listHead");
                                    String tickJson =(String)request.getAttribute("tickJson");
                                   String kind =(String)request.getAttribute("kind");
                                   //String kind=new String(request.getParameter("kind").getBytes("ISO-8859-1"),"utf-8");
                                    //String AttName =(String)request.getAttribute("AttName");
                                    String [] data=new String [7];
                                    String name=null;
                                    String code=null;
                                    int num=0;
                                    for(int i=0;i< cateList.size()-1;i++)
                                    {
                                    data=cateList.get(i);
                                    name=data[2];
                                    code=data[0];
                                    num=i+1;
                                    %><tr>
                                        <%
                                        for (int j=0;j
                                        <5;j++) {
                                                %>
                                            <td id="list_Gp_<%=num %>_<%=j+1 %>" onclick="GotoGgHQ('<%=code %>','47','<%=name %>')" style="white-space:nowrap;padding:0px 5px;height:40px;border-bottom:1px solid rgb(29,34,40);background:rgb(16,20,25);">
                                                <div style="float:right;position:relative;font-size:16px;">
                                                    <span id="list_data_<%=num %>_<%=j+1 %>" style="height: 20px; line-height: 20px; padding: 1px; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; display: inline-block; color: rgb(255, 61, 1); border: 0px;"><%= data[j] %></span>
                                                </div>
                                            </td>
                                            <%
                                            }
                                            %>


                                    </tr>

                                    <%
                                    }%>

                                    <a type="hidden" style=" display: none;" id="tickJson123">"<%=tickJson %>"</a>
                                     <a type="hidden" style=" display: none;" id="kind123">"<%=kind%>"</a>
                                    <% }
                                    %>




                        </tbody>
                    </table>
                </div>







            </div>

            <!--     <div style="top: 792px;" id="bottom_pull" class="bottom_pull"><span id="bottom_icon" class="up_icon">&nbsp;</span><span id="bottom_text" class="pull_text">上拉加载更多</span></div> -->


        </div>
    </div>


</body>
</html>