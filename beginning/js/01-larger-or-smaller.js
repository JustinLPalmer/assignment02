let integer1 = parseInt(prompt('Please enter a whole number'));
    while (isNaN(integer1) || integer1 <= 0) {
        integer1 = parseInt(prompt('Please enter a valid positive number'));
}
let integer2 = parseInt(prompt('Please enter a whole number'));
    while (isNaN(integer2) || integer2 <= 0) {
        integer2 = parseInt(prompt('Please enter a valid positive number'));
}
    if (integer1 > integer2) {
    document.write(`Your first entry "${integer1}" is larger!`);
}   else if (integer2 > integer1) {
    document.write(`Your second entry "${integer2}" is larger!`);
} else {
    document.write(`Both entries "${integer1}" and "${integer2}" are equal!`);
}
