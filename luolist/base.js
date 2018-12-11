/**
 * Created by Wang on 2018/7/19.
 */

var $_GET = (function () {
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if (typeof (u[1]) == "string") {
        u = u[1].split("&");
        var get = {};
        for (var i in u) {
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();

var Config = function () {
    (function () {
    })();

    var _webApi = "https://lmsapi.hexfuture.com/";//api地址

    //获取token
    function getToken() {
        var arr, reg = new RegExp("(^| )" + "localtoken" + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return "";
    }

    //平台类型
    var PlatformTypeSource = ["家庭端App", "教师端App", "上课web端", "备课web端", "魔方", , , , , "未知"];

    return {
        _webApi: _webApi,
        getToken: getToken,
        PlatformTypeSource: PlatformTypeSource
    }
}();