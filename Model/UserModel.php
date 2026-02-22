<?php

require_once "Database.php";

class UserModel {

    private $conn;

    public function __construct() {

        $database = new Database();
        $this->conn = $database->connect();

    }

    public function login($username, $password) {

        $sql = "SELECT * FROM users WHERE username = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute([$username]);

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            return $user;
        }

        return false;
    }

}
?>