function charCount(str){
 
// make object to return at end
 const obj = {};
 
// loop over string, for each character, alpha numeric, lowerccase
const arr = Array.from(str)

 // for(i = 0; i <= arr.length; i++){
 //  var char = arr[i].toLowercase;

 //   if(/[a-z0-9]/.test(char)){
 //     if(obj[char] > 0){
 //      obj[char]++;
 //     }else{
 //      obj[char] = 1
 //     }
 //   }
 // }


 function isAlphaNumeric(char){
  var code = char.charCodeAt(0);

   if(!(code > 47 && code < 58) && //numeric(0-9))
      !(code > 64 && code < 91) && //upper alpha (A-Z)
      !(code > 96 && code < 123)) {
        return false;
   }
   return true;
 }
for(var char of str){

 // if(/[a-z0-9]/.test(char)){
     // if(obj[char] > 0){
     //  obj[char]++;
     // }else{
     //  obj[char] = 1
     // }
    // obj[char] = ++obj[char] || 1; //if obj[char] is truthy, add, or set to one
   // }
}
 

    if(isAlphaNumeric(char)){
      char = char.toLowerCase();
        obj[char] = ++obj[char] || 1; //if obj[char] is truthy, add, or set to one
    }
// if the char is a number/letter AND is a key in object, add one to count

// if the char is a number/letter AND not in object, add it to object and set value to 1

// character is something else (period, colon, etc) don't do anything

 return obj
}

console.log(charCount('this is a string 1234'))