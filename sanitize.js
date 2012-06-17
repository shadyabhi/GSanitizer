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
            var all_links = document.getElementsByClassName("r");
            console.log(all_links.length);
            for (i=0; i<all_links.length; i++){
                console.log(i);
                var current_link = all_links[i].childNodes[0];
                current_link.removeAttribute("onmousedown");
                }
            }
        }, 800);
        };
    }
};

GoogleLinksSanitizer.init();
