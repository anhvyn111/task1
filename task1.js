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



function RLE(array){
    array.forEach((letters) => {
        console.log("Input: " + letters)
        const map = new Map();
        let rle = '';
        for(var i = 0; i < letters.length; i++){
            if(!map.has(letters[i])){
                map.set(letters[i], 1);
            }
            else{
                let amount = map.get(letters[i]);
                map.set(letters[i], amount + 1);
            }
        }
        map.forEach((value, key) => {
            if(value > 1){
                rle += value + key;
            }
            else{
                rle += key;
            }
        });
        console.log("Output: " + rle);
    })    
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
RLE(["XYZ","TTLLDDKM","EELLLKKK"])

console.log("TASK T1.3");
console.log(checkTwoNumbersEqualsK([3,2,4,5,1,1,10], 6));