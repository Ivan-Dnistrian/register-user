
let url;
$.ajax({
    type: "GET",
    url: "/username",
    dataType: "text",
    success: function (result) {
        url = "/get/"+result;
        document.getElementById("usr").innerHTML = result;

        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function (result) {
                var col = [];
                for (var i = 0; i < result.length; i++) {
                    for (var key in result[i]) {
                        if (col.indexOf(key) === -1) {
                            col.push(key);
                        }
                    }
                }
                var table = document.createElement("table");
                var tr = table.insertRow(-1);
                for (var i = 0; i < col.length; i++) {
                    var th = document.createElement("th");
                    th.innerHTML = col[i];
                    tr.appendChild(th);
                }
                for (var i = 0; i < result.length; i++) {
                    tr = table.insertRow(-1);
                    for (var j = 0; j < col.length; j++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = result[i][col[j]];
                    }
                }
                var divContainer = document.getElementById("demo");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);

                  /*  $("th").click (function () {
                        alert("The paragraph was clicked.")
                    });*/
                $('th').each(function (col) {

                    $(this).hover().click(function () {
                        if ($(this).is('.asc')) {
                            $(this).removeClass('asc');
                            $(this).addClass('desc selected');
                            sortOrder = -1;
                        } else {
                            $(this).addClass('asc selected');
                            $(this).removeClass('desc');
                            sortOrder = 1;
                        }
                        $(this).siblings().removeClass('asc selected');
                        $(this).siblings().removeClass('desc selected');
                        var arrData = $('table').find('tbody >tr:has(td)').get();
                        arrData.sort(function (a, b) {
                            var val1 = $(a).children('td').eq(col).text().toUpperCase();
                            var val2 = $(b).children('td').eq(col).text().toUpperCase();
                            if ($.isNumeric(val1) && $.isNumeric(val2))
                                return sortOrder == 1 ? val1 - val2 : val2 - val1;
                            else
                                return (val1 < val2) ? -sortOrder : (val1 > val2) ? sortOrder : 0;
                        });
                        $.each(arrData, function (index, row) {
                            $('tbody').append(row);
                        });
                    });
                });
            }
        })
    }

});

