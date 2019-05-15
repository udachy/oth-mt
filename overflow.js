$(document).ready(function () {
    $(".content").hide();
    $(".show_hide").on("click", function () {
        var txt = $(".content").is(':visible') ? 'Show' : 'Hide';
        $(".show_hide").text(txt);
        $(this).next('.content').slideToggle(200);
    });
});