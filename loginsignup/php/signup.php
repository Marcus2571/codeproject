<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/website/loginsignup/style/signup.css">
    <title>Code Project</title>
</head>
<body>
    <div id="logincontainer">
        <ul id="detailinput">
            <form method="POST" action="/website/index/index.html">
                <li class="logindetails"><input type="text" name="first_name" value="First name"></li>
                <li class="logindetails"><input type="text" name="last_name" value="Last name"></li>
                <li class="logindetails"><input type="text" name="email" value="Email"></li>
                <li class="logindetails"><input type="text" name="user" value="Username"></li>
                <li class="logindetails"><input type="password" name="password" value="Password"></li>
                <li><input id="submitbtn" type="submit" value="Login" name="submitted"></li>
            </form>
        </ul>
    </div>
<?php
// $conn_string = "host=localhost port=5432 user=postgres password=Ycd55wpn dbname=users";

// $conn = pg_connect($conn_string);

// $query = "INSERT INTO users (email, username, password) VALUES ('$_POST[email]','$_POST[user]', '$_POST[password]')";
// $result = pg_query($query); 


?>
</body>
</html>