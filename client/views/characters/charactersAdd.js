Template.charactersAdd.events({
	'change #uploadCharacterCover' : function(event, template) {
		var file = template.find('#uploadCharacterCover').files[0];
		console.log(file);
		
		uploadImage(file, 'characters', 'cover');
	}
});

Template.charactersAdd.fileUrl = function() {
	return Session.get('fileUrl');
};