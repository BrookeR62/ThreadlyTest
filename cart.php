<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: index.php");
    exit();
}

$page_title = "Cart - Threadly";
include("includes/header.php");
?>

<div class="cart-container">

    <h1 class="cart-title">Shopping Cart</h1>

    <div class="cart-controls">

        <label>
            <input type="checkbox" id="selectAll"> Select All
        </label>

        <button class="delete-selected">
            <i class="fa-solid fa-trash"></i> Delete Selected
        </button>

    </div>

    <div class="cart-items">

        
        <div class="cart-item">

            <input type="checkbox" class="item-check">

            <img src="Assest/Image/shoes.png">

            <div class="cart-info">
                <p class="cart-name">Adidas Lite Racer</p>
                <span>$22.00</span>
            </div>

            <div class="cart-qty">
                <button class="minus">-</button>
                <input type="text" value="1">
                <button class="plus">+</button>
            </div>

            <button class="delete-item">
                <i class="fa-solid fa-xmark"></i>
            </button>

        </div>

      
        <div class="cart-item">

            <input type="checkbox" class="item-check">

            <img src="Assest/Image/shoes.png">

            <div class="cart-info">
                <p class="cart-name">Nike Running Shoes</p>
                <span>$30.00</span>
            </div>

            <div class="cart-qty">
                <button class="minus">-</button>
                <input type="text" value="1">
                <button class="plus">+</button>
            </div>

            <button class="delete-item">
                <i class="fa-solid fa-xmark"></i>
            </button>

        </div>

    </div>

    <div class="cart-footer">

        <div class="total">
            Total: <strong>$52.00</strong>
        </div>

        <button class="checkout-btn">
            Checkout
        </button>

    </div>

</div>

<script src="Assest/Js/cart.js"></script>

<?php include("includes/footer.php"); ?>