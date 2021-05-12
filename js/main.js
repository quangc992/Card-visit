$(document).ready(function(){

    var status = "Welcome card visit NFC \n ----------------------------- \n Source Web : html/css/js/jquery \n License : Ngô Văn Quang\n Note : Source ibox free";
    console.log(status);


    erWeb();
    function erWeb(){
        let close = document.getElementById("btn-close-er-web");
        let formDL = document.getElementById("DL-ER-Web");
        let link = document.getElementById("alertErrorWeb");
    
        link.onclick = function() {
            formDL.style.display = "block";
        }

        close.onclick = function() {
            formDL.style.display = "none";
        }
    }

    erGit();
    function erGit(){
        let close = document.getElementById("btn-close-er-Git");
        let formDL = document.getElementById("DL-ER-Git");
        let link = document.getElementById("alertErrorGit");
    
        link.onclick = function() {
            formDL.style.display = "block";
        }

        close.onclick = function() {
            formDL.style.display = "none";
        }
    }

    
    })