<?php

session_start();
header("Content-Type: application/json");

require_once("../Model/Cart.php");

$data = json_decode(file_get_contents("php://input"),true);

$cart_id = $data['cart_id'] ?? 0;
$quantity = $data['quantity'] ?? 1;

$cart = new Cart();

if($cart->updateQuantity($cart_id,$quantity)){

    echo json_encode([
        "status"=>"success"
    ]);

}else{

    echo json_encode([
        "status"=>"error"
    ]);

}