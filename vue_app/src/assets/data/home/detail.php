<?php
 header("Access-Control-Allow-Origin:*");
 $id = $_GET['aa'];

  $filename = "db.json";
    $handle = fopen($filename, "r");//读取二进制文件时，需要将第二个参数设置成'rb'
    
    //通过filesize获得文件大小，将整个文件一下子读到一个字符串中
    $contents = fread($handle, filesize ($filename));
    fclose($handle);
     $list = json_decode($contents,true);
	 foreach($list as $v){
		 if($id == $v['product_id'] ){
			 echo json_encode($v);die;
		 }
		 
	 }

   echo "{\"id\":{$id}}"; 
  


 
?>