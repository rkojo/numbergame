export default  class randnum{

  private static randnumber: number = 500;
  private static formernums : number[] = [];
  private static formernumsorted : number[] = []; //sorts so the floor and roof are found
  private static max : number = 1000;
  private static min : number = 0;

  //if user presses lower
  static ifLower() {
    //adds to both arrays and sorts 
    this.formernums.push(this.randnumber);
    this.formernumsorted.push(this.randnumber);
    this.formernumsorted.sort(function(a, b){return a-b})
    //randomises to new number
    this.max = this.randnumber;
    this.randnumber = this.randnumber - (Math.ceil((Math.random() * (this.max - this.min))));
    if(this.randnumber < 0) {
      this.randnumber = 0;
    }
    console.log(this.randnumber)

  }
  //if user presses higher
  static ifHigher() {
    //adds to both arrays and sorts
    this.formernums.push(this.randnumber);
    this.formernumsorted.push(this.randnumber);
    this.formernumsorted.sort(function(a, b){return a-b})
    this.min = this.randnumber;

    //randomises to new number
    this.randnumber =  Math.ceil((Math.random() *(this.max - this.min) ) + this.min);
    if(this.randnumber > 1000) {
      this.randnumber = 1000;
    }
    console.log(this.randnumber)
  }

  static correct() {
    this.formernums.push(this.randnumber);
  }

  static new() {
    this.randnumber = 500;
    this.max = 1000;
    this.min = 0;
    this.formernums = [];
    this.formernumsorted= []
  }

   static showcurrent(): any {
    return this.randnumber;
  }
  static showFormer(): any {
    return this.formernums;
  }


}
