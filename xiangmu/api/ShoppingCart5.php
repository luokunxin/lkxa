<?php
header('content-type:text/html;charset=utf-8');
include 'conn.php';
$name = isset($_POST['name11']) ? $_POST['name11']:'83';
$id1 = isset($_POST['id11']) ? $_POST['id11']:'7';
$sql9 ="UPDATE  useinfa SET shuliang = '$name'   WHERE id= $id1";
$res9 = $conn->query($sql9);
// $contnum2 = $res9->fetch_all(MYSQLI_ASSOC);
// echo json_encode($contnum2,JSON_UNESCAPED_UNICODE);