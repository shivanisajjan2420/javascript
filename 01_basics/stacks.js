/* stacks */
// push, pop, peek, length

var letter = [];      // this is our stack
var word = "racecar";
var rword = "";

// put letters of words into a stack

for(var i=0;i<word.length;i++){

    letter.push(word[i]);

}
// pop of satck in reverse order

for(var i=0;i<word.length;i++) {

    rword += letter.pop();

}
if(rword === word){
    console.log(word + "this is a palindrome.");
}
else{
    console.log(word + "this is not a palindrome.");
}


// implement stacks in javascript

var Stack = function(){
    this.count = 0
    this.address ={}
}
va