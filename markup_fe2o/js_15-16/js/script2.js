// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес. Используя прототипное наследование
// создать дочерние классы Worker (дописать в них поля места работы,
// зарплатой, методом "работать") и Student (дописать поля места учебы,
// стипендией, методом "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в
// консоль. Убедиться что они имеют поля родительского класса Human

function Human () {
  this.name = "Jack";
  this.age = "23";
  this.height = "183";
  this.weight = "87";
  this.sex = "male";
};

function Worker () {
  this.workPlace = "IBM";
  this.salary = "2000";
  this.work = function () {
    console.log("I am worker!");
  };
};

function Student () {
  this.institution = "DPI";
  this.grant = "200";
  this.watchSoap = function () {
    console.log('I am like watching "Breaking bad" TV series!');
  };
};

Worker.prototype = new Human;
Student.prototype = new Human;

var newWorker1 = new Worker();
var newWorker2 = new Worker();
var newWorker3 = new Worker();

var newStudent1 = new Student();
var newStudent2 = new Student();
var newStudent3 = new Student();

console.log('newWorker1',newWorker1);
console.log('newWorker2',newWorker2);
console.log('newWorker3',newWorker3);

console.log('newStudent1',newStudent1);
console.log('newStudent2',newStudent2);
console.log('newStudent3',newStudent3);

console.log('newWorker2.name: ', newWorker2.name );
console.log('newStudent2.age: ', newStudent2.age );
