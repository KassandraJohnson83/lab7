var projects = require('../projects.json');


exports.view = function(request, response){
	projects["viewAlt"]=false
  	response.render('index', projects);
};

exports.view = dunction(req,res){
	projects["viewAlt"]=true;
	res.render('index', projects);
}
