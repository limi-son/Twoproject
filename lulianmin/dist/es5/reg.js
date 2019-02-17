'use strict';

$(function () {
    var url = '../api/guestbook/index.php';

    $('#tex').blur(function () {
        var user = $('#tex').val();
        if ($.trim(user)) {
            $.ajax({
                type: "get",
                url: url,
                data: {
                    m: 'index',
                    a: 'verifyUserName',
                    username: user
                },
                success: function success(str) {
                    var arr = JSON.parse(str); //字符串转换为对象
                    console.log(str);
                    if (!arr.code) {
                        //不为0的时候
                        $('.jing').css('color', 'green');
                    } else {
                        $('.jing').css('color', 'red');
                    }
                    $('.jing').html(arr.message);; //渲染页面
                }
            });
        } else {
            $('.jing').html('不能为空');
            $('.jing').css('color', 'red');
        }
    });

    // console.log($('#chk'))
    var ck = true;
    $('#chk').prop('checked', 'checked');
    $('#chk').click(function () {
        if ($('#chk').prop('checked')) {
            ck = true;
        } else {
            ck = false;
        }
    });

    $('#btn').click(function () {
        var user = $('#tex').val();
        var pass = $('#psw').val();
        if ($.trim(user) && $.trim(pass)) {
            if (ck == true) {
                $.ajax({
                    type: "post",
                    url: url,
                    data: {
                        m: 'index',
                        a: 'reg',
                        username: user,
                        password: pass
                    },
                    success: function success(str) {
                        var arr = JSON.parse(str); //字符串转换为对象
                        console.log(arr);
                        if (!arr.code) {
                            //不为0的时候
                            location.href = 'login.html?';
                            $('#tex').val(''); //登陆成功后清空输入框的内容
                            $('#psw').val('');
                        } else {
                            $('.mi').html(arr.message);
                            $('.mi').css('color', 'red');
                        }
                    }
                });
            } else {
                $('.cck').html('请您同意用户条款');
                $('.cck').css({ 'color': 'red', 'font-size': '12px' });
            }
        } else {
            $('.mi').html('不能为空');
            $('.mi').css('color', 'red');
        }
    });
});