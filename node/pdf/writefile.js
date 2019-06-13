/**
 * Created by Wang on 2016/12/8.
 */

//测试页面：
//https://tmshexcube.hexfuture.net/pages/index3.html
var phantom = require('phantom');//需要引入phantom模块

phantom.create().then(function (ph) {
    ph.createPage().then(function (page) {
        page.property('viewportSize', {width: 712, height: 1010});
        page.open("https://tmshexcube.hexfuture.net/pages/index3.html").then(function (status) { //status有success和fail
            if (status === 'fail') {
                console.log('open page fail!');
            } else {
                //进行pdf生成,加页面返回的status判断,确保页面正常打开.
                // 给一个定时让要被捕捉的页面的html和js加载完成,否则可能页面会没有加载完就执行了生成pdf操作内容确实
                setTimeout(function () {
                    page.render(__dirname + '/example.png');
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