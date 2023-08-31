let num = Math.floor(Math.random() * 31);
console.log('numは' + num + 'です');

if(num !== 0 && num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
} 
else if (num !== 0 && num % 3 === 0) {
    console.log('3の倍数です');
} 
else if (num !== 0 && num % 5 === 0) {
    console.log('5の倍数です');
} 
else {
    console.log(num + 'は3と5の倍数ではありません');
}