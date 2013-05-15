var DEFAULT_CONF = {
	'escapeMap' : {
		'js' : 'f_escape_js',
        'html' : 'f_escape_xml',
        'data' : 'f_escape_data',
        'path' : 'f_escape_path',
        'event' : 'f_escape_event',
        'no_escape' : 'escape:none'
	},
	'leftDelimiter' : '{%',
	'rightDelimiter' : '%}',
};

module.exports = function(content, file, conf){
	conf = fis.util.merge(DEFAULT_CONF, conf);
	var xss = require('smarty-xss');
	xss.config(conf);
	return content;
}`