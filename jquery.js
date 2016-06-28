var maxSize = 480;
var arraySize = 16;
var gridSize = 29.5;

$(document).ready(function(){
	for (var i = 0; i < arraySize; i++){
		$('#main').append('<div class="grid_container"></div>');
	}

	for (var i = 0; i < arraySize; i++){
		$('.grid_container').append('<div class="grid"></div>');
	}

	$('.grid').mouseenter(function(){
		$(this).css('background-color', 'black');
	});

	$('button').click(function(){
		arraySize = prompt("Enter a grid size between 1 and 80: ");
		while (arraySize < 1 || arraySize > 80){
			arraySize = prompt("Invalid size. Please enter a grid size between 1 and 80: ");
		}

		$('.grid_container').remove();

		var gridSize = (maxSize / arraySize) - 0.5;

		for (var i = 0; i < arraySize; i++){
			$('#main').append('<div class="grid_container"></div>');
		}

		for (var i = 0; i < arraySize; i++){
			$('.grid_container').append('<div class="grid"></div>');
		}


		$('.grid').css("height", gridSize + "px");
		$('.grid').css("width", gridSize + "px");
		$('.gridSize').css("height", gridSize + "px");
		$('.gridSize').css("width", gridSize + "px");


		$('.grid').mouseenter(function(){
		$(this).css('background-color', 'black');
	});
	});
});


