'use strict';

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
        $.ajax({
            type: "post",
            url: "../api/list.php",
            data: {
                qty: 12, //数量
                page: 1, //页数
                typ: xid //类型
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                // console.log(arr);
                uls = '<section class="boto_right">';
                for (var i = 0; i < 1; i++) {
                    uls += '<ul>';
                    for (var j = 0; j < arr.arr.length; j++) {
                        uls += ' <a href="javascript:;" data-id=\'' + arr.arr[j].type + '\'>\n                                        <img src="../' + arr.arr[j].images + '" width="40px" height="40px" alt="">\n                                        <span>' + arr.arr[j].name + '</span>\n                                    </a>';
                    }
                    uls += '</ul> ';
                }
                uls += '</section>';
                //滑过本身时也显示
                $('#bloc2').html(uls);
                var uw = $('.boto_right ul a').eq(0).outerWidth() * (arr.arr.length / 6);
                $('.boto_right ul ').css('width', uw);
                $('#bloc2 .boto_right').hover(function () {
                    $('#bloc2 .boto_right ').css('display', 'none');
                    $('#bloc2 .boto_right ').eq($(this).index()).css({ 'display': 'block' });
                    $('#prve').css('display', 'none');

                    //点击事件跳转到列表页
                    $('#bloc2').on('click', '.boto_right ul a', function () {
                        var oid = $(this).attr("data-id");
                        console.log(oid);
                        location.href = 'list2.html?oid=' + oid;
                    });
                }, function () {
                    $('#bloc2 .boto_right ').css('display', 'none');
                    $('#prve').css('display', 'block');
                });
            }
        });
    });
    $('.nav_boto li').mouseleave(function () {
        //排他
        $('#bloc2 .boto_right').css('display', 'none');
        $('#prve').css('display', 'block');
    });

    cokshow();
    function cokshow() {
        //封装隐藏模块的函数
        var kid = $.cookie('uid'); //cookie里的id
        console.log(kid);
        var kname = $.cookie('username'); //cookie里name
        var wte = '';
        if (kid) {
            //判断cookie里都为真时
            $('#login').css('display', 'none'); //隐藏登陆页面
            $('#reg').css('display', 'none'); //隐藏注册页面
            $('#name').css('display', 'block');
            $('#name').prepend(kname); //渲染登陆后的名称
            $('.hear_sopping').css({ 'background': '#FF6700', 'color': '#fff' });
            $('.hear_sopping i').css({ 'color': '#fff' });
            $('.hear_sopping a').css({ 'color': '#fff' });
            $('#dan1').css('display', 'block');

            wte = ' <section class="w1"> \n                            <img src="../images/success.png" alt="" style="float: left;">\n                        <section class="wn">\n                            <h2>\u5DF2\u6210\u529F\u52A0\u5165\u8D2D\u7269\u8F66\uFF01</h2>\n                            <p class="pname"></p>\n                        </section>\n                        </section>\n                        <section class="w2">\n                            <a href="../index.html">\u7EE7\u7EED\u8D2D\u7269</a>\n                            <a href="cart.html">\u53BB\u8D2D\u7269\u8F66\u7ED3\u7B97</a>\n                        </section>';
            $('.win').html(wte);

            $.ajax({
                type: "post",
                url: "../api/cart.php",
                data: {
                    uid: kid
                },
                success: function success(str) {
                    var nud = JSON.parse(str);
                    var ni = 0;
                    for (var j = 0; j < nud.arr.length; j++) {
                        ni += nud.arr[j].num * 1;
                    }
                    $('.hear_sopping a').html('购物车(' + ni + ')');
                }
            });
        } else {
            $('#login').css('display', 'block');
            $('#reg').css('display', 'block');
            $('#name').css('display', 'none');
            $('#name').html('');
            $('.hear_content .dla').css({ 'display': 'none' });
            $('.hear_sopping').css({ 'background': '#333', 'color': '#b0b0b0' });
            $('.hear_sopping i').css({ 'color': '#b0b0b0' });
            $('.hear_sopping a').css({ 'color': '#b0b0b0' });
            $('#dan1').css('display', 'none');
            wte = '\u60A8\u8FD8\u6CA1\u6709\u767B\u9646\uFF0C\u8BF7\u5148<a href="login.html" class="log">\u767B\u9646</a>\u6216\u8005<a href="reg.html" class="log">\u6CE8\u518C</a>';
            $('.win').html(wte);
        }
    }

    $('#name').mouseenter(function () {
        $('#name').css({ 'background': '#fff', 'color': '#FF6700' });
        $('.dla').stop().animate({ 'height': 200, 'opacity': 1 }, 600);
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
        var mar = '<section class="Mask">\n                <section class="register">\n                    <h2>\u534F\u8BAE\u58F0\u660E</h2>\n                    <p class="p1"><span>\u300A\u5C0F\u7C73\u5546\u57CE\u7528\u6237\u534F\u8BAE\u300B</span> \u3001 <span>\u300A\u8D26\u53F7\u534F\u8BAE\u300B</span> \u3001 <span>\u300A\u9690\u79C1\u653F\u7B56\u300B</span> \u8BF7\u60A8\u4ED4\u7EC6\u9605\u8BFB\u4EE5\u4E0A\u534F\u8BAE\uFF0C\u5176\u4E2D\u6709\u5BF9\u60A8\u6743\u5229\u4E49\u52A1\u7684\u7279\u522B\u7EA6\u5B9A\u7B49\u91CD\u8981\u6761\u6B3E\uFF0C\u540C\u610F\u540E\u65B9\u53EF\u4F7F\u7528\u672C\u8F6F\u4EF6</p>\n                    <section class="ptext">\n                        <h2>\u5C0F\u7C73\u5546\u57CE\u7528\u6237\u534F\u8BAE</h2>\n                        <section class="ba1">\u7248\u672C\u65E5\u671F\uFF1A2018\u5E7412\u670818\u65E5</section>\n                        <p>\u300A\u5C0F\u7C73\u5546\u57CE\u7528\u6237\u534F\u8BAE\u300B\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u672C\u534F\u8BAE\u201D\uFF09\u662F\u60A8\uFF08\u6216\u79F0\u201C\u7528\u6237\u201D\uFF0C\u6307\u6CE8\u518C\u3001\u767B\u5F55\u3001\u4F7F\u7528\u3001\u6D4F\u89C8\u5C0F\u7C73\u5546\u57CE\u7684\u4E2A\u4EBA\u6216\u7EC4\u7EC7\uFF09\u4E0E\u5C0F\u7C73\u79D1\u6280\u6709\u9650\u8D23\u4EFB\u516C\u53F8\uFF08\u5E73\u53F0\u8FD0\u8425\u4E3B\u4F53\uFF09\u53CA\u5176\u5173\u8054\u516C\u53F8\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5C0F\u7C73\u901A\u8BAF\u6280\u672F\u6709\u9650\u516C\u53F8\uFF0C\u4EE5\u4E0B\u7B80\u79F0\u201C\u5C0F\u7C73\u201D\uFF09\u53CA\u5176\u5408\u4F5C\u5355\u4F4D\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7B2C\u4E09\u65B9\u5546\u5BB6\uFF09\u4E4B\u95F4\u5173\u4E8E\u5C0F\u7C73\u5546\u57CE\u7F51\u7AD9\uFF08\u57DF\u540D\u4E3Awww.mi.com\uFF0C\u7B80\u79F0\u672C\u7F51\u7AD9\uFF09\u4E0E\u5C0F\u7C73\u4EA7\u54C1\u3001\u7A0B\u5E8F\u53CA\u670D\u52A1\u6240\u8BA2\u7ACB\u7684\u534F\u8BAE\u3002\u5C0F\u7C73\u548C\u5408\u4F5C\u5355\u4F4D\u5206\u522B\u5C31\u60A8\u5728\u672C\u7F51\u7AD9\u63A5\u53D7\u670D\u52A1\u7684\u8FC7\u7A0B\u4E2D\u4EAB\u53D7\u7684\u6743\u5229\u548C\u627F\u62C5\u7684\u4E49\u52A1\uFF0C\u4E0E\u60A8\u7B7E\u8BA2\u672C\u534F\u8BAE\uFF0C\u5E76\u72EC\u7ACB\u5411\u60A8\u627F\u62C5\u8D23\u4EFB\uFF0C\u4E92\u4E0D\u627F\u62C5\u4FDD\u8BC1\u3001\u8FDE\u5E26\u6216\u5171\u540C\u8D23\u4EFB\u7B49\u3002</p>\n                        <p class="fb">\n                            \u5C0F\u7C73\u5728\u6B64\u7279\u522B\u63D0\u9192\u7528\u6237\u8BA4\u771F\u9605\u8BFB \u3001\u5145\u5206\u7406\u89E3---\u672C\u534F\u8BAE\u4E2D\u5404\u6761\u6B3E\u3002\u60A8\u5BF9\u672C\u534F\u8BAE\u7684\u63A5\u53D7\u5373\u81EA\u613F\u63A5\u53D7\u5168\u90E8\u6761\u6B3E\u7684\u7EA6\u675F\uFF0C\u8BF7\u60A8\u52A1\u5FC5\u5BA1\u614E\u9605\u8BFB\u3001\u5145\u5206\u7406\u89E3\u5404\u6761\u6B3E\u5185\u5BB9\uFF0C\u7279\u522B\u662F\u514D\u9664\u6216\u8005\u9650\u5236\u8D23\u4EFB\u7684\u6761\u6B3E\u3001\u6CD5\u5F8B\u9002\u7528\u548C\u4E89\u8BAE\u89E3\u51B3\u6761\u6B3E\uFF0C\u5C24\u6B64\u7C7B\u6761\u6B3E\u5C06\u4EE5\u52A0\u7C97\u7684\u5F62\u5F0F\u63D0\u793A\u60A8\u6CE8\u610F\u3002\u5982\u60A8\u540C\u610F\u672C\u534F\u8BAE\u5E76\u5B8C\u6210\u5168\u90E8\u6CE8\u518C\u7A0B\u5E8F\uFF0C\u5373\u8868\u793A\u60A8\u5DF2\u5145\u5206\u9605\u8BFB\u3001\u7406\u89E3\u5E76\u63A5\u53D7\u672C\u534F\u8BAE\u7684\u5168\u90E8\u5185\u5BB9\uFF0C\u5E76\u4E0E\u5C0F\u7C73\u8FBE\u6210\u4E00\u81F4\uFF0C\u6210\u4E3A\u5C0F\u7C73\u5546\u57CE\u5E73\u53F0\u7528\u6237\u3002\u9605\u8BFB\u672C\u534F\u8BAE\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u60A8\u4E0D\u540C\u610F\u672C\u534F\u8BAE\u6216\u5176\u4E2D\u4EFB\u4F55\u6761\u6B3E\u7EA6\u5B9A\uFF0C\u60A8\u5E94\u7ACB\u5373\u505C\u6B62\u6CE8\u518C\u7A0B\u5E8F\u3002\n                        </p>\n                        <h3>\u4E00\u3001\u534F\u8BAE\u8303\u56F4</h3>\n                        <h4>1.1\u3010\u4E3B\u4F53\u8303\u56F4\u3011</h4>\n                        <p>\u5C0F\u7C73\u5546\u57CE\u5E73\u53F0\u8FD0\u8425\u4E3B\u4F53\u4E3A\u5C0F\u7C73\u79D1\u6280\u6709\u9650\u8D23\u4EFB\u516C\u53F8\uFF0C\u81EA\u8425\u5546\u54C1\u7684\u9500\u552E\u4E3B\u4F53\u4EE5\u5C0F\u7C73\u5546\u57CE\u7F51\u7AD9\u9875\u9762\u516C\u793A\u7684\u8BC1\u7167\u4FE1\u606F\u4E3A\u51C6\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5C0F\u7C73\u901A\u8BAF\u6280\u672F\u6709\u9650\u516C\u53F8\uFF09\u3002\u672C\u534F\u8BAE\u9879\u4E0B\uFF0C <span class="fb">\n                                \u5C0F\u7C73\u5546\u57CE\u5E73\u53F0\u8FD0\u8425\u4E3B\u4F53\u53EF\u80FD\u6839\u636E\u5E73\u53F0\u4E1A\u52A1\u8C03\u6574\u800C\u53D1\u751F\u53D8\u66F4\uFF0C\u53D8\u66F4\u540E\u7684\u5C0F\u7C73\u5546\u57CE\u5E73\u53F0\u8FD0\u8425\u4E3B\u4F53\u4E0E\u60A8\u5171\u540C\u5C65\u884C\u672C\u534F\u8BAE\u5E76\u5411\u60A8\u63D0\u4F9B\u670D\u52A1\uFF0C\u5C0F\u7C73\u5546\u57CE\u5E73\u53F0\u8FD0\u8425\u4E3B\u4F53\u7684\u53D8\u66F4\u4E0D\u4F1A\u5F71\u54CD\u60A8\u672C\u534F\u8BAE\u9879\u4E0B\u7684\u6743\u76CA\u3002\n                        </span> </p>\n                        <h4>1.2\u3010\u534F\u8BAE\u8865\u5145\u3011</h4>\n                        <p>\u5C0F\u7C73\u9690\u79C1\u653F\u7B56\uFF08http://www.mi.com/about/new-privacy/\uFF09\u3001\u5C0F\u7C73\u5E10\u53F7\u4F7F\u7528\u534F\u8BAE\u5747\u4E3A\u672C\u534F\u8BAE\u4E0D\u53EF\u5206\u5272\u7684\u4E00\u90E8\u5206\uFF0C\u4E0E\u672C\u534F\u8BAE\u5177\u6709\u540C\u7B49\u6CD5\u5F8B\u6548\u529B\u3002</p>\n                        <p> \u8003\u8651\u5230\u4E92\u8054\u7F51\u4E1A\u52A1\u7684\u9AD8\u901F\u53D1\u5C55\uFF0C\u672C\u534F\u8BAE\u6761\u6B3E\u5E76\u4E0D\u80FD\u5B8C\u6574\u8986\u76D6\u60A8\u4E0E\u5C0F\u7C73\u7684\u6240\u6709\u6743\u5229\u548C\u4E49\u52A1\uFF0C\u4E5F\u4E0D\u80FD\u4FDD\u8BC1\u5B8C\u5168\u7B26\u5408\u53D1\u5C55\u7684\u9700\u6C42\u3002<span class="fb">\u5C0F\u7C73\u5546\u57CE\u5E73\u53F0\u7684\u6CD5\u5F8B\u58F0\u660E\u3001\u9690\u79C1\u653F\u7B56\u3001\u5E73\u53F0\u89C4\u8303\u3001\u89C4\u5219\u3001\u901A\u77E5\u3001\u516C\u544A\u3001\u64CD\u4F5C\u89C4\u5219\u3001\u5E2E\u52A9\u6587\u6863\u3001\u6E29\u99A8\u63D0\u793A\u7B49\u5747\u4E3A\u672C\u534F\u8BAE\u7684\u8865\u5145\u534F\u8BAE\uFF0C\u4E0E\u672C\u534F\u8BAE\u4E0D\u53EF\u5206\u5272\u4E14\u5177\u6709\u540C\u7B49\u6CD5\u5F8B\u6548\u529B\u3002\u5982\u60A8\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\uFF0C\u89C6\u4E3A\u60A8\u540C\u610F\u4E0A\u8FF0\u8865\u5145\u534F\u8BAE\u3002</span></p>\n                        <h3>\u4E8C\u3001\u5C0F\u7C73\u5E10\u53F7\u7533\u8BF7\u4E0E\u4F7F\u7528</h3>\n                        <h4>2.1\u3010\u5C0F\u7C73\u5E10\u53F7\u4F7F\u7528\u534F\u8BAE\u3011</h4>\n                        <p class="fb">\u5982\u60A8\u767B\u9646\u5C0F\u7C73\u5546\u57CE\uFF0C\u4ECD\u9700\u6CE8\u518C\u6709\u5C0F\u7C73\u5E10\u53F7\u3002\u60A8\u5BF9\u5C0F\u7C73\u5E10\u53F7\u7684\u7533\u8BF7\u3001\u4F7F\u7528\u7B49\u884C\u4E3A\u5E94\u7B26\u5408\u5C0F\u7C73\u5E10\u53F7\u4F7F\u7528\u534F\u8BAE\u53CA\u5C0F\u7C73\u4E0D\u65F6\u4FEE\u8BA2\u5E76\u516C\u5E03\u7684\u89C4\u8303\u3002</p>\n                        <h4>2.2\u3010\u7528\u6237\u8D44\u683C\u3011</h4>\n                        <p>\u5728\u60A8\u5F00\u59CB\u6CE8\u518C\u7A0B\u5E8F\u4F7F\u7528\u672C\u5E73\u53F0\u670D\u52A1\u524D\uFF0C\u60A8\u5E94\u5F53\u5177\u5907\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6CD5\u5F8B\u89C4\u5B9A\u7684\u4E0E\u60A8\u884C\u4E3A\u76F8\u9002\u5E94\u7684\u6C11\u4E8B\u884C\u4E3A\u80FD\u529B\u3002<span class="fb">\u82E5\u60A8\u4E0D\u5177\u5907\u524D\u8FF0\u4E0E\u60A8\u884C\u4E3A\u76F8\u9002\u5E94\u7684\u6C11\u4E8B\u884C\u4E3A\u80FD\u529B\uFF0C\u5219\u60A8\u5E94\u5F53\u5728\u60A8\u7684\u76D1\u62A4\u4EBA\u7684\u53C2\u4E0E\u4E0B\u4F7F\u7528\u672C\u6B3E\u8F6F\u4EF6\uFF0C\u60A8\u53CA\u60A8\u7684\u76D1\u62A4\u4EBA\u5E94\u4F9D\u7167\u6CD5\u5F8B\u89C4\u5B9A\u627F\u62C5\u56E0\u6B64\u800C\u5BFC\u81F4\u7684\u4E00\u5207\u540E\u679C\u3002</span> \u60A8\u5E10\u6237\u4E0B\u7684\u64CD\u4F5C\u884C\u4E3A\uFF0C\u4EE3\u8868\u60A8\u672C\u4EBA\uFF1B\u5982\u9700\u4EE3\u8868\u7279\u5B9A\u7684\u5355\u4F4D\u5728\u5C0F\u7C73\u5546\u57CE\u5E73\u53F0\u8D2D\u4E70\u5546\u54C1\u6216\u4EAB\u53D7\u670D\u52A1\uFF0C\u60A8\u987B\u6309\u7167\u5C0F\u7C73\u7684\u8981\u6C42\u63D0\u4F9B\u8BE5\u5355\u4F4D\u76F8\u5173\u7684\u8BC1\u4EF6\u6750\u6599\u53CA\u6388\u6743\u6750\u6599\u3002</p>\n                        <p>\u6B64\u5916\uFF0C\u60A8\u8FD8\u9700\u786E\u4FDD\u60A8\u4E0D\u662F\u4EFB\u4F55\u56FD\u5BB6\u3001\u56FD\u9645\u7EC4\u7EC7\u6216\u8005\u5730\u57DF\u5B9E\u65BD\u7684\u8D38\u6613\u9650\u5236\u3001\u5236\u88C1\u6216\u5176\u4ED6\u6CD5\u5F8B\u3001\u89C4\u5219\u9650\u5236\u7684\u5BF9\u8C61\uFF0C\u5426\u5219\u60A8\u53EF\u80FD\u65E0\u6CD5\u6B63\u5E38\u6CE8\u518C\u53CA\u4F7F\u7528\u5C0F\u7C73\u5546\u57CE\u5E73\u53F0\u670D\u52A1\u3002</p>\n                    </section>\n                    <section class="que">\n                        <input type="button" value="\u4E0D\u540C\u610F" class="disa">\n                        <input type="button" value="\u540C\u610F" class="Agree">\n                    </section>\n                </section>\n            </section>';
        $('#box').append(mar);
    });

    $('#box').on('click', '.Mask .disa', function () {
        $('#box .Mask').css('display', 'none');
        // console.log($(this));
    });

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
            success: function success(str) {
                var arr = JSON.parse(str);
                if (!arr.code) {
                    cokshow(); //调用函数
                } else {
                    alert(arr.message);
                }
            }
        });
    });

    var wNum = $('.tui_bo ul dl').size() * $('.tui_bo ul dl').eq(0).outerWidth() + $('.tui_bo ul dl').eq(0).outerWidth();
    $('.tui_bo ul').css('width', wNum);
    var iW = ($('.tui_bo ul dl').eq(0).outerWidth() + 14) * 5; //运动距离

    var nu = 0;
    function next(ne, iW, nu) {
        //动画时间间隔：5000-2000
        nu++;
        if (nu >= 1) {
            //大于等于2时停止运动
            nu = 1;
        }
        $(ne).stop().animate({ 'left': -iW * nu }, 2000, function () {});
        // light();
    }
    function prev(pv, iW, nu) {
        nu--;
        if (nu <= 0) {
            //小于等于0时停止运动
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

    $('.hear_sopping').mouseenter(function () {
        var cid = $.cookie('uid');
        $('.cartgo').stop().animate({ 'opacity': 1 }, 600);
        $('.cartgo').css({ 'display': 'block' });
        if (cid != undefined) {
            $.ajax({
                type: "post",
                url: "../api/cart.php",
                data: {
                    uid: cid
                },
                success: function success(str) {
                    var ar = JSON.parse(str);
                    var numal = 0;
                    var prical = 0;
                    for (var j = 0; j < ar.arr.length; j++) {
                        numal += ar.arr[j].num * 1;
                    }
                    for (var k = 0; k < ar.arr.length; k++) {
                        prical += ar.arr[k].price * 1;
                    }
                    var cartex = '<dl>';
                    for (var i = 0; i < ar.arr.length; i++) {
                        cartex += '<dd data-id="' + ar.arr[i].id + '">\n                        <img src="../images/' + ar.arr[i].images + '" alt="">\n                        <span>' + ar.arr[i].name + '</span>\n                        <span>' + ar.arr[i].price + '\u5143 &nbsp;&nbsp;X' + ar.arr[i].num + '</span>\n                    </dd>';
                    }
                    cartex += '</dl>\n                        <section class="carbo">\n                        <span>\n                            <em>\u5171' + numal + '\u4EF6\u5546\u54C1</em>\n                            <p><strong>' + prical + '</strong>\u5143</p>\n                        </span>\n                        <a href="cart.html">\u53BB\u8D2D\u7269\u8F66\u7ED3\u7B97</a>\n                    </section>';

                    var nantex = '<dl>\u8D2D\u7269\u8F66\u4E2D\u8FD8\u6CA1\u6709\u5546\u54C1\uFF0C\u8D76\u7D27\u9009\u8D2D\u5427!</dl>';
                    if (ar.arr.length != 0) {
                        $('.cartgo').html(cartex);
                    } else {
                        $('.cartgo').html(nantex);
                        $('.cartgo dl').addClass('nadl');
                    }
                    //移入本身时
                    $('.cartgo').hover(function () {
                        $('.cartgo').css({ 'display': 'block', 'opacity': 1 });
                    }, function () {
                        $('.cartgo').css({ 'display': 'none', 'opacity': 0 });
                    });
                }
            });
        }
    });
    $('.hear_sopping').mouseleave(function () {
        $('.cartgo').css({ 'display': 'none', 'opacity': 0 });
    });
});