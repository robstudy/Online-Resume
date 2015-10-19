$(document).ready(function(){

	var workClicked = false;
	$('.work-click').click(function(){
		if (workClicked === false) {
			$('.work-entry').velocity('fadeIn', {duration: 500});
			workClicked = true;
		}
		else {
			$('.work-entry').velocity('fadeOut', {duration: 500});
			workClicked = false;
		}
	});

});