/* Reverse Kata */

const pr = require("prompt-sync"); //mendefinisikan prompt dari node modules
const prompt = pr();

function reverse(str, start, end){
    let temp;  //temporary variabel

    while(start <= end){
        temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
}

//fungsi untuk membalikkan kata
function reverseWords(kata){
    kata = kata.split("");
    let start = 0;

    for(let end = 0; end < kata.length; end++){
        if (kata[end] == '  '){  //pengecekan spasi
            reverse(kata, start, end);
            start = end + 1;
        }
    }

    reverse(kata, start, kata.length - 1); //membalikkan kata terakhir
    reverse(kata, 0, kata.length - 1);
    return kata.join("");
}

const kata = prompt("Masukkan Kalimat: ");

const hasilKata = reverseWords(kata);
console.log(hasilKata);

