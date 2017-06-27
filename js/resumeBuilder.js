/*
This is empty on purpose! Your code to build the resume will go here.
 */


// $("#main").append("Sarah T Renshaw");

 var name = "S.T.Renshaw";
 var role = "Designer and Front End Developer";
 var skills = ['HTML/CSS', 'JS', 'Design'];
 var email = "strenshaw@gmail.com";
 var pic = "images/asm.jpg";  // change to me.jpg
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

$("#header").append(HTMLskillsStart);

// how to insert into ul created by helper HTMLskillsStart ??
var skills = bio.skills;

// var formattedskills = HTMLskills.replace("%data%", skills);
// $("#header").append(formattedskills);

for (var i=0; i<skills.length; i++){
  var formattedskills = HTMLskills.replace("%data%", skills[i]);
  $("#skills").append(formattedskills);
}


 // var work = {
 //    employer: 'Trigyn Tech',
 //    title: 'Design Consultant at the United Nations',
 //    dates: 'December 2016 - May 2017',
 //    description: 'Designing infographics and laying out reports; Assisting with the Office Of Administration of Justice\'s new website - redesigned with a Bootstrap framework',
 //    location: 'New York City'
 // }

 var work = {
    "jobs": [{
        "employer": "Trigyn Tech",
        "title": "Design Consultant at the United Nations",
        "location": "New York City",
        "dates": "December 2016 - May 2017",
        "description": "Designing infographics (Illustrator) and laying out reports(InDesign); Assisting with the Office Of Administration of Justice\'s new website - redesigned with a Bootstrap framework"
    }, {
        "employer": "Chess NYC, Inc",
        "title": "Design and Marketing Associate",
        "location": "New York City",
        "dates": "February 2015 - November 2016",
        "description": "Designed promotional materials such as posters, fliers, and banner ads (digital and print); updating Joomla CMS; Redesigned website with a Bootstrap framework; Email marketing using Constant Contact"
    }, {
        "employer": "Kokrobitey Institute",
        "title": "Designer",
        "location": "Accra, Ghana",
        "dates": "January 2013 - January 2014",
        "description": "Lead the marketing campaign for the Ghana School Bag initiative; Designed billboards, posters, fliers; Researched and designed educational materials that were distributed with the backpacks to schools throughout Ghana"
    }, {
        "employer": "Sartra Design",
        "title": "Designer",
        "location": "New York City",
        "dates": "August 2011 - June 2017",
        "description": "Freelance designer working with companies and individuals throughout NYC and remotely; Creation of posters, fliers, booklets and various promotional materials; Assistance with websites for artists and creation of digital archives; Digital marketing"
    }]
};

work.display = function() {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle, formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();


$("#education").append(HTMLschoolStart);

var education = {
    "schools": [{
        "name": "Concordia University",
        "dates": "2008-2010",
        "location": "Montreal, QC",
        "degree": "Ph.D. Candidate",
        "majors": ["Art, Design & Communication Studies"]
    },
    {
        "name": "Rhode Island School of Design",
        "dates": "2005-2007",
        "location": "Providence, Rhode Island",
        "degree": "Master of Fine Arts",
        "majors": ["Digital Media"]
    }, 
    {
        "name": "University of Illinois at Urbana Champaign",
        "dates": "2000-2004",
        "location": "Urbana, Illinois",
        "degree": "Bachelor of Fine Arts",
        "majors": ["Fine Art and Design"]
    }, 
    {
        "name": "Goldsmiths College, University of London",
        "dates": "2002-2003",
        "location": "London, United Kingdom",
        "degree": "Bachelor of the Arts",
        "majors": ["Art & Design Theory"]
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Web Development Nanodegree",
        "date": "May 2017",
        "url": "https://www.udacity.com"
    }, {
        "school": "Google",
        "title": "Certified in Google Analytics",
        "date": "November 2016"
    }],
};

education.display = function() {

    //loop starts below
    education.schools.forEach(function(school) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);


        // $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedschoolDates, formattedSchoolMajor, formattedSchoolLocation);
        $("#education").append(formattedSchoolName, formattedSchoolDegree, formattedschoolDates, formattedSchoolMajor, formattedSchoolLocation);
    });

    $("#education").append(HTMLschoolStart);
    $("#education").append(HTMLonlineClasses);

    //loop starts below
    education.onlineCourses.forEach(function(s) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", s.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", s.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", s.date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", s.url);


        $(".education-entry:last").append(formattedOnlineSchool, formattedOnlineTitle, formattedOnlineDates, formattedOnlineURL);

    });
};

education.display();



