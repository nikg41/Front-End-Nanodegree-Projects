//bio details are here
var bio = {
	"name": "Nikhil Garg",
	"role": "Web-Developer",
	"contacts": {
		"mobile": "9041849741",
		"email": "nikhilgarg.tapa@gmail.com",
		"github": "nikg41",
		"location": "Punjab"
	},
	"welcomeMessage": "Don't Let Small Minds Convince You That Your Dreams Are Big.",
	"skills": ["C", "HTML", "CSS", "JavaScript", "Python"],
	"biopic": "images/bio.jpg"
};
bio.display = function() {
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	$("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts,#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts,#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts,#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (i = 0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
};
bio.display();
//work data is over here
//-----------------------------------------------------------------------------------------------------------
var work = {
	"jobs": [{
		"employer": "Chitkara University",
		"title": "Student",
		"dates": "2015-present",
		"description": "B.Tech CSE",
		"location": "Chitkara University,Village Jhansala,Rajpura,Punjab",
	}]
};
work.display = function() {
	for (var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title), HTMLworkDates.replace("%data%", work.jobs[i].dates), HTMLworkLocation.replace("%data%", work.jobs[i].location), HTMLworkDescription.replace("%data%", work.jobs[i].description));
	}
};
work.display();
//education details start here
//-------------------------------------------------------------
var education = {
	"schools": [{
		"name": "St. Xavier's High School",
		"location": "ST Xaviers High School, Rampura Phul, Punjab",
		"degree": "10th",
		"majors": ["PCM"],
		"dates": "2013",
		"url":"www.xavierrampura.com"
	}, {
		"name": "Chitkara University",
		"location": "Chitkara University, Village Jhansla, Patiala, Punjab",
		"degree": "B.Tech",
		"majors": ["CSE"],
		"dates": "2015-present",
		"url": "www.chitkara.edu.in",
	}],
	"onlineCourses": [{
		"title": "1. Intro To Programming",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000",
	}, {
		"title": "2. Intro To HTML and CSS",
		"school": "Udacity",
		"dates": "2017",
		"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304",
	}]
};
education.display = function() {
	for (i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
	}
	$("#education").append(HTMLonlineClasses);
	for (j = 0; j < education.onlineCourses.length; j++) {
		formattedOnlineCourses = [];
		formattedOnlineCourses.push(HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school));
		formattedOnlineCourses.push(HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates));
		formattedOnlineCourses.push(HTMLonlineURL.replace("%data%", education.onlineCourses[j].url));
		for (i = 0; i < formattedOnlineCourses.length; i++) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedOnlineCourses[i]);
		}
	}
};
education.display();
//details on projects start here
//-----------------------------------------------------------------------------------------
var projects = {
	"projects": [{
		"title": "DTMF robot without microcontroller",
		"dates": "2016",
		"description": "DTMF is the acronym for Dual tone modulation frequency. Robotic vehicle based on DTMF technology is explained in this article. Here is a circuit that operates the robot without using a microcontroller. This circuit consists of simple ICs.When a key is pressed from our mobile, it generates a tone combination of two frequencies from our keypad. In the two frequencies, one is high frequency and another one is low frequency. This frequency can be decoded by the decoder IC into binary sequence.",
		"images": ["images/robot.jpg"]
	}, {
		"title": "Fresh Tomotoes Movie Website",
		"dates": "2016",
		"description": "This consist of your some of the favourite movies.when you click on tha image of that movie you will see it's trailer",
		"images": ["images/tomato.png"]
	}, {
		"title": "Quiz using python",
		"dates": "2016",
		"description": "In this there is a quiz which is created using python. In this when a player select a level the certain questions are asked and you have to answer all of them.",
		"images": ["images/python.png"]
	}]
};
projects.display = function() {
	for (pro = 0; pro < projects.projects.length; pro++) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[pro].title), HTMLprojectDates.replace("%data%", projects.projects[pro].dates) + HTMLprojectDescription.replace("%data%", projects.projects[pro].description));
		if (projects.projects[pro].images.length > 0) {
			for (var img = 0; img < projects.projects[pro].images.length; img++) $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[pro].images[img]));
		}
	}
};
projects.display();
/*------------------------------------------
map start here*/
$("#mapDiv").append(googleMap);
