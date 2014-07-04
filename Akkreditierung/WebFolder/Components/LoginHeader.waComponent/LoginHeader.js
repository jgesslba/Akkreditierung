
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'LoginHeader';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var iconEnglish = {};	// @icon
	var iconAustrian = {};	// @icon
	var textFieldPassword = {};	// @textField
	var textFieldUserName = {};	// @textField
	var buttonLogin = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	iconEnglish.click = function iconEnglish_click (event)// @startlock
	{// @endlock
		// Set session language for this user
		language.setUserLanguageAsync({
        	'onSuccess': function (result) {
        		sessionStorage.setItem("language", result);
				translateWidgets(); // Call the translation function for this page
        	},  
        	'onError': function (error) {
         		console.log(error);
           	},  
            'params': ["en"]
        });
	};// @lock

	iconAustrian.click = function iconAustrian_click (event)// @startlock
	{// @endlock
		// Set session language for this user
		language.setUserLanguageAsync({
        	'onSuccess': function (result) {
        		sessionStorage.setItem("language", result);
				translateWidgets(); // Call the translation function for this page
        	},  
        	'onError': function (error) {
         		console.log(error);
           	},  
            'params': ["de"]
        });
	};// @lock

	textFieldPassword.keyup = function textFieldPassword_keyup (event)// @startlock
	{// @endlock
		// Get the event
		event = event.which;
		
		// Use return key to login
		if ( event === 13 ) {
			
			// For IE because IE do not get the value before the keyup event happens
			if (WAF.sources.varPassword === "")
				WAF.sources.varPassword = $$("textFieldPassword").getValue();
		
			// Sign in
			signIn();
		}
	};// @lock

	textFieldPassword.focus = function textFieldPassword_focus (event)// @startlock
	{// @endlock
		// Remove added error class
		this.removeClass("errorTextField");
		$("#textFieldPassword").attr("placeholder", "");
	};// @lock

	textFieldPassword.blur = function textFieldPassword_blur (event)// @startlock
	{// @endlock
		// Error handling
		if (this.getValue() == "") {
			this.addClass("errorTextField"); // Add css class for errorTextField
			$("#textFieldPassword").attr("placeholder", objI18n.errorMessageRequired);
		}
	};// @lock

	textFieldUserName.keyup = function textFieldUserName_keyup (event)// @startlock
	{// @endlock
		// Get the event
		event = event.which;
		
		// Use return key to login
		if ( event === 13 ) {
			
			// For IE because IE do not get the value before the keyup event happens
			if (WAF.sources.varUserName === "")
				WAF.sources.varUserName = $$("textFieldUserName").getValue();
			
			// Sign in
			signIn();
		}
	};// @lock

	textFieldUserName.focus = function textFieldUserName_focus (event)// @startlock
	{// @endlock
		// Remove added error class
		this.removeClass("errorTextField");
		$("#textFieldUserName").attr("placeholder", "");
	};// @lock

	textFieldUserName.blur = function textFieldUserName_blur (event)// @startlock
	{// @endlock
		// Error handling
		if (this.getValue() == "") {
			this.addClass("errorTextField"); // Add css class for errorTextField
			$("#textFieldUserName").attr("placeholder", objI18n.errorMessageRequired);
		}
	};// @lock

	buttonLogin.click = function buttonLogin_click (event)// @startlock
	{// @endlock
		// Login to the app
		signIn();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_iconEnglish", "click", iconEnglish.click, "WAF");
	WAF.addListener(this.id + "_iconAustrian", "click", iconAustrian.click, "WAF");
	WAF.addListener(this.id + "_textFieldPassword", "keyup", textFieldPassword.keyup, "WAF");
	WAF.addListener(this.id + "_textFieldPassword", "focus", textFieldPassword.focus, "WAF");
	WAF.addListener(this.id + "_textFieldPassword", "blur", textFieldPassword.blur, "WAF");
	WAF.addListener(this.id + "_textFieldUserName", "keyup", textFieldUserName.keyup, "WAF");
	WAF.addListener(this.id + "_textFieldUserName", "focus", textFieldUserName.focus, "WAF");
	WAF.addListener(this.id + "_textFieldUserName", "blur", textFieldUserName.blur, "WAF");
	WAF.addListener(this.id + "_buttonLogin", "click", buttonLogin.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
