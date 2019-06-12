/**
 * Created by Wang on 2019/6/12.
 */

var SqlCRUD = require("./crud");
sqlCrud = new SqlCRUD();

function dateCRUD() {
    this.Select = function (callback) {
        sqlCrud.Select(function (date) {
            callback(date)
        });
    }
    this.Add = function (num, name, count, callback) {
        sqlCrud.Add(num, name, count, function (date) {
            callback(date)
        });
    }
}
module.exports = dateCRUD;

