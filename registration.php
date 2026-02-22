<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Register</title>
<link rel="stylesheet" href="Assest/Css/registration.css">
</head>
<body class="registerui">
 <button class="back" onclick="window.location.href='View/frontend/index.php'">Back</button>
<div class="main-container">

    <div class="card">
        <div class="login_logo"> 
            <img src="Assest/Image/looogo.png" alt="login_logo">
        </div> 

        <div class="card-header">
            <h1>Create Account</h1>
        </div>

        <form id="registerForm">

            <div class="form-grid">
                <div class="inputgroup">
                    <label>Email</label>
                    <input type="email" required>
                </div>

                <div class="inputgroup">
                    <label>Username</label>
                    <input type="text" required>
                </div>

                <div class="inputgroup">
                    <label>Age</label>
                    <input type="number" min="18" max="100" id="age" required>
                </div>

                <div class="inputgroup">
                    <label>First Name</label>
                    <input type="text" maxlength="50" pattern="[A-Za-z ]+" required>
                </div>

                <div class="inputgroup">
                    <label>Middle Name</label>
                    <input type="text" maxlength="50" pattern="[A-Za-z ]+" required>
                </div>

                <div class="inputgroup">
                    <label>Last Name</label>
                    <input type="text" maxlength="50" pattern="[A-Za-z ]+" required>
                </div>

                <div class="inputgroup">
                    <label>Gender</label>
                    <select required>                      
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                       
                    </select>
                </div>
                <div class="inputgroup">
                    <label>Address</label>
                    <input type="text" required>
                </div>

                <div class="inputgroup full">
                    <label>Birthdate</label>
                    <input type="date" id="birthdate" required>
                </div>

               <div class="inputgroup">
                <label>Password</label>
                <input type="password" 
                id="password"
                 maxlength="16" minlength="12" 
                 pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{12,16}" 
                  title="Password must be 12–16 characters, include uppercase, lowercase, and number" 
                  required>

                <div class="eyeIcon" onclick="toggle(this)">
                    <img src="Assest/Image/closed-eye.png" class="close" alt="closed">
                    <img src="Assest/Image/open-eye.png" class="open" alt="open">
                </div>
            </div>

            <div class="inputgroup">
                <label>Confirm Password</label>
                <input type="password" id="confirmPassword" maxlength="16" minlength="12" required>

                <div class="eyeIcon" onclick="toggle(this)">
                    <img src="Assest/Image/closed-eye.png" class="close" alt="closed">
                    <img src="Assest/Image/open-eye.png" class="open" alt="open">
                </div>
            </div>

            </div>

            <button type="submit" class="registerbuton">Create Account</button>

        </form>

    </div>
</div>

<script src="Assest/Js/login.js"></script>
</body>
</html>