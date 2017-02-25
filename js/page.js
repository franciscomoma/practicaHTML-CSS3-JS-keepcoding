function getQuote(){
    $.ajax({
        crossDomain: true,
        contentType: "jsonp",
        dataType: "jsonp",
        method: "GET",
        url: 'http://api.forismatic.com/api/1.0/',
        data: { method: "getQuote", format: "jsonp", jsonp: "parseJson", lang: "en" },
        jsonpCallback: "parseJson",
        success: function(data){
                $(".quote-container").html('<p class="quote grow-up">'+data.quoteText+'</p><p class="author grow-up">'+data.quoteAuthor+'</p>')
            }
        })
}

$('#get-a-sentence').on('click', function(){
    getQuote();
})

$(document).ready(function(){
    getQuote();
})
