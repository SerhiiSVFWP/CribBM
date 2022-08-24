$('.js-call-iframe').click(function (e) {
    e.preventDefault();

    const forIframe = $(this).data('for-iframe');
    const iframeSrc = $(this).data('iframe-src');

    // console.log("forIframe", forIframe);
    // console.log("iframeSrc", iframeSrc);

    console.log("$(forIframe)", $(forIframe));   //не працює тільки тут
    
    // $(forIframe).attr('src', iframeSrc);      //не працює тільки тут
    // $(forIframe).addClass('d-block');
    // $(this).addClass('d-none');

}); 
























// const countDate = new Date("Jan 10 2022 14:30:55").getTime();

// let x = setInterval(function(){
//     let now = new Date().getTime();

//     let distance = countDate - now;

//     let d = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
//     let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let sec = Math.floor((distance % (1000 * 60 * 60)) / 1000);

//     document.getElementById('timer').innerHTML = d + "d " + hrs + "h " + min + "m " + sec + "s ";

//     if(distance < 0){
//         clearInterval(x);
//         document.getElementById('timer').innerHTML = "Time's Up";
//     }
// });