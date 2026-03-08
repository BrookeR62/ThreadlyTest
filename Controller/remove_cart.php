<?php

session_start();

require_once("../Model/Cart.php");

if(!isset($_GET['id'])){
    header("Location: ../cart.php");
    exit();
}

$cart_id = $_GET['id'];

$cart = new Cart();

$cart->removeItem($cart_id);

header("Location: ../cart.php?removed=1");
exit();