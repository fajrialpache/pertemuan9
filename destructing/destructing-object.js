// membuat objek literal
const user = {
  name: "Edo Riansyah",
  age: 22,
  address: "Depok",
  isMarried: true,
};

// Melakukan destructing objek
const { name, age, address, isMarried } = user;

// Jadi kalo udah di destructing yg dipanggil inisialnya bukan idexnya
console.log(name);
console.log(age);
console.log(address);
console.log(isMarried);
