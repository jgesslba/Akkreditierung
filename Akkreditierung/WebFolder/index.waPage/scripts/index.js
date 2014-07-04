
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var iconEnglish = {};	// @icon
	var textFieldUserName = {};	// @textField
	var textFieldPassword = {};	// @textField
	var iconAustrian = {};	// @icon
	var buttonLogin = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

	// Translate
	var translateWidgets = function () {
		
		// Translate Widgets
		objI18n.richTextUserName = translate("index", "richTextUserName");
		objI18n.richTextPassword = translate("index", "richTextPassword");
		
		// Translate Button
		$$("buttonLogin").setValue(objI18n.buttonLogin);
		
		// Sync datasources
		WAF.sources.objI18n.sync();
		
		// Remove error messages and error divs
		$$("textFieldUserName").removeClass('errorTextField');
		$("#textFieldUserName").attr('placeholder', '');
		$$("textFieldPassword").removeClass('errorTextField');
		$("#textFieldPassword").attr('placeholder', '');
		
	};
	
	// Login
	function signIn() {
		// Hash userName and password
		var hash = CryptoJS.MD5(varUserName + ':Wakanda:' + varPassword).toString();
		
		// Authentication
		if (WAF.directory.loginByKey(varUserName, hash)) { // The authentication was successful
			varCurrentUser = WAF.directory.currentUser(); // The currentUser is stored in the variable
			varUserName = ""; // Empty varUserName
			varPassword = ""; // Empty varPassword
			//window.location = "/app/index.html"; // The user is redirected to the app page
			// show component
		} else { // The authentication was not successful
	
			// Empty the local variables
			varCurrentUser = ""; // Empty varCurrentUser
			varUserName = ""; // Empty varUserName
			varPassword = ""; // Empty varPassword
			
			// Sync the widgets with the empty variables
			WAF.sources.varUserName.sync(); // Clear the txtUserName field
			WAF.sources.varPassword.sync(); // Clear the txtPassword field
			WAF.sources.varCurrentUser.sync();
		
			// Set the error message in the username input placeholder
			$("#textFieldUserName").attr("placeholder", objI18n.errorMessageLoginFailed);
			
			// Add errorTextField class to inform the user something goes wrong
			$$("textFieldUserName").addClass("errorTextField");
		}
	};


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

	textFieldUserName.blur = function textFieldUserName_blur (event)// @startlock
	{// @endlock
		// Error handling
		if (this.getValue() == "") {
			this.addClass("errorTextField"); // Add css class for errorTextField
			$("#textFieldUserName").attr("placeholder", objI18n.errorMessageRequired);
		}
	};// @lock

	textFieldUserName.focus = function textFieldUserName_focus (event)// @startlock
	{// @endlock
		// Remove added error class
		this.removeClass("errorTextField");
		$("#textFieldUserName").attr("placeholder", "");
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

	textFieldPassword.blur = function textFieldPassword_blur (event)// @startlock
	{// @endlock
		// Error handling
		if (this.getValue() == "") {
			this.addClass("errorTextField"); // Add css class for errorTextField
			$("#textFieldPassword").attr("placeholder", objI18n.errorMessageRequired);
		}
	};// @lock

	textFieldPassword.focus = function textFieldPassword_focus (event)// @startlock
	{// @endlock
		// Remove added error class
		this.removeClass("errorTextField");
		$("#textFieldPassword").attr("placeholder", "");
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

	buttonLogin.click = function buttonLogin_click (event)// @startlock
	{// @endlock
		// Login to the app
		signIn();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
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
            'params': [sessionStorage.getItem("language"),browserLanguage = browserLang = navigator.language || navigator.userLanguage]
        });
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("iconEnglish", "click", iconEnglish.click, "WAF");
	WAF.addListener("textFieldUserName", "blur", textFieldUserName.blur, "WAF");
	WAF.addListener("textFieldUserName", "focus", textFieldUserName.focus, "WAF");
	WAF.addListener("textFieldUserName", "keyup", textFieldUserName.keyup, "WAF");
	WAF.addListener("textFieldPassword", "blur", textFieldPassword.blur, "WAF");
	WAF.addListener("textFieldPassword", "focus", textFieldPassword.focus, "WAF");
	WAF.addListener("textFieldPassword", "keyup", textFieldPassword.keyup, "WAF");
	WAF.addListener("iconAustrian", "click", iconAustrian.click, "WAF");
	WAF.addListener("buttonLogin", "click", buttonLogin.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
