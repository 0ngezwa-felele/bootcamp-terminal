

module.exports = function(RegNum,regStart) {

    var RegList = RegNum.split(",");
    var list = []
    for (var i = 0; i < RegList.length; i++) {
        var reg = RegList[i].trim()
        if (reg.startsWith(regStart)) {
            list.push(reg);
        }
    }
    return list.length;
}  