// @region GROUP MANAGEMENT

// ##### GET OR CREATE ORGANIZATIONAL GROUPS IN THE DIRECTORY #####

var Sysadmin = directory.group("Sysadmin");
if (Sysadmin === null) {
	var Sysadmin = directory.addGroup("Sysadmin" , "Sysadmin group");
	directory.save(); // save the organizational groups in the directory
}
		
var Member = directory.group("Member"); // creates the group object
if (Member === null) {
	var Member = directory.addGroup("Member" , "Member group");
	directory.save(); // save the organizational groups in the directory
}

var User = directory.group("User"); // creates the group object
if (User === null) {
	var User = directory.addGroup("User" , "User group");
	directory.save(); // save the organizational groups in the directory
}
	

// ##### GET OR CREATE FUNCTIONAL GROUPS IN THE DIRECTORY #####

var Game_Read = directory.group("Game_Read"); // creates the group object
if (Game_Read === null) {
	var Game_Read = directory.addGroup("Game_Read", "Game_Read group");
	directory.save(); // save the organizational groups in the directory
}


// ##### PUT THE ORGANIZATIONAL GROUPS INTO THE FUNCTIONAL GROUPS IN ORDER TO SET PERMISSIONS #####

Gamehost.putInto(Game_Read); // put the organizational Gamehost group into the functional Game_Read group 
Gameadmin.putInto(Game_Read); // put the organizational Gameadmin group into the functional Game_Read group

// @endregion