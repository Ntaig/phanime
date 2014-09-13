CharacterController = RouteController.extend({
	
	// onBeforeAction: function () {
	// 	console.log('Thing are going well');
	// },

	onAfterAction: function () {
		if (this.ready()) {
			var character = this.data();

			SEO.set({
				title: character.fullName() + " " + siteSettings.separator + " " + siteSettings.title,
				meta: {
					'description' : character.biography
				},
				og: {
					'title' : character.fullName() + " " + siteSettings.separator + " " + siteSettings.title,
					'description' : character.biography,
					'type' : 'profile',
					'image' : character.coverImageUrl(),
				}
			});
		}
	},

	waitOn: function () {
		return Meteor.subscribe('character', this.params._id);
	},

	data: function () {
		var character = Characters.findOne({_id: this.params._id});

		if (this.ready()) {

			if (character) {
				return character;
			} else {
				this.render('fourOhFour');
			}

		}

	}

});