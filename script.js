    const hide = document.querySelector('.lock1');
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
        let passField, l1, l2;

        if (type === 'in') {
            passField = document.getElementById('password1');
            l1 = document.getElementById('lock1'); 
            l2 = document.getElementById('lock2'); 
        } else {
            passField = document.getElementById('password2');
            l1 = document.getElementById('lock3'); 
            l2 = document.getElementById('lock4'); 
        }

        // Toggle Logic
        if (passField.type === "password") {
            passField.setAttribute("type", "text");
            l1.style.display = "none";
            l2.style.display = "inline-block";
        } else {
            passField.setAttribute("type", "password");
            l1.style.display = "inline-block";
            l2.style.display = "none";
        }
    }