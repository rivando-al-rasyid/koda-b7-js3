
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Total Belanjaan? ', kembalian => {

let uang50Rb = 0
let uang10Rb = 0
let uang5Rb = 0
let uang1Rb = 0

    while(kembalian > 0){
    if (kembalian > 50000){
            kembalian = kembalian - 50000
            uang50Rb++
        }
    else if (kembalian >= 10000 && kembalian < 50000 ){
            kembalian = kembalian - 10000
            uang10Rb++
        }
    else if (kembalian >= 5000 && kembalian < 10000 ){
            kembalian = kembalian - 5000
            uang5Rb++
        }
    else if (kembalian >= 1000 && kembalian < 10000 ){
            kembalian = kembalian - 1000
            uang1Rb++
    }
    }
    console.log('kembalian 50Rb = '+ uang50Rb)
    console.log('kembalian 10Rb = '+ uang10Rb)
    console.log('kembalian 5Rb = '+ uang5Rb)
    console.log('kembalian 1Rb = '+ uang1Rb)

      readline.close();
});
