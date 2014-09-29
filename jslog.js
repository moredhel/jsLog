var log = (function() {
    var _log = [];
    var _ts = function() {
        a = new Date();
        return a.getUTCHours() + ":" + a.getUTCMinutes() + ":" + a.getUTCSeconds();
    }
    var _ret = function(c) {
        return _log[_log.length-1][c];
    }
    var _t = function(i,l) {
        return _ret('lvl') + " " + _ret('msg');
    }
    var _p = function() {
        tmp = _ret('lvl').toLowerCase();
        if (console[tmp])
        {
            console[tmp](_t());
        }
        else {
            console.info(_t());
        }
    }
    var _f = function(i,l) {
        l = l || 'INFO';
        _log.add({'msg': i, 'lvl': l});
        if (l === "ERROR") {
            console.trace();
            return _p();
        }
        if (DEBUG) {

            return _p();
        }
    }
    return function(i,l) {  if (i === undefined) { return _log; }_f(i,l); }
})();
