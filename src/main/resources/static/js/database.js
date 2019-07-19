/*$(document).ready( function () {
    // language=JQuery-CSS
    var table = $('#employeesTable').DataTable({
        "sAjaxSource": "/products",
        "sAjaxDataProp": "",
        "order": [[ 0, "asc" ]],
        "aoColumns": [
            { "mData": "product_id"},
            { "mData": "product_name" },
            { "mData": "price" },
            { "mData": "category_id" }
        ]
    })
});*/



function counter(){
    let num1 = $("#checkList").find("div").length;
        document.getElementById('checkNumb').innerHTML = '( ' +num1+' )';


    var sum = 0;
    $("#checkList").find(".productPrice").each(function() {
        var val = $.trim( $(this).text() );
        if ( val ) {
            val = parseFloat( val.replace( /грн\^/, "" ) );
            sum += !isNaN( val ) ? val : 0;
        }
    });
        document.getElementById('summary').innerHTML='Сума: '+'( ' + sum + ' )' +' грн';
}


$( "#buttons" ).on("click","div",function(e) {
    console.log("clicked");
    let dishName = e.target.parentNode.cloneNode(true);
    let li = document.createElement('li');
    li.appendChild(dishName);
    li.classList.add('order');
    console.log(li);

    li.addEventListener('click', function(e) {
        let txt = $(e.target).parent().text();
    console.log(e.target.classList);

    if (confirm('Do you want delete '+'" ' + txt + ' "' +' from check' )) {
        $(e.target).parent().remove();
        counter();
    }
    else {
        alert ( "You pressed Cancel!");
    }
});
    document.getElementById('checkList').appendChild(li);
    counter();
});

$.ajax({
    url: "/pr",
    method: "GET",
    dataType: 'json',
    success: function(data) {
        console.log(typeof(data));
        var html_to_append = '';
        $.each(data, function(i, item) {
            html_to_append +=
                '<li class="dish">' +'<DIV>'+
                '<a class="productName">' + item.product_name + '</a> ' +
                '<a class="productPrice">' +  item.price   +' грн' +'</a>' + '</DIV>' +
                '</li>';
        });
        $("#buttons").html(html_to_append);
        document.getElementById('menuNumb').innerHTML = '( ' + $("#buttons").find(".productName").length +' )';

    },
    error: function() {
        console.log(data);
    }
});

/*
ось тут я пробую брати li, які генерують на сторінці, зліва де Чек ID цього списку checkList, в мене клонується
елементи з списку товарів я їх запихаю в дівку а потім в лішку, аякс запит вище
*/
$(".bottomButtonsr").on("click", function () {

    $("#checkList div").each(function(){
        var target = $(this);
         var list = $(this).data('li').text();
         load_options(target, list);
    });

    function load_options(target, list) {
        $.ajax({
            type: 'GET',
            url: list
        }).done(function(data){

            var json = jQuery.parseJSON( data );
            console.log(data);

        });
    }
});


