const pool = require("./../db");

const getAllTasks = async (req, res) => {
	try {
		const allTasks = await pool.query("SELECT * FROM task");
		res.json(allTasks.rows);
	} catch (error) {
		console.log(error.message);
	}
};

const getTaskById = async (req, res) => {
	try {
		const { id } = req.params;
		const taskById = await pool.query("SELECT * FROM task WHERE id = $1", [
			id,
		]);
		console.log(taskById);
		if (taskById.rows.length === 0) {
			return res.status(404).json({
				message: "task not found",
			});
		}
		res.json(taskById.rows[0]);
	} catch (error) {
		console.log(error.message)
	}
};

const createTask = async (req, res) => {
	const { title, description } = req.body;

	try {
		const result = await pool.query(
			"INSERT INTO task (title, description) VALUES ($1,$2) RETURNING *",
			[title, description]
		);
		res.json(result.rows[0]);
	} catch (error) {
		res.json({ error: error.message });
	}
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
	deleteTask,
};
