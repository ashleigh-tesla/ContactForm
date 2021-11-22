<?php

// let's get all form values

$name = $_POST['name']
$email = $_POST['email']
$phone = $_POST['phone']
$website = $_POST['website']
$message = $_POST['message']

if(!empty($email) && !empty($message)){ // if email and message field are not empty
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // if user entered email is valid
        $receiver = "ashleightesla@gmail.com"; // email receiver email address
        $subject = "From: $name <$email>"; // subject of the email
        // merging concating all user values inside body variable
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";
        $sender = "From: $email"; // sender email
        if(mail($receiver, $subject, $body, $sender)){ //
            echo "Your Message Has Been Sent"
        } else {
            echo "Sorry, Failed To Send Your Message"
        }
    }else{
        echo 'Enter A Valid Email Address!'
    }
}else {
    echo "Email and Password are Required"
}

?>