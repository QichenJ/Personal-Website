<?php
	$name = $email = $message = $subject = "";
	$nameErr = $emailErr = $messageErr = "";
	$error = true;
	if($_SERVER["REQUEST_METHOD"] == "POST") {
		$error = false;
		if(empty($_POST["contactName"])) {
			$nameErr = "Please enter your name";
			$error = true;
		} else {
			$name = test_input($_POST["contactName"]);
		}

		if(empty($_POST["contactEmail"])) {
			$emailErr = "Pleasr enter your email address";
			$error = true;
		} else {
			$email = test_input($_POST["contactEmail"]);
		}

		if(empty($_POST["message"])) {
			$messageErr = "Hey!You forget to leave a message";
			$error = true;
		}  else {
			$message = test_input($_POST["message"]);
		}

		if(empty($_POST["contactSubject"])) {
			$subject = "";
		} else {
			$subject = test_input($_POST["contactSubject"]);
		}


		if($nameErr == "" && !preg_match("/^[a-zA-Z]*$/", $name)) {
			$error = true;
			$nameErr = "Only letters and white space allowed for name";
		}

		if($emailErr == "" && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$error = true;
			$emailErr = "Invalid email format";
		}
	}
	if($_POST["submit"]) {

		if(!$error) {
			$from = "From $email";
			$to = "jingqichen91@gmail.com";
			$body = "From: $name\n E-Mail: $email\n Message:\n $message";
			if(mail ($to, $subject, $body, $from)) {
				echo "succeed";
			} else {
				echo "Sonething went wrong";
			}
		} else {
			echo $nameErr.$emailErr.$messageErr;
		}
		
	}
	
	
	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

?>