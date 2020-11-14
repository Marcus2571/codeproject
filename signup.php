<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/dashboard/style/login.css">
    <title>Code Project</title>
</head>
<body>
    <div>
        <ul id="detailinput">
            <form method="POST" action="/dashboard/login.php">
                <li>First name:<input type="text" name=""></li>
                <li>Email:<input type="text" name="email"></li>
                <li>Username:<input type="text" name="user"></li>
                <li>Password:<input type="password" name="password"></li>
                <li><input type="submit" value="Login" name="submitted"></li>
            </form>
        </ul>
    </div>
<?php
$conn_string = "host=localhost port=5432 user=postgres password=Ycd55wpn dbname=users";

$conn = pg_connect($conn_string);

$query = "INSERT INTO users (email, username, password) VALUES ('$_POST[email]','$_POST[user]', '$_POST[password]')";
$result = pg_query($query); 


?>
</body>
</html>