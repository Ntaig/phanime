Template.customListsCreate.events({

	'click #createCustomListBtn' : function(event, template) {
		var title = $('#listTitle').val().trim();
		var description = $('#listDescription').val().trim();
		var type = "anime";
		var privacy = $('#listPrivacy').attr('aria-pressed');
		var disableComments = $('#listDisableComments').attr('aria-pressed');

		console.log(privacy + " " + disableComments);

		var customListObj = {
			type: type,
			userId: Meteor.userId(),
			title: title,
			disableComments: JSON.parse(disableComments),
			privacy: JSON.parse(privacy)
		};

		// Add the description of the list if it exists
		if (description) {
			customListObj.description = description;
		}

		CustomLists.insert(customListObj, function(error, _id) {
			if (!error) {
				console.log(_id);
				// This is where we'll redirect the user to the edit version 
				// of the list so they can add entries
				// Router.go('')
			} else {
				Notifications.error("Custom list not created", error.message);
			}
		}); 
	}

});


