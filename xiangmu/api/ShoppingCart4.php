<?php
header('content-type:text/html;charset=utf-8');
include 'conn.php';

$sql9 ="SELECT SUM(shuliang) FROM `useinfa` ";
$res9 = $conn->query($sql9);
$contnum2 = $res9->fetch_all(MYSQLI_ASSOC);
echo json_encode($contnum2,JSON_UNESCAPED_UNICODE);