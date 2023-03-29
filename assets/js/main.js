
/// モーダルウィンドウ制御 ///

// スクロールバーの幅の取得
let body = document.body;
let clientWidth = body.clientWidth;
let noScrollBarWidth = clientWidth;
let diff = 0;

// モーダルウィンドウ開
modal_open.addEventListener('click', function () {
    modal_open_cross.classList.toggle('open');
    modal_store_open_cross.classList.toggle('open');
    return_circle.classList.toggle('open');
    window.setTimeout(function () {
        modal_store.classList.toggle('open');
        clientWidth = body.clientWidth;
        body.classList.toggle('open');
        // スクロールバーの長さ計算
        noScrollBarWidth = body.clientWidth;
        diff = noScrollBarWidth - clientWidth;
        if (diff > 0) {
            body.style['padding-right'] = diff + 'px';
        }
    }, 1000);
});

// モーダルウィンドウ閉
modal_store_open_cross.addEventListener('click', function () {
    modal_store_open_cross.classList.toggle('open');
    modal_open_cross.classList.toggle('open');
    window.setTimeout(function () {
        body.style['padding-right'] = '0px';
        body.classList.toggle('open');
        modal_store.classList.toggle('open');
        return_circle.classList.toggle('open');
    }, 1000);
});

/// ドロップダウンメニュー制御 ///

// 上のメニューの開閉
accordion_trigger.addEventListener('click', function () {
    accordion_top.classList.toggle('open');
    accordion_front_arrow.classList.toggle('open');
});

Close_button.addEventListener('click', function () {
    accordion_top.classList.toggle('open');
    accordion_front_arrow.classList.toggle('open');
});

// 中のメニューの開閉
accordion_trigger2.addEventListener('click', function () {
    accordion_middle.classList.toggle('open');
    accordion_front_arrow2.classList.toggle('open');
});

Close_button2.addEventListener('click', function () {
    accordion_middle.classList.toggle('open');
    accordion_front_arrow2.classList.toggle('open');
});

// 下のメニューの開閉
accordion_trigger3.addEventListener('click', function () {
    accordion_bottom.classList.toggle('open');
    accordion_front_arrow3.classList.toggle('open');
});

Close_button3.addEventListener('click', function () {
    accordion_bottom.classList.toggle('open');
    accordion_front_arrow3.classList.toggle('open');
});
