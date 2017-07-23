$(document).ready(function(){
	/*loader*/
	setInterval(function(){
		$('#addax-loader').addClass('close');
	},3000);


    $('header .s-toggle').click(function(e){
        e.preventDefault();
		$('header').toggleClass('s-open')
    })
    	


    	 $(".drop-down").on('mouseenter mouseleave', function (e) {

    	 		var $dropDown = $(this).find('ul').first(),
    	 			$dropOffset = $dropDown.offset().left,
		    		$subDropDown = $dropDown.find('.sub-drop-down'),
			    	$container = $(".container"),
		    		$subDropDownLink = $subDropDown.find('a').first(),
		    		$subDropMenu = $subDropDown.find('ul').first();

		    	if( $dropOffset + $subDropDown.width() > $container.width() ){
		    		$subDropDownLink.addClass('leftDrop');
		    		$subDropMenu.addClass('leftDrop');
		    	}else{
		    		$subDropDownLink.addClass('rightDrop');
		    		$subDropMenu.addClass('rightDrop');
		    	}

    		});



    	 /*testimonials*/

    	 var atCar = $('.at-carousel');
    	 atCar.owlCarousel({
    	 	singleItem : true,
    	 	autoHeight : true
    	 })
    	 $('.at-nav .next').click(function(){
    	 	atCar.trigger('owl.next')
    	 })



		/*-----------addax client carousel ------------*/
	
	
		var addaxClientCarousel = $('.addax-client-carousel'),
			ClientQty = addaxClientCarousel.attr("data-client-quantity");
		
		 addaxClientCarousel.owlCarousel({
			  stagePadding: 50,
			  loop:true,
			  margin:10,
		      items : ClientQty,
		      itemsDesktop : [1000,3], //5 items between 1000px and 901px
		      itemsDesktopSmall : [900,2], // betweem 900px and 601px
		      itemsTablet: [600,1], //2 items between 600 and 0
		      itemsMobile : false,
		      addClassActive : true,
		      pagination : true
		    });




    	 /*addax hero slider 1*/

		 var ahCar = $("#addax-hero");
		    //Init the carousel
		    ahCar.owlCarousel({
		      slideSpeed : 500,
		      paginationSpeed : 500,
		      singleItem : true,
              mouseDrag : false,
		      addClassActive : true,
		      pagination : true,
              
		    });
		 
		    // Custom Navigation Events
		    $(".addax-hero-controller .ah-right-btn").click(function(){
		     ahCar.trigger('owl.next');
		    })
		    $(".addax-hero-controller .ah-left-btn").click(function(){
		     ahCar.trigger('owl.prev');
		    })


    	 /*addax vertical carousel*/

    	 var avcCar = $(".avc-container");
    	 avcCar.owlCarousel({

	    	  items : 1, //10 items above 1000px browser width
		      itemsDesktop : [1000,1], //5 items between 1000px and 901px
		      itemsDesktopSmall : [900,1], // betweem 900px and 601px
		      itemsTablet: [600,1], //2 items between 600 and 0
		      itemsMobile : false,
    		  transitionStyle : "avcSlide",
    		  mouseDrag  : false,
    		  rewindSpeed : 800,


    	 });
    	 $(document.documentElement).keyup(function (event) {  
    	 // Custom Navigation Events
		  // handle cursor keys
		    if (event.keyCode == 37) {
		       // go left
		       avcCar.trigger('owl.prev');
		    } else if (event.keyCode == 39) {
		       // go right
		       avcCar.trigger('owl.next');
		    }
		 });


		  //sticky

		  $(window).scroll(function() {    
		    var scroll = $(window).scrollTop();
		    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		     //>=, not <=
		    if (scroll >= 85) {
		        //clearHeader, not clearheader - caps H
		        $("header").addClass("isSticky");
		    }else {
		        $("header").removeClass("isSticky");
		    }
		});

		  /*menu toggle*/

		  var addaxMenuToggle = $('#addax-header .navbar-toggle');
		  addaxMenuToggle.click(function(){
		  		$(this).toggleClass('cross');
		  })
		  
		  
		  
		  
		  
		  
    /*****************************************
    Counter Box
    /*****************************************/
    

          $.fn.counterUp = function( options ) {

            // Defaults
            var settings = $.extend({
                'time': 400,
                'delay': 10
            }, options);

            return this.each(function(){

                // Store the object
                var $this = $(this);
                var $settings = settings;

                var counterUpper = function() {
                    var nums = [];
                    var divisions = $settings.time / $settings.delay;
                    var num = $this.text();
                    var isComma = /[0-9]+,[0-9]+/.test(num);
                    num = num.replace(/,/g, '');
                    var isInt = /^[0-9]+$/.test(num);
                    var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
                    var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

                    // Generate list of incremental numbers to display
                    for (var i = divisions; i >= 1; i--) {

                        // Preserve as int if input was int
                        var newNum = parseInt(num / divisions * i);

                        // Preserve float if input was float
                        if (isFloat) {
                            newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                        }

                        // Preserve commas if input had commas
                        if (isComma) {
                            while (/(\d+)(\d{3})/.test(newNum.toString())) {
                                newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                            }
                        }

                        nums.unshift(newNum);
                    }

                    $this.data('counterup-nums', nums);
                    $this.text('0');

                    // Updates the number until we're done
                    var f = function() {
                        $this.text($this.data('counterup-nums').shift());
                        if ($this.data('counterup-nums').length) {
                            setTimeout($this.data('counterup-func'), $settings.delay);
                        } else {
                            delete $this.data('counterup-nums');
                            $this.data('counterup-nums', null);
                            $this.data('counterup-func', null);
                        }
                    };
                    $this.data('counterup-func', f);

                    // Start the count up
                    setTimeout($this.data('counterup-func'), $settings.delay);
                };

                // Perform counts when the element gets into view
                $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
            });

          };



        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
	
	
	
	/*****************************************
    Donut Chart
    /*****************************************/
    $.fn.addaxDonutChart = function (options, callback) {

        var defaults = {
            startdegree: 0,
            color: "#21242a",
            bgcolor: "#eee",
            fill: false,
            width: 5,
            dimension: 250,
            value: 50,
            animationstep: 1.0,
            border: 'default',
            complete: null
        };

        return this.each(function () {

            var settings = $.extend({}, defaults, options || {});

            var customSettings = ["color", "bgcolor", "fill", "width", "dimension", "animationstep", "endPercent", "border", "startdegree"];

            var percent;
            var endPercent = 0;
            var el = $(this);
            var fill = false;
            var type = "";

            checkDataAttributes(el);

            type = el.data("type");


            if (el.data("total") != undefined && el.data("part") != undefined) {
                var total = el.data("total") / 100;

                percent = ((el.data("part") / total) / 100).toFixed(3);
                endPercent = (el.data("part") / total).toFixed(3);
            } else {
                if (el.data("value") != undefined) {
                    percent = el.data("value") / 100;
                    endPercent = el.data("value");
                } else {
                    percent = defaults.value / 100;
                }
            }


            el.width(settings.dimension + "px");

            if (type == "half") {
                el.height(settings.dimension / 2);
            }

            var size = settings.dimension,
                canvas = $("<canvas></canvas>").attr({
                    width: size,
                    height: size
                }).appendTo(el).get(0);

            var context = canvas.getContext("2d");

            var dpr = window.devicePixelRatio;
            if (dpr) {
                var $canvas = $(canvas);
                $canvas.css("width", size);
                $canvas.css("height", size);
                $canvas.attr("width", size * dpr);
                $canvas.attr("height", size * dpr);

                context.scale(dpr, dpr);
            }

            var container = $(canvas).parent();
            var x = size / 2;
            var y = size / 2;
            var radius = size / 2.5;
            var degrees = settings.value * 360.0;
            var radians = degrees * (Math.PI / 180);
            var startAngle = 2.3 * Math.PI;
            var endAngle = 0;
            var counterClockwise = false;
            var curPerc = settings.animationstep === 0.0 ? endPercent : 0.0;
            var curStep = Math.max(settings.animationstep, 0.0);
            var circ = Math.PI * 2;
            var quart = Math.PI / 2;
            var fireCallback = true;
            var additionalAngelPI = (settings.startdegree / 180) * Math.PI;


            if (type == "half") {
                startAngle = 2.0 * Math.PI;
                endAngle = 3.13;
                circ = Math.PI;
                quart = Math.PI / 0.996;
            } else if (type == "angle") {
                startAngle = 2.25 * Math.PI;
                endAngle = 2.4;
                circ = 1.53 + Math.PI;
                quart = 0.73 + Math.PI / 0.996;
            }


            function checkDataAttributes(el) {
                $.each(customSettings, function (index, attribute) {
                    if (el.data(attribute) != undefined) {
                        settings[attribute] = el.data(attribute);
                    } else {
                        settings[attribute] = $(defaults).attr(attribute);
                    }

                    if (attribute == "fill" && el.data("fill") != undefined) {
                        fill = true;
                    }
                });
            }

            function animate(current) {

                context.clearRect(0, 0, canvas.width, canvas.height);

                context.beginPath();
                context.arc(x, y, radius, endAngle, startAngle, false);

                context.lineWidth = settings.width;

                context.strokeStyle = settings.bgcolor;
                context.stroke();

                if (fill) {
                    context.fillStyle = settings.fill;
                    context.fill();
                }

                context.beginPath();
                context.arc(x, y, radius, -(quart) + additionalAngelPI, ((circ) * current) - quart + additionalAngelPI, false);

                var borderWidth = settings.width;
                if (settings.border == "outline") {
                    borderWidth = settings.width + 13;
                } else if (settings.border == "inline") {
                    borderWidth = settings.width - 13;
                }

                context.lineWidth = borderWidth;
                context.strokeStyle = settings.color;
                context.stroke();

                if (curPerc < endPercent) {
                    curPerc += curStep;
                    window.requestAnimationFrame(function () {
                        animate(Math.min(curPerc, endPercent) / 100);
                    });
                }

                if (curPerc == endPercent && fireCallback && typeof (settings) != "undefined") {
                    if ($.isFunction(settings.complete)) {
                        settings.complete();

                        fireCallback = false;
                    }
                }
            }

            el.waypoint(function () {
                animate(curPerc / 100);
            }, {
                offset: "100%",
                triggerOnce: true
            });





        });
    };
	
        $(".addax-donut-chart").addaxDonutChart();
		

    //Scroll Down
    
    $('.scrollDown').click(function(event){
            event.preventDefault();
            var winHeight = $(window).height();
            
             $('html, body').animate({
                    scrollTop: winHeight,
                    complete: function () {
                        //Hide your button here
                    }
                }, 1500);
        })
})


// Accordion

 $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#addax-accordion2, #addax-accordion')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });



    // Filter button

     var filterBtn = $('.addax-filters .filter');
      
        filterBtn.click(function(event){

            event.preventDefault();

            var selectedFilter = $(this);  
                
            filterBtn.removeClass('selected');
            selectedFilter.addClass('selected');
            

            
        });


        // addax lightbox

        $('#addax-lightbox').hide();

        $('.addax-lb-trigger').click(function(e) {
    
            e.preventDefault();
            var image_href = $(this).attr("href");
            if ($('#addax-lightbox').length > 0) { // #lightbox exists
                
                //insert img tag with clicked link's href as src value
                $('#lightbox-content').html('<img src="' + image_href + '" />');
                
                //show liglighthtbox window - you can use a transition here if you want, i.e. .show('fast')
                $('#addax-lightbox').fadeIn(function(){$(this).show()});
            }
            else { //#lightbox does not exist 
    
                //create HTML markup for lightbox window
                var lightbox = 

                  '<div id="addax-lightbox" >'+
                    '<a href="#" class="close-lightbox">'+
                      '<i class="fa fa-times" aria-hidden="true"></i>'+
                    '</a>'+
                  '</div>';

                    
                //insert lightbox HTML into page
                $('body').append(lightbox);
            }


        });


    //Click anywhere on the page to get rid of lightbox window
    $('.close-lightbox').on('click', function(e) { 
        e.preventDefault();
        $('#addax-lightbox').hide();
    });