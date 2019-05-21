<?php
header('content-type:text/html;charset=utf-8');

include 'conn.php';
$id = isset($_POST['id'])  ? $_POST['id']:'';
$sql = " SELECT lkx FROM   msq";
$res = $conn->query($sql);
$content = $res->fetch_all(MYSQLI_ASSOC);
$sq2 = 'SELECT *FROM qwe1';
$res2 = $conn->query($sq2);

$datalist = array(
    'data' => $content,
    'total' => $res2->num_rows,
);
echo     json_encode($datalist,JSON_UNESCAPED_UNICODE);
