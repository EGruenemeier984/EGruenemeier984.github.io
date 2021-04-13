// This sets the an array for all the options that show up in the selection list.
var options = ["Request a Tour", "Request Information", "Other"];
// This checks if the id of form_need is on the page then runs the function.
if ($('#form_need').length > 0) {
    $(function () {
        // This function creates a var for collect and loops through the options array adding the options to the inner HTML of the id.
        var collect = "";
        for (var i = 0; i < options.length; i++) {
            collect += `<option value=${i}> ${options[i]}</option>`
        }
        document.getElementById("form_need").innerHTML = collect;
    });
}
// This creates a var of btn and sets it to the id of topButton
var btn = $('#topButton');
// This function is triggered when the window is scrolled and adds the show class and removes it.
$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
// This sets the page position when the scroll top button is selected and uses jquery's animate function.
btn.on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
});
// This function is for the mobile slideout menu that opens up the menu when the button is clicked
$(function () {
    if ($(window).width() < 580) {
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

        $(function (e) {
            if ($(window).width() <= 760) {
                $("#wrapper").removeClass("toggled");
            } else {
                $("#wrapper").addClass("toggled");
            }
        });
    }
});
// Tablet Mode 
$(window).on("resize load", function () {
    if ($(window).width() < 990 && $(window).width() > 580) {
        $(".colFix1").removeClass("col-sm-5");
        $(".colFix2").removeClass("col-sm-7");
        $(".colFix1").addClass("col-auto-5");
        $(".colFix2").addClass("col-auto-7");
    } else if ($(window).width() > 990) {
        $(".colFix1").removeClass("col-auto-5");
        $(".colFix2").removeClass("col-auto-7");
        $(".colFix1").addClass("col-sm-5");
        $(".colFix2").addClass("col-sm-7");
    }
});

// CountDown Code
// This is the code for the countdown timer and defines the length for seconds, minutes, hours, and days.
if ($('#countdown').length > 0) {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    // sets the date to countdown to
    let countDown = new Date("August 1, 2019").getTime();
    // uses a function as an object to set an interval then sets the value to each id.
    x = setInterval(function () {
        let now = new Date().getTime();
        distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / (second));
        // This is the check for when the distance to the time is 0 and then it displays the final text.
        if (distance <= 0) {
            clearInterval(x);
            document.getElementById("#countH").innerText = "It's time for WELDING!"
        }

    }, second);
}


// Code for the pre-loader
// This establishes the variable for the loader
var loader;
// This function sets the variable to an order pair x being the showPage function and the time in milliseconds being the y.
function loadFunction() {
    loader = setTimeout(showPage, 2000);
    document.addEventListener("keydown", function (e) {
        if ((e.shiftKey) && (e.ctrlKey)) {
            window.open("easterEGG.html");
        }
    });
}
// This function sets the display of loader to none and the display of content div to block.
function showPage() {
    $("#contentdiv").show();
    $(".loader").hide();
}