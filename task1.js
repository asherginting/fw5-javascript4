const pr = require("prompt-sync"); //mendefinisikan prompt dari node modules
const prompt = pr();


function deteksiPalindrome(str){
    const nilai = string.split(""); //mengubah string ke array
    const reverseNilai = nilai.reverse(); //menukar nilai array
    const reverseString = reverseNilai.join(""); //mengubah nilai array ke string

    if(string == reverseString){
        console.log("Palindrome");
    } else {
        console.log("Bukan Palindrome");
    }
}

const string = prompt("Masukkan Kata/Nilai: ")
deteksiPalindrome(string);