export default class race {
  private static race: string[] = ["⛟","_","_","_","_","_","_","_","_","_"];
  private static position: number = 0;
  private static loops: number = 0;
  private static text: string = "";

  static showrace() {
    return this.race;
  }

  static showstring() {
    return this.text;
  }

  static move() {
    if(this.position + 1 < this.race.length) {
    this.race[this.position] = "_"
    this.race[this.position + 1] = "⛟"
    this.position = this.position + 1;
    } else {
      this.text = "You beat the race but it will still keep going on until the number is correct!"
      this.race = ["⛟","_","_","_","_","_","_","_","_","_"];
      this.loops = this.loops + 1;
      this.position = 0;
    }
    console.log(this.position);
  }
  static reset() {
    this.race = ["⛟","_","_","_","_","_","_","_","_","_"];
    this.position = 0;
    this.text = "";
  }

  static score() {
    let value:number = this.loops * 10 + this.position;
    return value;
  }
}