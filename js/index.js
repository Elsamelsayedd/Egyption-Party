/// <reference types="../@types/jquery" />

let textarea = $('textarea');
let characterForm =$('.character-form');

textarea.on('input', function () {
    if (textarea.val().length < 100) {
        characterForm.html(`<span class="text-danger h5"> ${100-textarea.val().length}  </span> Character Remaining`);

    } else {
        characterForm.html(`<span class="text-danger h5"> your available character finished </span> Character Remaining`);

    }
});

$('.singer-head-one').on('click',function(){
    $('.singer-text-one').slideToggle(1000);
    $('.singer-text-two').slideUp(1000);
    $('.singer-text-three').slideUp(1000);
    $('.singer-text-four').slideUp(1000);

})

$('.singer-head-two').on('click',function(){
    $('.singer-text-two').slideToggle(1000);
    $('.singer-text-one').slideUp(1000);
    $('.singer-text-three').slideUp(1000);
    $('.singer-text-four').slideUp(1000);
})

$('.singer-head-three').on('click',function(){
    $('.singer-text-three').slideToggle(1000);
    $('.singer-text-two').slideUp(1000);
    $('.singer-text-one').slideUp(1000);
    $('.singer-text-four').slideUp(1000);
})

$('.singer-head-four').on('click',function(){
    $('.singer-text-four').slideToggle(1000);
    $('.singer-text-two').slideUp(1000);
    $('.singer-text-three').slideUp(1000);
    $('.singer-text-one').slideUp(1000);
})




function date() {
const startDate = new Date('2023-03-11');

const currentDate = new Date();

const timeDifference = startDate - currentDate;

const dayDifference = Math.floor((timeDifference / (1000 * 60 * 60 * 24)));
const hourDifference = Math.abs(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const minuteDifference = Math.abs(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
const secondDifference = Math.abs(Math.floor((timeDifference % (1000 * 60)) / 1000));


$('.day').html(`${dayDifference} D`);
$('.hour').html(`${hourDifference} h`);
$('.min').html(`${minuteDifference} m`);
$('.sec').html(`${secondDifference} s`);





}

setInterval(date,1000)


console.log($('.sidebar-list').outerWidth(true));
let sidebarWidth = $('.sidebar-list').outerWidth(true)

console.log(`${sidebarWidth}`);


$('.open-list').on('click',function(){
    
        $('.sidebar-list').animate({marginLeft:"0"},1000);
        $('.open-list').animate({left:`250px`},1000)
    
    
    console.log('hello');
})



$('.icon-x').on('click',function(){
    $('.sidebar-list').animate({marginLeft:"-250px"},1000);
    $('.open-list').animate({left:`0`},1000)
})



let x = $('#Duration').offset().top



$('#homeClick').on('click',function(){
    $('body,html').animate({scrollTop:`${$('#Home').offset().top}`},5000)
})
$('#durationClick').on('click',function(){
    $('body,html').animate({scrollTop:`${$('#Duration').offset().top}px`},5000)
})
$('#detailsClick').on('click',function(){
    $('body,html').animate({scrollTop:`${$('#Details').offset().top}px`},5000)
})
$('#contactClick').on('click',function(){
    $('body,html').animate({scrollTop:`${$('#Contact').offset().top}px`},5000)
})


console.log($('#Duration').offset().top);