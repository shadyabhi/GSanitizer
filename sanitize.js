/*
Author: Abhijeet Rastogi (shadyabhi)
Email: abhijeet.1989@gmail.com
*/

GoogleLinksSanitizer = {
    init : function () {
        window.onhashchange = function() {
        //Sometimes, all_links didn't contain all the links, so I added a delay
        setTimeout(function() {
            if (document.title.indexOf("- Google Search") >= 0){
            var all_main_links = document.getElementsByClassName("r");
            for (i=0; i<all_main_links.length; i++){
                var current_link = all_main_links[i].childNodes[0];
                current_link.removeAttribute("onmousedown");
                }
            var osl_links = document.getElementsByClassName("osl")[0].getElementsByTagName("a");
            for (i=0; i < osl_links; i++){
                osl_links[i].removeAttribute("onmousedown");
                }
            var tl_links = document.getElementsByClassName("tl");
            for (i=0; i < tl_links.length; i++){
                tl_links[i].getElementsByTagName("a")[0].removeAttribute("onmousedown");    
                }
            }
        }, 800);
        };
    }
};

GoogleLinksSanitizer.init();
