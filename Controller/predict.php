<?php
header('Content-Type: application/json');

$brand = $_POST['brand'];
$category = $_POST['category'];
$material = $_POST['material'];
$size = $_POST['size'];
$color = $_POST['color'];

$command = escapeshellcmd(
    "D:\\Python\\python.exe " .
    "D:\\Xammpp\\htdocs\\Threadly.com\\ML_API\\predict_model.py " .
    "\"$brand\" \"$category\" \"$material\" \"$size\" \"$color\""
);

$output = shell_exec($command);

// Clean output
$price = trim($output);

echo json_encode([
    "price" => $price
]);