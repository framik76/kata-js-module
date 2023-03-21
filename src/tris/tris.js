/*
Date tre stringhe di tre caratteri (X oppure O, assegnati in maniera casuale), 
corrispondenti alle righe di una griglia 3x3 completamente piena: 
applicare le regole del tris (tic-tac-toe) per identificare e restituire il simbolo vincente, 
oppure "False" in caso non ci sia un unico simbolo vincente.
*/

export function resolve (topRow, middleRow, bottomRow) {
    var result = 'False'
    var c1 = topRow.substring(0, 1) + middleRow.substring(0, 1) + bottomRow.substring(0,1);
    var c2 = topRow.substring(1, 2) + middleRow.substring(1, 2) + bottomRow.substring(1,2);
    var c3 = topRow.substring(2, 3) + middleRow.substring(2, 3) + bottomRow.substring(2,3);

    var d1 = topRow.substring(0, 1) + middleRow.substring(1, 2) + bottomRow.substring(2,3);
    var d2 = topRow.substring(2, 3) + middleRow.substring(1, 2) + bottomRow.substring(0,1);

    var combinations = [topRow, middleRow, bottomRow, c1, c2, c3, d1, d2];

    for (var i = 0; i < combinations.length; i++) {
        var combination = combinations[i];
        if (combination === "XXX" || combination === "OOO") {
            result = combination.substring(0,1);
        }
    }
    return result;
}