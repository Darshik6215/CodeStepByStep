const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    { name: "ruturaj", mobile: "apple", price: 500 },
    { name: "darshik", mobile: "nord", price: 300 },
    { name: "devanand", mobile: "nokia", price: 20 },
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};
insert();
