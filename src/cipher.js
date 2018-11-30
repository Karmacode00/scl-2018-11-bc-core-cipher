window.cipher = {
  encode: (textEncode, offsetNum) => {
    offsetNum = parseInt(offsetNum);
    let resultEncode = '';
    let letterCipher = '';
    let newLetter = '';
    let newNumber = '';
    for (let i = 0; i < textEncode.length; i++) {
      letterCipher = textEncode.charCodeAt(i);
      if (letterCipher === 32) { 
        newLetter = String.fromCharCode(letterCipher);
        resultEncode += newLetter
      } else if (letterCipher >= 65 && letterCipher <= 90) {
        while (offsetNum < 0) {
          offsetNum = offsetNum + 26
        }
        newNumber = ((letterCipher - 65 + offsetNum) % 26 + 65);
        newLetter = String.fromCharCode(newNumber);
        resultEncode += newLetter
      }else if(letterCipher >= 97 && letterCipher <= 122){
        while (offsetNum < 0){
          offsetNum = offsetNum + 26
        }
        newNumber = ((letterCipher - 97 + offsetNum) % 26 + 97);
        newLetter = String.fromCharCode(newNumber);
        resultEncode += newLetter
      }
    }
    return resultEncode;
  },
  decode: () => {
    /* Acá va tu código */
  }
};


