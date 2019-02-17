<?php
$id = isset($_POST['id']) ? $_POST['id'] : '';
// echo $id;

include 'connect.php';

// //查询数据库的内容
$sql="SELECT * FROM detail WHERE ids=$id"; //查询是类型为手机的 并通过id排序


//执行语句:得到的返回值是一个结果集
$res = $conn->query($sql);

//获取结果集里面的内容部分
$row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]

//6.返回给前端
echo json_encode($row,JSON_UNESCAPED_UNICODE);

$res->close();
$conn->close();



?>