function check() {
    var inputEmail4 = document.getElementById('inputEmail4').value;
    var inputPassword4 = document.getElementById('inputPassword4').value;
    var inputAddress = document.getElementById('inputAddress').value;
    var inputCity = document.getElementById('inputCity').value;
    var inputState = document.getElementById('inputState').value;
    var inputZip = document.getElementById('inputZip').value;

    if (inputEmail4 == '' || inputPassword4 == '' || inputAddress == '' || inputCity == '' || inputState == '' || inputZip == '') {
        alert("Error, fill out all the fields!");
        return false;
    } else {

        return true;
    }

}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
