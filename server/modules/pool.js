const pg = require('pg');

const pool = new pg.Pool({
    database: 'react_gallery',
    host: 'localhost',
    port: 5432
});


module.exports = pool;