function Developer(name) {
  this.name = name;
  this.type = 'Developer';
}

function Tester(name) {
  this.name = name;
  this.type = 'Tester';
}

function EmployeeFactory() {
  this.create = (name, type) => {
    if (type === 1) {
      return new Developer(name);
    } else if (type === 2) {
      return new Tester(name);
    }
  };
}

function welcome() {
  console.log(`Welcome ${this.name}, our new ${this.type}.`);
}

const employeeFactory = new EmployeeFactory();
const employees = [];
employees.push(employeeFactory.create('Patrick', 1));
employees.push(employeeFactory.create('John', 2));

employees.forEach(employee => {
  welcome.call(employee);
});
