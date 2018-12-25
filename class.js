function getJson(json) {
  this.json = json;
}

getJson.prototype.getAll = function () {
  console.log(this.json);
};

var newJson = new getJson("{ a: 1}");

newJson.getAll();

//C2



class iJson {
  constructor(json) {
    this.json = json;
  }
  getAll() {
    console.log(this.json);
  }
}

var a = new iJson("{b : 2}");
a.getAll();


class iParent {
  constructor(json) {
    this.json = json;
    console.log('iParent ...');
  }
}


class iChild extends iParent {
  constructor(json) {
    super(json);
    console.log('iChild ...', this.json);

  }
  getAll() {
    console.log('getAll ichild');
    return this.json
  }

  set Data(json) {
    this.json = json
  }

  static printData(){
    return 'all data'
  }
}

var aI = new iChild('{a:1}')
console.log(iChild.printData());
aI.getAll()
// aI.Data('{b : 3}')
// aI.All()