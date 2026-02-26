<?php if (isset($_GET['success']) && $_GET['success'] == "registered"): ?>
    <div class="success-message">
        Registration successful! You can now login.
    </div>
<?php endif; ?>

<?php if (isset($_GET['error']) && $_GET['error'] == "wrong"): ?>
    <div class="error-message">
        Wrong username or password.
    </div>
<?php endif; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Threadly Login</title>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="Assest/Css/login.css">
</head>
<body>
    <div class="bg-shape"></div>
    <div class="container">
        <div class="left">
            <div class="logo-container">
                <div class="logo-circle">
                    <img src="Assest/Image/threadlylogo.png" class="logoimage">
                </div>
                <h2>Threadly</h2>
            </div>
            <div class="welcome-text">
                <h1>Welcome Back</h1>
                <p>Login to continue your journey with us today.</p>
            </div>
            <div class="social-login">
                <span>Contact us with</span>
                <div class="social-icons">
                    <a href="https://www.google.com"><i class="fa-brands fa-google"></i></a>
                    <a href="https://www.instagram.com/challenge/?next=https%3A%2F%2Fwww.instagram.com%2F1768_christian%2F%3F__coig_challenged%3D1#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/christian.soria.188"><i class="fa-brands fa-facebook-f"></i></a>
                </div>
            </div>
        </div>

        <div class="right">
            <div class="form-wrapper">
                <h3>Sign In</h3>
             <form action="Controller/AuthController.php" method="POST">
                    <input type="hidden" name="action" value="login">

                    <div class="input-group">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="text" name="username" placeholder="Username" required>
                    </div>

                    <div class="input-group">
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" name="password" placeholder="Password" required>
                         <div class="eyeIcon" onclick="toggle(this)">
                     <img src="Assest/Image/closed-eye.png" class="close" alt="closed">
                     <img src="Assest/Image/open-eye.png" class="open" alt="open"> </div>
                     </div>
                    </div>
                   <div class="actions">
                        <label class="checkbox-container">
                            <input type="checkbox" name="remember">
                            Remember me
                        </label>
                        <a href="forgot_password.php" class="forgot-pass">
                            Forgot Password?
                        </a>
                    </div>                
                    <button type="submit" class="login-btn">Login</button>

                </form>

                <div class="divider"><span>OR</span></div>
                <button type="button" class="register-btn" onclick="window.location.href='registration.php'">
                    Create Account
                </button>
            </div>
        </div>
    </div>
    <script>
    setTimeout(() => {
    const msg = document.querySelector(".success-message");
    if (msg) msg.style.display = "none";
    }, 100);
</script>
<script src="Assest/Js/login.js"></script>
</body>
</html>