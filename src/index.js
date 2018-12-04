window.onload = () => {
  document.getElementById('definition').style.display = 'none';
  document.getElementById('instructions').style.display = 'none';

  // Toggle
  document.getElementById('btnDefinition').addEventListener('click', () => {
    const definicion = document.getElementById('definition');
    if (definicion.style.display === 'none') {
      definicion.style.display = 'block';
    } else {
      definicion.style.display = 'none';
    }
  });

  // Toggle
  document.getElementById('btnInstructions').addEventListener('click', () => {
    const instrucciones = document.getElementById('instructions');
    if (instrucciones.style.display === 'none') {
      instrucciones.style.display = 'block';
    } else {
      instrucciones.style.display = 'none';
    }
  });

  // Evento click limpiar
  document.getElementById('limpiar').addEventListener('click', () => {
    document.getElementById('text').value = '';
    document.getElementById('output').value = '';
    document.getElementById('offset').value = '';
  });

  // Evento click copiar
  document.getElementById('copiar').addEventListener('click', () => {
  let copyText = document.getElementById('output');
  /* Select the text field */
  copyText.select();
  /* Copy the text inside the text field */
  document.execCommand('copy');
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
  });

  // Evento click texto a encode
  document.getElementById('btnEncode').addEventListener('click', () => {
    let textEncode = document.getElementById('text').value;
    let offsetNum = parseInt(document.getElementById('offset').value);
    const resultEncode = window.cipher.encode(textEncode, offsetNum);
    document.getElementById('output').value = resultEncode;
  });

  // Evento click texto a decode
  document.getElementById('btnDecode').addEventListener('click', () => {
    let textDecode = document.getElementById('text').value;
    let offsetNumDec = parseInt(document.getElementById('offset').value);
    const resultDecode = window.cipher.decode(textDecode, offsetNumDec);
    document.getElementById('output').value = resultDecode;
  });
}