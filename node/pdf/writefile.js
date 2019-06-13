/**
 * Created by Wang on 2016/12/8.
 */

const phantom = require('phantom');

phantom.create().then(function (ph) {
    ph.createPage().then(function (page) {
        page.open(__dirname + "/index.html").then(function (status) {
            // page.property('viewportSize', {width: 10000, height: 500});
            page.render(__dirname + '/output.pdf').then(function () {
                console.log('Page rendered');
                ph.exit();
            });
        });
    });
});