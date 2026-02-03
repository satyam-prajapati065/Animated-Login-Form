
    function swap(){
           signup.style.right="0px";
           login.style.left="0px";
           form1.style.left="20px";
           form2.style.left="-350px";
           form1.style.transition="0s"
           signup.style.borderTopRightRadius="0px";
           signup.style.borderBottomRightRadius="0px";
           signup.style.borderTopLeftRadius="130px";
           signup.style.borderBottomLeftRadius="130px";
           form3.style.left="20px";
           form4.style.left="-340px";
    }
     function swap1(){
           login.style.left="420px";
           signup.style.right="420px";
           form1.style.left="380px";
           form2.style.left="20";
           form1.style.transition="-1s";
           signup.style.borderTopRightRadius="130px";
           signup.style.borderBottomRightRadius="130px";
           signup.style.borderTopLeftRadius="0px";
           signup.style.borderBottomLeftRadius="0px";
           form3.style.left="380px";
           form4.style.left="20px";
    }
    function show2(type) {
    let passwordField, lockClosed, lockOpen;
    if (type === 'in') {
        passwordField = document.getElementById('password1');
        lockClosed = document.getElementById('lock1');
        lockOpen = document.getElementById('lock2');
    } else if (type === 'up') {
        passwordField = document.getElementById('password2');
        lockClosed = document.getElementById('lock3');
        lockOpen = document.getElementById('lock4');
    }

    if (passwordField.type === "password") {
        passwordField.type = "text"; 
        lockClosed.style.display = "none";
        lockOpen.style.display = "block";
    } else {
        passwordField.type = "password";
        lockClosed.style.display = "block";
        lockOpen.style.display = "none";
    }
}