
function priceGenerator() {
    var sum = 0;
    $("#checkList").find(".productPrice").each(function() {
        var val = $.trim( $(this).text() );
        if ( val ) {
            val = parseFloat( val.replace( /грн\^/, "" ) );
            sum += !isNaN( val ) ? val : 0;
        }
    });
    return sum;
}

function counter(){
    let num1 = $("#checkList").find("div").length;
        document.getElementById('checkNumb').innerHTML = '( ' +num1+' )';
        let sum = priceGenerator();
        document.getElementById('summary').innerHTML='Сума: '+'( ' + sum + ' )' +' грн';
}


$( "#buttons" ).on("click","div",function(e) {
    console.log("clicked");
    let dishName = e.target.parentNode.cloneNode(true);
    let li = document.createElement('li');
    li.appendChild(dishName);
    li.classList.add('order');
    //console.log(li);

    li.addEventListener('click', function(e) {
        let txt = $(e.target).parent().text();
    //console.log(e.target.classList);

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
         priceGenerator();
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


$(".bottomButtonsr").on("click", function () {
    var url = "/save";  // to fix
    var sum = priceGenerator();
    var item = {};
    var prodList =[];
    $("#checkList div").find(".productName").each(function()
    {
       prodList=$(this).text()+", "+prodList;
    });
    let username = $("#userName b").text();
        item ["products"] = prodList;
        item ["lastPrice"] = sum;
        let date = new Date().toLocaleString();
        item ["orderDate"] = date;
        item ["userName"] = username;
    console.log(item);

    $.ajax({
        type: 'POST',
        url: url,
        contentType : 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(item),
        success: function(response){
            console.log(response);
        },
        error: function(data){
            console.log(data.responseJSON);
        }
    })
});



$.ajax({
        type: "GET",
        url: "/username",
        dataType: "text",
        success: function (result) {
            console.log(result);
            $("#userName").append('<div id="userLogin">'+"Ви залогінені під іменем: " + '<b>'+ result+'</b>'+'</div>');
        }
        });







