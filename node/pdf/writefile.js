/**
 * Created by Wang on 2016/12/8.
 */

//测试页面：
//https://tmshexcube.hexfuture.net/pages/index3.html
var phantom = require('phantom');//需要引入phantom模块

phantom.create().then(function (ph) {
    ph.createPage().then(function (page) {
        //viewportSize 是视区的大小，你可以理解为你打开了一个浏览器，然后把浏览器窗口拖到了多大。
        //clipRect 是裁切矩形的大小，需要四个参数，前两个是基准点，后两个参数是宽高。
        // page.property('viewportSize', {width: 712, height: 1010});
        // page.property('clipRect', {top: 0, left: 0, width: 712, height: 1010});
        page.open("http://lmsbeike.hexfuture.net//Pages/index3.html").then(function (status) { //status有success和fail
            if (status === 'fail') {
                console.log('open page fail!');
            } else {
                //进行pdf生成,加页面返回的status判断,确保页面正常打开.
                // 给一个定时让要被捕捉的页面的html和js加载完成,否则可能页面会没有加载完就执行了生成pdf操作内容确实
                setTimeout(function () {
                    page.render(__dirname + '/example.png');
                    // page.property('paperSize', {
                    //     format: 'A4',
                    //     orientation: 'portrait',
                    //     border: '1cm'
                    // });
                    page.render(__dirname + '/output.pdf').then(function () {
                        console.log('Page rendered');
                        // page.close();
                        ph.exit();
                    });
                }, 10000)
            }
        })
    })
})