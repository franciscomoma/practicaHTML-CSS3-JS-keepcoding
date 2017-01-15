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
                $(".quote").text(data.quoteText);
                $(".author").text(data.quoteAuthor);
            }
        })
}

$('#get-a-sentence').on('click', function(){
    getQuote();
})

$(document).on('ready',function(){
    getQuote();
})
