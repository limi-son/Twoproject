"use strict";$(function(){function a(){var s=$.cookie("uid");console.log(s);var n=$.cookie("username"),a="";s?($("#login").css("display","none"),$("#reg").css("display","none"),$("#name").css("display","block"),$("#name").prepend(n),$(".hear_sopping").css({background:"#FF6700",color:"#fff"}),$(".hear_sopping i").css({color:"#fff"}),$(".hear_sopping a").css({color:"#fff"}),$("#dan1").css("display","block"),a=' <section class="w1"> \n                            <img src="../images/success.png" alt="" style="float: left;">\n                        <section class="wn">\n                            <h2>已成功加入购物车！</h2>\n                            <p class="pname"></p>\n                        </section>\n                        </section>\n                        <section class="w2">\n                            <a href="../index.html">继续购物</a>\n                            <a href="cart.html">去购物车结算</a>\n                        </section>',$(".win").html(a),$.ajax({type:"post",url:"../api/cart.php",data:{uid:s},success:function(s){for(var n=JSON.parse(s),a=0,o=0;o<n.arr.length;o++)a+=1*n.arr[o].num;$(".hear_sopping a").html("购物车("+a+")")}})):($("#login").css("display","block"),$("#reg").css("display","block"),$("#name").css("display","none"),$("#name").html(""),$(".hear_content .dla").css({display:"none"}),$(".hear_sopping").css({background:"#333",color:"#b0b0b0"}),$(".hear_sopping i").css({color:"#b0b0b0"}),$(".hear_sopping a").css({color:"#b0b0b0"}),$("#dan1").css("display","none"),a='您还没有登陆，请先<a href="login.html" class="log">登陆</a>或者<a href="reg.html" class="log">注册</a>',$(".win").html(a))}$(".nav_list a").mouseenter(function(){$("#bloc .nav_1").eq($(this).index()).css({heigth:"200",display:"block"})}),$(".nav_list a").mouseleave(function(){$("#bloc .nav_1").css({heigth:"0",display:"none"})}),$("#bloc .nav_1").hover(function(){$("#bloc .nav_1 ").css({heigth:"0",display:"none"}),$("#bloc .nav_1 ").eq($(this).index()).css({heigth:"200",display:"block"})},function(){$("#bloc .nav_1 ").css({heigth:"0",display:"none"})}),$(".nav_boto li").mouseenter(function(){$("#prve").css("display","none"),xid=$(this).attr("data-id"),$.ajax({type:"post",url:"../api/list.php",data:{qty:12,page:1,typ:xid},success:function(s){var n=JSON.parse(s);uls='<section class="boto_right">';for(var a=0;a<1;a++){uls+="<ul>";for(var o=0;o<n.arr.length;o++)uls+=' <a href="javascript:;" data-id=\''+n.arr[o].type+"'>\n                                        <img src=\"../"+n.arr[o].images+'" width="40px" height="40px" alt="">\n                                        <span>'+n.arr[o].name+"</span>\n                                    </a>";uls+="</ul> "}uls+="</section>",$("#bloc2").html(uls);var t=$(".boto_right ul a").eq(0).outerWidth()*(n.arr.length/6);$(".boto_right ul ").css("width",t),$("#bloc2 .boto_right").hover(function(){$("#bloc2 .boto_right ").css("display","none"),$("#bloc2 .boto_right ").eq($(this).index()).css({display:"block"}),$("#prve").css("display","none"),$("#bloc2").on("click",".boto_right ul a",function(){var s=$(this).attr("data-id");console.log(s),location.href="list2.html?oid="+s})},function(){$("#bloc2 .boto_right ").css("display","none"),$("#prve").css("display","block")})}})}),$(".nav_boto li").mouseleave(function(){$("#bloc2 .boto_right").css("display","none"),$("#prve").css("display","block")}),a(),$("#name").mouseenter(function(){$("#name").css({background:"#fff",color:"#FF6700"}),$(".dla").stop().animate({height:200,opacity:1},600),$(".dla").css({display:"block"})}),$("#name").mouseleave(function(){$("#name").css({background:"#333333",color:"#b0b0b0"}),$(".dla").css({display:"none",height:0})}),$(".hear_content .dla").hover(function(){$(".hear_content #name").css({background:"#fff",color:"black"}),$(".hear_content .dla").css({height:200,display:"block"})},function(){$("#name").css({background:"#333333",color:"#b0b0b0"}),$(".hear_content .dla").stop().animate({height:0},200),$(".hear_content .dla").css({display:"none"})}),$("#reg").click(function(){$("#box").append('<section class="Mask">\n                <section class="register">\n                    <h2>协议声明</h2>\n                    <p class="p1"><span>《小米商城用户协议》</span> 、 <span>《账号协议》</span> 、 <span>《隐私政策》</span> 请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件</p>\n                    <section class="ptext">\n                        <h2>小米商城用户协议</h2>\n                        <section class="ba1">版本日期：2018年12月18日</section>\n                        <p>《小米商城用户协议》（以下简称“本协议”）是您（或称“用户”，指注册、登录、使用、浏览小米商城的个人或组织）与小米科技有限责任公司（平台运营主体）及其关联公司（包括但不限于小米通讯技术有限公司，以下简称“小米”）及其合作单位（包括但不限于第三方商家）之间关于小米商城网站（域名为www.mi.com，简称本网站）与小米产品、程序及服务所订立的协议。小米和合作单位分别就您在本网站接受服务的过程中享受的权利和承担的义务，与您签订本协议，并独立向您承担责任，互不承担保证、连带或共同责任等。</p>\n                        <p class="fb">\n                            小米在此特别提醒用户认真阅读 、充分理解---本协议中各条款。您对本协议的接受即自愿接受全部条款的约束，请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、法律适用和争议解决条款，尤此类条款将以加粗的形式提示您注意。如您同意本协议并完成全部注册程序，即表示您已充分阅读、理解并接受本协议的全部内容，并与小米达成一致，成为小米商城平台用户。阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，您应立即停止注册程序。\n                        </p>\n                        <h3>一、协议范围</h3>\n                        <h4>1.1【主体范围】</h4>\n                        <p>小米商城平台运营主体为小米科技有限责任公司，自营商品的销售主体以小米商城网站页面公示的证照信息为准（包括但不限于小米通讯技术有限公司）。本协议项下， <span class="fb">\n                                小米商城平台运营主体可能根据平台业务调整而发生变更，变更后的小米商城平台运营主体与您共同履行本协议并向您提供服务，小米商城平台运营主体的变更不会影响您本协议项下的权益。\n                        </span> </p>\n                        <h4>1.2【协议补充】</h4>\n                        <p>小米隐私政策（http://www.mi.com/about/new-privacy/）、小米帐号使用协议均为本协议不可分割的一部分，与本协议具有同等法律效力。</p>\n                        <p> 考虑到互联网业务的高速发展，本协议条款并不能完整覆盖您与小米的所有权利和义务，也不能保证完全符合发展的需求。<span class="fb">小米商城平台的法律声明、隐私政策、平台规范、规则、通知、公告、操作规则、帮助文档、温馨提示等均为本协议的补充协议，与本协议不可分割且具有同等法律效力。如您使用本平台服务，视为您同意上述补充协议。</span></p>\n                        <h3>二、小米帐号申请与使用</h3>\n                        <h4>2.1【小米帐号使用协议】</h4>\n                        <p class="fb">如您登陆小米商城，仍需注册有小米帐号。您对小米帐号的申请、使用等行为应符合小米帐号使用协议及小米不时修订并公布的规范。</p>\n                        <h4>2.2【用户资格】</h4>\n                        <p>在您开始注册程序使用本平台服务前，您应当具备中华人民共和国法律规定的与您行为相适应的民事行为能力。<span class="fb">若您不具备前述与您行为相适应的民事行为能力，则您应当在您的监护人的参与下使用本款软件，您及您的监护人应依照法律规定承担因此而导致的一切后果。</span> 您帐户下的操作行为，代表您本人；如需代表特定的单位在小米商城平台购买商品或享受服务，您须按照小米的要求提供该单位相关的证件材料及授权材料。</p>\n                        <p>此外，您还需确保您不是任何国家、国际组织或者地域实施的贸易限制、制裁或其他法律、规则限制的对象，否则您可能无法正常注册及使用小米商城平台服务。</p>\n                    </section>\n                    <section class="que">\n                        <input type="button" value="不同意" class="disa">\n                        <input type="button" value="同意" class="Agree">\n                    </section>\n                </section>\n            </section>')}),$("#box").on("click",".Mask .disa",function(){$("#box .Mask").css("display","none")}),$("#box").on("click",".Mask .Agree",function(){location.href="reg.html"}),$("#user").click(function(){$.ajax({type:"post",url:"../api/guestbook/index.php",data:{m:"index",a:"logout"},success:function(s){var n=JSON.parse(s);n.code?alert(n.message):a()}})});var s=$(".tui_bo ul dl").size()*$(".tui_bo ul dl").eq(0).outerWidth()+$(".tui_bo ul dl").eq(0).outerWidth();$(".tui_bo ul").css("width",s);var o=5*($(".tui_bo ul dl").eq(0).outerWidth()+14);$(".ne1").click(function(){var s,n;s=o,n=0,1<=++n&&(n=1),$(".tui_bo ul").stop().animate({left:-s*n},2e3,function(){}),$(".ne span").attr("class",""),$(this).addClass("sp")}),$(".pv1").click(function(){var s,n;s=o,n=0,--n<=0&&(n=0),$(".tui_bo ul").stop().animate({left:-s*n},2e3),$(".ne span").attr("class",""),$(this).addClass("sp")}),$(".hear_sopping").mouseenter(function(){var s=$.cookie("uid");$(".cartgo").stop().animate({opacity:1},600),$(".cartgo").css({display:"block"}),null!=s&&$.ajax({type:"post",url:"../api/cart.php",data:{uid:s},success:function(s){for(var n=JSON.parse(s),a=0,o=0,t=0;t<n.arr.length;t++)a+=1*n.arr[t].num;for(var c=0;c<n.arr.length;c++)o+=1*n.arr[c].price;for(var e="<dl>",i=0;i<n.arr.length;i++)e+='<dd data-id="'+n.arr[i].id+'">\n                        <img src="../images/'+n.arr[i].images+'" alt="">\n                        <span>'+n.arr[i].name+"</span>\n                        <span>"+n.arr[i].price+"元 &nbsp;&nbsp;X"+n.arr[i].num+"</span>\n                    </dd>";e+='</dl>\n                        <section class="carbo">\n                        <span>\n                            <em>共'+a+"件商品</em>\n                            <p><strong>"+o+'</strong>元</p>\n                        </span>\n                        <a href="cart.html">去购物车结算</a>\n                    </section>';0!=n.arr.length?$(".cartgo").html(e):($(".cartgo").html("<dl>购物车中还没有商品，赶紧选购吧!</dl>"),$(".cartgo dl").addClass("nadl")),$(".cartgo").hover(function(){$(".cartgo").css({display:"block",opacity:1})},function(){$(".cartgo").css({display:"none",opacity:0})})}})}),$(".hear_sopping").mouseleave(function(){$(".cartgo").css({display:"none",opacity:0})})});