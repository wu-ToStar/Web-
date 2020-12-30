<?php

//后端设置响应头解决跨域问题---允许来自前端的所以跨域访问
header('Access-Control-Allow-Origin:*');
// $id = $_GET['id'];
// $title = $_GET['title'];
// // echo 'hello ajax';
// echo json_encode(array(
//     'id' => $id,
//     'title' => $title,
//     "age" => 19
// ));

// $name = $_POST['name'];
// $age = $_POST['age'];

// echo json_encode(array(
//     'name' => $name,
//     'age' => $age,
//     'money' => 9999999999
// ))

echo json_encode(array(
    'id' => 2,
    'title' => 'http'
))
?>