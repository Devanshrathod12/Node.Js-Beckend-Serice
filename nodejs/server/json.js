const obj = {
    name:"devansh",
    age:22,
    addres:"indore"
}

const jsondata = JSON.stringify(obj)
console.log(jsondata);
const json = JSON.parse(jsondata)
console.log(json);

// obj conver json {"name":"devansh","age":22,"addres":"indore"}
// json covert obj { name: 'devansh', age: 22, addres: 'indore' }