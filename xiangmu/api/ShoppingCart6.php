<?php
header('content-type:text/html;charset=utf-8');

include 'conn.php';
$sql = "SELECT * FROM useinfa";
$res=$conn->query($sql);
$content = $res->fetch_all(MYSQLI_ASSOC);  
// echo json_encode($content,JSON_UNESCAPED_UNICODE);
echo $res->num_rows;
