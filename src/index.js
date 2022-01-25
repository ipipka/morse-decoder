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
    const decodeChar = char => {
        let morseChar = '';
        for (let i = 0; i < char.length; i += 2) {
            const symbol = char.slice(i, i + 2);
            if (symbol == '00') continue;
            morseChar += symbol == '10' ? '.' : '-';
        }
        return MORSE_TABLE[morseChar];
    };

    let decodeString = '';
    for (let i = 0; i < expr.length; i += 10) {
        let char =  expr.slice(i, i + 10);

        decodeString += char == '**********' ? ' ' : decodeChar(char);
    }
    return decodeString;
}

module.exports = {
    decode
}
