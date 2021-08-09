<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/website/loginsignup/style/login.css">
    <title>Code Project</title>
<?php
  // $conn_string = "host=localhost port=5432 user=postgres password=Ycd55wpn dbname=users";

  // $conn = pg_connect($conn_string);

  // $query = "INSERT INTO users (email, username, password) VALUES ('$_POST[email]','$_POST[user]', '$_POST[password]')"; 
  // if ( isset($_POST['submitted']) ) {
  //   $result = pg_query($query);
  //   // insert or what ever
  //   // don't forget validation check of input data
  // } else {
  //   // here is code you have now actually
  // }
?>
</head>
  <body>
      <div id="logincontainer">
          <ul id="detailinput">
          <form method="POST" action="/website/index/index.html">
                <li>Email:<input class="logindetails" type="text" name="email" value="Example@gmail.com"></li>
                <li>Username:<input class="logindetails" type="text" name="user" value="Username"></li>
                <li>Password:<input class="logindetails" type="password" name="password" value="Password"></li>
                <li><input id="submitbtn" type="submit" value="Login" name="submitted"></li>
            </form>
          </ul>
      </div>
  </body>
</html>
