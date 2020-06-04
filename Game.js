module.exports = class Game {
  constructor() {
    this.nCurrent = 0;
  }
  makeAMove(sInput) {
    let aReturn = [];
    if (this.nCurrent === 0) {
      aReturn.push('Welcome to the Game 21');
    }
    aReturn = ['I know you are but what am I'];
    return aReturn;
  }
};
