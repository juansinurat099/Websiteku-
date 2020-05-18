function validateForm() {
    var x = document.forms["form"]["nim"].value;
    var y = document.forms["form"]["nama"].value;
    var Regex = /(?=.*\d)((?=.*[A-Z])|(?=.*[a-z]))./i;
    if (x == "" && y == "") {
        alert("NIM dan Nama harus diisi");
        return false;
    }else if (x == "") {
        alert("NIM harus diisi");
        return false;
    }if (y == "") {
        alert("Nama harus diisi");
        return false;
    }if(x.length!=7){
       alert("nim harus memiliki 7 karakter");
    }else if(!Regex.test(x)){
       alert("nim hanya menerima angka dan huruf");
    }
}