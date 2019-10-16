$( "document" ).ready(function() {
    $("#button").click(function() {
        var userInput = $(".input").val();
        $(".output").text(userInput);
    })


});