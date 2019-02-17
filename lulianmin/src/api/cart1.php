<?php

//改变数据库的数量与小计
$id = isset($_POST['id']) ? $_POST['id'] : '';
$num =isset($_POST['num']) ? $_POST['num'] : '';
$sum = isset($_POST['sum']) ? $_POST['sum'] : '';

include 'connect.php';

// //查询数据库的内容
$sql="SELECT * FROM cart WHERE id =$id"; //查询是类型为手机的 并通过id排序

//执行语句:得到的返回值是一个结果集
$res = $conn->query($sql);

$nu = $res->num_rows; //获取结果集长度	

//获取结果集里面的内容部分
$row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]

if($nu){
    $conn->query("UPDATE cart SET `num` = $num
    WHERE id = '$id'");
    $conn->query("UPDATE cart SET `sum` = $sum
    WHERE id = '$id'");
    $an="修改成功";
    }
    else {
        $an="修改失败";
    }
 $slic=array(
        'arr' => $row,  //count获取数组长度
        'an'=>$an
);
//6.返回给前端
echo json_encode($slic,JSON_UNESCAPED_UNICODE);

$res->close();
$conn->close();
?>