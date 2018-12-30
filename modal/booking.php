<!-- BOOK ONLINE BOXLIGHT -->

<?php 
	require_once $_SERVER['DOCUMENT_ROOT']."PHPMailer/src/Exception.php";
	require_once $_SERVER['DOCUMENT_ROOT']."PHPMailer/src/PHPMailer.php";
	require_once $_SERVER['DOCUMENT_ROOT']."PHPMailer/src/SMTP.php";
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;	
	if($_POST["submit"]) {
		$From = 'Nextraone';
		$FromEmail = 'noreply@rvmua.com';
		$recipient="paritosh.singh1391@nextraworld.com";
		$sender=@$_POST["sender"];
		$senderEmail=@$_POST["senderEmail"];
		$senderNumber=@$_POST["senderNum"];
		
		//PHPMailer Object
		$mail = new PHPMailer();
		//From email address and name
		$mail->From = $FromEmail;
		$mail->FromName = $From;

		//To address and name
		$mail->addAddress($recipient, "Paritosh");

		//Address to which recipient will reply
		$mail->addReplyTo($senderEmail, $sender);

		//CC and BCC
		/* $mail->addCC("cc@example.com");
		$mail->addBCC("bcc@example.com"); */

		//Send HTML or Plain Text email
		$mail->isHTML(true);
		$subject="Registration For Gym";
		$mailBody="Name: $sender<br>Email: $senderEmail<br><br>$senderNumber";
		$mail->Subject = $subject;
		$mail->Body = $mailBody;
		//$mail->AltBody = "This is the plain text version of the email content";

		if(!$mail->send()) 
		{
			echo "Mailer Error: " . $mail->ErrorInfo;
		} 
		else 
		{
			header('Location: thank-you.php');die;
		}
	}
?>



<div id="book_online" class="booking_popup">
	<div class="book_online">
		<div class="makeup_fl_form">
			<h3>Book Online</h3>
			<form action="/" method="post" class="contact_form" id="contact_form">

				<div class="fl-col-6">
					<div class="your-name">
						<label>Name<span>*</span></label>
						<input type="text" id="name"  name="sender" placeholder="Name"/>
					</div>
				</div>
				<div class="fl-col-6 last">
					<div class="your-email">
						<label>Email<span>*</span></label>
						<input type="text" id="email" name="senderEmail" placeholder="Email"/>
					</div>
				</div>
				<div class="fl-col-6">
					<div class="your-phone">
						<label>Phone<span>*</span></label>
						<input type="text" id="phone" name="senderNumber" placeholder="Phone Number"/>
					</div>
				</div>
				<div class="clearfix"></div>
				<!-- <div class="your-message">
					<label>Message: <span>*</span></label>
					<textarea id="message" placeholder="Message" cols="3" rows="5"></textarea>
				</div> -->
				<div class="button">
				<input type="submit" class="makeup_fl_btn makeup_fl_btn_bookingsend"  name="submit" value="Book Online" />
				</div>
				<!-- RETURN MESSAGES -->
				<div class="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
				<div class="empty_notice"><span>Please Fill Required Fields</span></div>
				<!-- /RETURN MESSAGES -->
			</form>
		</div>
	</div>
</div>
<!-- /BOOK ONLINE BOXLIGHT -->