export default {
	init() {

		/**
		 * 
		 * CONTACT FORM AJAX - vanilla JS version
		 * 
		 * This is the vanilla JS version but this is not supported in IE11 and sp
		 * there is a jQuery version commented out below of you need it.
		 *
		 * 
		 * Counterparts:
		 * - resources/views/partials/contact-form.blade.php
		 * - resources/assest/styles/components/_forms.scss
		 * - app/ajax.php
		 */

		// get contact form
		const contact_form = document.getElementById("contact-form");
		// target on submission event
		contact_form.addEventListener('submit', function (evt) {
			// Stop it submitting
			evt.preventDefault();
			// add a class for ajaxing for user UI and to stop resubmission (add sudo overlay to form)
			this.classList.add('ajaxing');
			// Run Ajax function
			contactFormAjax();
		});

		function contactFormAjax() {
			// create FormData from form fields
			let form_data = new FormData(document.getElementById("contact-form"));
			// add the wordpress ajax action to the FormData
			form_data.append('action', 'contact_form');
			// send data to app/ajax.php
			fetch(ajaxurl, {
				method: "POST",
				credentials: "same-origin",
				body: form_data,
			})
				.then((response) => response.json())
				.then((ajax_response) => {

					// Get appropriate message HTML template: success OR error 
					let response_message = document.querySelector('.contact-form-message--' + ajax_response);
					// Get form wrapper
					let response_conatiner = document.getElementById("contact-form-wrapper");
					// Add class to form wrapper
					response_conatiner.classList.add(ajax_response);
					// Replace form wrapper HTML with message
					response_conatiner.innerHTML = response_message.innerHTML;

				}).catch((error) => {
					console.log('[Contact Form Ajax Error]');
					console.error(error);
				});
		}

		/**
		 * CONTACT FORM AJAX - jQuery version
		 */
		// $('#contact-form').on('submit', function (e) {
		// 	e.preventDefault();
		// 	$(this).addClass('ajaxing');
		// 	var form_data = new FormData($('#contact-form')[0]);
		// 	form_data.append('action', 'contact_form');
		// 	$.ajax({
		// 		type: 'POST',
		// 		url: ajaxurl, // eslint-disable-line
		// 		data: form_data,
		// 		contentType: false,
		// 		processData: false,
		// 		cache: false,
		// 		success: function (ajax_response) {

		// 			let response_message = $('.contact-form-message--' + ajax_response).html();
		// 			$('#contact-form-wrapper').html(response_message).addClass(ajax_response);
		// 		},
		// 	});
		// });
	},
	finalize() {
	},
};
