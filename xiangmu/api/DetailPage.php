<?php

header('content-type:text/html;charset=utf-8');

include 'conn.php';
$id = isset($_POST['id'])  ? $_POST['id']:'';
$sql = "SELECT * FROM msq WHERE lkx = '$id'";
$res = $conn->query($sql);

$content = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content,JSON_UNESCAPED_UNICODE);

?>