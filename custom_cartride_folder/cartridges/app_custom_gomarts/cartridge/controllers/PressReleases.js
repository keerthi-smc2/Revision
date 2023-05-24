'use strict';

var server = require('server');


server.get('Show', function (req, res, next) {
    var Resource = require('dw/web/Resource');
    var URLUtils = require('dw/web/URLUtils');

    var ceoName = Resource.msg('ceo.name', 'about', null);
    var vpName = Resource.msg('vp.name', 'about', null);

    var breadcrumbs = [
        {
            htmlValue: Resource.msg('global.home', 'common', null),
            url: URLUtils.home().toString()
        }];
        res.render('pressReleases/pressReleases',{
            ceo: ceoName,
            vp: vpName,
            breadcrumbs: breadcrumbs,
        });
    next();
});
module.exports = server.exports();