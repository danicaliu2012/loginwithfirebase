$(document).ready(function(){

    // create new user to firebase 

    $("#opener-register").click(function(){

        // get the values from the input id
       
        var email = $("#register-email").val();
        var password = $("#register-password").val();
        var ref = new Firebase("https://luminous-heat-9130.firebaseio.com/");

        // create user based on the email and password

        ref.createUser({
           
            email: email,
            password: password
        }, function(error,userData) {
            // take the input information and identify whether it's a new user
            if (error) {
                alert("incorrect email format/user already exist");
                console.log("Error creating user:", error);

            } else {
                console.log("Successfully created user account :", userData.uid);
                localStorage.setItem("email",email);
                window.location.href = "login.html";
            }

        });
        return false;
    });

    // auth user login 

    $("#opener-login").click(function(){

        // get the values from the input id
    
        var email = $("#login-email").val();
        var password = $("#login-password").val();
        var ref = new Firebase("https://luminous-heat-9130.firebaseio.com/");

        // auth the email and password to see whether they can match

        ref.authWithPassword({
            
            email: email,
            password: password
        }, function(error,authData) {
            // if the email and password can't match, fail to login
            if (error) {
                alert("incorrect email or password");
                console.log("Error login user:", error);


            } else {

            // if the data match, successfully login
                console.log("Successfully login:", authData);
            // get the input value from email
                localStorage.setItem("email",email);
            // redirect to logout page after user login
                window.location.href="logout.html";
            }

        });
        return false;
    });
    
    // unauth user, stop the connection

    $("#opener-logout").click(function() {

        var ref = new Firebase("https://luminous-heat-9130.firebaseio.com/");
        ref.unauth();

    // redirect to homepage after user logout

        window.location.href="danicacademy.html";
        alert("already logged out!");
        return false;
        });
    

 });










