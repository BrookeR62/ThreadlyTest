<?php
$page_title = "About - Threadly";
include("includes/header.php");
?>
    <div class="about">
        <h2>
            AI-Based Clothing Price Prediction System 
        </h2>
        <p class="middle_p">
            (Threadly)
        </p>
       
            <h3>
                1. Project Description
            </h3>
                <p>
                    Threadly is a web-based application designed to assist clothing sellers in estimating the appropriate market price of clothing items using Artificial Intelligence (AI). The system analyzes seller-provided clothing details such as clothing type, material, brand, condition, and category, then generates a data-driven price prediction based on patterns learned from historical clothing price data. This helps sellers set competitive and fair prices before listing or selling their products.
                    
                    The website includes a secure login system using “Continue with Google”, providing fast and reliable authentication without the need for manual account creation. Once logged in, sellers can access the price prediction feature, input clothing information, and instantly receive an estimated price range to guide their pricing decisions.
                    
                    Threadly is developed using the CodeIgniter framework, which handles backend logic, routing, and security, while MySQL is used to store seller information and price prediction records. An API layer connects the web application to the AI price prediction model, enabling real-time data processing and response. The system is designed exclusively for sellers, focusing on usability, efficiency, and accurate price estimation to support informed pricing strategies.

                    Overall, the project aims to provide sellers with an intelligent and easy-to-use tool that enhances decision-making and pricing accuracy through modern web and AI technologies.    
                </p>   
              <h3>
                2. Project Objectives
            </h3>
                <div class="bullet">
                    <p>● To develop a web-based system that predicts clothing prices using AI for sellers</p>

                    <p>● To implement a secure Google login system for seller authentication </p>

                    <p>● To store seller and prediction data using MySQL</p>

                    <p>● To provide sellers with a simple and user-friendly interface for price estimation</p>                     
                </div> 
            <h3>
             3. System Components
            </h3>
            <h3>
                AI Module
            </h3>
                <p>
                    ● Predicts the possible market price of clothing items based on seller input
                </p>
            <h3>
                API
            </h3>
                <p>
                ● Connects the web application to the AI model and Google authentication service
                </p>
            <h3>
                Database
            </h3>
                <p>
                ● Stores seller information and clothing price prediction records
                </p>  
    </div>   
<?php include("includes/footer.php"); ?>