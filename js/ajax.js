$(function(){
    $(document).ready(function() {
        $.ajax({
            type: "GET",
            url : "txt/1.txt",
            cache: false
        }).done(function(text){
            $("#text").html(text);
        });
    });
    $("#button").click(function() {
        $.ajax({
            type: "GET",
            url : "txt/2.txt",
            cache: false
        }).done(function(text){
            $("#text").html(text);
        });
    });
});
