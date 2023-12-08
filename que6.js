const person = {
    name: 'krish',
    age:20,
    address:{
        street: "one street",
        city: "one city",
        state: "one state"
    },
}

const p = (person) => {
   const {name , address:{street}} = person;
   
   return {
         name,
         street
   }
}

console.log(p(person));