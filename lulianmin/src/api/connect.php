<?php
/**
 *数据库连接
 */
//中文乱码
header("content-type:text/html;charset=utf-8");

$servername='localhost'; //主机名
$username='root'; //用户名
$password=''; //密码
$dbname='mi'; //数据库名称

//创建连接
$conn=new mysqli($servername,$username,$password,$dbname); 

//判断是否能够连接
if($conn->connect_error){
    die('连接失败：'.$conn->connect_error);
}else{
    // echo '连接成功';
}



?>