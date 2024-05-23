const getEnsembles = 'SELECT * FROM ensembles';
const getEnsembleById = 'SELECT * FROM ensembles WHERE id = $1';

module.exports = {
    getEnsembles,
    getEnsembleById,
}