// ==UserScript==
// @name         Meet DELETE FUCKING SHIT
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Delete hand rise button
// @author       DeLy Dreamer
// @match        https://meet.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    function evenHandler() {
       var e = document.getElementsByClassName("p2SYhf")[0];
        e.remove();
    }

    window.setInterval(evenHandler, 1000);
})();