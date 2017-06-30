 var work = {
    "jobs": [{
        "employer": "Trigyn Tech",
        "title": "Design Consultant at the United Nations",
        "location": "New York City",
        "dates": "December 2016 - May 2017",
        "description": "Designing infographics (Illustrator) and laying out reports(InDesign); Assisting with the Office Of Administration of Justice's new website - redesigned with a Bootstrap framework"
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
        "dates": "August 2010 - June 2017",
        "description": "Freelance designer working with companies and individuals throughout NYC and remotely; Creation of posters, fliers, booklets and various promotional materials; Assistance with websites for artists and creation of digital archives; Digital marketing"
    }]
}

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
        "date": "November 2016",
        "url": "https://www.Google.com"
    }]
}

var projects = {
    "projects": [{
        "title": "Online Portfolio",
        "dates": "October 2014",
        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree.",
        "images": ["https://placeimg.com/300/200/nature", "https://placeimg.com/300/200/people"],
        "url": "http://www.sartradesign.com"
    }, {
        "title": "HTML5 Canvas Game",
        "dates": "July 2017",
        "description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer Nanodegree.",
        "images": ["https://placeimg.com/300/200/arch", "https://placeimg.com/300/200/nature"],
        "url": "http://www.sartradesign.com"
    }, {
        "title": "Web Development Wiki",
        "dates": "June 2017 - August 2017",
        "description": "Created an online wiki for Udacity's Web Development Course.",
        "images": ["https://placeimg.com/300/200/tech", "https://placeimg.com/300/200/nature"],
        "url": "http://www.sartradesign.com"
    }]
};

projects.display = function () {
   //start loop
   projects.projects.forEach(function(project) {
      
      $('#projects').append(HTMLprojectStart);

       project.images.forEach(function(image) {
        var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
        $('.project-entry:last').append(formattedProjectImage);
      });


      var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title).replace('#', project.url);
      var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
      var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);

      // attach to the class of div reated in HTMLprojectStart
      $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, '<br>');
     
   });
}

projects.display();


// $("#main").append("Sarah T Renshaw");

 var name = "S.T.Renshaw";
 var role = "Designer and Front End Developer";
 //var skills = ['HTML','CSS', 'JavaScript', 'Responsive Design'];

 // var contact = {
 //  email: "strenshaw@gmail.com",
 //  github: "sartra",
 //  location: "New York City"
 // };
 
 var bio = {
    'name': name,
    'role': role,
    'contact': {
       'email': 'strenshaw@gmail.com',
       'github': 'sartra',
       'location': "New York City",
       'cell': '718.406.5303',
       'twitter': '@sartra13'
      },
    'pic': "images/asm.jpg",  // change to me.jpg
    'message': "Creative Design and Code", 
    'skills': ['HTML','CSS', 'JavaScript', 'Responsive Design']
 }


bio.display = function() {

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

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
$("#topContacts").append(formattedTwitter);


var message = bio.message;
var welcome_msg = HTMLwelcomeMsg.replace("%data%",message);
$("#header").append(welcome_msg);

var biopic = bio.pic;
var formattedBiopic = HTMLbioPic.replace("%data%", biopic);
$("#header").append(formattedBiopic);



if(bio.skills) {

  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills.join(' / '));
        $("#skills").append(formattedSkills);

   // loop to print each one on a line:      
  // bio.skills.forEach(function(skill) {   
  //       var formattedSkills = HTMLskills.replace("%data%", skill);
  //       $("#skills").append(formattedSkills);
  // });
}



$('#footerContacts').prepend(formattedLocation, formattedEmail, formattedGithub, formattedMobile, formattedTwitter);
};


bio.display();

// // how to insert into ul created by helper HTMLskillsStart ??
// var skills = bio.skills;


// for (var i=0; i<skills.length; i++){
//   var formattedskills = HTMLskills.replace("%data%", skills[i]);
//   $("#skills").append(formattedskills);
// }




work.display = function() {

    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle, formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();




education.display = function() {

    //loop starts below
    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);  // this seems to create too many repeats ?? 

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

        var formattedSchoolName_Degree = formattedSchoolName + formattedSchoolDegree;

       $(".education-entry:last").append(formattedSchoolName_Degree, formattedschoolDates, formattedSchoolMajor, formattedSchoolLocation);
        
        // $(".education-entry").append(formattedSchoolName, formattedSchoolDegree, formattedschoolDates, formattedSchoolMajor, formattedSchoolLocation);
    });



    $("#education").append(HTMLonlineClasses);

    //loop starts below
    education.onlineCourses.forEach(function(s) {

          $("#education").append(HTMLschoolStart);
          

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", s.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", s.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", s.date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", s.url).replace("#", s.url);


        var formattedOnlineTitle_School = formattedOnlineTitle +formattedOnlineSchool;

        $(".education-entry:last").append(formattedOnlineTitle_School, formattedOnlineDates, formattedOnlineURL);

        // $(".education-entry:last").append(formattedOnlineSchool, formattedOnlineTitle, formattedOnlineDates, formattedOnlineURL);

    });
};

education.display();



$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function locationizer(work_obj) {
    var locations = [];
    work_obj.jobs.forEach(function(job){
        locations.push(job.location);
    });
    console.log(locations);
    return locations; 
}

locationizer(work);

function inName(name) {
  name = name.split(' ');
  var first = name[0];
  var last = name[1];
  first = first[0].toUpperCase()+first.slice(1);
  last = last.toUpperCase();
  var fullName = first + " " + last;
  return fullName;
}

//$('#main').append(internationaizeButton);

$("#mapDiv").append(googleMap);
