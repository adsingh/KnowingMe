function toggleClass($el){
    // Get the target from the "data-target" attribute
    var target = $el.dataset.target;
    var $target = document.getElementById(target);

    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
    $el.classList.toggle('is-active');
    $target.classList.toggle('is-active');
}

function addEvent(arr){

    arr.forEach(function ($el) {
      $el.addEventListener('click', () => {

        toggleClass($el);

      });
    });

}

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    addEvent($navbarBurgers);
  }

  var links = document.getElementsByClassName("toggle");
  console.log(links.length);
  Array.prototype.forEach.call(links, (link)=>{
    link.addEventListener('click',()=>{
        
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach($el=>{
                toggleClass($el);
            });
        }
    });
  });
});

