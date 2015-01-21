$(document).ready(
function () {
	
	//set date
	var date=new Date();
	dateTo="";
	dateFrom="";
    dateTo= date.getFullYear() + "-" + (date.getMonth()+1) + "-" + (date.getDate()-1);
    dateFrom= date.getFullYear() + "-" + (date.getMonth()+1) + "-" + (date.getDate()-8);
	$("#dateFrom").val(dateFrom);
	$("#dateTo").val(dateTo);
	
	
	
	
    $(".arrange tr").mouseover(function () {
    	$(this).css('background-color', '#ffff66');
    });	
    
    $(".arrange tr").mouseout(function () {
    	$(this).css('background-color', '#d4e3e5');
    });
	
	//chat
    function sendMessage() {
        var e = new Date,
        time = "";
        time += e.getFullYear() + "-", time += e.getMonth() + 1 + "-", time += e.getDate() + "  ", time += e.getHours() + ":", time += e.getMinutes() + ":", time += e.getSeconds();
        var ask = $("#textarea").val();
        var account = $("#account").val();      
        var url="./chat/send";
        var para='{"account":"'+account+'","text":"'+ask+'"}';
        $.post(url,eval("(" + para + ")"),function(data){
        	var jsonSend=eval('(' + data + ')');
        	var i=null;
        	if(jsonSend.result=="success")
        		{
        			 i = "<div class='message clearfix'><div class='user-logo'><img src='" + pic_me + "'/>" + "</div>" + "<div class='wrap-text'>" + "<h5 class='clearfix'>"+ myname +"</h5>" + "<div>" + ask + "</div>" + "</div>" + "<div class='wrap-ri'>" + "<div clsss='clearfix'><span>" + time + "</span></div>" + "</div>" + "<div style='clear:both;'></div>" + "</div>" ;
    				null != data && "" != data ? ($(".mes" ).append(i), $(".chat01_content").scrollTop($(".mes" ).height()), $("#textarea").val("")) : alert("\u8bf7\u8f93\u5165\u804a\u5929\u5185\u5bb9!")      		
        		}
        	else
        		{
       
        			 i = "<div class='message clearfix'>" + "<div class='user-logo'>" + "<img src='" + pic_ice + "'/>" + "</div>" + "<div class='wrap-text'>" + "<h5 class='clearfix'>" + ice_name + "</h5>" + "<div>" + data + "</div>" + "</div>" + "<div class='wrap-ri'>" + "<div clsss='clearfix'><span>" + time + "</span></div>" + "</div>" + "<div style='clear:both;'></div>";
        			null != data && "" != data ? ($(".mes" ).append(i), $(".chat01_content").scrollTop($(".mes" ).height()), $("#textarea").val("")) : alert("\u8bf7\u8f93\u5165\u804a\u5929\u5185\u5bb9!");       		
        		}
        });
        setInterval(getMessage,5000); 
    }
    
    //get
    function getMessage() {
        var e = new Date,
        time = "";
        time += e.getFullYear() + "-", time += e.getMonth() + 1 + "-", time += e.getDate() + "  ", time += e.getHours() + ":", time += e.getMinutes() + ":", time += e.getSeconds();
        var account = $("#account").val();      
        var url="./chat/get";
        var para='{"account":"'+account+'"}';
        var ask="test";
        $.post(url,eval("(" + para + ")"),function(data){
        	var jsonGet=eval('(' + data + ')');

        	if(jsonGet.result=="success")
        		{
        		var messages=jsonGet.Message;

        			for(var i=0;i< messages.length;i++)
        				{

        				data=messages[i].text;
            			var i = "<div class='message clearfix'>" + "<div class='user-logo'>" + "<img src='" + pic_ice + "'/>" + "</div>" + "<div class='wrap-text'>" + "<h5 class='clearfix'>" + ice_name + "</h5>" + "<div>" + data + "</div>" + "</div>" + "<div class='wrap-ri'>" + "<div clsss='clearfix'><span>" + time + "</span></div>" + "</div>" + "<div style='clear:both;'></div>";
            			null != data && "" != data ? ($(".mes" ).append(i), $(".chat01_content").scrollTop($(".mes" ).height())) : alert("\u8bf7\u8f93\u5165\u804a\u5929\u5185\u5bb9!");       		       				
        				}
        			
        		}
        });                
    }
  
    pic_me = "img/meH50.jpg",
    pic_ice = "img/iceH50.jpg",
    ice_name = "xiaoice";
    myname = "me";
   
    $("#sendMsgBtn").click(function () {
    	sendMessage();
    });
    
    //profile
    function getVCode() {
        function h() {
            -1 != g.indexOf("*#emo_") && (g = g.replacgetVCode("*#", "<img src='img/").replacgetVCode("#*", ".gif'/>"), h())
        }
        var account = $("#account").val();
        var phone = $("#phoneNumber").val();
        var para = '{"account":"'+account+'","phoneNumber":'+phone+'}';
        para=eval("(" + para + ")");

        var url="./profile/get_vcode";
        $.post(url,para,function(data){
        	$("#result").html(data);
        	
        });
    }
    
    function register() {
        var account = $("#account").val();
        var phone = $("#phoneNumber").val();
        var code = $("#verifyCode").val();
        var para = '{"account":"'+account+'","phoneNumber":'+phone+',"verifyCode":'+code+'}';
        para=eval("(" + para + ")");
        var url="./profile/register";
        $.post(url,para,function(data){
        	data= eval("(" + data + ")");
        	result=data.registerResult;
        	if(result==true)
        		{
        			window.location.href="chat.jsp?account="+data.account;    		
        		}
        	else
        		{
        			alert(data.message);   
        		}
        });
    }
    
    function get_url(type) {
    	
        var account = $("#account2").val();
        var para = '{"account":"'+account+'"}';
        para=eval("(" + para + ")");
        var url="./profile/"+type;
        $.post(url,para,function(data){
        	$("#registerResult").html(data);
        });
    }
    
   
    $("#auth").click(function () {
        getVCode();
    });
    
    $("#register").click(function () {
    	register();
    });
    
    $("#get_profile").click(function () {
    	get_url("get_profile");
    });
    
    $("#get_profile_edit_url").click(function () {
    	get_url("get_profile_edit_url");
    });
    
    $("#get_reg_url").click(function () {
    	get_url("get_reg_url");
    });
    
    //sync
    function sync(item) 
    {
        var url = "./sync";
        var param = '{"item":"' + item + '"}';
        $.post(url,eval("(" + param + ")"), function(data)
        {
        	var i="<div class='wrap-text'>" + "<h5 class='clearfix'>"+"</h5>" + "<div>" + data + "</div>" + "</div>" 
         	$(".mes").append(i);
        });
        
   }

   
    $("#profiles").click(function () {
        sync("profiles");
    });
    
    $("#messages").click(function () {
        sync("messages");
    });

    $("#both").click(function () {
        sync("both");
    });
    
});
