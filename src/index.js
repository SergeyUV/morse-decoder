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
    const CODE_TABLE = {
        '00': '',
        '10': '.',
        '11': '-',
      };
      const probel = '**********'; 
      const letter_length = 10;
      
      let res_str ='';
      
      for(j=0; j<expr.length;j+=letter_length){
        let cur_letter_code = expr.substr(j,letter_length);
        if(cur_letter_code == probel){
          res_str+=' ' ;
        }else{
          for(i=0, tmp='';i<letter_length;i+=2){  
            tmp+= CODE_TABLE[cur_letter_code.substr(i,2)];
          }
          res_str+=(MORSE_TABLE[tmp]);
        }
      }
      return(res_str);    
}

module.exports = {
    decode
}