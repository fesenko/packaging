var handlebars = require('handlebars');

handlebars.registerHelper('decimal', function(num) {
     return num.toFixed(2);
});
