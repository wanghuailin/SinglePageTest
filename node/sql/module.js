/**
 * Created by Wang on 2019/6/12.
 */

var SqlCRUD = require("./crud");
sqlCrud = new SqlCRUD();

function dateCRUD() {
    this.Select = function () {
        sqlCrud.Select(function (date) {
            console.log(date.recordset);
        });
    }
}
module.exports = dateCRUD;

