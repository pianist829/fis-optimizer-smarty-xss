/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var xss = require('smarty-xss');

module.exports = function(content, file, conf){
    fis.util.map(fis.config.get('setting.smarty'), function(key, value){
        if(!conf.hasOwnProperty(key)){
            conf[key] = value;
        }
    });
	xss.config(conf);
	return xss.repair(content);
};

module.exports.defaultOptions = {
    'escapeMap' : {
        'js' : 'f_escape_js',
        'html' : 'f_escape_xml',
        'data' : 'f_escape_data',
        'path' : 'f_escape_path',
        'event' : 'f_escape_event',
        'no_escape' : 'escape:none'
    }
};