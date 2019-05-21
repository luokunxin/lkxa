<?php
header('content-type:text/html;charset=utf-8');
include 'conn.php';
$num = isset($_POST['num'])?$_POST['num']:'6';
$index = ($num-1) * 10;
$sql1 = "SELECT * FROM  msq  LIMIT $index, 10";
// echo $sql1;
$res=$conn->query($sql1);
$content=$res->fetch_all(MYSQLI_ASSOC);
$sql = "SELECT * FROM  msq"; 
$res1=$conn->query($sql);
$content1=$res1->fetch_all(MYSQLI_ASSOC);
$datamsq = array(
    "data" => $content,
    "total" => $res1->num_rows,
    // "page" => $page,
    "num"=> $num
);
echo json_encode($datamsq,JSON_UNESCAPED_UNICODE);
