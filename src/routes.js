import { randomUUID } from "node:crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { search } = req.query;

      const tasks = database.select(
        "tasks",
        search
          ? {
              title: search,
              description: search,
            }
          : null
      );

      return res.end(JSON.stringify(tasks));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { title, description } = req.body;

      if (!title)
        return res
          .writeHead(400)
          .end(JSON.stringify({ message: "title is required!" }));

      if (!description)
        return res
          .writeHead(400)
          .end(JSON.stringify({ message: "description is required!" }));

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      database.insert("tasks", task);

      return res.writeHead(201).end();
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const { title, description } = req.body;

      const [task] = database.select("tasks", null, id);

      if (!task)
        return res
          .writeHead(404)
          .end(JSON.stringify({ message: "task not found!" }));

      if (!title)
        return res
          .writeHead(400)
          .end(JSON.stringify({ message: "title is required!" }));

      if (!description)
        return res
          .writeHead(400)
          .end(JSON.stringify({ message: "description is required!" }));

      database.update("tasks", id, {
        title,
        description,
        updated_at: new Date().toISOString(),
      });

      return res.writeHead(204).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      const [task] = database.select("tasks", null, id);

      if (!task)
        return res
          .writeHead(404)
          .end(JSON.stringify({ message: "task not found!" }));

      database.delete("tasks", id);

      return res.writeHead(204).end();
    },
  },
];
