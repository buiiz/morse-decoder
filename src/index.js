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

function decode(expr) {
  let exprArr = expr.match(/.{1,10}/g);
  let morseArr = [];

  for (const elem of exprArr) {
    if (elem == "**********") {
      morseArr.push(" ");
      continue;
    }

    let code = "";
    for (const i of elem.match(/.{1,2}/g)) {
      if (i == "10") code += ".";
      if (i == "11") code += "-";
    }
    morseArr.push(code);
  }

  let res = "";
  morseArr.forEach((item) => {
    if (MORSE_TABLE[item]) {
      res += MORSE_TABLE[item];
    } else {
      res += item;
    }
  });

  return res; //.join(' ')
}

module.exports = {
  decode,
};
