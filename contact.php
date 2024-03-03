<?php
$name = $_POST['name'];
$email = $_POST['email'];
$msg= $_POST['message'];

$to = 'giftmoyo23@gmail.com';
$subject = 'A Message from Your Profile';

mail($to, $subject, $msg, $email);


?>