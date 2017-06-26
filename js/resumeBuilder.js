/*
This is empty on purpose! Your code to build the resume will go here.
 */


// $("#main").append("Sarah T Renshaw");

 var name = "S.T.Renshaw";
 var role = "Designer and Front End Developer";
 var skills = ['HTML/CSS', 'JS', 'Design'];
 var email = "strenshaw@gmail.com";
 var pic = "images/fry.jpg";
 var message = ""; 

 var contact = {
  email: "strenshaw@gmail.com",
  github: "sartra",
  location: "New York City"
 };
 
 var bio = {
    'name': name,
    'role': role,
    'contact': {
       'email': email,
       'github': 'sartra',
       'location': "New York City",
       'cell': '718.406.5303'
      },
    'pic': pic,
    'message': "Creative Design and Code", 
    'skills': skills
 }

 var formattedName = HTMLheaderName.replace("%data%", name);

 var formattedRole = HTMLheaderRole.replace("%data%", role);



 $("#header").append(formattedName);
 $("#header").append(formattedRole);




var _location = bio.contact.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);


var mobile = bio.contact.cell;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);


var github = bio.contact.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var email = bio.contact.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);


var message = bio.message;
var welcome_msg = HTMLwelcomeMsg.replace("%data%",message);
$("#header").append(welcome_msg);

var biopic = bio.pic;
var formattedBiopic = HTMLbioPic.replace("%data%", biopic);
$("#header").append(formattedBiopic);


// how to insert into ul created by helper HTMLskillsStart ??
var skills = bio.skills;
var formattedskills = HTMLskills.replace("%data%", skills);
$("#header").append(formattedskills);


