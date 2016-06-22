"use strict";
function loadData() {
    console.log("loadData executed");
    var button=document.getElementById("load_data");
    button.style.display = "none";
    loadFile();
}

function loadFile() {
    console.log("loadFile executed");
    var xmlhttp = new XMLHttpRequest();
    var url = "json/mitglieder.json";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var mitglieder = JSON.parse(xmlhttp.responseText);
    //        console.log(mitglieder);
            displayJson(mitglieder);
        }
    };
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}

function displayJson(info) {
    console.log("diplayJson executed");
    //console.log(info);
    var out = "<table><tr><th>Name</th><th>Vorname</th><th>Email</th><th>Gruppe</th></tr>";
    //console.log(info.length);
    for (var i = 0; i < info.length; i++) {
        out+="<tr id="+ i + "><td>" 
                + info[i].Name +
                "</td><td>"
                + info[i].Vorname +
                "</td><td>"
                + info[i].Email +
                "</td><td> <button id=\"btnadd"+i+"\" onclick=\"addClick("+i+")\">add</button> <button id=\"btndel"+i+"\" onclick=\"delClick("+i+")\">remove</button></td></tr>";
        
                
            }
        out+="</table>";
    
    document.getElementById("mitglieder").innerHTML = out;
}

function addClick(i) {
    console.log("addClick executed");
    //console.log(add);
    var add=document.getElementById("liste").innerHTML;
    console.log("UID"+i);
    if (document.getElementById("UID"+i)){
    
    }
    else {
        add+="<li id=\"UID"+i+"\">";
        console.log("UID"+i+"else");
        add=add.replace(/(simple)(?![^<>]*>)/gi, " ");
        add+=document.getElementById(i).innerHTML;
        add=add.replace(/(simple)(?![^<>]*>)/gi, " ");
        add+="</li>";
        document.getElementById("liste").innerHTML=add;
    }
    
}
function delClick(i) {
    console.log("delClick executed");
    if (document.getElementById("UID"+i)){
        var rm = document.getElementById("UID"+i);
        rm.parentNode.removeChild(rm);
    }
    else {}
    
}