<?php 

    if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']))
    {
        $name = $_POST['nom'].trim(" ");
        $subject = $_POST['subject'].trim(" ");
        $email = $_POST['email'].trim(" ");
        $message = $_POST['message'].trim(" ");

        if($name != "" && $email != "" && $message != "" && filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            $header = "Message de " . $name . " [" . $email. "]";
            try {
                 mail("said.gamih@gmail.com", $name , $subject , $message, $header);
            } catch (Exception $e) {
                echo json_encode("fail");;
            }
            echo json_encode("success");        }
        else {
            echo json_encode("fail");        }
    } else {
        echo json_encode("fail");
    }


?>