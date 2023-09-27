const fs = require("fs/promises");

const fileName = "./Ignored/aJsonFile.json";
fs.writeFile("./Ignored/aJsonFile.json", "name: Yaser, id: 1", (error) => {
  if (error) {
    console.log(error);
    return;
  }
});

async function example() {
  try {
    const data = await fs.readFile(fileName, "utf-8");
    console.log(data);
    await fs.appendFile(fileName, "\nmaheen, 2");
    const newData = await fs.readFile(fileName, "utf-8");
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}

example();
