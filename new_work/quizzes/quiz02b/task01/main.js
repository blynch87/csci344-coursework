const users = [
  { id: 1, name: "Alice", age: 25, isActive: true, role: "admin" },
  { id: 2, name: "Bob", age: 30, isActive: false, role: "user" },
  { id: 3, name: "Charlie", age: 22, isActive: true, role: "moderator" },
  { id: 4, name: "David", age: 35, isActive: true, role: "user" },
  { id: 5, name: "Eve", age: 28, isActive: false, role: "admin" },
  { id: 6, name: "Frank", age: 40, isActive: true, role: "moderator" },
];

// 1.1. Use map to create an array of names from the users array.
//      Then output the array of names to the console.
const names = users.map((object) => object.name);
for (let i = 0; i < names.length; i++) {
  console.log(`${i}: "${names[i]}"`);
}
console.log(`length: ${names.length}`);

// 1.2. Use filter to create an array of only active users from the users array.
//      Then output the array of active users to the console.

const active = users.filter((object) => object.isActive === true);
console.log(active);
console.log(`length: ${active.length}`);
