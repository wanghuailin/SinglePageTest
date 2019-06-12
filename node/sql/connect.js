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
    //查
    new sql.Request().query('select * from test').then(function (recordset) {
        console.log(recordset);
    }).catch(function (err) {
        console.log(err);
    });

    //增
    var addSql = "INSERT INTO test(num,name,count) VALUES(4,'李',4)";
    new sql.Request().query(addSql).then(function (result) {
        console.log('INSERT ID:', result);
    }).catch(function (err) {
        console.log(err);
    });

    //改
    var updateSql = "UPDATE test SET name= '小' WHERE num=4";
    new sql.Request().query(updateSql).then(function (result) {
        console.log('UPDATE affectedRows', result);
    }).catch(function (err) {
        console.log(err);
    });

    //删
    var updateSql = "DELETE FROM test WHERE num=4";
    new sql.Request().query(updateSql).then(function (result) {
        console.log('DELETE affectedRows',result);
    }).catch(function (err) {
        console.log(err);
    });
}).catch(function (err) {
    console.log(err);
});