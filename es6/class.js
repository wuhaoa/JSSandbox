class Parents {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`sayName: ${this.name}`);
  }

  doSomething() {
    console.log(`doSomethings: ${this.name}`);
  }
}

class Child extends Parents {
  constructor(name, parentsName) {
    super(parentsName);
    this.name = name;
  }
}

const child = new Child("son", "parents");
child.sayName();
child.doSomething();
