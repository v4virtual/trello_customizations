# trello_customizations
Use it with the [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) chrome extension
Configure the extension:
1. Go to settings and jquery to libraries: https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
2. Crate a new Site and add the Trello domain url: https://trello.com
3. Add the following code to the JS section:

```Javascript
//Load the JS from Github
	  var firstScript = document.getElementsByTagName('script')[0],
	      js = document.createElement('script');
	  js.src = 'https://cdn.rawgit.com/v4virtual/trello_customizations/master/custom.js';
	  js.onload = function () {
	  	//you can call some functions from the imported file here
	  };
	  firstScript.parentNode.insertBefore(js, firstScript);

//Load the CSS from Github
	var cssId = 'TrelloCustomCss';  // you could encode the css path itself to generate id..
	if (!document.getElementById(cssId))
	{
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'https://cdn.rawgit.com/v4virtual/trello_customizations/master/custom.css';
	    link.media = 'all';
	    head.appendChild(link);
	}
