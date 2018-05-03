function User(){
	var username, password;

	function doLogin(user,pw) {
		username = user;
		password = pw;

		// do the rest of the login work
	}

	var publicAPI = {
		login: doLogin
	};

	return publicAPI;
}

// create a `User` module instance
var fred = User();

fred.login( "fred", "12Battery34!" );


/*
    Executing User() creates an instance of the User module -- a whole new scope is created, 
    and thus a whole new copy of each of these inner variables/functions. We assign this instance to fred. 
    If we run User() again, we'd get a new instance entirely separate from fred.
*/

// there's a closure in the login() function keeping them alive.