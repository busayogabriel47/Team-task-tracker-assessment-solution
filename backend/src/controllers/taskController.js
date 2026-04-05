const db = require('../db');

exports.getTasks = async (req, res) => {

        try {
            const result = await db.query('SELECT * FROM tasks ORDER BY created_at DESC')
            res.json(result.rows)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
}

exports.createTask = async (req, res) => {
        const {title, description} = req.body;

    try {
        const result = await db.query(
            'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
            [title, description]
        )
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.updateTask = async (req, res) => {
    const {id} = req.params
    const {status} = req.body;

try {
    const result = await db.query(
        'UPDATE tasks SET status=$1 WHERE id=$2 RETURNING *',
        [status, id]
    )
    res.status(201).json(result.rows[0]);
} catch (error) {
    res.status(500).json({error: error.message})
}
}


exports.deleteTask = async (req, res) => {
    const {id} = req.params

try {
    await db.query('DELETE FROM tasks WHERE id=$1', [id])
    res.status(200).json({message: 'Deleted successfully'});
} catch (error) {
    res.status(500).json({error: error.message})
}
}