const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const BIT_TABLE = {
    '10': '.',
    '11': '-',
    '00': ''
  };

function decode(expr) {
    const morseCharLength = 10;
    let bitChars=[];
    for(let i = 0; i < Math.floor(expr.length / morseCharLength); i++){
      const sub = expr.substr(i * morseCharLength, morseCharLength);
      bitChars.push(sub);
    }
  
    let chars ='';
    bitChars.forEach((c) => {
      let res = '';
      if (c === '**********'){
        res = ''
      } else {
        for(let i = 0; i < morseCharLength; i = i + 2){
          res += BIT_TABLE[c.substr(i, 2)];
        }
      }
      
      let char = res !== '' ? MORSE_TABLE[res] : ' ';
      return chars += char;
    });
  
    return chars;
  }

module.exports = {
    decode
}