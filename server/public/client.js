console.log( 'js' );
$(readyNow);

function readyNow(){
    console.log( 'JQ' );
    // this is a PROMISE (receipt of purchased burger)
    // ajax method of jQuery
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then( function( response ){
        // this is the THING we GET (burger itself)
        console.log( response );
        for( let i=0; i < response.length; i++ ){
            $( 'ul' ).append(`
                <li>"${response[i].text}" -${response[i].author}</li>
                `);
        }
    })
}
