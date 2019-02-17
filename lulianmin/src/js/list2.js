$(function () {
    /*滑过导航时 */

    $('.nav_list a').mouseenter(function () {
        $('#bloc .nav_1').eq($(this).index()).css({ 'heigth': '200', 'display': 'block' });
    });
    $('.nav_list a').mouseleave(function () {
        //排他
        $('#bloc .nav_1').css({ 'heigth': '0', 'display': 'none' });
    });

    $('#bloc .nav_1').hover(function () {
        $('#bloc .nav_1 ').css({ 'heigth': '0', 'display': 'none' });
        $('#bloc .nav_1 ').eq($(this).index()).css({ 'heigth': '200', 'display': 'block' });
    }, function () {
        $('#bloc .nav_1 ').css({ 'heigth': '0', 'display': 'none' });
    });



    // // 鼠标滑过时显示侧导航 ajax请求数据
    $('.nav_boto li').mouseenter(function () {
        $('#prve').css('display', 'none');
        //获取类型data-id
        xid = $(this).attr("data-id");
        // console.log(xid);
        $('.nav_boto li').eq($(this).index()).css('background','#FF6700');
        $.ajax({
            type: "post",
            url: "../api/list.php",
            data: {
                qty: 12, //数量
                page: 1,//页数
                typ: xid  //类型
            },
            success: function (str) {
                var arr = JSON.parse(str);
                // console.log(arr);
                uls = `<section class="boto_right">`;
                for (var i = 0; i < 1; i++) {
                    uls += `<ul>`;
                    for (var j = 0; j < arr.arr.length; j++) {
                        uls += ` <a href="javascript:;" data-id='${arr.arr[j].type}'>
                                        <img src="../${arr.arr[j].images}" width="40px" height="40px" alt="">
                                        <span>${arr.arr[j].name}</span>
                                    </a>`;
                    }
                    uls += `</ul> `;
                }
                uls += `</section>`;
                //滑过本身时也显示
                $('#bloc2').html(uls);
                var uw = $('.boto_right ul a').eq(0).outerWidth() * (arr.arr.length / 6);
                $('.boto_right ul ').css('width', uw);
                $('#bloc2 .boto_right').hover(function () {
                    $('#bloc2 .boto_right ').css('display', 'none');
                    $('#bloc2 .boto_right ').eq($(this).index()).css({ 'display': 'block' });
                    $('.nav_boto li').eq(xid-1).css('background','#FF6700');
                    $('#prve').css('display', 'none');

                    //点击事件跳转到列表页
                    $('#bloc2').on('click', '.boto_right ul a', function () {
                        var oid = $(this).attr("data-id");
                        // console.log(oid);
                        location.href = 'list2.html?oid=' + oid;
                    });

                }, function () {
                    $('#bloc2 .boto_right ').css('display', 'none');
                    $('#prve').css('display', 'block');
                    $('.nav_boto li').css('background','transparent');
                });
            }
        });
    });
    $('.nav_boto li').mouseleave(function () {
        //排他
        $('#bloc2 .boto_right').css('display', 'none');
        $('#prve').css('display', 'block');
        $('.nav_boto li').css('background','transparent');
    });

    // 获取地址的oid
    var kum = decodeURI(location.search); //接收字符串
    var kum1 = kum.substring(5) * 1; //去掉？、oid和等号的字符，隐式转换
    // console.log(kum1);

    if(kum1==1){
        $('.nas1').html(`<a href="../index.html">首页</a><span>></span><a href="">手机</a>`);
    }
    else if(kum1==2){
        $('.nas1').html(`<a href="../index.html">首页</a><span>></span><a href="">电视</a>`);
    }
    else if(kum1==3){
        $('.nas1').html(`<a href="../index.html">首页</a><span>></span><a href="">笔记本</a>`);
    }
    

    var k1 = 0;
    var pas = 1;
    function show(id, k1, pas) {
        $.ajax({
            type: "post",
            url: "../api/list2.php",
            data: {
                qty: 8, //数量
                page: pas,//页数
                typ: kum1, //数据种类
                chaxun: id  //查询类型
            },
            success: function (str) {
                var arr = JSON.parse(str);
                // console.log(arr);
                var dls = "";
                for (var i = 0; i < arr.arr.length; i++) {
                    dls += `<dl>
                            <a href="javascript:;" data-id="${arr.arr[i].id}"><img src="${arr.arr[i].imges}" alt=""></a>
                            <a href="javascript:;" data-id="${arr.arr[i].id}">${arr.arr[i].name}</a>
                            <p>${arr.arr[i].price}元</p>
                            <a href="javascript:;" data-id="${arr.arr[i].id}"><img src="${arr.arr[i].img}" alt=""></a>
                            <p class="lisac">
                                <a href="javascript:;"><i class="iconfont icon-xihuan"style="color: black;font-weight: bold;"></i><span>喜欢</span></a>  
                                <a href="javascript:;" data-id="${arr.arr[i].id}"><span>查看详情</span><i class="iconfont icon-gouwuchekong"></i></a>
                            </p>
                        </dl>`;
                }

                $('.con_list').html(dls);

                var total = arr.total;
                // console.log(total);
                var num = Math.ceil(total / arr.upty);
                // console.log(num);
                var ht = '';
                for (var i = 0; i < num; i++) {
                    ht += `<span>${i + 1}</span>`;
                }

                $('#page').html(ht); //渲染到页面上
                $('#page span').eq(k1).addClass('acti');//指定第一个翻页的背景颜色改变
            }

        });
    }
    show('id', k1, pas);


    $('#page').on('click', 'span', function () {
        // console.log($(this).text());
        if ($(this)[0].tagName == 'SPAN') {
            var su = $(this).text(); //赋给sum
            // console.log(su);
            $(this).addClass('active');
            pas = su; //字符串拼接改变传输过去的page值
            //show(sum-1); //执行渲染代码
            show('id', su - 1, pas);
        }

    })

    $('.tui').click(function () {
        show('id', k1, pas);
        $('.con_top a').attr('class', '');
        $(this).addClass('ac');
    });
    $('.xin').click(function () {
        show('Gift', k1, pas);
        $('.con_top a').attr('class', '');
        $(this).addClass('ac');
    });

    $('.jia').click(function () {
        show('price', k1, pas);
        $('.con_top a').attr('class', '');
        $(this).addClass('ac');
    });

    $('.con_list').on('click', 'dl a', function () {
        var oid = $(this).attr("data-id");
        // console.log(oid);
        location.href = '../html/list3.html?oid=' + oid;
    });


    var wNum = $('.tui_bo ul dl').size() * $('.tui_bo ul dl').eq(0).outerWidth() + $('.tui_bo ul dl').eq(0).outerWidth();
    $('.tui_bo ul').css('width', wNum);
    var iW = ($('.tui_bo ul dl').eq(0).outerWidth() + 14) * 5;//运动距离

    var nu = 0;
    function next(ne, iW, nu) {//动画时间间隔：5000-2000
        nu++;
        if (nu >= 1) { //大于等于2时停止运动
            nu = 1;
        }
        $(ne).stop().animate({ 'left': -iW * nu }, 2000, function () { });
        // light();
    }
    function prev(pv, iW, nu) {
        nu--;
        if (nu <= 0) { //小于等于0时停止运动
            nu = 0;
        }
        $(pv).stop().animate({ 'left': -iW * nu }, 2000);
        // light();
    }
    //点击切换下一页：五张图
    $('.ne1').click(function () {
        next('.tui_bo ul', iW, nu);
        $('.ne span').attr('class', '');
        $(this).addClass('sp');
    });
    $('.pv1').click(function () {
        prev('.tui_bo ul', iW, nu);
        $('.ne span').attr('class', '');
        $(this).addClass('sp');
    });

 

    cokshow();
    function cokshow() { //封装隐藏模块的函数
        var kid = $.cookie('uid');//cookie里的id
        console.log(kid);
        var kname = $.cookie('username'); //cookie里name
        if (kid) { //判断cookie里都为真时
            $('#login').css('display', 'none'); //隐藏登陆页面
            $('#reg').css('display', 'none');//隐藏注册页面
            $('#name').css('display', 'block');
            $('#name').prepend(kname); //渲染登陆后的名称
            $('.hear_sopping').css({'background':'#FF6700','color':'#fff'});
            $('.hear_sopping i').css({'color':'#fff'});
            $('.hear_sopping a').css({'color':'#fff'});
            $('#dan1').css('display', 'block');
            
            $.ajax({
                type: "post",
                url: "../api/cart.php",
                data: {
                    uid:kid
                },
                success: function (str) {
                    var nud=JSON.parse(str);
                    var ni=0;
                    for(var j=0;j<nud.arr.length;j++){
                        ni+=nud.arr[j].num*1;
                    }
                    $('.hear_sopping a').html('购物车('+ni+')');
                }
            });

        } else {
            $('#login').css('display', 'block');
            $('#reg').css('display', 'block');
            $('#name').css('display', 'none');
            $('#name').html('');
            $('.hear_content .dla').css({ 'display': 'none' });
            $('.hear_sopping').css({'background':'#333','color':'#b0b0b0'});
            $('.hear_sopping i').css({'color':'#b0b0b0'});
            $('.hear_sopping a').css({'color':'#b0b0b0'});
            $('#dan1').css('display', 'none');
        }
    }


    $('#name').mouseenter(function () {
        $('#name').css({ 'background': '#fff','color':'#FF6700' });
        $('.dla').stop().animate({ 'height': 200,'opacity':1 }, 600);
        $('.dla').css({ 'display': 'block' });
    });
    $('#name').mouseleave(function () {
        $('#name').css({ 'background': '#333333', 'color': '#b0b0b0' }); 
        $('.dla').css({ 'display': 'none', 'height': 0 });
    });

    $('.hear_content .dla').hover(function () {
        $('.hear_content #name').css({ 'background': '#fff', 'color': 'black' });
        $('.hear_content .dla').css({ 'height': 200, 'display': 'block' });
    }, function () {
        $('#name').css({ 'background': '#333333', 'color': '#b0b0b0' });
        $('.hear_content .dla').stop().animate({ 'height': 0 }, 200);
        $('.hear_content .dla').css({ 'display': 'none' });
    });


    $('#reg').click(function () {
        var mar = `<section class="Mask">
                <section class="register">
                    <h2>协议声明</h2>
                    <p class="p1"><span>《小米商城用户协议》</span> 、 <span>《账号协议》</span> 、 <span>《隐私政策》</span> 请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件</p>
                    <section class="ptext">
                        <h2>小米商城用户协议</h2>
                        <section class="ba1">版本日期：2018年12月18日</section>
                        <p>《小米商城用户协议》（以下简称“本协议”）是您（或称“用户”，指注册、登录、使用、浏览小米商城的个人或组织）与小米科技有限责任公司（平台运营主体）及其关联公司（包括但不限于小米通讯技术有限公司，以下简称“小米”）及其合作单位（包括但不限于第三方商家）之间关于小米商城网站（域名为www.mi.com，简称本网站）与小米产品、程序及服务所订立的协议。小米和合作单位分别就您在本网站接受服务的过程中享受的权利和承担的义务，与您签订本协议，并独立向您承担责任，互不承担保证、连带或共同责任等。</p>
                        <p class="fb">
                            小米在此特别提醒用户认真阅读 、充分理解---本协议中各条款。您对本协议的接受即自愿接受全部条款的约束，请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、法律适用和争议解决条款，尤此类条款将以加粗的形式提示您注意。如您同意本协议并完成全部注册程序，即表示您已充分阅读、理解并接受本协议的全部内容，并与小米达成一致，成为小米商城平台用户。阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，您应立即停止注册程序。
                        </p>
                        <h3>一、协议范围</h3>
                        <h4>1.1【主体范围】</h4>
                        <p>小米商城平台运营主体为小米科技有限责任公司，自营商品的销售主体以小米商城网站页面公示的证照信息为准（包括但不限于小米通讯技术有限公司）。本协议项下， <span class="fb">
                                小米商城平台运营主体可能根据平台业务调整而发生变更，变更后的小米商城平台运营主体与您共同履行本协议并向您提供服务，小米商城平台运营主体的变更不会影响您本协议项下的权益。
                        </span> </p>
                        <h4>1.2【协议补充】</h4>
                        <p>小米隐私政策（http://www.mi.com/about/new-privacy/）、小米帐号使用协议均为本协议不可分割的一部分，与本协议具有同等法律效力。</p>
                        <p> 考虑到互联网业务的高速发展，本协议条款并不能完整覆盖您与小米的所有权利和义务，也不能保证完全符合发展的需求。<span class="fb">小米商城平台的法律声明、隐私政策、平台规范、规则、通知、公告、操作规则、帮助文档、温馨提示等均为本协议的补充协议，与本协议不可分割且具有同等法律效力。如您使用本平台服务，视为您同意上述补充协议。</span></p>
                        <h3>二、小米帐号申请与使用</h3>
                        <h4>2.1【小米帐号使用协议】</h4>
                        <p class="fb">如您登陆小米商城，仍需注册有小米帐号。您对小米帐号的申请、使用等行为应符合小米帐号使用协议及小米不时修订并公布的规范。</p>
                        <h4>2.2【用户资格】</h4>
                        <p>在您开始注册程序使用本平台服务前，您应当具备中华人民共和国法律规定的与您行为相适应的民事行为能力。<span class="fb">若您不具备前述与您行为相适应的民事行为能力，则您应当在您的监护人的参与下使用本款软件，您及您的监护人应依照法律规定承担因此而导致的一切后果。</span> 您帐户下的操作行为，代表您本人；如需代表特定的单位在小米商城平台购买商品或享受服务，您须按照小米的要求提供该单位相关的证件材料及授权材料。</p>
                        <p>此外，您还需确保您不是任何国家、国际组织或者地域实施的贸易限制、制裁或其他法律、规则限制的对象，否则您可能无法正常注册及使用小米商城平台服务。</p>
                    </section>
                    <section class="que">
                        <input type="button" value="不同意" class="disa">
                        <input type="button" value="同意" class="Agree">
                    </section>
                </section>
            </section>`;
        $('#box').append(mar);
    });

    $('#box').on('click', '.Mask .disa', function () {
        $('#box .Mask').css('display', 'none');
        // console.log($(this));
    })


    $('#box').on('click', '.Mask .Agree', function () {
        location.href = 'reg.html';
    });





    $('#user').click(function () {
        $.ajax({
            type: "post",
            url: "../api/guestbook/index.php",
            data: {
                m: 'index',
                a: 'logout'
            },
            success: function (str) {
                var arr = JSON.parse(str);
                if (!arr.code) {
                    cokshow(); //调用函数
                }
                else {
                    alert(arr.message);
                }
            }
        });

    });


    
    $('.hear_sopping').mouseenter(function () {
        var cid=$.cookie('uid');
        $('.cartgo').stop().animate({ 'opacity':1 }, 600);
        $('.cartgo').css({'display': 'block' });
        
        if(cid!=undefined){
            $.ajax({
                type: "post",
                url: "../api/cart.php",
                data: {
                    uid:cid
                },
                success: function (str) {
                    var ar=JSON.parse(str);
                    var numal=0;
                    var prical=0;
                    for(var j=0;j<ar.arr.length;j++){
                        numal+=ar.arr[j].num*1;
                    }
                    for(var k=0;k<ar.arr.length;k++){
                      prical+=ar.arr[k].price*1;
                    }
                  var cartex=`<dl>`;
                  for(var i=0;i<ar.arr.length;i++){
                    cartex+=`<dd data-id="${ar.arr[i].id}">
                            <img src="../images/${ar.arr[i].images}" alt="">
                            <span>${ar.arr[i].name}</span>
                            <span>${ar.arr[i].price}元 &nbsp;&nbsp;X${ar.arr[i].num}</span>
                        </dd>`;
                  }
                   cartex+=`</dl>
                            <section class="carbo">
                            <span>
                                <em>共${numal}件商品</em>
                                <p><strong>${prical}</strong>元</p>
                            </span>
                            <a href="cart.html">去购物车结算</a>
                        </section>`;
    
                var nantex=`<dl>购物车中还没有商品，赶紧选购吧!</dl>`;
                 if(ar.arr.length != 0){
                    $('.cartgo').html(cartex);
                 }
                 else{
                    $('.cartgo').html(nantex);
                    $('.cartgo dl').addClass('nadl');
                 }     
                    //移入本身时
                    $('.cartgo').hover(function () {
                        $('.cartgo').css({'display':'block','opacity':1});
                
                    }, function () {
                        $('.cartgo').css({'display':'none','opacity':0});
                    });  
                }
            });
        }
    });
    $('.hear_sopping').mouseleave(function () {
        $('.cartgo').css({'display': 'none','opacity':0 });
    });

    /**头部导航 取反开关 */
    var sop=true;
    $('.more').click(function () {
      if(sop){
        $('.fe1_i').stop().animate({'height':135,'opacity':1});
       }
       else {
        $('.fe1_i').stop().animate({'height':45,'opacity':1});
       }
       sop = !sop;
    });













});