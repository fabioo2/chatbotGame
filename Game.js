module.exports = class Game {
  constructor() {
    this.nCurrent = 0;
  }
  makeAMove(sInput) {
    let aReturn = [];
    if (this.nCurrent == 0) {
      aReturn.push('Welcome to the Game 21.');
      aReturn.push('The object is to get the computer to count 21.');
      aReturn.push(' Start by entering 1 to 3 digits from 1 onwards');
      this.nCurrent = 1;
      return aReturn;
    }
    let aInput = sInput.split(',');
    this.nCurrent = Number(aInput[aInput.length - 1]);
    this.nCurrent += 1;
    if (this.nCurrent === 20) {
      // if you have 20 then the computer will have to choose 21
      aReturn.push('You win');
      this.nCurrent = 0;
      return aReturn;
    }
    let nComputer = Math.ceil(Math.random() * 3);
    let sComputer = '';
    for (let n = 0; n < nComputer; n++) {
      if (n != 0) {
        sComputer += ',';
      }
      sComputer += this.nCurrent;
      if (this.nCurrent == 20) {
        //computer wins
        aReturn.push('I win');
        this.nCurrent = 0;
        return aReturn;
      }
      this.nCurrent += 1;
    }
    aReturn.push(sComputer);
    return aReturn;
  }
};
