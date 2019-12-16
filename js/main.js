function initMap() {
    // Your location
    const loc = { lat: 25.786532, lng: -80.131949 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 14,
      center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
  }
  
// sticky navbar (changing opacity)
window.addEventListener('scroll', function(){
  if (window.scrollY > 150) {

    document.querySelector('#navbar').style.opacity = 0.9;

  } else {
    document.querySelector('navbar').style.opacity = 1;
  }
})


  // Smooth Scrolling 
  // target the navbar link
  $('#navbar a').on('click',function(event){
     
    // checking the hash
    if (this.hash !== '') {
      event.preventDefault();
     
      const hash = this.hash;

      $("html, body").animate(
        {
        scrollTop: $(hash).offset().top -100
              // speed
      }, 800
      );
    }
  });
 
