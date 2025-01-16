//complete this code
class Person {}
const person = new Person("John", 25);
console.log(person.name); // Output: John
person.age = 30;
console.log(person.age); // Output: 30


class Student extends Person {}
const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

class Teacher extends Person {}
const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
