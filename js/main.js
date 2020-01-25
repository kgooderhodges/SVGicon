(()=> {
    // this is a module pattern, also called (function() {
      const mySpan = document.querySelector('main'),
            theSVG = document.querySelector('.imgColour'),

      function toggleSelected() {
        // we want to add some kind of indicator
        // that someone has selected an icon

        // debugger;
        this.classList.toggle('selected');
      }


    // set up our triggers here
    mySpan.addEventListener('click', toggleSelected);
    theSVG.addEventListener('click', toggleSelected);
})();