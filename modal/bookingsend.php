<?php

// Put contacting email here
$main_email = "info.rvmua@gmail.com";


//Fetching Values from URL
$name = $_POST['xx_name'];
$email = $_POST['xx_email'];
$phone = $_POST['xx_phone'];
$message = $_POST['xx_message'];



//Sanitizing email
$email = filter_var($email, FILTER_SANITIZE_EMAIL);


//After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
	
	
		$subject = "Message from contact form";
		
		// To send HTML mail, the Content-type header must be set
		$headers = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'From:' . 'noreply@rvmua.com'. "\r\n"; // Sender's Email
		
		$template = '<div">'
		. '<strong>Name:</strong>  ' . $name . '<br/>'
		. '<strong>Email:</strong>  ' . $email . '<br/>'
		. '<strong>Phone:</strong>  ' . $phone . '<br/><br/>'
		. '<strong>Message:</strong>  ' . $message . '<br/>'
		. '<br/>'
		. 'This is a Contact Confirmation mail.'
		. '<br/>';
		$sendmessage = "<div>" . $template . "</div>";
		
		// message lines should not exceed 70 characters (PHP rule), so wrap it
		$sendmessage = wordwrap($sendmessage, 70);
		
		// Send mail by PHP Mail Function
		mail($main_email, $subject, $sendmessage, $headers);
		echo "";
	
	
} else {
	echo "<span class='contact_error'>* Invalid email *</span>";
}

?>