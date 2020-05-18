<?php 
	require 'db.php';
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
                        <nav><a title="DJ Bar" class="node" href="../index.html">DJ Bar</a><a title="О Нас" class="node" href="../about.html">О Нас</a><a title="Меню" class="node" href="../menu.html">Меню</a><a title="Календарь" class="node" href="../calendar.html">Календарь</a><a title="Галерея" class="node" href="../gallery.html">Галерея</a><a title="Контакты" class="node" href="../contact.html">Контакты</a><a title="Контакты" class="active" href="lk.php">Авторизация</a></nav>
                        <div class="lang"><a href="en/club/index.html" class=' en'>en</a></div>
                    </div>
                    <div class="mob-toggle">
                        <span></span>
                    </div>
                </header>
            

                                                <div class="full-img12" style="background-image: url('../uploads/site_structure/image_top/0008/1.jpeg');">
                                <div class="full-img__box">
                                    
    <div class="breadcrumbs">
                    <span typeof="v:Breadcrumb">
                <a href="../index.html" title="Главная" rel="v:url" property="v:title">Главная</a> 
                            </span>
                    <span typeof="v:Breadcrumb">
                   <a href="#" title="Клуб" rel="v:url" property="v:title" class="last">Авторизация</a> 
				   </span>
            </div>
						
			<div class="h1"><h1 data-wow-delay="0.5s" class="wow fadeInUp" >АВТОРИЗАЦИЯ</h1></div>
					                               </div>
                                <div class="scroll-line"></div>
                            </div>
                
		
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
				echo '<div style="color:dreen;">You are authorized!<br/> You can go to <a href="lk.php">personal cabinet</a></div><hr>';
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









		
<form action="login.php" method="POST">
	<strong>Login</strong>
	<input class="input100" type="text" name="login" placeholder="Andrey" value="<?php echo @$data['login']; ?>"><br/>
	<strong>Password</strong>
	<input type="password" name="password" value="<?php echo @$data['password']; ?>"><br/>

	<button type="submit" name="do_login">Exit</button>
</form>  
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   


<script type="text/javascript" src="../design/ibiza/js/imgloader.js"></script>
<script type="text/javascript" src="../design/ibiza/js/masonry.js"></script>              
                

                
    <div class="container-fluid">
        <div class="col-md-12 no-padding">
            <div class="h2">​​Партнеры</div>
        </div>
    </div>
   <div class="slider-partners slider-options">
      
        <div class="swiper-pagination"></div><div class="swiper-prev"></div><div class="swiper-next"></div>
    </div>
  <footer>
                                <div class="footer__item">
                                    <div class="footer__title">Контакты</div>
                                    <div class="footer__box">
                                        
<p class="adress">Адрес: Россия, Алтайский Край, г. Барнаул, Пер. Геблера 33б</p>
<p><span>Телефон:</span><a href="tel:+79130294754">+79130294754</a></p>                                      
                                    </div>
                                </div>

                               
                                <div class="footer__item">
                                    <div class="footer__title">В социальных сетях</div>
                                    <div class="footer__box column"><a class="in" rel="nofollow" href="https://www.instagram.com/x.x.x.x_bar_altai/" target="_blank">Instagram</a><a class="vk" rel="nofollow" href="https://vk.com/xxxxbarnaul" target="_blank">VK</a></div>
                                </div>
                               
                            </footer>
                        </div>

                    </div>
                </div>

                            </div>
        

        <div id="modal_form"></div>
    </div>
    </div>


    
   <script type="text/javascript" src="design/ibiza/js/wow.min.js"></script>
    <script type="text/javascript" src="design/ibiza/js/chosen.jquery.min.js"></script>
    <script type="text/javascript" src="design/ibiza/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="design/ibiza/js/jquery.maskedinput.min.js"></script>
    <script type="text/javascript" src="design/ibiza/js/jquery.panzoom.min.js"></script>
    <script type="text/javascript" src="design/ibiza/js/swiper.min.js"></script>
    <script type="text/javascript" src="design/ibiza/js/fancybox3.js"></script>
    <script type="text/javascript" src="design/ibiza/js/script.js"></script> 

    <script type="text/javascript" src="js/jquery/jquery.form.min.js"></script> 
    <script type="text/javascript" src="js/shared/global.js"></script>
    <script type="text/javascript" src="js/shared/functions.js"></script> 
    
    </body>