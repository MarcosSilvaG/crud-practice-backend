const express = require("express");
const taskRoutes = require("./routes/tasks.routes");

const app = express();
const port = 3000;
app.set("json spaces", 4);
app.use(taskRoutes);

app.listen(port, () => {
	console.log(`App run on port: ${port}`);
});

app.get("/")
