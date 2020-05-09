// Loading Function
let loading = $('#loading');
$(document).ready(function () {

        loading.fadeOut(3000, function () {

            $('body').css('overflow-y', "auto")
        })
})

// Functions of SideBar 
let openBtn = $('#sideBarBtn'),
    sideBar = $('#sideBar'),
    closeBtn = $('#closeIcon'),
    sideBarWidth = sideBar.width();

sideBar.css('left', `-${sideBarWidth}px`);
openBtn.css('left', `${sideBarWidth +5}px`);

openBtn.click(function () {

    if(sideBar.css('left') < '0px')
    {
        sideBar.animate({'left': '0px'},500);
    }
})
closeBtn.click(function () {

    sideBar.animate({'left': `-${sideBarWidth}px`},500);
})

let link = $('#links a');
link.click(function () {

    let hrefOfLink = $(this).attr('href'),
        requiredSection = $(`${hrefOfLink}`),
        offsetTop = $(requiredSection).offset().top;

    $('html, body').animate({"scrollTop": offsetTop},500);
    $(this).addClass('activeA').siblings().removeClass('activeA');

});


let homeOffsetTop = $('#home').height();
$(window).scroll( function () {

    if($(this).scrollTop() > homeOffsetTop-400)
    {
        backToTop.css("display", "block");
        openBtn.css('color','#414658');
        openBtn.find('span').text('');
    }
    else
    {
        backToTop.css("display", "none");
        openBtn.css('color','#fff');
        openBtn.find('span').text('Open');
    }
});

$(window).scroll( function () {

    let hrefOfLink, requiredSection, offsetTop;

    $('.block').each(function (index, element) {

        hrefOfLink = $(element).attr('id');

        if($(window).scrollTop() > $(this).offset().top - 400)
        {
            link.removeClass('activeA');
            $(`#links a[href="#${hrefOfLink}"]`).addClass('activeA');
        }
    })
})

// Back to Top Function
let backToTop = $('.back-to-top');
backToTop.click(function () {

    $('html, body').animate({"scrollTop": "0px"},500);
})


// Details Section Functions
let singer = $('.singer');
singer.click(function () {

    $(this).find('h3').toggleClass('activeH').end()
    .siblings().find('h3').removeClass('activeH');
    $(this).find('p').slideToggle(500).end()
    .siblings().find('p').slideUp(500);
})

// Shuffle Cards Function
var zIndex = 0;
$('.cards .card').click(function () {
   
    $(this).animate({
        
        left:'20%',
        marginTop:30
       
    },400, function () {
        
        zIndex--;
        $(this).css('z-index',zIndex);
        
    }).animate({
            
        left:$(this).css('left'),
        marginTop:0

    }, 400);
        
});

// Counter Section Function
function countDown() {
    
    let currentTime = new Date(),
        currentTimeByMillisconds = currentTime.getTime(),
        eventTime = new Date(2020, 04, 10),
        eventTimeByMillisconds = eventTime.getTime(),
        remainingTime = eventTimeByMillisconds - currentTimeByMillisconds;
    
        let seconds = Math.floor(remainingTime / 1000),
            minutes = Math.floor(seconds / 60),
            hours = Math.floor(minutes / 60),
            days = Math.floor(hours / 24);
        
        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $('#days').html(`<h3>${days} Days</h3>`);
        $('#hours').html(`<h3>${hours} Hours</h3>`);
        $('#minutes').html(`<h3>${minutes} Minutes</h3>`);
        $('#seconds').html(`<h3>${seconds} Seconds</h3>`);


        setInterval(countDown, 1000);

}
countDown();

// Dynamic Tabs Function
$('.tabs-list li').on('click', function () {
       
    $(this).addClass('active').siblings().removeClass('active');
    
    $('.content-list > div').hide();
    
    $($(this).data('content')).fadeIn();
});

// Switch Tabs Function
$('#switchTabs').on('click', function () {
   
    $(this).next('.dynamic-tabs').toggleClass('left-tabs');
    
});

// Contact Section Function
let messageBtn = $('#message'),
    maxChars = $('#maxChars').text(),
    textareaP = $('#textareaP').html();
messageBtn.keyup(function (e) {

    let availableLength = maxChars - $(this).val().length;
    if (availableLength > 0)
    {
        $('#textareaP').html(textareaP).css({"color":'#000', 'fontWeight' :'400'});
        $('#maxChars').text(availableLength);

    }
    else 
    { 
        $('#textareaP').text('Your available character have finished').css({"color":'#d62e33', 'fontWeight' :'bold'});
    }
})
