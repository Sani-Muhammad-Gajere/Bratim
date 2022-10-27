// var a = 8;
// var b = 4;


// if ( a == b ) {
//     console.log('Correct');
// } else{
//     console.log('Not Correct');
// }

// // second example 

// var password = 'ab';
// var confirmPassword = 'abdul1';

// if ( password.length < 6 ) {
//     console.log('Too Short');
// } else{
//     console.log('Password Okay');
// }


// // function 
// function todo(y,x) {
//     return y * x;
// }

// console.log(todo(2,3));



// Form Validation 

function validateForm() {

    // getting fullname    
    var fullname = document.getElementById('name').value;
    // getting phone number 
    var phoneNumber = document.getElementById('phone-number').value;
    // getting email 
    var email = document.getElementById('email').value;
    // getting message 
    var message = document.getElementById('message').value;
    
    // getting errorMsg 
    var error = document.getElementById('errorMsg');
    
    // getting errorMsg 
    var success = document.getElementById('success');
    
    if (fullname =="" && phoneNumber =="" && email =="" && message =="") {
        error.innerHTML ="Please Fill in All Required Fields";
        return false;
    }
    
    if (fullname =="") {
        error.innerHTML ="Please Fill in the name Field";
        return false;
    }
    if (phoneNumber =="") {
        error.innerHTML ="Please Fill in the Phone Number Field";
        return false;
    }
    if (email =="") {
        error.innerHTML ="Please Fill in the Email Field";
        return false;
    }
    if (message =="") {
        error.innerHTML ="Please Fill in the Message Field";
        return false;
    }else{
        success.innerHTML ="Congratulation All Validation passed!!";
       
    }
    
    }
    
    
    
    
    
    
    
    
    
    
    