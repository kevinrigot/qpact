var RoboHydraHead = require("robohydra").heads.RoboHydraHead;

var RoboHydraJsonHead = (path, getObject) => new RoboHydraHead({
    path,
    handler: function(req, res) {
        res.headers['content-type'] = 'application/json; charset=utf-8';
        var response = getObject(req, res);
        if( response !== undefined ) {
            res.send(JSON.stringify(response));
        } else {
            res.statusCode = 404;
            res.send();
        }
    }
});

exports.RoboHydraJsonHead = RoboHydraJsonHead;
