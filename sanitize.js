/*
Author: Abhijeet Rastogi (shadyabhi)
Email: abhijeet.1989@gmail.com
*/

GoogleLinksSanitizer = {
    init : function () {
        //This is when User opens Google's homepage & searches from there (AJAX and shit)
        window.onhashchange = function() {
            //Sometimes, all_links didn't contain all the links, so I added a delay
            setTimeout(GoogleLinksSanitizer.sanitize, 800);
            };
        
        //Check if User uses omnibar in chrome to search on google
        if (window.location.href.indexOf("/search?") !== -1){
            GoogleLinksSanitizer.sanitize();    
            }
        },

    sanitize: function () {

            //If there is something after the baseUrl.
        if (window.location.href.length - window.location.origin.length > 1){
            inject = '(' + function() {
                var all_main_links = document.getElementsByClassName("r");
                for (i=0; i<all_main_links.length; i++){
                    var current_link = all_main_links[i].childNodes[0];
                    current_link.onmousedown = null;
                    }

                var osl_links = document.getElementsByClassName("osl");
                if (osl_links.length > 0) {
                    osl_links = osl_links[0].getElementsByTagName("a");
                    for (i=0; i < osl_links.length; i++){
                        osl_links[i].onmousedown = null;
                        }
                    }

                var tl_links = document.getElementsByClassName("tl");
                for (i=0; i < tl_links.length; i++){
                    tl_link = tl_links[i].getElementsByTagName("a");
                    if (tl_link.length > 0) {
                        tl_link[0].onmousedown = null;
                        }
                    }
                } + ')();';
            var script = document.createElement('script');
            script.textContent = inject;
            (document.head||document.documentElement).appendChild(script);
            }
        }
};

GoogleLinksSanitizer.init();
