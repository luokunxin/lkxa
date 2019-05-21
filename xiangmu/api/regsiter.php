<?php
include 'conn.php';
$name = isset($_POST['name']) ? $_POST['name'] : '';
$sql = "SELECT * FROM asdfk  WHERE name = '$name'";
$res = $conn->query($sql);
$content = $res->fetch_all(MYSQLI_ASSOC);

if($res->num_rows == 1){
    echo  'no';
}else if($res->num_rows == 0){
    echo 'yes';
}