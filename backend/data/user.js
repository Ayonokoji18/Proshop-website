import bcrypt from "bcryptjs";

const users = [
  {
    name: "Ramu kaka",
    email: "ramukaka@gmail.com",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: true,
  },
  {
    name: "Ryo Sayeba",
    email: "ryosayeba@gmail.com",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: true,
  },
  {
    name: "Pawan Chaudhary",
    email: "pawanchaudhary@gmail.com",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: true,
  },
  {
    name: "Naresh Choudhary",
    email: "naresh@gmail.com",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
  {
    name: "Anna Jaat",
    email: "annajaat@gmail.com",
    password: bcrypt.hashSync("1234567890", 10),
    isAdmin: false,
  },
];

export default users;
