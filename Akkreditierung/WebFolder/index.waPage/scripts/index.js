﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

	// Translate
	var translateWidgets = function () {
		
		// Translate Widgets
		objI18n.richTextUserName = translate("index", "richTextUserName");
		objI18n.richTextPassword = translate("index", "richTextPassword");
//		
//		objTranslation.loginUserLabel = translate("index", "loginUserLabel");
//		objTranslation.loginPasswordLabel = translate("index", "loginPasswordLabel");
//		objTranslation.loginButton = translate("index", "loginButton");
//		objTranslation.loginDialogTitle = translate("index", "loginDialogTitle");
//		objTranslation.loginCurrentUserDisplay = translate("index", "loginCurrentUserDisplay");
//		objTranslation.loginNotLoggedInDisplay = translate("index", "loginNotLoggedInDisplay");
//		objTranslation.loginText = translate("index", "loginText");
//		objTranslation.logoutText = translate("index", "logoutText");
		
		// Sync datasources
		WAF.sources.objI18n.sync();
		
	};
	
	// Login
	function signIn() {
//		// Hash userName and password
//		var hash = CryptoJS.MD5(varUserName + ':Wakanda:' + varPassword).toString();
//		
//		// Authentication
//		if (WAF.directory.loginByKey(varUserName, hash)) { // The authentication was successful
//			varCurrentUser = WAF.directory.currentUser(); // The currentUser is stored in the variable
//			varUserName = ""; // Empty varUserName
//			varPassword = ""; // Empty varPassword
//			window.location = "/app/index.html"; // The user is redirected to the app page
//		} else { // The authentication was not successful
//	
//			// Empty the local variables
//			varCurrentUser = ""; // Empty varCurrentUser
//			varUserName = ""; // Empty varUserName
//			varPassword = ""; // Empty varPassword
//			
//			// Sync the widgets with the empty variables
//			WAF.sources.varUserName.sync(); // Clear the txtUserName field
//			WAF.sources.varPassword.sync(); // Clear the txtPassword field
//			WAF.sources.varCurrentUser.sync();
//		
//			// Set the error message in the username input placeholder
//			$("#textFieldUserName").attr("placeholder", objTranslation.errorMessageLoginFailed);
//			
//			// Add errorTextField class to inform the user something goes wrong
//			$$("textFieldUserName").addClass("errorTextField");
//		}
	};


// eventHandlers// @lock

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
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
