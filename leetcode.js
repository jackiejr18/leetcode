/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) */







function alphabetPosition(text) {
  // Intialize an empty string to store the result
  let result = ''; 
  
  // Iterate through each character in the input string
  for (let i = 0; i < text.length; i++) { 
    // Get the current character
    let char = text[i].toLowerCase(); //Convert to lowercase for case-insensitivity

    //Check if the character is a letter
    if(char >= 'a' && char <= 'z') {
      // Calculate the position in the alphabet (a=1, b=2, ..., z=26)
      let position = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      // Append the position to the result string
      result += position + ' ';
      console.log(i); // added by jackiejr18
      console.log(result); //added by jackiejr18
    }
    
  }
  // Remove the trailing space and return th result
  return result.trim();
}

// Example usage 

let result = alphabetPosition("The sunset sets at twelve o'clock.");
console.log(result);

/* if char is 'c' then 'char.charCodeAt(0)' will be the unicode  letter 'c'.charcode - 'a'.charcode, 99 - 97 + 1 */