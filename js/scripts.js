//MUSTACHE 

var templateSliderItem = document.getElementById('template-sliders-item').innerHTML;
console.log(templateSliderItem);

Mustache.parse(templateSliderItem);

var sliderItems = '';

for (var i=0; i<slidersData.length; i ++) {
  sliderItems += Mustache.render(templateSliderItem, slidersData[i]);  
}

var result = document.querySelector('#result');

result.insertAdjacentHTML('beforeend', sliderItems);


//FLICKITY CAROUSEL


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel');

// RESET BUTTON 

var reset = document.querySelector('.reset');
console.log(reset);
 reset.addEventListener("click", function(event){
      flkty.select(0);
 });

 //PROGRESS BAR 

var progressBar = document.querySelector('.progress-bar');

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// INIT MAP 
	
  	window.initMap = function() {
      var marker= [];
      var markerLocation = slidersData[0].coords; 
		  var map = new google.maps.Map(document.getElementById('map'), {
		  	zoom: 7,
			  center: markerLocation
		  });
			  
      for(var i = 0; i < slidersData.length; i++) {
        slidersMarkerLocation = slidersData[i].coords;
        console.log('marker', slidersMarkerLocation);
        marker[i] = new google.maps.Marker({position: slidersMarkerLocation, map: map});  
        addMarkerToSlider(marker[i],i);     
      }
      
      function addMarkerToSlider(marker, index) {
        marker.addListener('click', function(){
          console.log('pokaż index', index);
          flkty.select(index);
        } );

      }

      flkty.on( 'change', function( index ) {
        console.log('Flickity change ' + slidersData[index].coords );
        map.panTo(slidersData[index].coords);
        map.setZoom(2); 
      });
      };

    

		