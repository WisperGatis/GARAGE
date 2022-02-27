<?php

    $cookie_name ="";
    $Cookie_value ="";

    setcookie($cookie_name, $Cookie_value, time() +(86400 * 30), "/");

    if (!isset($_COOKIE[$cookie_name])) {
        echo "cookie named '". $cookie_name . "' Is not set!";
    }
    else {
        echo "Cookie named'". $cookie_name . "' is set!";
        echo "value is :" .$_COOKIE[$cookie_name];
    }

?>