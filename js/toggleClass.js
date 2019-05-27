jQuery(document).ready(function () {
    //MENU
    $(document).on('click', '.showMenu', function () {
        $(".menu").toggleClass("active");
        $(".bar1").toggleClass("active");
        $(".bar2").toggleClass("active");
        $(".bar3").toggleClass("active");
        $(".menuItems").toggleClass("active");
    });

    //MUZYKA
    $(document).on('click', '.note', function () {
        $(".note").toggleClass("active");
        $(".music").toggleClass("active");
        $(".play").toggleClass("active");
        if ($(".changeVolume").hasClass("active")) {
            $(".changeVolume").toggleClass("deactive");
        }
    });
    $(document).on('click', '.volume', function () {
        $(".changeVolume").toggleClass("active");
    });

    //ALBUMY
    $(document).on('click', '#albumACDC', function () {
       $(".acdc").toggleClass("active");
    });
    $(document).on('click', '#albumQUEEN', function () {
        $(".queen").toggleClass("active");
    });
    $(document).on('click', '#albumRS', function () {
        $(".rS").toggleClass("active");
    });
    $(document).on('click', '#albumRHCP', function () {
        $(".rhcp").toggleClass("active");
    });
    $(document).on('click', '#albumFF', function () {
        $(".ff").toggleClass("active");
    });
    $(document).on('click', '#albumOS', function () {
        $(".offspring").toggleClass("active");
    });
    $(document).on('click', '#albumFFDP', function () {
        $(".ffdp").toggleClass("active");
    });
    $(document).on('click', '#albumPF', function () {
        $(".pF").toggleClass("active");
    });
    $(document).on('click', '#albumSOAD', function () {
        $(".soad").toggleClass("active");
    });
    $(document).on('click', '#albumTBK', function () {
        $(".TBK").toggleClass("active");
    });
    //INFORMACJE
    $(document).on('click', '#acdcA', function () {
        $("#acdcBio").toggleClass("active");
    });
    $(document).on('click', '#queenA', function () {
        $("#queenBio").toggleClass("active");
    });
    $(document).on('click', '#rsA', function () {
        $("#rsBio").toggleClass("active");
    });
    $(document).on('click', '#rhcpA', function () {
        $("#rhcpBio").toggleClass("active");
    });
    $(document).on('click', '#ffA', function () {
        $("#ffBio").toggleClass("active");
    });
    $(document).on('click', '#osA', function () {
        $("#osBio").toggleClass("active");
    });
    $(document).on('click', '#ffdpA', function () {
        $("#ffdpBio").toggleClass("active");
    });
    $(document).on('click', '#pfA', function () {
        $("#pfBio").toggleClass("active");
    });
    $(document).on('click', '#soadA', function () {
        $("#soadBio").toggleClass("active");
    });
    $(document).on('click', '#tbkA', function () {
        $("#tbkBio").toggleClass("active");
    });
});