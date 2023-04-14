要在 Next.js 中使用中间件来模拟数据，您可以使用`json-server`和`next-connect`库。以下是一个完整的 Next.js 工程代码示例：

1. 安装`json-server`和`next-connect`库：可以使用 npm 或 yarn 进行安装。

   ```
   npm install json-server next-connect
   ```

2. 创建您的 Next.js API 路由文件（例如`pages/api/mock.js`）。

   ```jsx
   import nextConnect from "next-connect";
   import axios from "axios";
   import jsonServer from "json-server";

   const handler = nextConnect();

   // Create a JSON server instance
   const server = jsonServer.create();
   const router = jsonServer.router("db.json");
   const middlewares = jsonServer.defaults();

   // Use the JSON server middlewares
   server.use(middlewares);
   server.use(router);

   // Use the JSON server instance as a middleware in Next.js
   handler.use(async (req, res) => {
     if (req.method === "GET") {
       // Use axios to fetch data from the JSON server
       const { data } = await axios.get(`http://localhost:3000${req.url}`);
       res.json(data);
     } else {
       res.status(405).json({ message: "Method Not Allowed" });
     }
   });

   export default handler;
   ```

3. 创建一个`db.json`文件，其中包含您要模拟的数据。

   ```json
   {
     "users": [
       { "id": 1, "name": "John Doe" },
       { "id": 2, "name": "Jane Smith" }
     ]
   }
   ```

4. 启动 JSON 服务器和 Next.js 应用程序。

   在`package.json`文件中添加以下脚本：

   ```json
   {
     "scripts": {
       "dev": "json-server --watch db.json --port 3000 & next dev"
     }
   }
   ```

   然后，运行以下命令：

   ```
   npm run dev
   ```

   这将启动 JSON 服务器和 Next.js 应用程序。

5. 现在，您可以通过访问`http://localhost:3000/api/mock/users`来获取模拟数据。

这个示例展示了如何使用`json-server`和`next-connect`库来创建一个中间件，以便在 Next.js 中模拟数据。您可以根据需要对其进行修改和扩展。
