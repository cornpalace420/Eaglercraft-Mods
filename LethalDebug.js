// By Instel
setInterval(function () {
    if (document.pointerLockElement != null){
        ModAPI.displayToChat({ msg: "§dLethal Debug §71.0.0" });
        ModAPI.displayToChat({ msg: "§7Fps: §e" + ModAPI.getFPS() + "§7 Ram: §e" + ModAPI.platform.freeMemory() + "§7/§e" + ModAPI.platform.maxMemory() + " §7KB" });
        ModAPI.displayToChat({ msg: "§7Width: §e" + ModAPI.getdisplayWidth() + "§7 Height: §e" + ModAPI.getdisplayHeight()});
    }
}, 1000);
