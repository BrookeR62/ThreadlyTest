<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: index.php");
    exit();
}


$page_title = "Home - Threadly";
include("includes/header.php");
?>

<div class="center_container">
    <div id="menu" class="menu">
        <img src="Assest/Image/leftarrow.png" id="arrowleft" class="arrowleft">
        <img src="Assest/Image/shoes.png" id="productImage" alt="Shoes" class="image">
        <img src="Assest/Image/rightarrow.png" id="arrowright" class="arrowright">
        <div class="shadow"></div>
        <h2 class="type" id="type">Shoes</h2>
    </div>
    
    <div class="box">
        <div class="info">
            <p class="name" id="name1">Adidas men Lite Racer Adapt 7.0</p>
            <p class="name" id="name2">Shoes Opens in a new window</p>
            <p class="name" id="name3">or tab</p>
        </div>  

        <div class="pricebox">
            <p><strong class="price" id="price">$22.00</strong> or Best Offer</p>
            <p><strong class="shipping" id="shipping">$8.75</strong> shipping</p>
        </div>

        <p class="brand">Brand New · Size US M 10.5 +</p>
    </div>
</div>      

<script src="Assest/Js/homepage.js"></script>

<?php include("includes/footer.php"); ?>