<?php 
require 'libs/rb.php';
R::setup( 'mysql:host=localhost;dbname=g91302h7_gastrol','g91302h7_gastrol', '123456' ); 

if ( !R::testconnection() )
{
		exit ('Нет соединения с базой данных');
}

session_start();