function arrangeLetters(letters){
    console.log("Input: " + letters);
    const array = Array.from(letters);
    array.sort();
    let result = ``;
    array.map((letter) => {
        result += letter;
    })
    console.log("Output: " + result);
}




function RLE(letters){
    console.log("Input: " + letters);
    var count = 1;
    let index = letters[0];
    var result = "";
    for (var j = 1; j < letters.length; j++){
        if(index == letters[j]){
            count += 1;
        }
        else{
            if(count === 1){
                result += index;
            }
            else{
                result += count + index;
            }
            index = letters[j];
            count = 1;
        }
        if(j === letters.length - 1){
            if(count === 1){
                result += index;
            }
            else{
                result += count + index;
            }
        }
    }
    console.log("Output: " + result);
}

function checkTwoNumbersEqualsK(numbers, k){
    for(var i = 0; i < numbers.length; i++){
        for(var j = i+1; j < numbers.length; j++){
            if((numbers[i] + numbers[j]) === k){
                console.log(`${numbers[i]} + ${numbers[j]} = ${k}`);
                return true;
            }
        }
    }
    return false;
}

console.log("TASK T1.1");
arrangeLetters('webmaster');

console.log("TASK T1.2");
array = ["AABBBCCCCCAADDDD", "PPPQRRRSTTQQS", "XYZ"]
array.forEach(element => {
    RLE(element);
});

console.log("TASK T1.3");
console.log(checkTwoNumbersEqualsK([3,2,4,5,1,1,10], 6));
