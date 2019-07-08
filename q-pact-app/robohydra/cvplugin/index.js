var RoboHydraHead = require("robohydra").heads.RoboHydraHead;
var RoboHydraJsonHead = require("../robohydra-json-head").RoboHydraJsonHead;
var find = require("lodash/fp").find;
var cvs = require("./cvs");

exports.getBodyParts = function(conf) {
    return {
        heads: [
            RoboHydraJsonHead('/cv', () => cvs),
            RoboHydraJsonHead('/cv/:id', 
                (req,) => find({id: req.params.id}, cvs)
            )
        ],
        scenarios: {
            serverProblems: {
                instructions: "Return a 500 to all queries",
                heads: [
                    new RoboHydraHead({
                        path: '/.*',
                        handler: function(req, res) {
                            res.statusCode = 500;
                            res.send("500 - (Synthetic) Internal Server Error");
                        }
                    })
                ]
            },
            slowHeads: {
                instructions: "Slow down all queries by 2 sec",
                heads: [
                    new RoboHydraHead({
                        path: '/.*',
                        handler: function(req, res, next) {
                            setTimeout(function() {
                                next(req, res);
                            }, 2000);
                        }
                    })
                ]
            },
        }
    };
};