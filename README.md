# Desafio 1 - Ignite Node.js

#### Desafio referente ao módulo: Fundamentos do Node.js

[![Link do ignite](https://efficient-sloth-d85.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F364f7149-641c-4f30-890c-d18c94a06cb2%2FNode.js.png?table=block&id=2d48608f-4764-4519-a408-b438b52d913f&spaceId=08f749ff-d06d-49a8-a488-9846e081b224&width=50&userId=&cache=v2)](https://efficient-sloth-d85.notion.site/Desafio-01-2d48608f47644519a408b438b52d913f)

### 🎛️ Funcionalidades

- Criação de uma task
- Listagem de todas as tasks
- Atualização de uma task pelo `id`
- Remover uma task pelo `id`
- Marcar pelo `id` uma task como completa
- Importação de tasks em massa por um arquivo CSV

### 🛣️ Rotas

- `POST - /tasks`
  > Deve ser possível criar uma task no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição. Ao criar uma task, os campos: `id`, `created_at`, `updated_at` e `completed_at` devem ser preenchidos automaticamente, conforme a orientação das propriedades acima.
- `GET - /tasks`
  > Deve ser possível listar todas as tasks salvas no banco de dados. Também deve ser possível realizar uma busca, filtrando as tasks pelo `title` e `description`
- `PUT - /tasks/:id`
  > Deve ser possível atualizar uma task pelo `id`. No `body` da requisição, deve receber somente o `title` e/ou `description` para serem atualizados. Se for enviado somente o `title`, significa que o `description` não pode ser atualizado e vice-versa. Antes de realizar a atualização, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
- `DELETE - /tasks/:id`
  > Deve ser possível remover uma task pelo `id`. Antes de realizar a remoção, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
- `PATCH - /tasks/:id/complete`
  > Deve ser possível marcar a task como completa ou não. Isso significa que se a task estiver concluída, deve voltar ao seu estado “normal”. Antes da alteração, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.

### 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- JavaScript
- NodeJS
- [csv-parser](https://csv.js.org/parse/)

### 🚧 Execução do projeto

- servidor: npm run dev
- import csv: node streams/csv-import.js
