/*
Converti da numeri decimali (interi) a numeri romani (usa solo i caratteri maiuscoli MDCLXVI)
Nota: per la soluzione si assuma un valore massimo di input pari a 3999
*/

const map = new Map(); 
map.set(1, "I");
map.set(4, "IV");
map.set(5, "V");
map.set(10, "X");
map.set(40, "XL");
map.set(50, "L");
map.set(90, "XC");
map.set(100, "C");
map.set(500, "D");
map.set(1000, "M");

export function convert(number) {
    let romanNumber = "";
    var reversedMap = new Map([...map.entries()].reverse());
    for (const [key, value] of reversedMap.entries()) {
        let divisor = key
        let remainingValue = 0
        if (number % divisor === 0) {
            romanNumber += value.repeat(number/divisor);
            number = 0;
        } else if (number > divisor) {
            remainingValue = number - divisor
            number = number - remainingValue
            romanNumber += value.repeat(number/divisor);
            number = number - divisor;
        }
        if (number === 0) {
            if (remainingValue === 0) {
                break;
            } else {
                number = remainingValue
            }            
        }
    }
    return romanNumber;    
}