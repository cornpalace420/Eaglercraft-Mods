ModAPI.meta.title("ModAPI dependency plugin");
ModAPI.meta.description('A little plugin that is not needed but could be usefull in the future.');
ModAPI.dependecy ||= {};
ModAPI.dependecy._registry = [];
ModAPI.dependecy.register = function (modName, modObject) {
    var mod = {id: modName}
    if (typeof modObject === "object") {
        modObj.mod = modObject;
        return mod;
    } else {
        return;
    }
};
ModAPI.dependecy.require = function (modName) {
    let modRequired;
    try {
        modRequired = ModAPI.dependecy._registry.find((a) => a = modstring);
    } catch (err) {
        alert(`Could not find mod ${modName}! Did you spell it correctly?`); //better message?
        console.error(err);
    }
    return modRequired;
};
