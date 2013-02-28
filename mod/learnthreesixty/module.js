M.mod_learnthreesixty = {};

M.mod_learnthreesixty.init_redirecttolearn360 = function(Y,args,message) {
  var bodyNode = Y.one(document.body);
  bodyNode.setContent('<h1 id="myPanelContent">' + message + '</h1>');
  window.location = args;
  }
  
  M.mod_learnthreesixty.init_displayformvalues = function(Y) {
	var argums = "";
	for(var i=0; i<arguments.length;i++)
	{
		argums += arguments[i] + " # ";
	}
  }
  
  M.mod_learnthreesixty.init_submitlearnthreesixtyform = function(Y) {
  Y.one(document.formLearn360).delegate("click", M.mod_learnthreesixty.init_handleClick, "a");
  }
  
  M.mod_learnthreesixty.init_handleClick = function(e)
  {
	e.preventDefault();
	document.formLearn360.submit();
  }
