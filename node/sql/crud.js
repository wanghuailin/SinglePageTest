/**
 * Created by Wang on 2019/6/11.
 */

//数据库层
var sql = require('mssql');

const config = {
    user: 'sa',
    password: '1234',
    server: 'localhost',
    port: 1433,
    database: 'test'
}

function SqlCRUD() {
    this.Select = function (callback) {
        sql.close();
        sql.connect(config).then(function () {
            //查
            new sql.Request().query('select * from test').then(function (recordset) {
                // console.log(recordset);
                callback(recordset.recordset)
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    }

    this.Add = function (num, name, count, callback) {
        sql.close();
        sql.connect(config).then(function () {
            //增
            var addSql = "INSERT INTO test(num,name,count) VALUES(" + num + ",'" + name + "'," + count + ")";
            new sql.Request().query(addSql).then(function (result) {
                // console.log('INSERT ID:', result);
                callback(true)
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    }

    this.Update = function (num, name, count, callback) {
        sql.close();
        sql.connect(config).then(function () {
            //改
            var updateSql = "UPDATE test SET name= '" + name + "',count=" + count + " WHERE num=" + num;
            new sql.Request().query(updateSql).then(function (result) {
                // console.log('UPDATE affectedRows', result);
                callback(true)
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    }

    this.Delete = function (num, callback) {
        sql.close();
        sql.connect(config).then(function () {
            //改
            var updateSql = "DELETE FROM test WHERE num=" + num;
            new sql.Request().query(updateSql).then(function (result) {
                // console.log('DELETE affectedRows', result);
                callback(true)
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
}
module.exports = SqlCRUD;