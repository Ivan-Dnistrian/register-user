
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
            }
        })
    }});


