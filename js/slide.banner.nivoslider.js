
var slideIndex = 1;
var timeoutSlide;
function slideBanner(index) {
    var options = {};
    var lenImage = $(".list-banner a").length - 1;
    //$(".list-banner a").hide('fast');
    $(".list-banner a").hide();
    $(".list-banner-name ul li").removeClass("active");
    $(".list-banner a").each(function (i) {
        if (i == index) {
            //$(this).slideToggle('slow');
            //$(this).animate({ width: 'toggle' }, 500);
            //$(this).animate({ height: 'toggle' }, 500);
            $(this).toggle("slide", { direction: "right" }, 500);
            //$(this).effect("explode", options, 500, function () { $(this).toggle("slide", { direction: "right" }, 500) });
            $(".list-banner-name ul li").eq(i).addClass("active");
        }
    });
    slideIndex = slideIndex + 1;
    if (slideIndex > lenImage) { slideIndex = 0 }
    timeoutSlide = setTimeout(function () { slideBanner(slideIndex) }, 5000);
}

function initButtonSlideClick() {
    $(".list-banner").hover(function () {
        $(".banner-buttons").stop(true, true).delay(100).fadeIn(200);
    }, function () {
        $(".banner-buttons").stop(true, true).delay(100).fadeOut(200);
    });
    $("#btn-banner-prev").click(function () {
        var currentIndex = parseInt($(".list-banner-name ul li.active").attr("id"));
        currentIndex = currentIndex - 1;
        if (currentIndex < 0) {
            currentIndex = $(".list-banner a").length - 1;
        }
        clearTimeout(timeoutSlide);
        slideBanner(currentIndex);
    });
    $("#btn-banner-next").click(function () {
        var currentIndex = parseInt($(".list-banner-name ul li.active").attr("id"));
        currentIndex = currentIndex + 1;
        if (currentIndex == $(".list-banner a").length) {
            currentIndex = 0;
        }
        clearTimeout(timeoutSlide);
        slideBanner(currentIndex);

    });
    timeoutSlide = setTimeout(function () { slideBanner(1) }, 5000);
}

function slideBannerSlideName(index) {
    slideIndex = parseInt(index);
    clearTimeout(timeoutSlide);
    slideBanner(slideIndex);
}