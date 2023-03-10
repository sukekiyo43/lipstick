
/// モーダルウィンドウ制御 ///

// モーダルウィンドウ開
modal_open.addEventListener('click', function () {
    modal_open_cross.classList.toggle('open');
    modal_store_open_cross.classList.toggle('open');
    window.setTimeout(function () {
        modal_store.classList.toggle('open');
    }, 1000);
});

// モーダルウィンドウ閉
modal_store_open_cross.addEventListener('click', function () {
    modal_store_open_cross.classList.toggle('open');
    modal_open_cross.classList.toggle('open');
    window.setTimeout(function () {
        modal_store.classList.toggle('open');
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
