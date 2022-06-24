// ==UserScript==
// @name          Anonscript
// @description   Script JVC - Permet d'anonymiser (au même sens que sur 4chan) à vos yeux.
// @author        Valamy
// @namespace     https://jeuxvideo.com
// @match         https://*.jeuxvideo.com/forums/*
// @match         https://*.jeuxvideo.com/recherche/forums/*
// @run-at        document-end
// @version       0.1
// @license       BSD
// ==/UserScript==

    document.querySelectorAll("a.bloc-pseudo-msg.text-user").forEach((elem) => console.log(elem.innerText = 'Kheynon'));
    document.querySelectorAll(".bloc-mp-pseudo").forEach((elem) => elem.parentNode.removeChild(elem));
