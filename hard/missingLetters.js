// Missing Letters
/*
    Create a function called fearNotLetter that accepts one parameter, str
    (of type string). Find the missing letter in the passed letter range and return it.
    If all letters are present in the range, return undefined.
    Examples:
      fearNotLetter("abce") should return "d" because it's missing in the sequence.
      fearNotLetter("abcdefghjklmno") should return "i" because it's missing in the sequence.
      fearNotLetter("bcdf") should return "e" because it's missing in the sequence.
*/


function fearNotLetter(str) {
    let i, j = 0, m = 122;
    if (str) {
        i = str.charCodeAt(0);
        while (i <= m && j < str.length) {
            if (String.fromCharCode(i) !== str.charAt(j)) {
                return String.fromCharCode(i);
            }
            i++; j++;
        }
    }
    return undefined;
}

console.log(fearNotLetter('abce'));        
console.log(fearNotLetter('bcd'));         
console.log(fearNotLetter('bcdefh'));     
console.log(fearNotLetter(''));           
console.log(fearNotLetter('abcde'));    
console.log(fearNotLetter('abcdefghjkl'));