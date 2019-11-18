console.log("prototype");
function Parents(name) {
  this.name = name;
}

Parents.prototype.sayName = function() {
  console.log(`sayName: ${this.name}`);
};

Parents.prototype.doSomthing = function() {
  console.log(`doSomthings: ${this.name}`);
};

function Child(name, parentName) {
  Parents.call(this, parentName);
  this.name = name;
}

function f() {}
f.prototype = Parents.prototype;
Child.prototype = new f();
Child.prototype.sayName = function() {
  console.log(`child sayName: ${this.name}`);
};

const child = new Child("son", "parents");
child.sayName();
child.doSomthing();
