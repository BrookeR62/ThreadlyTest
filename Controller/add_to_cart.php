<?php

session_start();
header("Content-Type: application/json");

require_once("../Model/Cart.php");

if(!isset($_SESSION['user_id'])){
    echo json_encode([
        "status"=>"error",
        "message"=>"User not logged in"
    ]);
    exit();
}

$data = json_decode(file_get_contents("php://input"),true);

$name  = $data['name'] ?? '';
$price = $data['price'] ?? 0;
$image = $data['image'] ?? '';

$user_id = $_SESSION['user_id'];

$cart = new Cart();

if($cart->addItem($user_id,$name,$price,$image)){

    echo json_encode([
        "status"=>"success",
        "message"=>"Product added to cart"
    ]);

}else{

    echo json_encode([
        "status"=>"error",
        "message"=>"Failed to add product"
    ]);

}