class Polygon {
  constructor(h,w){
    this.name = 'Polygon'
    this.h = h
    this.w = w
  }

  sayName(){
    ChromeSamples.log('Hi, I am a ', this.name + '.');

  }
}

let p = new Polygon(15,10)
p.sayName()
