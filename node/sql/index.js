/**
 * Created by Wang on 2019/6/12.
 */

$(function () {
    $.ajax({
        type: "get",
        url: "http://localhost:8081/app/select",
        data: {},
        success: function (data) {
            console.log("----index------");
            console.log(data);
        }
    })
})