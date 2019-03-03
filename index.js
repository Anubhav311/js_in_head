console.log("I am a mad man");

const input = [1, 2, 3];
const algorithms = [1, 2, 3];

let indexValueOfInput = 1;
function indexValueOfInputIncrease() {
    if(indexValueOfInput <= argumentArray.length + 1) {
        indexValueOfInput++;
    }
    console.log(indexValueOfInput);
}

function indexValueOfInputDecrease() {
    if(indexValueOfInput > 1) {
        indexValueOfInput--;
    }
    console.log(indexValueOfInput);
}



let indexValueOfCode = 1;
function indexValueOfCodeIncrease() {
    if(indexValueOfCode <= functionArray.length + 1) {
        indexValueOfCode++;
    }
    console.log(indexValueOfCode);
}

function indexValueOfCodeDecrease() {
    if(indexValueOfCode > 1) {
        indexValueOfCode--;
    }
    console.log(indexValueOfCode);
}


let functionArray = [];

functionArray[0] = function(attr) {
    return attr + 1;
}

functionArray[1] = function(attr) {
    return attr + 2;
}

functionArray[2] = function(attr) {
    return attr + 3;
}

let argumentArray = [];
argumentArray[0] = 1;
argumentArray[1] = 2;
argumentArray[2] = 3;

let tester;


// const obj = {
//     arr: [1, 2, 3, 4, 5],
//     str: "abcd efgh ijkl mnop qrst uvwx yz",
//     integ: 1234,
//     booll: true,

//     algo: function(attr) {
//         for(i=0; i<attr.length; i++) {
//             tester = tester + attr[i];
//         }
//     }
// }

// obj.algo(obj.arr);

let varb;
function saveValue() {
    varb = document.getElementById("output").value;
    tester = functionArray[indexValueOfCode](argumentArray[indexValueOfInput]);
    if(varb == tester) {
        alert("Your answer is right");
    } else {
        alert("Your answer is wrong");
    }
}


let imgVar = `img/${indexValueOfCode}.png`;