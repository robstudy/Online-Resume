var bio = {
    "name": "Robert Garza",
    "age": 27,
    "role": "Web Developer",
    "contact": {
        "mobile": " 1-559-797-1763",
        "email": "robstudent1988@gmail.com",
        "github": "robstudy",
        "twitter": "@robstudent1988",
        "location": "Clovis, CA"
    },
    "welcomeMessage": "\"The secret of getting ahead is getting started\" - Mark Twain",
    "skills": [
        "HTML",
        "CSS",
        "Javascript",
        "Java",
        "Objective-C"
    ],
    //"pic": "images/fry.jpg"
}

var work = {
    "jobs": [
        {
            "employer": "Aetna Life Insurance Inc.",
            "title": "Customer Service Representitive for Medicare Service Operations",
            "location": "1385 E Shaw Ave, Fresno, CA 93710",
            "dates": "September 2012 - Present",
            "description": "Call center representitive specializing in enrollment and eligibility issues, billing inquiries, appeals, and claims support."
        },
        {
            "employer": "Denny's",
            "title": "Server",
            "location": "710 W Shaw Ave, Clovis, CA 93612",
            "dates": "2010 - October 2012",
            "description": "Front staff server. Responsibilities included waiting tables, cashiering, busing, cleaning work station, and preparing to-go deliveries."
        }
    ]
}

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
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "Fresno City College",
            "location": "1101 E University Ave, Fresno, CA 93741",
            "degree": "AS",
            "major": "Computer Information Systems",
            "dates": "2014-2015"
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
}

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
		for(skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
		}
	}
}

work.display = function() {
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formatedJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formatedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formatedEmployerTitle = formatedJob + formatedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formatedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for(project in projects.listOfProjects) {

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.listOfProjects[project].title);
		$(".project-entry").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.listOfProjects[project].dates);
		$(".project-entry").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.listOfProjects[project].description);
		$(".project-entry").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.listOfProjects[project].images);
		$(".project-entry").append(formattedImage);
	}
}

education.display = function(){
	$("#education").append(HTMLschoolStart);
	for(school in education.schools){
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry").append(formattedName);
		$(".education-entry").append(formattedDegree);
		$(".education-entry").append(formattedDates);
		$(".education-entry").append(formattedLocation);
		$(".education-entry").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLonlineStart);
	for(classes in education.onlineCourses){
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[classes].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[classes].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[classes].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[classes].url);
		$(".online-entry").append(formattedOnlineTitle).css("padding-left", "5%").css("padding-right", "5%");
		$(".online-entry").append(formattedOnlineSchool);
		$(".online-entry").append(formattedOnlineDates);
		$(".online-entry").append(formattedURL);
	}
}

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
