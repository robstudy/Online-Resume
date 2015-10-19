$(document).ready(function(){

	var workClicked = true, projectClicked = true, eduClick = true;

	$('.workClick').click(function(){
		if (workClicked === false) {
			$('.work-entry').velocity('fadeIn', {duration: 500});
			workClicked = true;
		}
		else {
			$('.work-entry').velocity('fadeOut', {duration: 500});
			workClicked = false;
		}
	});

	$('.projectClick').click(function(){
		if (projectClicked === false) {
			$('.project-entry').velocity('fadeIn',  {duration: 500});
			projectClicked = true;
		}
		else {
			$('.project-entry').velocity('fadeOut', {duration: 500});
			projectClicked = false;
		}
	});

	$('.eduClick').click(function(){
		if (eduClick === false) {
			$('.education-entry').velocity('fadeIn', {duration: 500});
			$('.online-entry').velocity('fadeIn', {duration: 500});
			$('.onlineClick').velocity('fadeIn', {duration: 500});
			eduClick = true;
		}
		else {
			$('.education-entry').velocity('fadeOut', {duration: 500});
			$('.online-entry').velocity('fadeOut', {duration: 500});
			$('.onlineClick').velocity('fadeOut', {duration: 500});
			eduClick = false;
		}
	});

});