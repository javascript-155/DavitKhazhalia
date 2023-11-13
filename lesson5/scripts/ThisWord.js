// "this" word
// "this" word refers to the objec that is exacuting the current function

const person = {
    name: "john",
    birthYear: 1990,
    calcAge: function () {
        return 2023 - this.birthYear;
        // return new Date().getFullYear()- this.birthYear; დინამიური კოდია 2024 რომ მოვა ავტომატურად დაუმატებს ასაკს.
    }
};

console.log(`person with the name of ${person.name} is ${person.calcAge()} years old.`);