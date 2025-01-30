class Student  {
    constructor (name, age) {
      this.name = name;
      this.age = age;
    }
  
    talk () {
      return 'I am called ' + this.name + ' and I am ' + this.age + ' old...' 
    }
  
   };

   export default Student;