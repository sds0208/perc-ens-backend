const pool = require('../../db');
const queries = require('./queries');

const getEnsembles = (req, res) => {
    pool.query(queries.getEnsembles, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getEnsembleById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getEnsembleById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getEnsembles,
    getEnsembleById,
}