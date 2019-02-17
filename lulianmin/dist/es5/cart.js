'use strict';

$(function () {
    var kid = $.cookie('uid'); /*cookie里的id*/
    /* console.log(kid);*/
    if (kid == undefined) {
        var html = '<section class="cent-con">\n                <section class="cen-right">\n                    <h2>\u60A8\u7684\u8D2D\u7269\u8F66\u8FD8\u662F\u7A7A\u7684\uFF01</h2>\n                    <p>\u767B\u5F55\u540E\u5C06\u663E\u793A\u60A8\u4E4B\u524D\u52A0\u5165\u7684\u5546\u54C1</p>\n                    <input type="button" value="\u7ACB\u5373\u767B\u9646"  id="log">\n                    <input type="button" value="\u9A6C\u4E0A\u53BB\u8D2D\u7269" id="idex">\n                </section>\n            </section>';
        $('.center').html(html);

        $('.center').on('click', '#idex', function () {
            location.href = '../index.html?';
        });

        $('.center').on('click', '#log', function () {
            location.href = 'login.html?';
        });
    } else {
        var tex = '';
        $.ajax({
            type: "post",
            url: "../api/cart.php",
            data: {
                uid: kid
            },
            success: function success(str) {
                var arr = JSON.parse(str);
                if (arr.arr.length != 0) {
                    tex = ' <section class="c2">\n                        <section class="car-con">\n                            <ul class="nav-top">\n                                <li id="allchecked"><input type="checkbox" name="" id="">\u5168\u9009</li>\n                                <li>\u5546\u54C1\u540D\u79F0</li>\n                                <li>\u5355\u4EF7</li>\n                                <li>\u6570\u91CF</li>\n                                <li>\u5C0F\u8BA1</li>\n                                <li>\u64CD\u4F5C</li>\n                        </ul>';
                    for (var j = 0; j < arr.arr.length; j++) {
                        tex += '<section class="sopp" data-id="' + arr.arr[j].id + '">\n                                    <section class="good_check"><input type="checkbox" name="" id=""></section>\n                                    <section><img src="../images/' + arr.arr[j].images + '" width="80px" alt=""></section>\n                                    <section>' + arr.arr[j].name + '</section>\n                                    <section class="price">\uFFE5' + arr.arr[j].price + '</section>\n                                    <section class="zong"><input type="button" value="-" class="cutnum"><input type="text" class="val" value="' + arr.arr[j].num + '"><input type="button" value="+" class="addnum"></section>\n                                    <section class="good_total">\uFFE5 ' + arr.arr[j].sum + '</section>\n                                    <section><span class=\'good_del\'>x</span></section>\n                                </section>';
                    }
                    tex += '<section class="pr">\n                            <section id="allnum">\u5DF2\u9009\u62E9<span>0</span>\u4EF6</section>\n                            <input type="button" value="\u53BB\u7ED3\u7B97">\n                            <section id="totalprice">\u5408\u8BA1\uFF1A<strong>0</strong>&nbsp;\u5143</section>\n                        </section>\n                    </section>\n                </section>';
                } else {
                    tex = '<section class="cent-con">\n                        <section class="cen-right">\n                            <h2>\u60A8\u7684\u8D2D\u7269\u8F66\u8FD8\u662F\u7A7A\u7684\uFF01</h2>\n                            <input type="button" value="\u9A6C\u4E0A\u53BB\u8D2D\u7269" id="idex">\n                        </section>\n                    </section>';
                }

                $('.center').html(tex);
                $('.center').on('click', '#idex', function () {
                    location.href = '../index.html?';
                });

                /*点击改变数量*/
                $('.center').on('click', '.addnum', function () {
                    var val = $(this).prev().val();
                    val++; /*自增一*/
                    if (val >= 100) {
                        /*库存量*/
                        val = 100;
                    }
                    $(this).prev().val(val); /*赋值*/
                    goodTotal($(this));
                });
                /*减数量*/
                $('.center').on('click', '.cutnum', function () {
                    /*		console.log($(this));*/
                    var val = $(this).next().val();
                    /*		console.log(val);*/
                    val--; /*自增一*/
                    if (val <= 1) {
                        /*库存量*/
                        val = 1;
                    }
                    $(this).next().val(val); /*赋值*/
                    goodTotal($(this));
                });

                /*3.小计的运算：单价*数量*/
                function goodTotal(now) {
                    /*找单价*/
                    var price = now.parent().parent().find($('.price')).text().substring(1) * 1;
                    /*找数量*/
                    var num = now.parent().parent().find($('.zong')).find($('.val')).val() * 1;
                    var data1 = parseInt(now.parent().parent().attr("data-id"));
                    /* console.log(price, num,data1);*/
                    /*小计=单价*数量*/
                    var total = price * num;
                    /* console.log(price,num,total);*/
                    now.parent().next().html('￥&nbsp;' + total); /*设置值*/
                    NumPrice();
                    $.ajax({
                        type: "post",
                        url: "../api/cart1.php",
                        data: {
                            id: data1,
                            num: num,
                            sum: total
                        },
                        success: function success(str) {
                            var arr = JSON.parse(str);
                        } });
                }

                /*3.删除当行*/
                var data2 = 0;
                var delf = 0;
                $('.center').on('click', '.good_del', function () {
                    // var res = confirm('您确定要删除吗？');
                    data2 = parseInt($(this).parent().parent().attr("data-id"));
                    // console.log(data2)
                    delf = $(this);
                    var mar = '<section class="Mask">\n                            <section class="register">\n                                <h2>\u786E\u5B9A\u8981\u5220\u9664\u5417</h2>\n                                <section class="que">\n                                    <input type="button" value="\u4E0D\u540C\u610F" class="disa">\n                                    <input type="button" value="\u540C\u610F" class="Agree">\n                                </section>\n                            </section>\n                        </section>';
                    $('#box').append(mar);
                });

                $('#box').on('click', '.Mask .disa', function () {
                    $('#box .Mask').css('display', 'none');
                });
                $('#box').on('click', '.Mask .Agree', function () {
                    $('#box .Mask').css('display', 'none');
                    delf.parent().parent().remove();
                    NumPrice();
                    $.ajax({
                        type: "post",
                        url: "../api/cart2.php",
                        data: {
                            id: data2
                        },
                        success: function success(str) {} });
                    update(); /*判断是否删完了*/
                });

                function update() {
                    if ($('.addnum').size() == 0) {
                        /*已结删完所有的行，没有必要保留总价了*/
                        /* $('#del').css('display','none');*/
                        var html = '<section class="cent-con">\n                                    <section class="cen-right">\n                                        <h2>\u60A8\u7684\u8D2D\u7269\u8F66\u8FD8\u662F\u7A7A\u7684\uFF01</h2>\n                                        <input type="button" value="\u9A6C\u4E0A\u53BB\u8D2D\u7269" id="idex">\n                                    </section>\n                                </section>';
                        $('.center').html(html);
                    }
                }

                /*4.选中单行*/
                $('.center').on('click', '.sopp .good_check input', function () {
                    /*		console.log($(this).prop('checked'));*/
                    NumPrice();
                });

                /*总数量和总价*/
                var arr1 = []; /*存被选中的行的下标数*/
                function NumPrice() {
                    arr1 = [];
                    for (var i = 0; i < $('.center .sopp .good_check input').size(); i++) {
                        if ($('.center .sopp .good_check input').eq(i).prop('checked')) {
                            arr1.push(i);
                        }
                    }

                    if (arr1.length == $('.center .sopp .good_check input').size()) {
                        /*所有商品被选中了，控制权限勾上*/
                        $('.center .c2 .car-con .nav-top #allchecked input').prop('checked', 'checked');
                    } else {
                        $('.center .c2 .car-con .nav-top #allchecked input').removeAttr('checked');
                    }
                    // console.log(arr1);

                    var priceAll = 0; /*总价*/
                    var numAll = 0; /*总数量*/

                    for (var i = 0; i < arr1.length; i++) {
                        numAll += $('.val').eq(arr1[i]).val() * 1;
                        priceAll += $('.good_total').eq(arr1[i]).text().substring(2) * 1;
                    }
                    // console.log(numAll,priceAll);
                    $('#allnum').html('已选择<span>' + numAll + '</span>件');
                    $('#totalprice').html('合计：<strong>' + priceAll + '&nbsp;</strong>元');
                }

                /*设置默认全选*/
                function che() {
                    /*给全选添加默认选中 */
                    $('.center .c2 .car-con .nav-top #allchecked input').prop('checked', 'checked');
                    if ($('.center .c2 .car-con .nav-top #allchecked input').prop('checked')) {
                        /*给所有的复选框都勾上*/
                        $('.center .sopp .good_check input').prop('checked', 'checked');
                        NumPrice();
                    } else {
                        $('.center .sopp .good_check input').removeAttr('checked');
                        NumPrice();
                    }
                }
                che();

                /*5.全选、不选*/
                /*attr绑定属性     表单某些属性是有行为的：这种属性需要用prop去绑定*/
                $('.center .c2 .car-con .nav-top #allchecked input').on('click', function () {
                    if ($(this).prop('checked')) {
                        /*给所有的复选框都勾上*/
                        $('.center .sopp .good_check input').prop('checked', 'checked');
                    } else {
                        $('.center .sopp .good_check input').removeAttr('checked');
                    }
                    NumPrice();
                });

                /*手动输入*/
                $('.center').on('change', '.val', function () {
                    goodTotal($(this));
                    NumPrice();
                });
            }
        });
    }
});