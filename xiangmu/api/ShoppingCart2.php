<?php
header('content-type:text/html;charset=utf-8');

include 'conn.php';
$id = isset($_POST['id1'])?$_POST['id1']:'';
$sql = "DELETE FROM useinfa WHERE id= $id";
$res=$conn->query($sql);



