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
        <link href="../icon.png" rel="shortcut icon">

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
                        <nav><a title="DJ Bar" class="node" href="../index.html">DJ Bar</a><a title="О Нас" class="node" href="../about.html">О Нас</a><a title="Меню" class="node" href="../menu.html">Меню</a><a title="Календарь" class="node" href="../calendar.html">Календарь</a><a title="Галерея" class="node" href="../gallery.html">Галерея</a><a title="Контакты" class="node" href="../contact.html">Контакты</a><a title="Контакты" class="active" href="lk.php">Личный кабинет</a></nav>
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
                   <a href="#" title="Клуб" rel="v:url" property="v:title" class="last">Личный кабинет</a> 
				   </span>
            </div>
						
			<div class="h1"><h1 data-wow-delay="0.5s" class="wow fadeInUp" >ЛИЧНЫЙ КАБИНЕТ</h1></div>
					                               </div>
                                <div class="scroll-line"></div>
                            </div>
                
                
		

		
<?php if ( isset ($_SESSION['logged_user']) ) : ?>
    <div class="aboutabout">
            <div class="about__title12">Вы авторизованы,      
       Здравствуйте, <?php echo $_SESSION['logged_user']->login; ?>!<br/> Рады снова видеть вас.
	                    </div> 					
				
    </div>
	<img src="../uploads/site_structure/image_top/0008/83.3.png" alt="GASTROLI" align="center">
	<div id="menu" data-hash="menu" class="swiper-slide">
    <div class="menu"> 
        
            
        <div class="menu__main menu__col">
            <a data-category="personal" class="menu__title active">Личные данные</a><a data-category="reservation" class="menu__title ">Бронирование</a><a data-category="rules" class="menu__title ">Правила бара</a><a class="menu__title " href="logout.php">Выход</a>        </div>
        
                <div class="menu__sub menu__col" data-category="personal" style="display:none">
           
                            <a data-subcategory="person" class="menu__title">Личная информация</a>
                           
            
        </div>
                <div class="menu__sub menu__col" data-category="reservation" style="display:none">
           
                            <a data-subcategory="reserv" class="menu__title">Забронировать стол</a>
                            <a data-subcategory="hreserv" class="menu__title">История бронирований</a>
                           
            
				</div>
                
                <div class="menu__sub menu__col" data-category="rules" style="display:none">
           
                            <a data-subcategory="rules1" class="menu__title">Правила бронирования столов</a>
                            <a data-subcategory="rules2" class="menu__title">Общие положения</a>
                            <a data-subcategory="rules3" class="menu__title">Кодекс бара</a>
                           
            
        </div>
              
        
                                <div class="menu__full menu__col" data-subcategory="information" style="display:none">
               
                <div class="swiper-scrollbar"></div>
            </div>   
								
								<div class="menu__full menu__col" data-subcategory="person" style="display:none">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="menu__sub-title">Личная информация</div>
                                                    
													Логин:	<?php echo $_SESSION['logged_user']->login; ?>		<br>
													Email:	<?php echo $_SESSION['logged_user']->email; ?>		<br>
		
                                            </div>
                </div>
                <div class="swiper-scrollbar"></div>
            </div>    
                      
                        <div class="menu__full menu__col" data-subcategory="reserv" style="display:none">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="menu__sub-title">Бронирование стола</div>
     
<?php 

	if (isset($_POST['name']) && isset($_POST['text']) && isset($_POST['date'])&& isset($_POST['time'])){

    // Переменные с формы
    $name = $_POST['name'];
    $text = $_POST['text'];
	$date = $_POST['date'];
	$time = $_POST['time'];	
	$tele = $_POST['tele'];		
	$idperson = $_SESSION['logged_user']->id;
    
    
    // Параметры для подключения
    $db_host = "localhost"; 
    $db_user = "g91302h7_gastrol"; // Логин БД
    $db_password = "123456"; // Пароль БД
    $db_base = 'g91302h7_gastrol'; // Имя БД
    $db_table = "reserv"; // Имя Таблицы БД
    
    // Подключение к базе данных
    $mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);

    // Если есть ошибка соединения, выводим её и убиваем подключение
	if ($mysqli->connect_error) {
	    die('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
	}
    
    $result = $mysqli->query("INSERT INTO ".$db_table." (name,text,idperson,date,time,tel) VALUES ('$name','$text','$idperson','$date','$time','$tele')");
  
	
	
	 
}



?>
<?php
$idperson = $_SESSION['logged_user']->id;
$datenow = date("d.m.Y");
$host='localhost'; // имя хоста (уточняется у провайдера)
$database='g91302h7_gastrol'; // имя базы данных, которую вы должны создать
$user='g91302h7_gastrol'; // заданное вами имя пользователя, либо определенное провайдером
$pswd='123456'; // заданный вами пароль
$dbh = mysql_connect($host, $user, $pswd) or die("Не могу соединиться с MySQL.");
mysql_select_db($database) or die("Не могу подключиться к базе.");
$query = "SELECT * FROM reserv WHERE idperson = '$idperson' AND date>='$datenow'";
$res = mysql_query($query);

if (($res == mysql_query($query) && mysql_num_rows($res)) > 0):
?>
<h3>Вы уже забронировали стол</h3><br>

<?php else: ?>                             

 <form method="POST" action="lk.php">
  <input class="input12" name="name" type="text" placeholder="ФИО"/><br>
  <input class="input12" name="text" type="text" placeholder="Количество человек"/><br>
  <input class="input12"  name="date" type="date" placeholder="день.месяц.год"/><br>
  <input class="input12"  name="time" type="time" placeholder="00:00"/><br>
  <input class="input12"  name="tele" type="text" placeholder="8913*******"/><br>
  <input class="button122" type="submit" value="Забронировать"/>
 </form>
 

 <?php endif; ?>
                                            </div>
                </div>
				
				
				
				
                <div class="swiper-scrollbar"></div>
            </div>   
                         <div class="menu__full menu__col" data-subcategory="hreserv" style="display:none">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="menu__sub-title">История бронирований</div>
                                             
<?php

	$idperson = $_SESSION['logged_user']->id;
$host='localhost'; // имя хоста (уточняется у провайдера)
$database='g91302h7_gastrol'; // имя базы данных, которую вы должны создать
$user='g91302h7_gastrol'; // заданное вами имя пользователя, либо определенное провайдером
$pswd='123456'; // заданный вами пароль
 
$dbh = mysql_connect($host, $user, $pswd) or die("Не могу соединиться с MySQL.");
mysql_select_db($database) or die("Не могу подключиться к базе.");
$query = "SELECT * FROM `reserv` WHERE idperson=$idperson";
$res = mysql_query($query);
while($row = mysql_fetch_array($res))
{
echo "ФИО: ".$row['name']."<br>\n";
echo "Количество человек: ".$row['text']."<br>\n";
echo "Дата: ".$row['date']."<br>\n";
echo "Время: ".$row['time']."<br>\n";
echo "Номер телефона: ".$row['tel']."<br><hr>\n";
}

echo "В случае изменения данных звоните по тел +79130228794";
?>       
                                            </div>
                </div>
                <div class="swiper-scrollbar"></div>
            </div>   
			  


			  
                        <div class="menu__full menu__col" data-subcategory="rules1" style="display:none">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="menu__sub-title">Правила бронирования столов</div>
                                                   ПОРЯДОК ОКАЗАНИЯ УСЛУГ ПО ПРЕДВАРИТЕЛЬНОМУ ЗАКАЗУ БЛЮД И БРОНИРОВАНИЮ СТОЛА 
<br>1.1 Предварительный заказ (бронирование) стола в Баре может осуществляться посредством телефонной связи 534-222 и/или через сайт . 
<br>1.2 В случаях, отсутствия Посетителя в ранее оговоренное сторонами время в Баре, не уведомления и/или несвоевременного уведомления сотрудников Бара о задержке времени посещения Бара, бронь стола сохраняется за ним в течении 15 (пятнадцати) минут с момента заявленного (оговоренного сторонами) времени. 
По истечении указанного времени бронь автоматически (без уведомления Посетителя) снимается. 
<br>1.3 Надлежащим уведомлением от Посетителя о возникшей задержке времени посещения Бара признается заранее (не менее чем за 20 минут до ранее оговоренного времени) сделанный Посетителем телефонный звонок сотрудникам Бара 534-222. 
<br>1.4 При заказе стола Посетителям необходимо внести на расчетный счет и/или в кассу Бара депозит в размере не менее 1 000 (одной тысячи) рублей с человека. 
<br>Впоследствии сумма внесенного депозита включается в счет оплаты стоимости заказанных Посетителем напитков (алкогольной/безалкогольной продукции), кухни, аромококтейлей и др. 
<br>1.5 Разница между общей (итоговой) суммой заказа и суммой внесенного Посетителем депозита, возврату не подлежит (в случае, если итоговая сумма заказа равна менее суммы внесенного депозита). 
<br>В случае превышения суммы заказа размера депозита, разница подлежит возмещению путем внесения Посетителем дополнительной платы. 
<br>1.6 В случаях, внесения Посетителем суммы депозита (без предварительного заказа напитков (алкогольной/безалкогольной продукции), кухни, аромококтейлей и др.блюд), но отсутствия Посетителя в ранее оговоренное сторонами время в Баре, не уведомления и/или несвоевременного уведомления сотрудников Бара о задержке времени посещения Бара (п.2.3 Раздела 2 настоящих Правил) по требованию Посетителя, ему возвращается часть суммы депозита в размере 50%. 
<br>1.7 В случаях, внесения Посетителем суммы депозита и предварительного заказа Посетителем напитков (алкогольной/безалкогольной продукции), кухни, аромококтейлей и др., но отсутствия Посетителя в ранее оговоренное сторонами время в Баре, не уведомления и/или несвоевременного уведомления сотрудников Бара о задержке времени посещения Бара (п.2.3 Раздела 2 настоящих Правил) сумма депозита засчитывается в счет оплаты заказа Посетителя и возврату не подлежит. 
<br>1.8 В случае проведения банкета и/или иного торжественного мероприятия, для которого необходимо спец-обслуживание, Посетитель обязан внести предоплату в размере не менее 50% от общей стоимости заказа. 
<br>1.9 По общему правилу, в счет включаются блюда и напитки, заказанные всеми Посетителями, сидящими за одним столом. 
<br>О необходимости выставления индивидуальных счетов Посетители обязаны предупредить официанта в момент заказа. 
<br>1.10 В счет не включаются «чаевые» официанту. Необходимость «чаевых» и их размер определяются на усмотрение Посетителя. Проценты за обслуживание включаются в Счёт-заказ при проведении банкетных мероприятий. 
<br>1.11 Бар принимает заказы на спец-обслуживание, проведение банкета и/или иного торжественного мероприятия только на условиях внесения аванса, размер которого указан в п.2.8. настоящих Правил.
                                            </div>
                </div>
                <div class="swiper-scrollbar"></div>
            </div>   
                       
					   
					   <div class="menu__full menu__col" data-subcategory="rules2" style="display:none">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="menu__sub-title">Общие положения</div>
                                          ОБЩИЕ ПОЛОЖЕНИЯ 
1.1. Настоящие Правила поведения Посетителей и организации порядка посещения (далее – Правила) разработаны в соответствии с Гражданским законодательством РФ, Кодексом Российской Федерации об административных правонарушениях" от 30.12.2001 N 195-ФЗ (ред. от 01.05.2016) Законом РФ от 07.02.1992 N 2300-1 (ред. от 13.07.2015) "О защите прав потребителей", Постановлением Правительства РФ от 15.08.1997 N 1036 (ред. от 04.10.2012) "Об утверждении Правил оказания услуг общественного питания и устанавливают правила поведения обязательные для всех Посетителей/Гостей Бара.
<br>
1.2. Настоящие Правила определяют права и обязанности Гостей/Посетителей и Бара и направлены на создание максимально комфортной атмосферы для всех присутствующих во время работы предприятия. Правила являются обязательными для всех без исключения Посетителей заведения. 
Принимая решение войти в Бар, Гость подтверждает свое согласие с данными Правилами. 
В пятницы, субботы, праздничные, предпраздничные дни, в концертные дни с 20 часов гости, оплачивая входной билет, получают взамен браслет, который надевается им на руку.
Браслет является для службы внутреннего контроля и сотрудников, бара подтверждением оплаты входного билета гостем.
В пятницы, субботы, праздничные, предпраздничные дни, в концертные дни с 20 часов гость имеет право находится на территории бара только при наличии целого браслета, полученного в день мероприятия при входе в бар. При обнаружении отсутствия у гостя целого браслета служба внутреннего контроля оставляет за собой право потребовать у гостя произвести оплату входного билета. В целях предотвращения террористических актов и противоправных действий, в целях безопасного отдыха наших гостей на территории бара служба внутреннего контроля производит внешний визуальный осмотр гостей и их сумок, пакетов, ручной клади и т.п. на предмет исключения попадания на территорию ресторана запрещенных предметов и веществ.Бар является частной собственностью и оставляет за собой право в ограничении доступа в Бар без объяснения причин. С целью обеспечения надлежащего порядка в Баре, администрация вправе осуществлять видео — контроль. 
<br>
1.3. Контроль за соблюдением настоящих Правил осуществляется сотрудниками частного охранного предприятия ООО ЧОО «ЗОРГ», с которым заключен договор на оказание охранных услуг. 
<br>
1.4. Бар открыт для допуска и обслуживания Посетителей, достигших возраста - 21 год, поскольку в Баре проводятся мероприятия, предназначенные исключительно для данной возрастной категории и старше.
О проведении мероприятий, открытых для допуска и обслуживания Посетителей, моложе 21 года, администрация извещает Посетителей путем вывески соответствующего объявления при входе в Бар, Афиши, а также размещения соответствующей информации на сайте Бара www.хххх22.ru
Во избежание привлечения Бара к ответственности за нарушение ограничений, связанных с допуском и обслуживанием несовершеннолетних Посетителей, Посетителей не достигших возраста 21 года, сотрудник Бара или охранник вправе попросить предъявить документ, удостоверяющий личность Посетителя и его возраст, и, в случае отказа от предъявления документов, - отказать Посетителю в допуске и обслуживании. 
Часы работы Бара: 
Будние дни с 12 до 6.00,
Выходные дни с 12 до 8.00.
По указанию администрации Бара часы допуска и обслуживания Посетителей могут быть изменены. 
<br>
1.5. Допуск и обслуживание Посетителей осуществляется преимущественно на основе предварительного бронирования мест по телефону 534-222 или на сайте .
Остальные Посетители обслуживаются при наличии свободных (не забронированных) мест. 
В дни (часы), когда все места в Баре забронированы для проведения банкета и/или иного спец-обслуживания, в Бар допускаются только те Посетители, которые указаны и/или внесены в список лицом, осуществившим бронирование.          
<br>
1.6. Несовершеннолетние до 14 лет допускаются в Бар и обслуживаются только в сопровождении взрослых. 
Несовершеннолетние до 16 лет, в случае нахождения в Баре без взрослых, допускаются в Бар и обслуживаются до 22.00 ч. 
Несовершеннолетние от 16 до 18 лет в случае нахождения их в Баре без взрослых, допускаются в Бар и обслуживаются до 23.00 ч.    
										</div>
                </div>
                <div class="swiper-scrollbar"></div>
            </div>   
			
						<div class="menu__full menu__col" data-subcategory="rules3" style="display:none">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="menu__sub-title">Кодекс бара</div>
                                              ПРАВА И ОБЯЗАННОСТИ ПОСЕТИТЕЛЕЙ 
1 Посетители Бара обязаны: <br>
- оплатить полную стоимость входного билета в Бар. При этом цена указывается: 
на соответствующем Объявлении и размещается при входе в Бар, 
на Афиши, 
в информационном письме, размещенном на сайте Бара. 
<br>- соблюдать общественный порядок; 
<br>- оплачивать заказанные им блюда и напитки; 
<br>- не мешать другим Посетителям; 
<br>- соблюдать чистоту; 
<br>- бережно относиться к имуществу Бара (мебель, посуда, сантехника и прочее), а в случае повреждения этого имущества, возместить причиненный ущерб; 
<br>- при входе в Бар сдать верхнюю одежду в гардероб; 
<br>- предъявить сотрудникам Бара документ, удостоверяющий личность в случае: 
<br>1) приобретения Посетителем алкогольной продукции; 
<br>2) оплаты счета банковской картой; 
<br>3) требования охранника Бара о предъявлении документа, содержащего сведения о возрасте Посетителя. 
<br>- соблюдать настоящие Правила. 
<br>1.2. Посетители Бара вправе: 
<br>- производить оплату счета наличными денежными средствами или банковской картой; 
<br>- посещать Бар с детьми с соблюдение правил, установленных в п. 1.6. настоящих Правил. 
<br>1.3. Посетителям запрещено: 
<br>- без разрешения администрации Бара проходить на кухню, за барную стойку и в другие подсобные помещения Бара; 
<br>- проносить в помещение Бара: 
животных и птиц; 
велосипеды и иные транспортные средства, кроме детских и инвалидных колясок; 
громоздкие предметы, сумма измерений которых по длине, ширине (двум диаметрам или осям в основании рулона) и высоте превышает 150 см; 
длинномерные предметы, длина которых свыше 220 см.; 
легковоспламеняющиеся, взрывчатые, отравляющие, ядовитые вещества и предметы, в том числе бытовые газовые баллоны; 
огнестрельное оружие, колющие и режущие предметы; 
<br>- использовать для оплаты банковские карты, принадлежащие другим лицам; 
-находиться в Баре в состоянии алкогольного, токсического или наркотического опьянения, употреблять наркотические средства или психотропные вещества; 
находиться в Баре: 
<br>без одежды; 
<br>без обуви; 
<br>в верхней одежде; 
<br>в пляжной одежде; 
<br>в спецодежде; 
<br>спортивной одежде; 
<br>в пачкающей, зловонной одежде, с предметами, которые могут испачкать других Посетителей, мебель Бара. 
<br>- обнажать интимные части тела; 
<br>- вступать в интимную близость; 
<br>- сидеть или лежать на полу, на лестницах; 
<br>- вставать, сидеть, лежать или танцевать на столах, на подоконниках; 
<br>- забираться с ногами на стулья и кресла; 
<br>- сажать друг друга на плечи; 
<br>- осуществлять фото- или видеосъемку других Посетителей без их согласия; 
<br>- наносить надписи и расклеивать объявления, плакаты и другую продукцию информационного или рекламного содержания; 
<br>- использовать помещение Бара для торговли; 
<br>- приставать к другим Посетителям или сотрудникам Бара с предложениями купли-продажи, обмена, а также в целях гадания, попрошайничества; 
<br>- препятствовать выполнению служебных обязанностей сотрудниками Бара и охранниками; 
<br>- грубить сотрудникам и Посетителям Бара; 
<br>- провоцировать конфликты и вступать в драки; 
<br>- преграждать дорогу или любым другим способом мешать перемещению Посетителей и сотрудников Бара; 
<br>- подсаживаться за столики к другим Посетителям без приглашения; 
<br>- занимать свободные столики без разрешения администрации Бара; 
<br>- использовать пиротехнику; 
<br>- играть в карты или иные азартные игры на деньги, вещи и иные ценности; 
<br>- курить в непредназначенном (-ых) для этого месте (-ах).

<br>2 ОТВЕТСТВЕННОСТЬ ПОСЕТИТЕЛЕЙ ЗА НАРУШЕНИЕ НАСТОЯЩИХ ПРАВИЛ 
<br>2.1. В случае нарушения настоящих Правил администрация Бара вправе: 
<br>- производить видео- и аудио-фиксацию нарушения; 
<br>- удалить нарушителя с территории Бара; 
<br>- в случае необходимости задержать нарушителя и вызвать правоохранительные органы. 
<br>2.2. В случае причинения вреда имуществу Бара, Посетитель обязан компенсировать причиненные Бару убытки. Согласно Конфликт-меню (Приложение № 1 к настоящим Правилам). 

<br>ИНЫЕ ПОЛОЖЕНИЯ 
<br>3.1. В целях обеспечения безопасности Посетителей, а также соблюдения Посетителями настоящих Правил в Баре ведется видеонаблюдение. 
<br>3.2. Бар не несет ответственности за сохранность личных вещей Посетителей. За утерю номерка, выданного в гардеробе, взимается штраф в размере 300 руб. 
<br>3.3. Ди-джей, аниматор, музыканты, ведущий и другие лица, обеспечивающие развлекательную программу Бара, проводят ее в соответствии со сценарием, согласованным с Директором, и вправе отказать Посетителю в совершении действий, не предусмотренных сценарием (поздравление Посетителя, исполнение для него песни или музыкального произведения и другое). 
<br>3.4. Бар вправе отказать Посетителю в приготовлении указанного в меню блюда, в случае недопоставки/отсутствия продуктов, необходимых для приготовления такого блюда. 
<br>3.5. Бар вправе отказать Посетителю в продаже алкоголя в случае: 
<br>- не достижения Посетителем соответствующего возраста (18/21 лет); 
<br>- приостановления действия лицензии на продажу алкоголя; 
<br>- недопоставки/отсутствия заказанного Посетителем алкоголя; 
<br>- нахождения Посетителя в состоянии сильного алкогольного и/или наркотического опьянения. 
<br>3.6. В целях обеспечения безопасности здоровья Посетителей в помещении Бара запрещено употреблять принесенные с собой еду и напитки, а также принесенный с собой алкоголь за исключением детского питания. 
<br>3.7 Бар вправе ограничить вход Посетителю и отказать в обслуживании, если Гость не соответствует фейсконтролю. Фейсконтро́ль (от англ. face «лицо» и control «проверка») — ограничение входа, выборочный отказ в обслуживании Посетителей (клиентов), не удовлетворяющих определённым критериям. Отказ производится путём недопущения входа неподходящих лиц силами охраны. 
<br>3.8.Сотрудники охраны вправе отказать в посещении Бара без объяснения причины. 
<br>3.9. В целях обеспечения комфортного отдыха Посетителей и качественной работы сотрудников Бара запрещено мешать работе звукорежиссера и/или других приглашенных лиц.
                                            </div>
                </div>
                <div class="swiper-scrollbar"></div>
            </div>   
                                           
                           
                      
                         
                      
                         
                        
    </div>
   
</div>
          
	   	<?php else : ?>
	     <div class="aboutabout">
            <div class="about__title12"> <p align="center" >  
			Вы не авторизованы!</p>
			<br>
			<br>
			
						
						<p class="buttond"><a href="../login/login.php" class="buttond">Авторизация</a></p>
						<br>
						<p class="buttond"  style="text-align:center;"><a href="signup.php" class="buttond">Регистрация</a></p>
						
						
						<br>
					
					
<?php endif; ?>  


	   </div>
	   </div>
	   
	   
	   


<script type="text/javascript" src="../design/ibiza/js/imgloader.js"></script>
<script type="text/javascript" src="../design/ibiza/js/masonry.js"></script>              
                

                
   
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

<script type="text/javascript" src="../design/ibiza/js/wow.min.js"></script>
    <script type="text/javascript" src="../design/ibiza/js/chosen.jquery.min.js"></script>
    <script type="text/javascript" src="../design/ibiza/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../design/ibiza/js/jquery.maskedinput.min.js"></script>
    <script type="text/javascript" src="../design/ibiza/js/jquery.panzoom.min.js"></script>
    <script type="text/javascript" src="../design/ibiza/js/swiper.min.js"></script>
    <script type="text/javascript" src="../design/ibiza/js/fancybox3.js"></script>
    <script type="text/javascript" src="../design/ibiza/js/script.js"></script>

    <script type="text/javascript" src="../js/jquery/jquery.form.min.js"></script>    
    <script type="text/javascript" src="../js/shared/global.js"></script>
    <script type="text/javascript" src="../js/shared/functions.js"></script>
    
  
    
    </body>