// Handler's for the demo.
(function(){
	var theObject = {
		transitionStyle: 'fadeIn',
		transitionSpeed: 8000,
		arrows: false,
		button: 'dottedsquare'

	},
	setStyle = function(){
		theObject['transitionStyle'] = $(this).val();
		createObject();
	},
	setSpeed = function(){
		theObject['transitionSpeed'] = eval($(this).val());
		createObject();
	},
	setArrows = function(){
		theObject['arrows'] = eval($(this).val());
		createObject();
	},
	setButtons = function(){
		theObject['button'] = $(this).val();
		createObject();
	};

	function setHandlers(){
		$('.transitionSpeed').on('change',function(){
			setSpeed.call(this);
		});

		$('.transitionStyle').on('change',function(){
			setStyle.call(this);
		});

		$('.arrows').on('change',function(){
			setArrows.call(this);
		});

		$('.buttonStyle').on('change',function(){
			setButtons.call(this);
		});

		};

	function createObject(){
		var stringObj = JSON.stringify(theObject)
		.replace(/,/g,',<br>')
		.replace(/^\s*{/g,"{<br>")
		.replace(/\}$/g,function(match){ 
			return '<br>' + match;
		})
		
		$('#formDemo').find('span.right.json code').html(
			['// Copy && Paste <br>Quickousel.init(',stringObj, ');'].join(""))

		Quickousel.init(theObject);
	};

	function init(){
		setHandlers();
		Quickousel.init(theObject);

	}

	window.onload = init;
})()