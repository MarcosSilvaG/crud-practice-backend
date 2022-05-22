const getAllTasks = async (req, res) => {
	res.send("retieven a list of task");
};

const getTaskById = async (req, res) => {
	res.send("return a single task");
};

const createTask = async (req, res) => {
	res.send("Creating a task");
};

const updateTask = async (req, res) => {
	res.send("Updating a task");
};

const deleteTask = async (req, res) => {
	res.send("Deleting a task");
};

module.exports = {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask
};
