$.ajax({
    url: "/pr",
    method: "GET",
    dataType: 'json',
    success: function(data) {
        console.log(typeof(data));
        let html_to_append = '';
        $.each(data, function(i, item) {
            html_to_append +=
                '<li class="dish">' +'<a>'+
                '<span class="productName">' + item.productName + '</span> ' +
                '<span class="productPrice">' +  item.price   +' грн' +'</span>' + '</a>' +
                //'<span class="productPrice">' +  item.categoryId   +' id' +'</span>' + '</a>'+
                '</li>';
        });

        $("#buttons").html(html_to_append);
        document.getElementById('menuNumb').innerHTML =
            '( ' + $("#buttons").find(".productName").length +' )';
    },
    error: function() {
        console.log(data);
    }
});


function priceGenerator() {
    let sum = 0;
    $("#checkList").find(".productPrice").each(function() {
        let val = $.trim( $(this).text() );
        if ( val ) {
            val = parseFloat( val.replace( /грн\^/, "" ) );
            sum += !isNaN( val ) ? val : 0;
        }
    });
    return sum;
}

function counter(){
    let num1 = $("#checkList").find("a").length;
        document.getElementById('checkNumb').innerHTML = '( ' +num1+' )';
        let sum = priceGenerator();
        document.getElementById('summary').innerHTML='Сума: '+'( ' + sum + ' )' +' грн';
}


$( "#buttons" ).on("click",function(e) {
    let dishName = e.target.parentNode.cloneNode(true);
    let li = document.createElement('li');
    li.appendChild(dishName);
    li.classList.add('order');

    document.getElementById('checkList').appendChild(li);
    priceGenerator();
    counter();
    //sorting
    let mylist = $('#checkList');
    let listitems = mylist.children('li').get();
    listitems.sort(function(a, b) {
        return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
    });
    $.each(listitems, function(idx, itm) { mylist.append(itm); });

        /*
           if (confirm('Do you want delete '+'" ' + txt + ' "' +' from check' )) {
               $(e.target).parent().remove();
               counter();
           }
           else {
               alert ( "You pressed Cancel!");
           }
        */

    });

$( "#checkList" ).on("click",function(e)  {
    let txt = '';
    txt = $(e.target).parent().text();
    $(e.target).attr("href", "#deleteModal");
    $(e.target).parent().attr("href", "#deleteModal");
    $("#del").html('Для видалення: ' + txt);

    $("#delete").on("click", function() {
        $(e.target).parent().remove();
        counter();
    });

    $("#cancel").click(function() {
        $("#checkList li, li a,span").each(function () {
            $(e.target).parent().removeAttr('href');
            txt = '';
            e.target = null;
        });
    });
});



$(".pay").on("click", function () {
    let url = "/save";  // to fix
    let sum = priceGenerator();
    let item = {};
    let prodList =[];
    $("#checkList a").find(".productName").each(function()
    {
       prodList=$(this).text()+", "+prodList;
    });
    let username = $("#userName b").text();
        item ["products"] = prodList;
        item ["lastPrice"] = sum;
        let date = new Date().toLocaleString();
        item ["orderDate"] = date;
        item ["userName"] = username;
   // console.log(item);

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
    });



  let  html_to_append = '<div style="margin: 0 auto">'+ '<p style=" margin-bottom: 15px">'+
      'Ви здійснили успішно оплату' +'</p>'+
      '<a class="btn" type="submit" style="background-color: green;" href="/">' +
      'Натисніть, щоб повернутись' + '</a>'+ '</div>';
    $(".content").html(html_to_append);


});



$.ajax({
        type: "GET",
        url: "/username",
        dataType: "text",
        success: function (result) {
            console.log(result);
            $("#userName").append('<div id="userLogin">'+
                "Ви залогінені під іменем: " + '<b>'+ result+'</b>'+'</div>');
        }
        });





