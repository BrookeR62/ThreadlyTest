<?php

require_once("Database.php");

class Cart {

    private $conn;

    public function __construct(){
        $database = new Database();
        $this->conn = $database->connect();
    }

    // ADD ITEM
    public function addItem($user_id,$name,$price,$image){

        // check if item already exists
        $stmt = $this->conn->prepare("
            SELECT cart_id, quantity 
            FROM cart 
            WHERE user_id = :user_id 
            AND product_name = :name
        ");

        $stmt->execute([
            "user_id"=>$user_id,
            "name"=>$name
        ]);

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if($row){

            // update quantity
            $stmt = $this->conn->prepare("
                UPDATE cart 
                SET quantity = quantity + 1
                WHERE cart_id = :cart_id
            ");

            return $stmt->execute([
                "cart_id"=>$row['cart_id']
            ]);

        }else{

            // insert new item
            $stmt = $this->conn->prepare("
                INSERT INTO cart 
                (user_id,product_name,product_price,product_image,quantity)
                VALUES
                (:user_id,:name,:price,:image,1)
            ");

            return $stmt->execute([
                "user_id"=>$user_id,
                "name"=>$name,
                "price"=>$price,
                "image"=>$image
            ]);
        }
    }


    // REMOVE ITEM
    public function removeItem($cart_id){

        $stmt = $this->conn->prepare("
            DELETE FROM cart
            WHERE cart_id = :cart_id
        ");

        return $stmt->execute([
            "cart_id"=>$cart_id
        ]);
    }


    // UPDATE QUANTITY
    public function updateQuantity($cart_id,$quantity){

        $stmt = $this->conn->prepare("
            UPDATE cart
            SET quantity = :quantity
            WHERE cart_id = :cart_id
        ");

        return $stmt->execute([
            "quantity"=>$quantity,
            "cart_id"=>$cart_id
        ]);
    }


    // GET USER CART
    public function getCartItems($user_id){

        $stmt = $this->conn->prepare("
            SELECT * FROM cart
            WHERE user_id = :user_id
        ");

        $stmt->execute([
            "user_id"=>$user_id
        ]);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}
?>