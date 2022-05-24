const pool = require("./../db");

const getAllTasks = async (req, res, next) => {
	try {
		const allTasks = await pool.query("SELECT * FROM task");
		res.json(allTasks.rows);
	} catch (error) {
		next(error);
	}
};

const getTaskById = async (req, res, next) => {
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
		next(error);
	}
};

const createTask = async (req, res, next) => {
	const { title, description } = req.body;

	try {
		const result = await pool.query(
			"INSERT INTO task (title, description) VALUES ($1,$2) RETURNING *",
			[title, description]
		);
		res.json(result.rows[0]);
	} catch (error) {
		next(error);
	}
};

const updateTask = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { title, description } = req.body;
		const updated = await pool.query(
			"UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
			[title, description, id]
		);
		if (updated.rows.length === 0) {
			return res.status(404).json({
				message: "Task not found",
			});
		}
		return res.json(updated.rows[0]);
	} catch (error) {
		next(error);
	}
};

const deleteTask = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deleted = await pool.query("DELETE FROM task WHERE id = $1", [
			id,
		]);
		if (deleted.rowCount === 0) {
			return res.status(404).json({
				message: "Task not found",
			});
		}
		return res.sendStatus(204);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
};
