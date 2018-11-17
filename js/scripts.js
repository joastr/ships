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