Template.anime.rendered = function() {
	// Make a call to anime ratings calculator 
	// We should limit this maybe, every 24 hours 
	// using ratingUpdatedAt field. However, best 
	// to do this in a node job
	console.log(this);
	console.log (this.data);
	Meteor.call('calculateAnimeRatingById', this.data._id, function(error, result) {
		console.log(error);
		console.log(result);
	});
}