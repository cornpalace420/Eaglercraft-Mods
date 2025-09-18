// ==UserScript==
// @name        Default Server Remover
// @namespace   Colbster937
// @match       https://eaglercraft.com/mc/*
// @match       https://eaglercraft.org/*
// @match       https://eaglercraft.ru/*
// @match       https://client.eaglercraft.dev/*
// @grant       none
// @version     1.1_01
// @author      -
// @description Removes default servers from the eaglercraft server list
// ==/UserScript==

let eaglerOpts = {
    enableMinceraft: false,
    enableSignatureBadge: false,
    container: "game_frame",
    assetsURI: "assets.epk",
    enableDownloadOfflineButton: true,
    downloadOfflineButtonLink: "https://eagdl.colbster937.dev",
    localesURI: "lang/",
    servers: []
};


var q = window.location.search;
if (
    typeof q === "string" &&
    q[0] === "?" &&
    typeof window.URLSearchParams !== "undefined"
) {
    q = new window.URLSearchParams(q);
    var s = q.get("server");
    if (s) eaglerOpts.joinServer = s;
}

Object.defineProperty(window, 'eaglercraftXOpts', {
    configurable: true,
    enumerable: true,
    get() {
        return eaglerOpts;
    },
    set(value) {
        return value;
    }
});
