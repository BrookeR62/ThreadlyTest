<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: index.php");
    exit();
}

$page_title = "Contact - Threadly";
include("includes/header.php");
?>

    <div class="contact">
    <h2>Meet The Creator</h2>
    <div class="creator">
        <img src="Assest/Image/me.png" alt="Creator">
    </div>
    <h3 class="do">
        Designer & Developer
    </h3>
    <p class="description">
        Passionate designer and developer with a strong foundation in creating intuitive user experiences and robust software solutions. Graduated from Bohol Island State University - Clarin Campus, where I honed my skills in graphic design, web development, and emerging technologies. Dedicated to blending creativity with technical expertise to build impactful digital products that solve real-world problems. Always eager to collaborate on innovative projects that push the boundaries of design and functionality.
    </p>



   </div>
    
<?php include("includes/footer.php"); ?>