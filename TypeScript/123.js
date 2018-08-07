/**
 * Created by Wang on 2018/6/15.
 */

require.config({
    paths: {
        "jquery": "../Script/jquery-1.10.2",
    }
});
require(['jquery'], function ($){
    console.log($("h1").html());
});