const express = require("express");
const morgan = require("morgan");
const taskRoutes = require("./routes/tasks.routes");
const cors = require("cors")
const app = express();
const port = 4000;

app.use(cors())
app.set("json spaces", 4);
app.use(morgan("dev"));
app.use(express.json());

app.use(taskRoutes);
app.use((err, req, res, next) => {
	return res.json({
		message: err.message,
	});
});

app.listen(port, () => {
	console.log(`App run on port: ${port}`);
});

app.get("/");
