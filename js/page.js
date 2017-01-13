$(document).on('submit', '#contact-form', function(e){
    e.preventDefault();

    console.log(e);
})

$('#get-a-sentence').on('click',function(){

	$.ajax({
                url:   'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote',
                type:  'get',
                headers: {
                    'Content-Type':'charset:ISO-8859-1'
                },
                success:  function (response) {
                        alert(response.split("|")[0]);
                }
        });
})



/*function(e){
    console.log(getWordsNumber(e.target.value));
})*/