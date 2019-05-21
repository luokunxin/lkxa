<?php
header('content-type:text/html;charset=utf-8');
include 'conn.php';
$name = isset($_POST['name']) ? $_POST['name']:'';
$psw = isset($_POST['psw']) ? $_POST['psw']:'';
$sql = "INSERT  INTO asdfk(`name`,psw) VALUES ('$name','$psw');";
$res = $conn->query($sql);
$abc = "SELECT * FROM asdfk WHERE `name` = '$name' AND  psw = '$psw'";
$eee = $conn->query($abc);
if($eee->num_rows == 1){
    echo 'yes';
}else if($res->num_rows == 0){
    echo 'no';
};

echo  $res;




?>