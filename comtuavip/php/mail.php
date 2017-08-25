<?php 
	$name=$_POST['name'];
	$email=$_POST['email'];
	$subject=$_POST['subject'];
	$message=$_POST['message'];
	$whatever=$_POST['whatever']; // hidden form

	$to = "kuznetcova.0704@yandex.ru";

	if ($whatever == "JOIN")
		$report = "Email: ".htmlspecialchars($email);
	else {
		$report = "
		Username: ".htmlspecialchars($name)."<br />
		Email: ".htmlspecialchars($email)."<br />
		Subject: ".htmlspecialchars($subject)."<br />
		Message: ".htmlspecialchars($message);
		}

	$headers = "From: comtuavip.sl <mail@comtuavip.sl>\r\nContent-type: text/html; charset=UTF-8 \r\n";
	mail ($to, $whatever, $report, $headers);

	header('Location: ../thanks.html');
	exit();

?>