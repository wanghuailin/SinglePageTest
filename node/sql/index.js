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

    getDate();
    function getDate() {
        $.ajax({
            type: "get",
            url: "http://localhost:8081/app/select",
            data: "",
            success: function (date) {
                vm_date.list = date.data;
            }
        })
    }

    $(document.body).on("click", "#add", function () {
        var num = $("#num").val();
        var name = $("#name").val();
        var count = $("#count").val();
        //添加
        $.ajax({
            type: "get",
            url: "http://localhost:8081/app/add",
            data: {"num": num, "name": name, "count": count},
            success: function (date) {
                if (date) {
                    getDate();
                }
            }
        })
    })
})