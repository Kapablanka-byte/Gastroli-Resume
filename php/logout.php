<?php 
	require 'db.php';
	unset($_SESSION['logged_user']);
	header('Location: lk.php');
?>
