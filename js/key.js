$(document).ready(function(){

console.log("Web info");
console.log("Xử lý mã hóa đơn giản");
console.log("Source full nếu cần thì liên hệ fb free");
console.log("-------------------------------------");
console.log("Ý tưởng : quét link qua mã QR hoặc giao tiếp qua NFC");


showDiaLogmain();


var linkK = $('.color-fonta')
linkK.hide();

function loadK(){ // check key
    let inputK = $('#textK').val();
    var inputK2 = $('#textK');
    let key = "qc";
    let hideK = $('#fmKey');
    let textErK = $('#textErK');

    inputK2.click(function(){
        textErK.text('');
    })

    if(inputK == key){
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
function showDiaLogmain(){ 
    let dialog = $('#DLKey'),
    closeDL = $('close-dialog'),
    transition;

    dialog[0].showModal();
    transition = window.setTimeout(function() {
        dialog.addClass('show-dialog-scale');
    }, 0.5);

    $('#close-dialog').on('click', function() {
        dialog[0].close();
        closeDL.removeClass('show-dialog-scale');
        clearTimeout(transition);
    })
}


showDiaLogERweb();
function showDiaLogERweb(){ 
    let dialog = $('#DL-ER-Web'),
    closeDL = $('close-dl-er-web'),
    transition;

    $('#alertErrorWeb').on('click', function() {
        dialog[0].showModal();
        transition = window.setTimeout(function(){
            dialog.addClass('show-dialog-scale');
        }, 0.5);
    })

    $('#close-dl-er-web').on('click', function() {
        dialog[0].close();
        closeDL.removeClass('show-dialog-scale');
        clearTimeout(transition);
    })
}

showDiaLogERGit();
function showDiaLogERGit(){ 
    let dialog = $('#DL-ER-Git'),
    closeDL = $('close-dl-er-git'),
    transition;

    $('#alertErrorGit').on('click', function() {
        dialog[0].showModal();
        transition = window.setTimeout(function(){
            dialog.addClass('show-dialog-scale');
        }, 0.5);
    })

    $('#close-dl-er-git').on('click', function() {
        dialog[0].close();
        closeDL.removeClass('show-dialog-scale');
        clearTimeout(transition);
    })
}







})