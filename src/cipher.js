window.cipher = {
  encode: (textEncode, offsetNum) => {
    let resultEncode = '';
    let letterCipher = '';
    let newLetter = '';
    let newNumber = '';
    for (let i = 0; i < textEncode.length; i++){
      letterCipher = textEncode.charCodeAt(i);
    if(letterCipher >= 65 && letterCipher <= 90){
        while (offsetNum < 0){
          offsetNum = offsetNum + 26
        }
        newNumber = ((letterCipher - 65 + offsetNum) % 26 + 65);
        newLetter = String.fromCharCode(newNumber);
        resultEncode += newLetter
      }else if (letterCipher >= 97 && letterCipher <= 122) {
        while (offsetNum < 0){
          offsetNum = offsetNum + 26
        }
        newNumber = ((letterCipher - 97 + offsetNum) % 26 + 97);
        newLetter = String.fromCharCode(newNumber);
        resultEncode += newLetter
      }else if (letterCipher >= 48 && letterCipher <= 57) {
        while (offsetNum < 0){
          offsetNum = offsetNum + 10
        }
        newNumber = ((letterCipher - 48 + offsetNum) % 10 + 48);
        newLetter = String.fromCharCode(newNumber);
        resultEncode += newLetter
      }else{
        newLetter = String.fromCharCode(letterCipher);
        resultEncode += newLetter
      }
    }
    return resultEncode;
  },
  decode: (textDecode, offsetNumDec) => {
    let resultDecode = '';
    let letterDecode = '';
    let newLetter = '';
    let newNumber = '';
    let decodeUpper = '';
    let decodeLower = '';
    let decodeNum = '';
    for(let i=0; i<textDecode.length; i++){
      letterDecode = textDecode.charCodeAt(i);
      if(letterDecode >= 65 && letterDecode <= 90){
        while (offsetNumDec < 0){
          offsetNumDec = offsetNumDec + 26
        }
        decodeUpper = (letterDecode - 65 - offsetNumDec)
        while (decodeUpper < 0){
          decodeUpper = decodeUpper + 26
        }
        newNumber = decodeUpper % 26 + 65
        newLetter = String.fromCharCode(newNumber);
        resultDecode += newLetter       
      }else if(letterDecode >= 97 && letterDecode <= 122){
        while (offsetNumDec < 0){
          offsetNumDec = offsetNumDec + 26
        }
        decodeLower = (letterDecode - 97 - offsetNumDec)
        while (decodeLower < 0){
          decodeLower = decodeLower + 26
        }
        newNumber = decodeLower % 26 + 97;
        newLetter = String.fromCharCode(newNumber);
        resultDecode += newLetter
      }else if(letterDecode >= 48 && letterDecode <= 57){
        while (offsetNumDec < 0){
          offsetNumDec = offsetNumDec + 10
        }
        decodeNum = (letterDecode - 48 - offsetNumDec)
        while (decodeNum < 0){
          decodeNum = decodeNum + 10
        }
        newNumber = decodeNum % 10 + 48;
        newLetter = String.fromCharCode(newNumber);
        resultDecode += newLetter
      }else{
        newLetter = String.fromCharCode(letterDecode);
        resultDecode += newLetter
      }
    }
    return resultDecode;
  }
};


