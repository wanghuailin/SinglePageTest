/**
 * Created by Wang on 2019/6/12.
 */

$(function () {
    var vm_date = new Vue({
        el: '#vm_date',
        data: {
            list: []
        }
    })

    $.ajax({
        type: "get",
        url: "http://localhost:8081/app/select",
        data: "",
        success: function (date) {
            vm_date.list = date.data;
        }
    })
})