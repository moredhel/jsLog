var log = (function() {
var Logger = function() {
    //lower levels are more critical
    //by default, only log errors
    var debug = DEBUG;
    var def = 3; //the default message level, if none is specified
    var _log = [];
    var lvls = {
        'ERROR': 0,
        'WARN': 1,
        'INFO': 2
    }
    var _ret = function(c) {
        return _log[_log.length-1][c];
    }
    var _p = function() {
        var tmp = _ret('lvl').toLowerCase();
        if (console[tmp])
        {
            console[tmp](_ret('lvl'),_ret('msg'));
        }
        else {
            console.info(_ret('lvl'),_ret('msg'));
        }
    }
    var _f = function(i,l) {
        l = l || 'INFO';
        _log.add({'msg': i, 'lvl': l.toUpperCase()});
        var currentlvl = lvls[l.toUpperCase()];
        if (currentlvl === undefined) { currentlvl = def; }
        if (currentlvl <= debug) {
            return _p();
        }
    }
    return {
        'log':function(i,l) {  if (i === undefined) { return _log; }_f(i,l); },
        'debuglvl': function(l) { if (l === undefined) return debug; debug = l;},
        'setlvls': function(l) { if (l === undefined) return lvls; lvls = l;},
        'default': function(l) { if (l === undefined) return def; def = l;}
    }

}
var __a = new Logger();
var __i = Object.keys(__a);
var log = __a.log
for (var j = 0; j < __i.length; j++) {
    log[__i[j]] = __a[__i[j]];
}
delete __a;
delete __i;
return log;
})();
