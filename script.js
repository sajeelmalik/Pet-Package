
var hidden = true;

$(document).on("click", "#hideShow", function (){
   hideShow();
});

$(document).on("click", ".animal-pick", function() {
    hideShow();
})

function stopVideo() {
    $("#dogVideo").css("animation", "2s hideVid")
    setTimeout(function(){
        $("#dogVideo").hide()
    }, 1800)
}

function hideShow() {
    var toolbar = $("#toolbarRender");
    var searchBar = $("#picturesRender");
    if(!hidden){ 
        var width = parseInt(toolbar.css("width")) * -1 + 23;
        toolbar.css("left", width);
        searchBar.css("bottom", "230px");
        $(".picturesWrap").css("display", "flex");
        $("#hider").text("SHOW");
        $("#hider").css("background-color", "#424874");
        $("#hider").css("color", "white");
        hidden = true;
    }
    else if(hidden){
        toolbar.css("left", "0px");
        searchBar.css("bottom", "0px");
        $("#hider").css("background-color", "rgba(255,255,255,.0)");
        $("#hider").css("color", "#424874");
        $("#hider").text("HIDE");
        hidden = false;
    }
}

function hideLanding() {
    $(".landingWrap").hide()
    $("#modalCover").hide()
    hideShow()
}

$(document).on("click", "#searchPets", function() {
   
    var toolbar = $("#toolbarRender");
    hideLanding();
    toolbar.css("top", "0px");

})

$(document).on("click", "#minimize", function() {
   
    $(".animalInfo").hide();
    $(".minimizedInfo").show();
})

$(document).on("click", ".minimizedInfo", function() {
   
    $(".minimizedInfo").hide();
    $(".animalInfo").show();
})


