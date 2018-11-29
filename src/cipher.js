window.cipher = {
  encode: (str, num) => {
    // Comienza función encode
    num = parseInt(num);
    let result = '';
    // Se moverá de a una posición a lo largo de lapalabra entregada
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      // let charCode = char.charCodeAt(i);
      if (char.match(/[A-Z]/i)) { // Si lo que ingresamos es letra 
        let charCode = str.charCodeAt(i);
        // AsCii
        // Mayúsculas 
        if ((charCode >= 65) && (charCode <= 90)) {
          char = String.fromCharCode(((charCode - 65 + parseInt(num)) % 26) + 65);
        }
        // Minusculas 
        else if ((charCode >= 97) && (charCode <= 122)) {
          char = String.fromCharCode(((charCode - 97 + parseInt(num)) % 26) + 97);
        }
      }
      result += char;
    }
    return result;
  },
  decode: () => {
    /* Acá va tu código */
  }
};
