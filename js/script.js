$(document).ready(function(){
        $.ajax({
            url: "https://api.airtable.com/v0/appTcNfokoNiW3RHR/musics?api_key=keyHB9YheEhsUXTkY",
            type:"GET",
            data: "json",
            jsonp: "jsoncallback",
            success: function(data)
            {console.log(data);
                $("#template").tmpl(data.records).appendTo("#placeholder");
            },
            error: function(XMLHttpRequest, textStatus, ErrorThrown){console.log(XMLHttpRequest, textStatus, ErrorThrown)}
        });
    
    
var text = '<span class="keyword">Find Ur K-song</span>';

var currentChar = 1;
var htmltag = false;
var cache = '';


function type() {
    var str = text.substr(0, currentChar);
    var last = str.substr(str.length - 1, str.length);
    if (last != '<' && last != '>' & last != '/') {
        $("#consoleText2").html(str);
    }
    currentChar++;
    if (currentChar <= text.length) {
        if (last == '<') {
            htmltag = true;
        } else if (last == '>') {
            htmltag = false;
        }
        if (htmltag) {
            setTimeout(type, 1);
        } else {
            setTimeout(type, 50);
        }
    }
}

$(document).ready(function () {
    $("#consoleText2").html("");
    setTimeout(type, 2000);
});
    
    //document.querySelector("#placeholder.mysearch").addEventListener("click", function(){
    //document.querySelector(".audio").style.display = "flex";
//});
    
    });