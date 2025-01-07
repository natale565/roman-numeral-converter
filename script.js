const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const numeral = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];

numberInput.addEventListener('keydown', (e) =>{
    if(e.key === 'Enter'){
        convertButton.click();
    }
} );

convertButton.addEventListener('click', () => {
let number = numberInput.value;

if(!number){
    output.innerText = 'Please enter a valid number';
    return;
}else if(number < 1){
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
}else if(number > 3999){
output.innerText = "Please enter a number less than or equal to 3999";
return;
} else {
    let result = '';

    for(const [roman, numbers] of numeral){
        while (numberInput >= numbers) {
          result += roman;
          number -= number;
        }
    }
    
    output.innerText = result;
}
});