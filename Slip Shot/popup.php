<?php

// This line loads the library
require('/path/to/twilio-php/Services/Twilio.php');

$outgoingNumber = $_POST["phoneNumber"];
$mediaURL = $_POST["MediaUrl"];

$sid = "PNd612bf84d9c7b073788d2d78b01c4c2a"; // Your Account SID from www.twilio.com/user/account
$token = "063010c849b1c0654ff5dad27ea41dbb"; // Your Auth Token from www.twilio.com/user/account

$client = new Services_Twilio($sid, $token);

$client->account->messages->create(array( 
	'To' => $outgoingNumber, 
	'From' => "+15734333042",  
	'MediaUrl' => $mediaURL,  
));

print $message->sid;


?>