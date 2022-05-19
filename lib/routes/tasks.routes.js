const { Router } = require("express");
const { route } = require("express/lib/application");
const router = Router();

router.get("/", (req, res) => {
	res.send("Welcome to the endpoint of prestaditto app");
});

router.get("/tasks", (req, res) => {
	res.send("Return a list of tasks");
});

router.get("/tasks/10", (req, res) => {
    res.send("return a single task");
});

router.post("/tasks", (req, res) => {
    res.send("Creating a task");
});

router.delete("/tastks",(req, res) => {
    res.send("Deleting a task");
});

router.put("/tasks", (req, res) => {
    res.send("Updating a task");
});

module.exports = router;
