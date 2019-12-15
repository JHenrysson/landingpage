function signUp() {
    if (document.getElementById('exampleInputPassword1').value === document.getElementById('exampleInputPassword2').value) {
        document.getElementById('passwordError').style.visibility = 'hidden';
        return true;
    }
    else {
        document.getElementById('passwordError').style.visibility = 'visible';
        return false;
    }
}