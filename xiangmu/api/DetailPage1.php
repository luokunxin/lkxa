<?php
header('content-type:text/html;charset=utf-8');
include 'conn.php';
$shuliang = isset($_POST['shuliang']) ? $_POST['shuliang']:'1';
$jieshao = isset($_POST['jieshao']) ? $_POST['jieshao']:'2';
$tupian = isset($_POST['tupian']) ? $_POST['tupian']:'3';
$chicun = isset($_POST['chicun']) ? $_POST['chicun']:'4';
// $yanse = isset($_POST['yanse']) ? $_POST['yanse']:'';
$jiazhi = isset($_POST['jiazhi']) ? $_POST['jiazhi']:'5';
$sql = "INSERT  INTO useinfa(shuliang,jieshao,tupian,chicun,jiazhi) VALUES ('$shuliang','$jieshao','$tupian','$chicun','$jiazhi');";
$res = $conn->query($sql);
echo $res
?>