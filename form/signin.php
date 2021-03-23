<?php 
    include('connection.php');
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);

    $username = $data['username'];
     $pasword = $data['pasword'];
     $confirmpassword=$data['confirmpassword'];
    
    $sql = "INSERT INTO signup(username,pasword,confirmpassword) VALUES ('$username','$pasword','$confirmpassword')";
    //  $sql = "INSERT INTO signup (pasword) VALUES ('$pasword')";
    // $sql = "INSERT INTO signup (confirmpassword) VALUES ('$confirmpassword')";
    $err = $conn->query($sql);

    if (!$username) {
        $resp = array(
            'success' => false,
            'message' => 'Invalid item name',
            'name' => $username,
            'data' => $data
        );
        echo json_encode($resp);  
        exit;      
    }
    
    
    $resp = array(
        'success' => true,
        'message' => 'Added successfully!!',
        'name' => $username,
        'data' => $data
    );
    echo json_encode($resp);

?>