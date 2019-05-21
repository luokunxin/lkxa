<?php
header('content-type:text/html;charset=utf-8');

include 'conn.php';
$jieshao = isset($_POST['jieshao1'])?$_POST['jieshao1']:'岂非风衣女中长款2019春装新款双排扣chic港风收腰显瘦';
$jiazhi = isset($_POST['jiazhi'])?$_POST['jiazhi']:'180.00';
$sql = "UPDATE   useinfa  SET  jiazhi = '$jiazhi'  WHERE   jieshao = '$jieshao'";
$res=$conn->query($sql);
// $content=$res->fetch_all(MYSQLI_ASSOC);



?>