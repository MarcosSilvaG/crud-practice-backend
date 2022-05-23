const { Router } = require("express");
const {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
} = require("./../controllers/tasks.controller");
const router = Router();

router.get("/", (req, res) => {
	res.send("Welcome to the tasks API");
});

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTaskById);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

module.exports = router;
