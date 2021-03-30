



<?php 
    include('connection.php');
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $username = $data['username'];
     $password = $data['password'];
     $confirmpassword=$data['confirmpassword'];
    $dup=mysqli_query($conn ,"select * from signup where username='$username'");
    
   $message='Added successfully!!';
    $sql = "INSERT INTO signup(username,pasword,confirmpassword) VALUES ('$username','$password','$confirmpassword')";

    if(mysqli_num_rows($dup)>0)
    {
        $message = "user name  already exist ";
    }
    else{
         if(!empty($username)&&!empty($password)&&!empty($confirmpassword)){
        $err = $conn->query($sql);
        echo 'successfully';
        }
        else{
        echo 'unsuccessfull';
        }
    }


    $resp = array(
        'success' => true,
        'message' => $message,
        // 'name' => $username,
        'data' => $data
    );
   echo json_encode($resp);

?>