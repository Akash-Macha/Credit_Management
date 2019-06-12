<?php
    include 'db.php';
?>

<!DOCTYPE html>
<html>

<head>
    <title>Credit Management System</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css" media="all">
    <script type="text/javascript" src="js/ajax.js"></script>
    <link rel="shortcut icon" href="icon/credit_management.ico">

</head>

<body>

    <div id="welcome">
        <h1>Welcome to Credit Management System</h1>
    </div>

    <p id="chooseFrom">Choose an option using below button</p>

    <div class="dropdown">
        <button class="dropbtn">Available Options!</button>

        <div class="dropdown-content">

            <form method="POST" action="index.php">
                <a onclick="clean()" name="home">Home/Instructions</a>
                <a onclick="ajax()" name="showallusers">Show All Users</a>
            </form>

        </div>
    </div>

    <div id="content" style="margin:0 auto;" >
        <div>
            <h2 id="instructions_heading" >Instructions:</h2>
        </div>

        <!-- <div style="display:block; margin: 0 auto;" > -->
        <div >
            <div>
                <h3 id="instructions">1. To Show All Users:</h3>
                <p>You can see all the users by going into<br>
                    <p id="instructions">Available Options → Show All Users</p>
                </p>
            </div>

            <div>
                <h3 id="instructions">2. To View Credits of a person</h3>
                <p>You can see the credits of a particular person by going into<br>
                    <p id="instructions">Available Options → Show All Users →<br /></p>
                    <p id="instructions">Select/click on a person to view their respective credits</p>
                </p>
            </div>

            <div>
                <h3 id="instructions">3. To Transfer Credits</h3>
                <p>You can Transfer Credits in the following way<br>
                    <p id="instructions">Available Options → Show All Users → <br></p>
                    <p id="instructions">Select/click on a person to view their respective credits → <br /></p>
                    <p id="instructions">click "Click here to Transfer Credits" →<br /></p>
                    <p id="instructions">choose a person to transfer credits → <br /></p>
                    <p id="instructions">Enter amount of Credits to Transer →<br /></p>
                    <p id="instructions">click Send!</p>
                </p>
            </div>
        </div>
    </div>

    <div id="display_other_persons_id" style="text-align: ">
    </div>

</body>

</html>
