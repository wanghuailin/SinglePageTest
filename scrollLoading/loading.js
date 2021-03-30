let loading = {
    timerFunc: -1,
    timer: 0,
    timeoutValue: 10,
    percent: 0,
    /**
     * loading 显隐
     */
    showLoading: function () {
        if(loading.timerFunc !== -1) return false
        loading.timer = 0;
        loading.timerFunc = setInterval(function () {
            loading.timer++;
            loading.percent = (1 - 1 / (1 / 20 * loading.timer + 1)) * 100;
            loading.percent = parseInt(loading.percent);
            if (document.body.querySelector('.animationEffect') && loading.percent > 20) {
                document.body.querySelector('.animationEffect').classList.add('animation');
            }
            document.body.querySelector('.progressBar').style.width = loading.percent + '%';
            document.body.querySelector('.percent').innerHTML = loading.percent + '%';
        }, 140)
        document.getElementById('loading').style.display = 'block';
    },
    hideLoading: function () {
        clearInterval(loading.timerFunc);
        loading.timerFunc = -1;
        document.getElementById('loading').style.display = 'none';
        document.body.querySelector('.progressBar').style.width = "0px";
        return null
    }

}
export default loading;