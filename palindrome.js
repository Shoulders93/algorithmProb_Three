// Create a palindrome

function newPalindrome(word){
    for(i = 0; i < word.length; i++){
        console.log(word[i]);
        if(word[i] !== word[word.length - 1 - i]){
            return "This is not a Palindrome";
        }
    }
    return "This is a Palindrome";
}

let finalValue = newPalindrome(prompt("Please enter a word"));
console.log(finalValue);