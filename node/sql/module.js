/**
 * Created by Wang on 2019/6/12.
 */

var SqlCRUD = require("./crud");
sqlCrud = new SqlCRUD();
sqlCrud.Select(function (date) {
    console.log(date.recordset);
    console.log("--------------");
    console.log(date.recordset[0].num);
});


