<?php

require_once "Database.php";

class UserModel {

    private $conn;

    public function __construct() {
        $database = new Database();
        $this->conn = $database->connect();
    }

    public function login($username, $password) {

        $sql = "SELECT * FROM users WHERE username = ? AND password = ?";
        
        $stmt = $this->conn->prepare($sql);
        $stmt->execute([$username, $password]);

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            return $user;
        } else {
            return false;
        }
    }



    public function register(
    $email,
    $username,
    $age,
    $first_name,
    $middle_name,
    $last_name,
    $gender,
    $address,
    $birthdate,
    $password
) {

    $sql = "INSERT INTO users 
    (email, username, age, first_name, middle_name, last_name, gender, address, birthdate, password)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $this->conn->prepare($sql);

    return $stmt->execute([
        $email,
        $username,
        $age,
        $first_name,
        $middle_name,
        $last_name,
        $gender,
        $address,
        $birthdate,
        $password
    ]);

}
}
?>