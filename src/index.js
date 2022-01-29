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
const bit_table = {
    '**********': ' ',
    '10': '.',
    '11': '-',
    '00': ''
  };
  
function decode(expr) {
    const exLen = Math.floor(expr.length / 10);
    //console.log('exLen: ', exLen);
    let bitChars=[];
    for(let i = 0; i< exLen; i++){
      let f = i*10;
      let sub = expr.substr(f, 10);
      //console.log(f, sub);
      bitChars.push(sub);
    }
    //console.log(bitChars);
    // let morseChars = bitChars.reduce((p, c) => {
    //   let res = '';
    //   console.log('p: ', p, 'c: ', c);
    //   if (c === '**********'){
    //     res = '*';//bit_table['**********']
    //   }
    //   else {
  
    //     for(let i = 0; i < 10; i = i + 2){
    //       let s2 = c.substr(i, 2);
    //       //console.log('c :', c, 'i: ', i, 's2: ', s2, 'bit_table[s2]: ', bit_table[s2]);
    //       res += bit_table[s2];
    //     }
    //   }
  
    //   let m = MORSE_TABLE[res];
    //   //console.log('res: ', res, 'p: ', p, 'm: ', m);
    //   return p + res;
    // });
      let chars ='';
     let morseChars = bitChars.forEach((c) => {
      let res = '';
      //console.log('c: ', c);
      if (c === '**********'){
        res = bit_table['**********']
      }
      else {
  
        for(let i = 0; i < 10; i = i + 2){
          let s2 = c.substr(i, 2);
          //console.log('c :', c, 'i: ', i, 's2: ', s2, 'bit_table[s2]: ', bit_table[s2]);
          res += bit_table[s2];
        }
      }
  
      let m = MORSE_TABLE[res] ? MORSE_TABLE[res] : ' ';
      // console.log('res: ', res,  'm: ', m);
      return chars += m;
    });
  
    //console.log(bitChars);
    // console.log('chars: ',chars);
  
      //console.log(expr);
      return chars;
  }

module.exports = {
    decode
}