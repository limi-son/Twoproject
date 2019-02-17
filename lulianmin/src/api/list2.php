<?php
$qty = isset($_POST['qty']) ? $_POST['qty'] : '';
$page= isset($_POST['page']) ? $_POST['page'] : '';
$typ= isset($_POST['typ']) ? $_POST['typ'] : '';
$chaxun= isset($_POST['chaxun']) ? $_POST['chaxun'] : '';


// echo $page,$qty;

include 'connect.php';

$num= ($page-1) * $qty;
// //查询数据库的内容
// $sql="SELECT * FROM index_list order by id LIMIT  $num,$qty"; //通过id排序

$sql="SELECT * FROM com_list WHERE ids='$typ' ORDER BY $chaxun desc"; //查询是类型为手机的 并通过id排序


 
//执行语句:得到的返回值是一个结果集
$res = $conn->query($sql);
	
//	var_dump($res);
//获取结果集里面的内容部分
$row = $res->fetch_all(MYSQLI_ASSOC);//对象格式  [{},{},{}]

//3.进行数据的截断
$res2 = array_slice($row, ($page - 1) * $qty, $qty);//子数组


//6.新建关联数组
$slic=array(
    'arr' => $res2,  //count获取数组长度
    'upage' => $num,
    'upty' => $qty,
    'total'=>count($row)
    
);
//6.返回给前端
echo json_encode($slic,JSON_UNESCAPED_UNICODE);

$res->close();
$conn->close();


?>