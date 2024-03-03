function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }


    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");

    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }

    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }

    function validateLogin() {
        var loginUsernameOrEmail = document.querySelector("#login .input-box input[type='text']").value;
        var loginPassword = document.querySelector("#login .input-box input[type='password']").value;
    
        if (loginUsernameOrEmail === "" || loginPassword === "") {
            alert("Vui lòng điền đầy đủ thông tin đăng nhập.");
            return false;
        }
        alert("Đăng nhập thành công")
    }
    
    function validateRegister() {
        var registerFirstName = document.querySelector("#register .two-forms .input-box:nth-child(1) input").value;
        var registerLastName = document.querySelector("#register .two-forms .input-box:nth-child(2) input").value;
        var registerEmail = document.querySelector("#register .input-box:nth-child(3) input").value;
        var registerPassword = document.querySelector("#register .input-box:nth-child(4) input").value;
    
        if (registerFirstName === "" || registerLastName === "" || registerEmail === "" || registerPassword === "") {
            alert("Vui lòng điền đầy đủ thông tin đăng ký.");
            return false;
        }
        alert("Đăng ký thành công")
    }

