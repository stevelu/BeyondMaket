<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="stylesheet" type="text/css" href="css/btn.css">
    <script type="text/javascript" src="js/jquery-min.js"></script>
    <script type="text/javascript" src="js/tools.js"></script>
    <script type="text/javascript" src="js/ColorProfile.js"></script>
    <script type="text/javascript" src="js/WebSocket.js"></script>
</head>
<body style="background: rgb(16, 20, 25); color: rgb(255, 255, 255);">
    <div style="border-color: rgb(41, 46, 54); color: rgb(255, 255, 255); background-image: none; background-color: rgb(41, 46, 54);" id="header" class="header" name="index">
        <div class="narrowhead">
            <div id="tdxico" class="tdxico"></div>
            <div style="display: none;" id="backbtn" class="backbtn2"></div>
        </div>
        <div class="narrowhead">&nbsp;</div>
        <div id="topic" class="widehead">test</div>
        <!-- <div class="narrowhead">&nbsp;<img id="refrbtn" class="refrbtn" src="images/refresh.png"></div>
        <div class="narrowhead"><img style="display: none;" id="refrbtn2" class="refrbtn" src="images/refresh.png"><img id="search" class="search" src="images/search.png">
        </div> -->
    </div>
    <div style="height: 836px;" id="content" class="content">
        <iframe style="height: 836px; display: none;" id="content1" src="unitZxg/unitZxg.html"></iframe>
        <iframe style="height: 836px; display: none;" id="content2" src="unitSc/unitSc.html"></iframe>
        <iframe style="height: 836px; display: none;" id="content3" src=""></iframe>
        <iframe style="height: 836px; display: none;" id="content4" src=""></iframe>
        <iframe style="height: 836px; " id="contentDg" src="category/temp.jsp"></iframe>
    </div>
    <iframe style="height: 937px; display: none;" id="contentGg" class="contentGg" src="unitGg/unitGg.html"></iframe>
    <iframe style="height: 937px; display: none;" id="contentCx" class="contentCx" src="unitCx/unitCx.html"></iframe>
    <iframe style="height: 937px; display: none;" id="contentZx" class="contentZx" src="unitZxkj/unitZxkj.html"></iframe>
    <iframe style="height: 937px; display: none;" id="contentKz" class="contentKz" src="unitKzkj/unitKzkj.html"></iframe>
    <div style="border-color: rgb(40, 43, 50); color: rgb(138, 141, 148); background-image: none; background-color: rgb(40, 43, 50);" id="footer" class="footer">
        <a href="https://www.upyun.com/"><img src="http://upfiles.b0.upaiyun.com/logo/90x45.png" alt="UPYUN"></a>
        <!-- <div style="width: 450px; background-image: none;" id="foot1"><img src="images/btn_bottombar_zxg.png"><img style="display: none;" src="images/btn_bottombar_zxg_p.png"><br><span>自选</span>
        </div>
        <div style="width: 450px; background-image: none;" id="foot2" class="foot_curr"><img style="display: none;" src="images/btn_bottombar_ph.png"><img src="images/btn_bottombar_ph_p.png"><br><span>市场</span>
        </div>
        <div style="width: 450px; background-image: none;" id="foot3"><img src="images/btn_bottombar_zx.png"><img style="display: none;" src="images/btn_bottombar_zx_p.png"><br><span>资讯</span>
        </div> -->
        <!--<div id="foot4"><img src="images/btn_bottombar_jy.png"/><img src="images/btn_bottombar_jy_p.png" style="display:none;"/><br/><span>交易</span></div>-->
    </div>
    <script type="text/javascript" src="../js/btn.js"></script>
    <script type="text/javascript" src="../js/index.js"></script><div style="display: none;" class="loading"><table border="0" cellspacing="0" cellpadding="0"><tbody><tr><td><img src="images/loading.gif"><div>&nbsp;</div></td></tr></tbody></table></div><!--weixin适配添加代码行-start--><canvas style="bottom: 0px; display: none; position: absolute;" id="canvasKL" height="458" width="1350"></canvas>
    <script type="text/javascript" charset="GBK" src="js/util.js"></script>
    <script type="text/javascript" charset="GBK" src="js/absPainter.js"></script>
    <script type="text/javascript" charset="GBK" src="js/ajax.js"></script>
    <script type="text/javascript" charset="GBK" src="js/crossLines.js"></script>
    <script type="text/javascript" charset="GBK" src="js/axis-x.js"></script>
    <script type="text/javascript" charset="GBK" src="js/tip.js"></script>
    <script type="text/javascript" charset="GBK" src="js/linepainter.js"></script>
    <script type="text/javascript" charset="GBK" src="js/axis-y.js"></script>
    <script type="text/javascript" charset="GBK" src="js/chartEventHelper.kl.js"></script>
    <script type="text/javascript" charset="GBK" src="unitKx2/kldata2.js"></script>
    <script type="text/javascript" src="unitKx2/kl-painter-full21.js"></script>
    <script type="text/javascript" src="unitKx2/unitKx2.js"></script><!--weixin适配添加代码行-end-->
</body>
</html>