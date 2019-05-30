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

    var _webApi = "https://tmsapi.hexfuture.com/";//api地址

    //获取token
    function getToken() {
        var arr, reg = new RegExp("(^| )" + "localtoken" + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return "";
    }

    //将字符串转换为时间格式,适用各种浏览器,格式如2016-09-09T17:02:37.227"
    function GetTimeByTimeStr(dateString) {
        var timeArr = dateString.split("T");
        var d = timeArr[0].split("-");
        var t = timeArr[1].split(":");
        return new Date(d[0], d[1] - 1, d[2], t[0], t[1], t[2]);
    }

    //转换时间,试卷转为字符串
    //getMonth()函数的返回值为Number类型，返回当前Date对象的月份值。该值介于 [0, 11] 之间。其中，0 ~ 11 分别表示 1月至12月。超出为0
    function Datetimeformat(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        var second = date.getSeconds();
        return y + '/' + m + '/' + d + ' ' + h + ':' + minute + ":" + second;
    }

    function Datetimeformat2(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        return y + '/' + m + '/' + d;
    }

    function setCookie(name, value) {
        //获取当前时间
        var exdate = new Date();
        var expireDays = 365 * 3;
        exdate.setDate(exdate.getDate() + expireDays);
        var href = window.location.href.substr(8);
        var domain = href.substr(href.indexOf('.'), href.indexOf('/') - href.indexOf('.'));
        //如果本地调试
        if (window.location.href.indexOf("localhost") > 0) {
            domain = "localhost";
        }
        // document.cookie = name + "=" + value + ";domain=" + domain + ";path=/;expires=" + exdate.toGMTString();
        //不在保持登录状态，缓存随浏览器关闭而消失
        document.cookie = name + "=" + value + ";domain=" + domain + ";path=/;expires=";
    }

    //平台类型
    var PlatformTypeSource = ["家庭端App", "教师端App", "上课web端", "备课web端", "魔方", , , , , "未知"];

    return {
        _webApi: _webApi,
        getToken: getToken,
        GetTimeByTimeStr: GetTimeByTimeStr,
        Datetimeformat: Datetimeformat,
        Datetimeformat2: Datetimeformat2,
        PlatformTypeSource: PlatformTypeSource,
        setCookie: setCookie
    }
}();