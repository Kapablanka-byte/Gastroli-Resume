<?php 
	require '../php/db.php';
?>
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="HandheldFriendly" content="true">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <title>Личный кабинет DJBar GASTROLI</title>
        <meta name="description" content="ADAM GONTIER. Ibiza (Ибица Одесса) ночной клуб, Одесса.">
        <meta name="theme-color" content="#ffffff">
        <link href="favicon.ico" rel="shortcut icon">

        	<meta name="robots" content="index,follow"> 	
        <link rel="canonical" href="index.html">

        <link href="../design/ibiza/css/bootstrap.min.css" rel="stylesheet">
        <link href="../design/ibiza/css/font.css" rel="stylesheet">
        <link href="../design/ibiza/css/animate.min.css" rel="stylesheet">
        <link href="../design/ibiza/css/chosen.css" rel="stylesheet">
        <link href="../design/ibiza/css/swiper.min.css" rel="stylesheet">
        <link href="../design/ibiza/css/fancybox3.css" rel="stylesheet">
        <link rel="stylesheet" href="../design/ibiza/css/style.css">
        
       <script src="../design/ibiza/js/jquery.js" type="text/javascript"></script>

        <script type="text/javascript">
            var langURL = '';
        </script>

    <div class="body-wrap">
        <p class="line1">
        <p class="line2">
        <p class="line3">
        <p class="line4">
        <div class="inside-wrap">
            <header class="header-white header-page">
                    <div class="mob-menu">
                        <nav><a title="DJ Bar" class="node" href="../index.html">DJ Bar</a><a title="О Нас" class="node" href="../about.html">О Нас</a><a title="Меню" class="node" href="../menu.html">Меню</a><a title="Календарь" class="node" href="../calendar.html">Календарь</a><a title="Галерея" class="node" href="../gallery.html">Галерея</a><a title="Контакты" class="node" href="../contact.html">Контакты</a><a title="Контакты" class="active" href="../php/lk.php">Авторизация</a></nav>
                        <div class="lang"><a href="en/club/index.html" class=' en'>en</a></div>
                    </div>
                    <div class="mob-toggle">
                        <span></span>
                    </div>
                </header>
	<title>Login V13</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">

</head>
<body style="background-color: #000;">
	
	
	<?php

    $data = $_POST;
	if ( isset($data['do_login']) )
	{
		$user = R::findOne('users', 'login = ?', array($data['login']));
		if ( $user )
		{
			//логин существует
			if ( password_verify($data['password'], $user->password) )
			{
				//если пароль совпадает, то нужно авторизовать пользователя
				$_SESSION['logged_user'] = $user;
				
			}else
			{
				$errors[] = 'Wrong password!';
			}

		}else
		{
			$errors[] = 'User with this login not found!';
		}
		
		if ( ! empty($errors) )
		{
			//выводим ошибки авторизации
			echo '<div id="errors" style="color:red;">' .array_shift($errors). '</div><hr>';
		}

	}
?>


	<div class="limiter">
		<div class="container-login100">
			<div class="login100-more" style="background-image: url('../i/big_gallery/gallery_photo/photo/0147/bg-01.jpg');"></div>

			<div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
			
				<?php if ( isset ($_SESSION['logged_user']) ) : ?>
				
				<div style="color:dreen;"><h1>Вы авторизованы!</h1><br></div>
				
				<form  class="login100-form validate-form" action="../php/lk.php">
				
				<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn" type="submit">
								Перейти в личный кабинет
							</button>
						</div>
					</div>
				
				</form>
				
				
				<?php else : ?>
				<form class="login100-form validate-form" action="login.php" method="POST">
					<span class="login100-form-title p-b-59">
						Авторизация
					</span>

					<br>
					<div class="wrap-input100 validate-input" >
						<span class="label-input100">Логин</span>
						<input class="input100" type="text" name="login" placeholder="Andrey" value="<?php echo @$data['login']; ?>">
						<span class="focus-input100"></span>
					</div>
<br>
					<div class="wrap-input100 validate-input" >
						<span class="label-input100">Пароль</span>
						<input class="input100" type="password" name="password" placeholder="123" value="<?php echo @$data['password']; ?>">
						<span class="focus-input100"></span>
					</div>

					

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn" name="do_login">
								Авторизоваться
							</button>
						</div>
					</div>
				</form>
				<br>
				<form  class="login100-form validate-form" action="../php/signup.php">
				
				<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn" type="submit">
								Зарегистрироваться
							</button>
						</div>
					</div>
				
				</form>
				<?php endif; ?> 
			</div>
		</div>
	</div>
	


</body>