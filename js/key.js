$(document).ready(function(){


// showDiaLogmain();
dialogKey();


var linkK = $('.color-fonta')
linkK.hide();

function loadK(){ // check key
    let inputK = $('#textK').val();
    var inputK2 = $('#textK');
    let key = "qc" ;
    let key2 = "quang" ;
    let key3 = "quangc" ;
    let hideK = $('#fmKey');
    let textErK = $('#textErK');

    inputK2.click(function(){
        textErK.text('');
    })

    if(inputK == key || inputK == key2 || inputK == key3 ){
        // alert('OK');
        // $('#textK').hide();
        hideK.hide();
        linkK.show();
    }else{
        // alert('Sai');
        $('#textK').val('');
        textErK.text('Key sai hoặc không tồn tại.');
        // console.log(textErK);
    }
}

$('#submitK').click(function(){
    loadK(); // load key
});

// show dialog input key
// function showDiaLogmain(){ 
//     let dialog = $('#DLKey'),
//     closeDL = $('close-dialog'),
//     transition;

//     dialog[0].showModal();
//     transition = window.setTimeout(function() {
//         dialog.addClass('show-dialog-scale');
//     }, 0.5);

//     $('#close-dialog').on('click', function() {
//         dialog[0].close();
//         closeDL.removeClass('show-dialog-scale');
//         clearTimeout(transition);
//     })
// }


// showDiaLogERweb();
// function showDiaLogERweb(){ 
//     let dialog = $('#DL-ER-Web'),
//     closeDL = $('close-dl-er-web'),
//     transition;

//     $('#alertErrorWeb').on('click', function() {
//         dialog[0].showModal();
//         transition = window.setTimeout(function(){
//             dialog.addClass('show-dialog-scale');
//         }, 0.5);
//     })

//     $('#close-dl-er-web').on('click', function() {
//         dialog[0].close();
//         closeDL.removeClass('show-dialog-scale');
//         clearTimeout(transition);
//     })
// }

// showDiaLogERGit();
// function showDiaLogERGit(){ 
//     let dialog = $('#DL-ER-Git'),
//     closeDL = $('close-dl-er-git'),
//     transition;

//     $('#alertErrorGit').on('click', function() {
//         dialog[0].showModal();
//         transition = window.setTimeout(function(){
//             dialog.addClass('show-dialog-scale');
//         }, 0.5);
//     })

//     $('#close-dl-er-git').on('click', function() {
//         dialog[0].close();
//         closeDL.removeClass('show-dialog-scale');
//         clearTimeout(transition);
//     })
// }

// modal.style.display = "block";

function dialogKey(){
    let close = document.getElementById("btn-close-dl-k");
    let formDL = document.getElementById("DlKey");

    close.onclick = function() {
        formDL.style.display = "none";
      }
}

})