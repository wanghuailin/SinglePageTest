import tools from "../tools/tools"
import {apiConfig} from "../apiConfig"

let deputy = {
    initDom: function () {
        const $main = $('main')

        // 确定渲染模式
        const hee_type = $main.attr('type')

        if (hee_type === 'deputy') {
            // 如果是副窗口
            drawDeputy(2585624202612)
            drawDeputy(2585624202612)
        } else {
            drawDeputy(2585624202612)
        }

        async function drawDeputy(reId) {
            // 生成副窗口结构
            const $deputyDiv = $(`<div class="deputy"></div>`)
            $main.append($deputyDiv)

            // 生成截图效果结构
            const $shadows = $('<div class="shadows">' +
                '<div data-shadow="shadow1"></div>' +
                '<div data-shadow="shadow2"></div>' +
                '<div data-shadow="shadow3"></div>' +
                '<div data-shadow="shadow4"></div>' +
                '</div>')
            $deputyDiv.append($shadows)

            // 调接口获取图片
            const cmsId = await getImgCmsId(reId)
            const imgUrl = apiConfig.cmsHost + 'FileManage/DownLoadImage?id=' + cmsId

            // 生成图片展示结构
            const $imgBox = $(`<div class="imgBox"></div>`)
            $deputyDiv.append($imgBox)
            const $img = $(`<img src="${imgUrl}" alt="习题">`)
            $imgBox.append($img)

            // 等待图片返回
            let imgOW, imgOH //图片实际尺寸
            let imgSize = await imgLoaded(imgUrl)
            imgOW = imgSize.w
            imgOH = imgSize.h

            // 注册截图效果结构的事件
            $shadows.on('mousedown', (e) => {
                let $target = $(e.target)
                if ($target.attr('data-shadow')) {
                    $target = $target.parent()
                }

                // ocr接口参数
                let scope = {
                    leftTop: {x: 0, y: 0},
                    rightBottom: {x: 0, y: 0}
                }

                // shadow结构
                let $_shadow1 = $target.find('[data-shadow="shadow1"]')
                let $_shadow2 = $target.find('[data-shadow="shadow2"]')
                let $_shadow3 = $target.find('[data-shadow="shadow3"]')
                let $_shadow4 = $target.find('[data-shadow="shadow4"]')

                // 图片左上角坐标
                let imgPosition = {
                    x: $img[0].getBoundingClientRect().x,
                    y: $img[0].getBoundingClientRect().y
                }
                console.log(imgPosition);
                console.log(imgOW);

                // 图片box的宽高
                let imgBoxW = $imgBox[0].getBoundingClientRect().width;
                let imgBoxH = $imgBox[0].getBoundingClientRect().height;

                //图片box的左边距
                let imgBoxX = $deputyDiv[0].getBoundingClientRect().left;
                let imgBoxY = $deputyDiv[0].getBoundingClientRect().top;
                console.log(imgBoxX, imgBoxY)

                // 获取鼠标点击坐标
                let sp = {x: e.pageX, y: e.pageY}

                // 转换为相对于图片的坐标
                let downXY = getXY(sp.x, sp.y)

                // 清除样式
                removeAllAttr()

                // 设置遮罩位置
                $_shadow1.css('left', 0).css('top', 0).css('right', 0).css('bottom', imgBoxH - sp.y)
                $_shadow2.css('left', 0).css('top', sp.y).css('right', imgBoxW - sp.x).css('bottom', imgBoxH - sp.y)
                $_shadow3.css('left', 0 + sp.x).css('top', sp.y).css('right', 0).css('bottom', imgBoxH - sp.y)
                $_shadow4.css('left', 0).css('top', sp.y).css('right', 0).css('bottom', 0)

                let direction = 0

                $shadows.on('mousemove', (e) => {
                    // 获取鼠标点击坐标
                    let p = {x: e.pageX, y: e.pageY}

                    // 确定方向
                    direction = 0
                    if (getAngleByX(sp, p) >= 0 && getAngleByX(sp, p) <= 90) {
                        //0 左上→右下
                        direction = 0
                        // 设置遮罩位置
                        $_shadow2.css('bottom', imgBoxY + imgBoxH - p.y)
                        $_shadow3.css('left', imgBoxX + p.x).css('bottom', imgBoxY + imgBoxH - p.y)
                        $_shadow4.css('top', imgBoxY + p.y)
                    } else if (getAngleByX(sp, p) > 90 && getAngleByX(sp, p) <= 180) {
                        //1 右上→左下
                        direction = 1
                        // 设置遮罩位置
                        $_shadow2.css('right', imgBoxX + imgBoxW - p.x).css('bottom', imgBoxY + imgBoxH - p.y)
                        $_shadow3.css('left', imgBoxX + sp.x).css('bottom', imgBoxY + imgBoxH - p.y)
                        $_shadow4.css('top', imgBoxY + p.y)
                    } else if (getAngleByX(sp, p) < 0 && getAngleByX(sp, p) > -90) {
                        //2 左下→右上
                        direction = 2
                        // 设置遮罩位置
                        $_shadow1.css('bottom', imgBoxY + imgBoxH - p.y)
                        $_shadow2.css('top', imgBoxY + p.y).css('right', imgBoxX + imgBoxW - sp.x).css('bottom', imgBoxY + imgBoxH - sp.y)
                        $_shadow3.css('top', imgBoxY + p.y).css('left', imgBoxX + p.x).css('bottom', imgBoxY + imgBoxH - sp.y)
                        $_shadow4.css('top', imgBoxY + sp.y)
                    } else if (getAngleByX(sp, p) >= -180 && getAngleByX(sp, p) <= -90) {
                        //3 右下→左上
                        direction = 3
                        // 设置遮罩位置
                        $_shadow1.css('bottom', imgBoxY + imgBoxH - p.y)
                        $_shadow2.css('top', imgBoxY + p.y).css('right', imgBoxX + imgBoxW - p.x).css('bottom', imgBoxY + imgBoxH - sp.y)
                        $_shadow3.css('top', imgBoxY + p.y).css('left', imgBoxX + sp.x).css('bottom', imgBoxY + imgBoxH - sp.y)
                        $_shadow4.css('top', imgBoxY + sp.y)
                    }

                })

                $shadows.on('mouseup', (e) => {
                    // 获取鼠标点击坐标
                    let p = {x: e.pageX, y: e.pageY}

                    // 转换为相对于图片的坐标
                    let upXY = getXY(p.x, p.y)

                    console.log('按下坐标', downXY)
                    console.log('抬起坐标', upXY)

                    let sxy = ''
                    let exy = ''
                    switch (direction) {
                        //0 左上→右下
                        case 0: {
                            sxy = downXY
                            exy = upXY
                            break
                        }
                        //1 右上→左下
                        case 1: {
                            sxy = {
                                x: upXY.x,
                                y: downXY.y
                            }
                            exy = {
                                x: downXY.x,
                                y: upXY.y
                            }
                            break
                        }
                        //2 左下→右上
                        case 2: {
                            sxy = {
                                x: downXY.x,
                                y: upXY.y
                            }
                            exy = {
                                x: upXY.x,
                                y: downXY.y
                            }
                            break
                        }
                        //3 右下→左上
                        case 3: {
                            sxy = upXY
                            exy = downXY
                            break
                        }
                    }

                    // 转换为原图大小的坐标
                    scope.leftTop.x = sxy.x / imgBoxW * imgOW
                    scope.leftTop.y = sxy.y / imgBoxH * imgOH
                    scope.rightBottom.x = exy.x / imgBoxW * imgOW
                    scope.rightBottom.y = exy.y / imgBoxH * imgOH

                    // 注销
                    $shadows.off('mousemove')
                    $shadows.off('mouseup')

                    // 调ocr接口
                    tools.api('ocr.getWordByPoint', {
                        resourceid: cmsId,
                        leftup: encodeURIComponent(parseInt(scope.leftTop.x) + ',' + parseInt(scope.leftTop.y)),
                        rightdown: encodeURIComponent(parseInt(scope.rightBottom.x) + ',' + parseInt(scope.rightBottom.y))
                    }, (data) => {
                        console.log(data)
                        // if (hee_type === 'main') {
                        //     main.renderExeList(data)
                        // } else {
                        //     window.opener.postMessage({
                        //         opration: 'renderExeList',
                        //         str: data
                        //     }, '*')
                        // }
                    })
                })

                /**
                 * 转换坐标，相对图片
                 * @param x
                 * @param y
                 * @returns {{x: number, y: number}}
                 */
                function getXY(x, y) {
                    let xy = {x: 0, y: 0}

                    xy.x = x - imgPosition.x
                    xy.y = y - imgPosition.y

                    return xy
                }

                /**
                 * 清除所有遮罩的样式
                 */
                function removeAllAttr() {
                    for (let oneChild of document.body.querySelectorAll('[data-shadow]')) {
                        oneChild.removeAttribute('style')
                    }
                }

                /**
                 * 计算两点连线，和X轴的夹角
                 * @param point1
                 * @param point2
                 * @returns {number}
                 */
                function getAngleByX(point1, point2) {
                    return Math.round(Math.atan2((point2.y - point1.y), (point2.x - point1.x)) / Math.PI * 180)
                }

            })
        }

        // ----------------------- 私有方法 -----------------------
        /**
         * 获取图片cmsid
         * @returns {Promise<T>}
         */
        function getImgCmsId(reId) {
            return new Promise(resolve => {
                tools.api('user.login', {PassWord: "pass@word1", UserName: "19999999939"}, (cmsId) => {
                    cmsId = reId
                    resolve(cmsId)
                })
            })
        }

        /**
         * 等待图片返回
         * @returns {Promise<T>}
         */
        function imgLoaded(imgUrl) {
            let img = new Image()
            img.src = imgUrl
            return new Promise((resolve) => {
                img.onload = () => {
                    resolve({w: img.width, h: img.height})
                }
            })
        }
    }
}

export default deputy