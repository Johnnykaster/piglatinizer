$( "document" ).ready(function() {
    $("#button").click(function() {
        var userInput = $(".input").val();
        var pigLatinWord = pigLatinizer(userInput);
        $(".output").text(pigLatinWord);
    });
});
function pigLatinizer(input) {
    var vowels = ["a", "e", "i", "o", "u"];
    var firstLetter = input[0];
    if (vowels.includes(firstLetter)) {
        return input + "ay"
    } else {
        return input.slice(1) + firstLetter + "ay"
    }
};