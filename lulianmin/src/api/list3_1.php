<?php

//中文乱码
header("content-type:text/html;charset=utf-8");

$id = isset($_POST['id']) ? $_POST['id'] : '';
$name =isset($_POST['name']) ? $_POST['name'] : '';
$images =isset($_POST['images']) ? $_POST['images'] : '';
$price =isset($_POST['price']) ? $_POST['price'] : '';
$num =isset($_POST['num']) ? $_POST['num'] : '';
$sum = isset($_POST['sum']) ? $_POST['sum'] : '';
$uid = isset($_POST['uid']) ? $_POST['uid'] : '';

/**
 * 1.接收前端传输过来的数据
 * 2.数据库查询判断是否含有同id
 * 3.如果有则修改新数据，如果没有就添加新数据
 * 
 */

include 'connect.php';

$sql="SELECT * FROM cart WHERE id ='$id'";

//执行语句:得到的返回值是一个结果集
$res = $conn->query($sql);

$nu = $res->num_rows; //获取结果集长度
	
//获取结果集里面的内容部分
$row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]

if($nu){
    $conn->query("UPDATE cart SET  `id` = $id
    WHERE id = '$id'");
    $conn->query("UPDATE cart SET `name` = $name
    WHERE id = '$id'");
    $conn->query("UPDATE cart SET `price` = $price
    WHERE id = '$id'");
    $conn->query("UPDATE cart SET `images` = $images
    WHERE id = '$id'");
    $conn->query("UPDATE cart SET `num` =`num`+$num
    WHERE id = '$id'");
    $conn->query("UPDATE cart SET `sum` = $price*`num`
    WHERE id = '$id'");
    $conn->query("UPDATE cart SET `uid` = $uid /*存储cookies*/
    WHERE id = '$id'");
    $an="修改成功";
    }
    else {
        //插入数据到数据库 
        // $strsql = ;
        $conn->query("insert into cart (id,uid,name,images,price,num,sum)values ('$id', '$uid', '$name','$images','$price','$num','$sum')");
        $an="添加成功";
    }

//6.新建关联数组
$slic=array(
    'arr' => $row,  //获取结果集
    'nu' => $nu, //结果集长度
    'an' => $an,
    'uid'=> $uid
);
//7.返回给前端
echo json_encode($slic,JSON_UNESCAPED_UNICODE);

$res->close();
$conn->close();

?>