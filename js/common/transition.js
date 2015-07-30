/**
 * Created by anoukh on 7/30/15.
 */

var currentMainContentDiv= "#main-content";
var loginContentDiv= "#main-content-login";

$(document).ready(function(){

    $("#login").click(function(){
        $( currentMainContentDiv ).fadeOut("fast",function (){
            $( loginContentDiv ).fadeIn("fast");
        });
    })

    $("#main-btn").click(function(){
        $( loginContentDiv ).fadeOut("fast",function (){
            $(currentMainContentDiv).fadeIn("fast");
        });
    })

    $("#main-logo").click(function(){
        $( loginContentDiv ).fadeOut("fast",function (){
            $(currentMainContentDiv).fadeIn("fast");
        });
    })

});