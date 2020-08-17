const $signInBtnElm = document.getElementById("login-btn");

$signInBtnElm.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();
    let email = document.getElementById("user_email").value;
    let password = document.getElementById("password").value;

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCred) => {
            window.location.href = "index.html";
        })
        .catch((error) => console.log(error.code));
}
