let grade = null
do {
    grade = parseInt(prompt(`Please enter your grade.\nMust be a valid positive number between 1 and 100.`));
}
while (isNaN(grade) || 0 >= grade > 100);
    if (grade >=90) {
        console.log(`You entered ${grade}, you received an A`);
    }
    else if (grade >=80) {
        console.log(`You entered ${grade}, you received an B`);
    }
    else if (grade >=70) {
        console.log(`You entered ${grade}, you received an C`);
    }
    else if (grade >=60) {
        console.log(`You entered ${grade}, you received an D`);
    }
    else if (grade <60) {
        console.log(`You entered ${grade}, you received an F`);
    }
