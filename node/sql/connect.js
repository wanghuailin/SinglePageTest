/**
 * Created by Wang on 2019/6/11.
 */

var sql = require('mssql');

const config = {
    user: 'sa',
    password: '1234',
    server: 'localhost',
    port: 1433,
    database: 'test'
}

sql.connect(config).then(function () {
    new sql.Request().query('select * from test').then(function (recordset) {
        console.log(recordset);
    }).catch(function (err) {
        console.log(err);
    });
}).catch(function (err) {
    console.log(err);
});