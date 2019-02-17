$(function () {
    var kid = $.cookie('uid');/*cookie里的id*/
    /* console.log(kid);*/
    if (kid == undefined) {
        var html = `<section class="cent-con">
                <section class="cen-right">
                    <h2>您的购物车还是空的！</h2>
                    <p>登录后将显示您之前加入的商品</p>
                    <input type="button" value="立即登陆"  id="log">
                    <input type="button" value="马上去购物" id="idex">
                </section>
            </section>`;
        $('.center').html(html);


        $('.center').on('click', '#idex', function () {
            location.href = '../index.html?';
        });

        $('.center').on('click', '#log', function () {
            location.href = 'login.html?';
        });

    }
    else {
        var tex = '';
        $.ajax({
            type: "post",
            url: "../api/cart.php",
            data: {
                uid: kid
            },
            success: function (str) {
                var arr = JSON.parse(str);
                if (arr.arr.length != 0) {
                    tex = ` <section class="c2">
                        <section class="car-con">
                            <ul class="nav-top">
                                <li id="allchecked"><input type="checkbox" name="" id="">全选</li>
                                <li>商品名称</li>
                                <li>单价</li>
                                <li>数量</li>
                                <li>小计</li>
                                <li>操作</li>
                        </ul>`;
                    for (var j = 0; j < arr.arr.length; j++) {
                        tex += `<section class="sopp" data-id="${arr.arr[j].id}">
                                    <section class="good_check"><input type="checkbox" name="" id=""></section>
                                    <section><img src="../images/${arr.arr[j].images}" width="80px" alt=""></section>
                                    <section>${arr.arr[j].name}</section>
                                    <section class="price">￥${arr.arr[j].price}</section>
                                    <section class="zong"><input type="button" value="-" class="cutnum"><input type="text" class="val" value="${arr.arr[j].num}"><input type="button" value="+" class="addnum"></section>
                                    <section class="good_total">￥ ${arr.arr[j].sum}</section>
                                    <section><span class='good_del'>x</span></section>
                                </section>`;
                    }
                    tex += `<section class="pr">
                            <section id="allnum">已选择<span>0</span>件</section>
                            <input type="button" value="去结算">
                            <section id="totalprice">合计：<strong>0</strong>&nbsp;元</section>
                        </section>
                    </section>
                </section>`;
                }
                else {
                    tex = `<section class="cent-con">
                        <section class="cen-right">
                            <h2>您的购物车还是空的！</h2>
                            <input type="button" value="马上去购物" id="idex">
                        </section>
                    </section>`;
                }

                $('.center').html(tex);
                $('.center').on('click', '#idex', function () {
                    location.href = '../index.html?';
                });

                /*点击改变数量*/
                $('.center').on('click', '.addnum', function () {
                    var val = $(this).prev().val();
                    val++;/*自增一*/
                    if (val >= 100) {/*库存量*/
                        val = 100;
                    }
                    $(this).prev().val(val);/*赋值*/
                    goodTotal($(this));
                });
                /*减数量*/
                $('.center').on('click', '.cutnum', function () {
                    /*		console.log($(this));*/
                    var val = $(this).next().val();
                    /*		console.log(val);*/
                    val--;/*自增一*/
                    if (val <= 1) {/*库存量*/
                        val = 1;
                    }
                    $(this).next().val(val);/*赋值*/
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
                    var total = (price * num);
                    /* console.log(price,num,total);*/
                    now.parent().next().html('￥&nbsp;' +total);/*设置值*/
                    NumPrice();
                    $.ajax({
                        type: "post",
                        url: "../api/cart1.php",
                        data: {
                            id: data1,
                            num: num,
                            sum: total
                        },
                        success: function (str) {
                            var arr = JSON.parse(str);}});}

                    /*3.删除当行*/
                    var data2 =0;
                    var delf=0;
                    $('.center').on('click', '.good_del', function () {
                        // var res = confirm('您确定要删除吗？');
                       data2 = parseInt($(this).parent().parent().attr("data-id"));
                        // console.log(data2)
                        delf=$(this);
                        var mar = `<section class="Mask">
                            <section class="register">
                                <h2>确定要删除吗</h2>
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
                    })
                    $('#box').on('click', '.Mask .Agree', function () {
                        $('#box .Mask').css('display', 'none');
                            delf.parent().parent().remove();
                            NumPrice();
                            $.ajax({
                                type: "post",
                                url: "../api/cart2.php",
                                data: {
                                    id:data2
                                },
                                success: function (str) {}});
                          update();/*判断是否删完了*/
                    });

                    function update() {
                        if($('.addnum').size() == 0) {
                            /*已结删完所有的行，没有必要保留总价了*/
                            /* $('#del').css('display','none');*/
                            var html = `<section class="cent-con">
                                    <section class="cen-right">
                                        <h2>您的购物车还是空的！</h2>
                                        <input type="button" value="马上去购物" id="idex">
                                    </section>
                                </section>`;
                           $('.center').html(html);
                        }
                    }

                    /*4.选中单行*/
                    $('.center').on('click','.sopp .good_check input',function() {
                        /*		console.log($(this).prop('checked'));*/
                                NumPrice();
                        });

                    /*总数量和总价*/
                    var arr1 = [];/*存被选中的行的下标数*/
                    function NumPrice() {
                        arr1 = [];
                        for(var i = 0; i < $('.center .sopp .good_check input').size(); i++) {
                            if($('.center .sopp .good_check input').eq(i).prop('checked')) {
                                arr1.push(i);
                            }
                        }
                        
                        if(arr1.length == $('.center .sopp .good_check input').size()) {
                            /*所有商品被选中了，控制权限勾上*/
                            $('.center .c2 .car-con .nav-top #allchecked input').prop('checked','checked');
                        }else{
                            $('.center .c2 .car-con .nav-top #allchecked input').removeAttr('checked');
                        }
                		// console.log(arr1);
                        
                        var priceAll = 0;/*总价*/
                        var numAll = 0;/*总数量*/
                        
                        for(var i = 0; i < arr1.length; i++) {
                            numAll += $('.val').eq(arr1[i]).val() * 1;
                            priceAll += $('.good_total').eq(arr1[i]).text().substring(2) * 1;
                        } 
                        // console.log(numAll,priceAll);
                        $('#allnum').html('已选择<span>'+numAll+'</span>件');
                        $('#totalprice').html('合计：<strong>'+ priceAll+'&nbsp;</strong>元');
                    }

                    /*设置默认全选*/
                    function che() {
                        /*给全选添加默认选中 */
                        $('.center .c2 .car-con .nav-top #allchecked input').prop('checked','checked');
                        if( $('.center .c2 .car-con .nav-top #allchecked input').prop('checked')) {
                            /*给所有的复选框都勾上*/
                            $('.center .sopp .good_check input').prop('checked','checked');
                            NumPrice();
                        }else{
                            $('.center .sopp .good_check input').removeAttr('checked');
                            NumPrice();
                        }
                    }
                    che();

                    /*5.全选、不选*/
                    /*attr绑定属性     表单某些属性是有行为的：这种属性需要用prop去绑定*/
                    $('.center .c2 .car-con .nav-top #allchecked input').on('click',function() {
                        if($(this).prop('checked')) {
                            /*给所有的复选框都勾上*/
                            $('.center .sopp .good_check input').prop('checked','checked');
                        }else{
                            $('.center .sopp .good_check input').removeAttr('checked');
                        }
                        NumPrice();
                    });

                    /*手动输入*/
                    $('.center').on('change','.val',function() {
                        goodTotal($(this));
                        NumPrice();
                    });
                    
            }
        });


    }



});