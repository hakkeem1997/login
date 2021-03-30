<?php

 include('connection.php');
 $request_body = file_get_contents('php://input');
 $data = json_decode($request_body, true);
 $username = $data['username'];
 $password = $data['password'];
//  $dup=mysqli_query($conn ,"select * from loc where username='$username'");

$check=mysqli_query($conn ,"select * from signup where username='$username'");
if(mysqli_num_rows($check)>0)
{
   echo json_encode(true);
} else {
   echo json_encode(false);
}

 
 ?>