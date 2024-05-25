const getEnsembles = 'SELECT * FROM ensembles3';
const getEnsembleById = 'SELECT * FROM ensembles3 WHERE id = $1';

module.exports = {
    getEnsembles,
    getEnsembleById,
}