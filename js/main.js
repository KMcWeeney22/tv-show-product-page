var channelName = 'amc'; 

$(document).ready(function(){
	// detect the viewers screen size and change the viewport based on width
	if (screen.width <= 480) {
 document.getElementById("viewport").setAttribute("content", "width=768; initial-scale=0.5");
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
			"https://www.googleapis.com/youtube/v3/playlistItems", {
				part: 'snippet',
				maxResults: 14, 
				playlistId: 'PLC7EC9FB2E211A261',
				key:'AIzaSyCgG-caHE-r6Q4Mh-XvB0H-ceZG1jZHnXI'},
				function(data){
					$.each(data.items, function(i, item){
						var output;
						console.log(item);
						videoTitle = item.snippet.title;
						videoId = item.snippet.resourceId.videoId;
						
						output = '<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
						
						// append results into my div in my html document
						$('#related-videos').append(output);
						
					});
				}
	);
	
});