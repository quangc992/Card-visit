$("#alertError").click(function(){
    alert("Xin lỗi phần này chưa được cập nhật hoặc đang được hoàn thiện !")
})

$("#alertErrorWeb").click(function(){
    alert("Web chưa hoàn thành !")
})

$("#alertErrorPhone").click(function(){
    alert("Sorry số này không được public :>")
})

// $(".avt").style.display = "block|none";
// document.getElementById('avt').style.display = "block|none";

// $('.color-fonta').hide();

var a = $('#submitKey');
var abc = document.getElementById('textKey').value;
var key = "a";

a.click(function(){
    console.log(abc);
    if( abc === key ){
        alert('ok');
    }else{
        alert('sai roi');
        console.log(abc)
    }
})