                                                        //მასივები და ობიექტები

let person = {                          //მარცხნივ key გასაღები; მარჯვნივ - value მნიშვნელობა
    name: "John",                        //ერთ კონკრეტულ ცვლადს/გასაღებს თუ მინდა რამდენიმე მნიშვნელობა ქონდეს უნდა გამოვიყენო მასივი (მაგ: children)
    age: 30,
    isMarried: true,
    children: [
        {
            name: "Luke",
            age: 5
        },
        {
            name: "George",
            age: 3
        },
        {
            name: "Marry",
            age: 10
        }
    ]
};

// console.log(person.children[0].name) //[] მასივის ფრჩხილებით გამოვიძახებთ კონკრეტულ ობიექტის/ინდექსის გასაღებს და გვეტყვის მნიშვნელობას.

person.profession = "Developer";  //მასივში ობიექტის დამატება
// person.profession = ["Developer", "Tax Driver"]
// person["hobbies"] = ["Reading", "Swimming"];  

console.log(person)

delete person.age    //წაშლა მასივიდა 
// delete person.children[0].name წაშლა მასივიდან კონკრეტული გასაღების და მნიშვნელობის.

console.log(person)