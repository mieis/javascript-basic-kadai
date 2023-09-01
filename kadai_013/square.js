const suquare = (num) => {
    console.log('numは' + num + 'です');
    const numSquare = num * num;
    return numSquare;
}

console.log(suquare(5));

console.log(suquare(Math.floor(Math.random() * 11)));