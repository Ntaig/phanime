import DS from 'ember-data';

var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	user_id: belongsTo('user', {async: true}),
	title: attr(),
	slug: attr(),
	cover_image: attr(),
	
	// Get full url of anime cover image
	cover_image_url: function() {
		return "http://cdn.phanime.com/images/anime/cover/" + this.get('cover_image');
	}.property('cover_image'),

	banner_image: attr(),

	banner_image_url: function() {
		return "http://cdn.phanime.com/images/anime/banner." + this.get('banner_image');
	}.property('banner_image_url'),

	type: attr(),
	status: attr(),
	start_date: attr(),
	end_date: attr(),
	version: attr(),
	age_rating: attr(),
	description: attr(),
	season_number: attr(),
	total_episodes: attr(),
	episode_duration: attr(),
	main_alternative_title: attr(),
	alternative_titles: attr(),
	featured: attr(),
	rating: attr(),
	rating_count: attr(),
	rating_updated_at: attr(),
	episodes: hasMany('episode', {async: true}),
	genres: hasMany('genre', {async: true}),
	characters: hasMany('character', {async: true}),
	people: hasMany('person', {async: true}), // Staff only, not voice actors
	producers: hasMany('producer', {async: true}),


});
