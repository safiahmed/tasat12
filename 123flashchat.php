<?php
error_reporting(0);
if(!$_SESSION)
session_start();

//print_r($user_details);
var_dump($_SESSION);
exit;
//echo $username.'....'.$password;exit;

//input your database infos on following blank:
$db_host = "localhost";
$db_username = "root";
$db_password = "safipassword";
$db_name = "tasatdb";
$usertable = "tbl_user_list";
$username_field = "username";
$password_field = "password";

$link = mysql_connect($db_host, $db_username, $db_password) or die (mysql_error());
$db = mysql_select_db($db_name,$link);
//var_dump($_COOKIE);
//echo '</br>';
//var_dump($_SESSION);
//exit;
//var_dump($_COOKIE); -- it's used to get necessaray infos which can be used in your database to get user infos directly.
//var_dump($_SESSION); -- it's used to get necessaray infos which can be used in your database to get user infos directly.

$sql = "select * from ". $usertable ." where ". $username_field ." = '".$username."'";
$query = mysql_query($sql);
$user_data = mysql_fetch_array($query);


$user = "init_user=" . rawurlencode ( $user_data['username'] ) . "&init_password=".$user_data['Password'];

show_chat();

function show_chat()
{
	global $swfname,$init_host,$init_port,$init_group,$chatwidth,$chatheight,$clientlocation,$user,$extendserver;
	
	//Please input your website link and chat server ip/port on following link.
		$swfurl .="http://server.mangium.com:35555/123flashchat.swf?".$user;

		echo '<!-- FROM 123FLASHCHAT CODE BEGIN --><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="779" height="580">';
		echo '<param name=movie value="'.$swfurl.'">';
		echo '<param name=quality value=high>' ;
		echo '<param name=menu value=false>';
		echo '<param name=scale value=noscale>';
		echo '<param name="allowScriptAccess" value="always" />';
		echo '<embed src="'.$swfurl.'" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100%" height="100%" menu="false" scale="noscale" allowScriptAccess="always">';
		echo '</embed>';
		echo '</object><!-- 123FLASHCHAT CODE END -->';
	}
?>

</div>
</div>
