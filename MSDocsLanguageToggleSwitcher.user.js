// ==UserScript==
// @name         Microsoft Docs Language Toggle Switcher (Alt+s)
// @version      0.2
// @description  Use Alt+s to click on Language Toggle for Microsoft Docs site.
// @license      MIT
// @source       https://github.com/weweaaa/MSDocsLanguageToggleSwitcher
// @namespace    https://github.com/weweaaa/MSDocsLanguageToggleSwitcher
// @author       Jia
// @match        *://docs.microsoft.com/*
// @match        *://azure.microsoft.com/*
// ==/UserScript==


(function() {
    'use strict';
    document.addEventListener('keydown', (ev) => {
        if (ev.altKey && ev.key === 's') {
            var s = changeLanguage(location.href).change().toString();

            if (s && location.href !== s) {
                location.href = s;
                // console.log(s); alert(s);
            }
        }
    });

    function changeLanguage(url){
        return {
            change() {
                let url_change = url;

                if(url.includes('zh-tw')){
                    url_change = url.replace('zh-tw', 'en-us');
                }else if (url.includes('en-us')) {
                    url_change = url.replace('en-us', 'zh-tw');
                }else{
                    console.log('not mapping...');
                }
                return changeLanguage(url_change);
            },
            toString() {
                return url;
            }
        }
    }
    location.href
})();
