const sql = require('mssql')

const config = {
    user: 'sa',
    password: 'password',
    server: 'localhost',
    database: 'testdb',
    options: {
        enableArithAbort: true
    }
}

const run = async() => {
    try {
        console.log('opening connection...')
        const pool = await sql.connect(config);
        const {recordset} = await sql.query`select * from users`

        console.log(recordset)
    } catch (err) {

    } finally {
        await pool.close();
        console.log('connection closed...')
    }
}

run()