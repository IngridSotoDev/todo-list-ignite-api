import fs from "node:fs";
import { parse } from "csv-parse";

const csvTaskPath = new URL("./tasks.csv", import.meta.url);

const csvParse = parse({
  fromLine: 2,
  delimiter: ",",
});

const csvImport = async () => {
  const csvTasks = fs.createReadStream(csvTaskPath).pipe(csvParse);

  for await (const chunk of csvTasks) {
    const [title, description] = chunk;

    fetch("http://localhost:3333/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })
      .then((response) => response.text())
      .then((data) => console.log(JSON.parse(data).message));
  }
};

csvImport();
