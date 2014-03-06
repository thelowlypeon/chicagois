/*
 * GET yes page.
 */

exports.index = function(http) {
  return function(req, res){
    var query = req.params.query;

    var options = {
      host: 'ootheloop.com',
      port: 80,
      path: '/recent.json?limit=1',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    http.request(options, function(response) {
      var body = '';
      response.setEncoding('utf8');
      response.on('data', function (data) {
        body += data;
      });
      response.on('end', function() {
        var fact = JSON.parse(body).facts[0];
        res.render('yes', {"query": query, "fact": fact});
      });
    }).end();
  };
};
