$(document).ready(function(){
	// detect the viewers screen size and change the viewport based on width
	if (screen.width <= 480) {
 document.getElementById("viewport").setAttribute("content", "width=480; initial-scale=0.5");
}
	if (screen.width <= 768) {
 document.getElementById("viewport").setAttribute("content", "width=768; initial-scale=0.5");
}
	if (screen.width <= 991) {
 document.getElementById("viewport").setAttribute("content", "width=991; initial-scale=0.5");
}
	if (screen.width <= 1199) {
 document.getElementById("viewport").setAttribute("content", "width=1199; initial-scale=0.5");
}
	if (screen.width <= 1200) {
 document.getElementById("viewport").setAttribute("content", "width=1200; initial-scale=0.5");
}
// --------------------------- 
			$.get(
				// get google developers youtube data api
			"https://www.googleapis.com/youtube/v3/playlistItems", {
				// gather information you want from the data api. 
				//For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated
				part: 'snippet',
				// limit videos shown to 8
				maxResults: 8, 
				// ID of the walking dead playlist found off of AMC's youtube channel.
				//reference http://support.andromo.com/kb/common-questions/getting-youtube-ids
				playlistId: 'PLC7EC9FB2E211A261',
				// my google developers key
				key:'AIzaSyCgG-caHE-r6Q4Mh-XvB0H-ceZG1jZHnXI'},
				function(data){
					$.each(data.items, function(i, item){
						// create output variable to contain what we want to place in our related videos div
						var output;
						console.log(item);
						videoTitle = item.snippet.title;
						videoId = item.snippet.resourceId.videoId;
						// source created to retrieve the videos from the playlist id
						output = '<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
						
						// append results into my related-videos div in my html document. 
						$('#related-videos').append(output);
						
					});
				}
	);
		
	// validate function for subscribe section at the bottom of the page.
	$('#subscribe-btn').validate({
        submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },
			rules: {
				"input-name":{
					required: true,
					number: false,
					maxlength: 128
				},
				
				"input-email": {
					required: true,
			}
			}
	});
});