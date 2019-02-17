<?php
$qty = isset($_POST['qty']) ? $_POST['qty'] : '';
$page= isset($_POST['page']) ? $_POST['page'] : '';
$typ= isset($_POST['typ']) ? $_POST['typ'] : '';

// echo $page,$qty;

include 'connect.php';

$num= ($page-1) * $qty;
// //查询数据库的内容
// $sql="SELECT * FROM index_list order by id LIMIT  $num,$qty"; //通过id排序

$sql="SELECT * FROM index_list WHERE type='$typ' ORDER BY id ASC  LIMIT  $num,$qty"; //查询是类型为手机的 并通过id排序


 
//执行语句:得到的返回值是一个结果集
$res = $conn->query($sql);
	
//	var_dump($res);
//获取结果集里面的内容部分
$row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]


//6.新建关联数组
$slic=array(
    'arr' => $row,  //count获取数组长度
    'upage' => $page,
    'upty' => $qty

);
//6.返回给前端
echo json_encode($slic,JSON_UNESCAPED_UNICODE);

$res->close();
$conn->close();


?>