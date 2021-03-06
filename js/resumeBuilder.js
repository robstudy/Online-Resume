var bio = {
    "name": "Robert Garza",
    "age": 27,
    "role": "Web Developer",
    "contact": {
        "mobile": "1-559-797-1763",
        "email": "robstudent1988@gmail.com",
        "github": "robstudy",
        "twitter": "@robstudent1988",
        "location": "Clovis, CA"
    },
    "welcomeMessage": "I enjoy programming and working with web technologies. I'm eager to learn and look forward to developing new skills and mastering those I've acquired.",
    "skills": [
        "HTML",
        "CSS",
        "Javascript",
        "BootStrap",
        "JQuery",
        "Java",
        "Objective-C"
    ],
    //"pic": ""
};

var work = {
    "jobs": [
        {
            "employer": "Aetna Life Insurance Inc.",
            "title": "Customer Service Representitive for Medicare Service Operations",
            "location": "1385 E Shaw Ave, Fresno, CA 93710",
            "dates": "September 2012 - Present",
            "description": "Call center representitive specializing in enrollment and eligibility issues, billing inquiries, appeals, and claims support."
        },
        /*{
            "employer": "Denny's",
            "title": "Server",
            "location": "710 W Shaw Ave, Clovis, CA 93612",
            "dates": "2010 - October 2012",
            "description": "Front staff server. Responsibilities included waiting tables, cashiering, busing, cleaning work station, and preparing to-go deliveries."
        }*/
    ]
};

var projects = {
    "listOfProjects": [
        {
            "title": "Portfolio",
            "dates": 2015,
            "description": "A portfolio created with using the BootStrap framework.",
            "images": "images/PortImage.png"
        },
        {
        	"title": "Arcade Game Clone",
        	"dates": 2015,
        	"description": "An arcade game based on the arcade game frogger.",
        	"images": "images/gameImage.png"
        },
        {
        	"title": "Neighborhood Map",
        	"dates": 2015,
        	"description": "A google map with custom markers for local Japanese and Chinese restaurants.",
        	"images": "images/GoogleMapProject.png"
        },
        {
        	"title": "Website Obtimization",
        	"dates": 2015,
        	"description": "A pre-made website with slow loading and rendering optimized to obtain a page speed score higher than 90 and quick loading.",
        	"images": "images/WebsiteOptimization.png"
        },
        {
        	"title": "Udacity Feed Reader Test",
        	"dates": 2015,
        	"description": "This project focuses on running a series of page tests using Jasmine.js on a Udacity RSS feed reader.",
        	"images": "images/FeedReader.png"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Fresno City College",
            "location": "1101 E University Ave, Fresno, CA 93741",
            "degree": "AS",
            "major": "Computer Information Systems",
            "dates": "2014-2016"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Nano-degree",
            "school": "Udacity",
            "dates": 2015,
            "degree": "Front-End Nano-degree",
            "url": "https://profiles.udacity.com/u/robertogarza"
        }
    ]
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	//var formattedBioPic = HTMLbioPic.replace("%data%", bio.pic);
	//$("#header").append(formattedBioPic);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
	$("#topContacts").append(formattedEmail);

	var formattedGit = HTMLgithub.replace("%data%", bio.contact.github);
	$("#topContacts").append(formattedGit);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
	$("#topContacts").append(formattedTwitter);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(skill){
		var formattedSkill = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkill);
		});
	}
};

work.display = function() {
	work.jobs.forEach(function(job){
		$("#workExperience").append(HTMLworkStart);
		var formatedJob = HTMLworkEmployer.replace("%data%", job.employer);
		var formatedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formatedEmployerTitle = formatedJob + formatedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formatedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	});
};

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	projects.listOfProjects.forEach(function(project){

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		$(".project-entry").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", project.images);
		$(".project-entry").append(formattedImage);
	});
};

education.display = function(){
	$("#education").append(HTMLschoolStart);
	education.schools.forEach(function(school){
		var formattedName = HTMLschoolName.replace("%data%", school.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
		$(".education-entry").append(formattedName);
		$(".education-entry").append(formattedDegree);
		$(".education-entry").append(formattedDates);
		$(".education-entry").append(formattedLocation);
		$(".education-entry").append(formattedMajor);
	});
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLonlineStart);
	education.onlineCourses.forEach(function(classes){
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", classes.title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", classes.school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", classes.dates);
		var formattedURL = HTMLonlineURL.replace("%data%", classes.url);
		$(".online-entry").append(formattedOnlineTitle).css("padding-left", "5%").css("padding-right", "5%");
		$(".online-entry").append(formattedOnlineSchool);
		$(".online-entry").append(formattedOnlineDates);
		$(".online-entry").append(formattedURL);
	});
};

function mapDisplay() {
	$("#mapDiv").append(googleMap);
}

function footerDisplay() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
	$("#footerContacts").append(formattedEmail);

	var formattedGit = HTMLgithub.replace("%data%", bio.contact.github);
	$("#footerContacts").append(formattedGit);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
	$("#footerContacts").append(formattedTwitter);
}

bio.display();
work.display();
projects.display();
education.display();
mapDisplay();
footerDisplay();
