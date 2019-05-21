<?php
header('content-type:text/html;charset=utf-8');

include 'conn.php';

$sq2 = 'SELECT * FROM  useinfa';
$res2 = $conn->query($sq2);
$content = $res2->fetch_all(MYSQLI_ASSOC);  
echo json_encode($content,JSON_UNESCAPED_UNICODE);