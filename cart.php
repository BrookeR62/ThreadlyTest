<?php
session_start();
require_once("Model/Database.php");

if (!isset($_SESSION['user_id'])) {
    header("Location: index.php");
    exit();
}

$page_title = "Cart - Threadly";
include("includes/header.php");

$database = new Database();
$conn = $database->connect();

$user_id = $_SESSION['user_id'];

$stmt = $conn->prepare("SELECT * FROM cart WHERE user_id = :user_id");
$stmt->execute(["user_id"=>$user_id]);

$total = 0;

echo '<div class="cart-items">';

while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    $total += $row['product_price'] * $row['quantity'];
?>
    <div class="cart-item" data-id="<?php echo $row['cart_id']; ?>">

        <input type="checkbox" class="item-check">

        <img src="<?php echo $row['product_image']; ?>" alt="<?php echo $row['product_name']; ?>">

        <div class="cart-info">
            <p class="cart-name"><?php echo $row['product_name']; ?></p>
            <span>$<?php echo $row['product_price']; ?></span>
        </div>

        <div class="cart-qty">
            <button class="minus">-</button>
            <input type="text" value="<?php echo $row['quantity']; ?>">
            <button class="plus">+</button>
        </div>

       <a href="controller/remove_cart.php?id=<?php echo $row['cart_id']; ?>">
            <i class="fa-solid fa-xmark"></i>
        </a>

    </div>
<?php
}
echo '</div>';
?>

<div class="cart-footer">
    <div class="total">Total: <strong>$<?php echo $total; ?></strong></div>
    <button class="checkout-btn">Checkout</button>
</div>

<script src="Assest/Js/cart.js"></script>
<?php include("includes/footer.php"); ?>