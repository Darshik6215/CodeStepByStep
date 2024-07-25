const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "ruturaj" },
    { $set: { name: "thala" } }
  );
  console.log(result);
};
updateData();
