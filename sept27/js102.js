// Print Numbers

// function printNumbers(num1, num2){
//     while(num1 <= num2){
//         console.log(num1);
//         num1++;
//     }
// }

// function printNumbers(num1, num2){
//     for (let number = num1; number <= num2; number++){
//         console.log(number);
// }
// }

// printNumbers(1, 10);

// Print a square

// function printSquare(num){
//     for(let outter = 1; outter <= num; outter++){
//         var line = ''
//         for(let inner = 1; inner <= num; inner++){
//             line += '*';
//         }
//         console.log(line);
//     }
// }

// printSquare(10)

// Print a box

// function printBox(width, height){
//     var allStar = ''
//     for(let number = 1; number <= width; number++){
//         allStar += '*';
//     }

//     console.log(allStar);
//     for (let num1 = 1; num1 <= height - 2; num1++){
//         var lineSpace = '*'
//         for(let num2 = 1; num2 <= width - 2; num2++){
//             lineSpace += ' '
//         }
//         lineSpace += '*'
//         console.log(lineSpace);
//     }
//     console.log(allStar);
// }

// printBox(6, 5)

// Print a Banner

// function printBanner(phrase){
//     var bar = ''
//     for (let count = 1; count <= phrase.length + 4; count++){
//         bar += "*"
//     }
//     console.log(bar);
//     phraseStar = "* " + phrase + " *"
//     console.log(phraseStar);
//     console.log(bar);
// }

// printBanner("Welcome to Digital Crafts")

// Factor a Number

// function factor(num){
//     var factors = []
//     for (number = 1; number <= num; number++){
//         if(num % number == 0){
//             factors.push(number)
//         }
//     }
//     console.log(factors);
// }
// factor(24)

// Caesar Cipher

// function cipher (phrase, offset){
//     var phraseList = phrase.split('')
//     var alpha = "abcdefghijklmnopqrstuvwxyz"
//     var alphaList = alpha.split('')
//     var coded = []
//     var half = (alphaList.length-1) / 2
//     for (var charIdx = 0; charIdx < phrase.length; charIdx++){
//         var phraseLetter = phrase[charIdx]
//         if (phraseLetter != ' '){
//             var alphaIdx = alpha.indexOf(phraseLetter)
//             if(alphaIdx < half){
//                 var newLetter = alphaList[alphaIdx+offset]
//             }
//             else if(alphaIdx > half){
//                 var newLetter = alphaList[alphaIdx-offset]
//             }
//         }
//         else{
//             var newLetter = " "
//         }
//         coded.push(newLetter)
//     codedPhrase = coded.join('')
//     }
//     return codedPhrase
// }
// var code = cipher("genius without education is like silver in the mine", 13)
// console.log(code);


// Caesar Cipher 2

// function decipher (phrase, offset){
//     var phraseList = phrase.split('')
//     var alpha = "abcdefghijklmnopqrstuvwxyz"
//     var alphaList = alpha.split('')
//     var deciphered = []
//     var half = (alphaList.length-1) / 2
//     for (var charIdx = 0; charIdx < phrase.length; charIdx++){
//         var phraseLetter = phrase[charIdx]
//         if (phraseLetter != ' '){
//             var alphaIdx = alpha.indexOf(phraseLetter)
//             if(alphaIdx < half){
//                 var newLetter = alphaList[alphaIdx+offset]
//             }
//             else if(alphaIdx > half){
//                 var newLetter = alphaList[alphaIdx-offset]
//             }
//         }
//         else{
//             var newLetter = " "
//         }
//     deciphered.push(newLetter)
//     decipheredPhrase = deciphered.join('')
//     }
//     return decipheredPhrase
// }

// var code = decipher("travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13)
// console.log(code);

// Leet speak

// function leetTranslate (phrase){
//     var leetLetter = ['A', 'E', 'G', 'L', 'O', 'S', 'T']
//     var leetNumber = ['4', '3', '6', '1', '0', '5', '7']
//     var phraseList = phrase.split('')
//     var translate = []
//     for (let phraseIdx = 0; phraseIdx < phraseList.length; phraseIdx++) {
//         var phraseChar = phraseList[phraseIdx];
//         for (let leetIdx = 0; leetIdx < leetLetter.length; leetIdx++) {
//             var letterCheck = leetLetter[leetIdx];
//             if (letterCheck == phraseChar){
//                 var newLetter = leetNumber[leetIdx]
//                 break
//             }
//             else {
//                 var newLetter = phraseChar
//             }
//         }
//         translate.push(newLetter)
//     }
//     var translated = translate.join('')
        
//     return translated
// }

// var leetSpeak = leetTranslate('LEET PROGRAMMER')
// console.log(leetSpeak);

// Sum the numbers

// function sumNumbers (list){
//     sum = 0
//     for (let index = 0; index < list.length; index++) {
//         var number = list[index];
//         sum += number
//     }
//     return sum
// }

// var summed = sumNumbers([1, 4, 8]);
// console.log(summed);

// Just the Positives

// function positiveNumbers(list){
//     var pos = []
//     var neg = []
//     for (let index = 0; index < list.length; index++) {
//         var number = list[index];
//         if(number >= 0){
//             pos.push(number)
//         }
//         else{
//             neg.push(number)
//         }
        
//     }
//     return pos
// }
// var positive = positiveNumbers([1, -3, 5, -3, 0]);
// console.log(positive);

// Matrix Addition

// function matrixAdd(matrix1, matrix2){
//     var solution = []
//     for (let outterIdx = 0; outterIdx < matrix1.length; outterIdx++) {
//         var matrix3 = []
//         var firstList = matrix1[outterIdx]
//         var secondList = matrix2[outterIdx]
//         for (let innerIdx = 0; innerIdx < firstList.length; innerIdx++) {
//             var addition = firstList[innerIdx] + secondList[innerIdx]
//             matrix3.push(addition)
//         }
//         solution.push(matrix3)
//     }
//     return solution
// }

// var added = matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// console.log(added);


// Matrix Multiplication

