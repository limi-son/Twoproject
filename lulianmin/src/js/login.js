$(function () {
    var url = '../api/guestbook/index.php';

    $('#btn').click(function () {
        var user = $('#user').val();
        var pass = $('#pass').val();
        if ($.trim(user) && $.trim(pass)) {
            $.ajax({
                type: "post",
                url: url,
                data: {
                    m: 'index',
                    a: 'login',
                    username: user,
                    password: pass
                },
                success: function (str) {
                    var arr = JSON.parse(str); //字符串转换为对象
                    console.log(arr);
                    if (!arr.code) { //不为0的时候
                        location.href = '../index.html?name=' + user;
                        $('#user').val(''); //登陆成功后清空输入框的内容
                        $('#user').val('');
                    }
                    else {
                        $('.jin').html(arr.message + '用户名或密码错误');
                        $('.jin').css('color', 'red');
                    }
                }
            });
        }
        else {
            $('.jin').html('用户名或密码不能为空');
            $('.jin').css('color', 'red');
        }
    })


});