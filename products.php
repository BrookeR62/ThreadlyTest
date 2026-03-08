<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: index.php");
    exit();
}

$page_title = "Products - Threadly";
include("includes/header.php");
?>

<div class="products-container">

    <h1 class="products-title">Our Products</h1>

  
    <div class="products-search">
        <input type="text" id="searchInput" placeholder="Search for products...">
    </div>

    
    <div class="products-categories">
        <button class="category-btn active" data-category="All">All</button>
        <button class="category-btn" data-category="Shoes">Shoes</button>
        <button class="category-btn" data-category="Tshirt">T-shirts</button>
        <button class="category-btn" data-category="Jeans">Jeans</button>
        <button class="category-btn" data-category="Jacket">Jackets</button>
        <button class="category-btn" data-category="Dress">Dresses</button>
        <button class="category-btn" data-category="Sweater">Sweaters</button>
        <button class="category-btn" data-category="Watch">Watches</button>
        <button class="category-btn" data-category="Bag">Bags</button>
        <button class="category-btn" data-category="Gaming-Setup">Gaming Desktop </button>
    </div>

    
    <div class="products-grid" id="productsGrid">

        

    </div>

</div>

<script src="Assest/Js/products.js"></script>

<?php include("includes/footer.php"); ?>