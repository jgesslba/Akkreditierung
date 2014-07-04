
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'LoginHeader';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		// Translate
		var translateWidgets = function () {
		
		// Translate Widgets
		$comp.sourcesVar.objI18n.richTextUserName = translate("index", "richTextUserName");
		$comp.sourcesVar.objI18n.richTextPassword = translate("index", "richTextPassword");
		$comp.sourcesVar.objI18n.errorMessageRequired = translate("index", "errorMessageRequired");
		$comp.sourcesVar.objI18n.errorMessageLoginFailed = translate("index", "errorMessageLoginFailed");
		
		// Translate Button
		$$(getHtmlId("buttonLogin")).setValue(translate("index", "buttonLogin"));
		
		// Sync datasources
		$comp.sources.objI18n.sync();
		
		// Remove error messages and error divs
		$$(getHtmlId("textFieldUserName")).removeClass('errorTextField');
		$("#" + getHtmlId("textFieldUserName")).attr('placeholder', '');
		$$(getHtmlId("textFieldPassword")).removeClass('errorTextField');
		$("#" + getHtmlId("textFieldPassword")).attr('placeholder', '');
		
		};
		
		// Set session language for this user
		language.setUserLanguageAsync({
        	'onSuccess': function (result) {
        		sessionStorage.setItem("language", result);
				translateWidgets(); // Call the translation function for this page
        	},  
        	'onError': function (error) {
         		console.log(error);
           	},  
            'params': [sessionStorage.getItem("language"),browserLanguage = browserLang = navigator.language || navigator.userLanguage]
        });
        
        // Login
		function signIn() {
			// Hash userName and password
			var hash = CryptoJS.MD5($comp.sourcesVar.varUserName + ':Wakanda:' + $comp.sourcesVar.varPassword).toString();
		
			// Authentication
			if (WAF.directory.loginByKey($comp.sourcesVar.varUserName, hash)) { // The authentication was successful
				$comp.sourcesVar.varCurrentUser = WAF.directory.currentUser(); // The currentUser is stored in the variable
				$comp.sourcesVar.varUserName = ""; // Empty varUserName
				$comp.sourcesVar.varPassword = ""; // Empty varPassword
				// Show components logged in
				$$("componentHeader").loadComponent("/Components/LogoutHeader.waComponent");
			} else { // The authentication was not successful
	
				// Empty the local variables
				$comp.sourcesVar.varCurrentUser = ""; // Empty varCurrentUser
				$comp.sourcesVar.varUserName = ""; // Empty varUserName
				$comp.sourcesVar.varPassword = ""; // Empty varPassword
			
				// Sync the widgets with the empty variables
				$comp.sources.varUserName.sync(); // Clear the txtUserName field
				$comp.sources.varPassword.sync(); // Clear the txtPassword field
				$comp.sources.varCurrentUser.sync();
		
				// Set the error message in the username input placeholder
				$("#" + getHtmlId("textFieldUserName")).attr("placeholder", $comp.sourcesVar.objI18n.errorMessageLoginFailed);
			
				// Add errorTextField class to inform the user something goes wrong
				$$(getHtmlId("textFieldUserName")).addClass("errorTextField");
			}
		};


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
			if ($comp.sources.varPassword === "")
				$comp.sources.varPassword = $$(getHtmlId("textFieldPassword")).getValue();
		
			// Sign in
			signIn();
		}
	};// @lock

	textFieldPassword.focus = function textFieldPassword_focus (event)// @startlock
	{// @endlock
		// Remove added error class
		this.removeClass("errorTextField");
		$("#" + getHtmlId("textFieldPassword")).attr("placeholder", "");
	};// @lock

	textFieldPassword.blur = function textFieldPassword_blur (event)// @startlock
	{// @endlock
		// Error handling
		if (this.getValue() == "") {
			this.addClass("errorTextField"); // Add css class for errorTextField
			$("#" + getHtmlId("textFieldPassword")).attr("placeholder", $comp.sourcesVar.objI18n.errorMessageRequired);
		}
	};// @lock

	textFieldUserName.keyup = function textFieldUserName_keyup (event)// @startlock
	{// @endlock
		// Get the event
		event = event.which;
		
		// Use return key to login
		if ( event === 13 ) {
			
			// For IE because IE do not get the value before the keyup event happens
			if ($comp.sources.varUserName === "")
				$comp.sources.varUserName = $$(getHtmlId("textFieldUserName")).getValue();
			
			// Sign in
			signIn();
		}
	};// @lock

	textFieldUserName.focus = function textFieldUserName_focus (event)// @startlock
	{// @endlock
		// Remove added error class
		this.removeClass("errorTextField");
		$("#" + getHtmlId("textFieldUserName")).attr("placeholder", "");
	};// @lock

	textFieldUserName.blur = function textFieldUserName_blur (event)// @startlock
	{// @endlock
		// Error handling
		if (this.getValue() == "") {
			this.addClass("errorTextField"); // Add css class for errorTextField
			$("#" + getHtmlId("textFieldUserName")).attr("placeholder", $comp.sourcesVar.objI18n.errorMessageRequired);
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
