UserFollowersController = RouteController.extend({

	onAfterAction: function () {
		if (this.ready()) {
			var user = this.data();

			SEO.set({
				title: siteSettings.getFullTitle(user.displayName() + "'s Followers"),
				meta: {
					'description' : (user.profile) ? user.profile.about : ''
				},
				og: {
					'title' : siteSettings.getFullTitle(user.displayName() + "'s Library"),
					'description' : (user.profile) ? user.profile.about : '',
					'type' : 'profile',
					'image' : user.avatarImageUrl(),
				}
			});
		}
	},

	waitOn: function () {
		return Meteor.subscribe('userWithFollowers', this.params.username.toLowerCase());
	},

	data: function () {
		var user = Meteor.users.findOne({username: this.params.username.toLowerCase()});
		
		if (this.ready()) {
			
			if (user.followers)
				user.followersFull = Meteor.users.find({_id: {$in: user.followers}});

		}

		return user;
	}

});