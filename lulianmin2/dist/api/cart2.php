<?php

//改变数据库的数量与小计
$id = isset($_POST['id']) ? $_POST['id'] : '';

include 'connect.php';

// //查询数据库的内容
$sql="DELETE FROM cart where id=$id"; //查询是类型为手机的 并通过id排序

//执行语句:得到的返回值是一个结果集
$res = $conn->query($sql);
	
if($res){
    //获取结果集里面的内容部分
$row = "删除成功";//对象格式  [{},{},{}]
}
else {
 
 $row = "删除失败";//对象格式  [{},{},{}]
}

 $slic=array(
        'arr' => $row,  //count获取数组长度
);
//6.返回给前端
echo json_encode($slic,JSON_UNESCAPED_UNICODE);

$res->close();
$conn->close();
?>