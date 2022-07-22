/***
====================================================
					Menu
====================================================
***/

$(document).ready(function(){
		$("header button").click(function() {
			$("header").toggleClass("open");
			$("header a .mainLogo").toggle(1000);
		});

		$(window).scroll(function() {

			if ($("header").offset().top > 10) {
				$("header").addClass("activeheader"),
						$("header a .mainLogo").hide(1000);
			}
			else {
				$("header").removeClass("activeheader"),
						$("header a .mainLogo").show(1000);

			}
		});

		
		$('header').scrollspy({ target: '#navbar-example' })
		$('[data-spy="scroll"]').each(function () {
			var $spy = $(this).scrollspy('refresh')
		})
	})