jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // html/css Chart
		if($('#htmlcss').length) {

			var doughnutData = [{
	        value: 50,
	        color: "#74cfae"
	      },
	      {
	        value: 50,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("htmlcss").getContext("2d")).Doughnut(doughnutData);
		};

		// Javascript Chart
		if($('#javascript').length) {
			var doughnutData = [{
					value: 20,
					color: "#74cfae"
				},
				{
					value: 80,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
		}

		// Ruby Chart
		if($('#ruby').length) {
			var doughnutData = [{
					value: 50,
					color: "#74cfae"
				},
				{
					value: 50,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("ruby").getContext("2d")).Doughnut(doughnutData);
		}

		// Ruby on rails Chart
		if($('#rubyonrails').length) {
			var doughnutData = [{
					value: 40,
					color: "#74cfae"
				},
				{
					value: 60,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("rubyonrails").getContext("2d")).Doughnut(doughnutData);
		}

		// tule Chart
		if($('#tule').length) {
			var doughnutData = [{
					value: 40,
					color: "#74cfae"
				},
				{
					value: 60,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("tule").getContext("2d")).Doughnut(doughnutData);
		}

				// test Chart
				if($('#test').length) {
					var doughnutData = [{
							value: 30,
							color: "#74cfae"
						},
						{
							value: 70,
							color: "#3c3c3c"
						}
					];
					var myDoughnut = new Chart(document.getElementById("test").getContext("2d")).Doughnut(doughnutData);
				}
		
				// db Chart
		if($('#db').length) {
			var doughnutData = [{
					value: 30,
					color: "#74cfae"
				},
				{
					value: 70,
					color: "#3c3c3c"
				}
			];
			var myDoughnut = new Chart(document.getElementById("db").getContext("2d")).Doughnut(doughnutData);
		}

	});
