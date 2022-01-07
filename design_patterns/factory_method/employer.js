class Developer {
  name = '';
  type = 1;

  constructor(name) {
    this.name = name;
  }
}

class Tester {
  name = '';
  type = 2;

  constructor(name) {
    this.name = name;
  }
}

function EmployerFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);

      case 2:
        return new Tester(name);
    }
  };
}

function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}

const employeeFactory = new EmployerFactory();
const employees = [];

employees.push(employeeFactory.create('Patrick', 1));
employees.push(employeeFactory.create('John', 2));

employees.forEach(emp => {
  say.call(emp);
});
