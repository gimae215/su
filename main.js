$(document).ready(function() {
    AOS.init();
})

function move(page_name) {
    // 모든 section에서 active 클래스를 제거
    $('section').removeClass('active');

    // 새로운 페이지 섹션에 active 클래스 추가
    $('.' + page_name).addClass('active');

    // 약간의 지연 후 AOS refresh 호출
    setTimeout(function() {
        AOS.refresh();
    }, 50); // 50ms 지연 후 호출
}