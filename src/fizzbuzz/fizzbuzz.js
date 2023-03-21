/*
Write a program that prints the numbers from 1 to {N}.
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”.

Input: One line containing the number {N}
Output: A single line, containing the "translation" for each number in order from 1 to {N}, separated by a single space.

Each "translation" is either the corresponding number or one of the three strings: Fizz, Buzz, FizzBuzz.
*/

const divisorAndWordMap = new Map();
divisorAndWordMap.set(3, "FIZZ");
divisorAndWordMap.set(5, "BUZZ");

export function fizzbuzz(number) {
    let result = "";
    for (let i = 1; i <= number; i++) {
        let word = "";
        divisorAndWordMap.forEach((value, key) => {
            if (i % key === 0) {
                word += value;
            } 
        });
        if (word != "") {
            result += word + " ";
        } else {
            result += i + " ";
        }        
    }
    return result.trim();
}