const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor() {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.objAlpha = {};
    
    for (let i = 0; i < this.alphabet.length; i++) {
      this.objAlpha[this.alphabet[i]] = i;
    }
  }

  encrypt(text, key) {
    let result = '',
        key_shift = 0,
        objAlpha = this.objAlpha,
        alphabet = this.alphabet;

    if (!text || !key) {
      throw Error('Incorrect arguments!');
    }

    for (let i = 0; i < text.length; i++) {
        let text_num = objAlpha[text[i].toUpperCase()],
            key_num = objAlpha[key[(i - key_shift) % key.length].toUpperCase()];

        if (!alphabet.includes(text[i].toUpperCase())) {
            result += text[i];
            key_shift++;
        } else {
            result += alphabet[(text_num + key_num) % alphabet.length];
        }
    }

    return result;
  }
  
  decrypt(text, key) {
    let result = '',
        key_shift = 0,
        objAlpha = this.objAlpha,
        alphabet = this.alphabet;

    if (!text || !key) {
      throw Error('Incorrect arguments!');
    }

    for (let i = 0; i < text.length; i++) {
        let text_num = objAlpha[text[i].toUpperCase()],
            key_num = objAlpha[key[(i - key_shift) % key.length].toUpperCase()];

        if (!alphabet.includes(text[i].toUpperCase())) {
            result += text[i];
            key_shift++;
        } else {
            result += alphabet[(text_num - key_num + alphabet.length) % alphabet.length];
        }
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
