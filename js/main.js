(()=> {
    // this is a module pattern, also called (function() {
      const mySpan = document.querySelector('main'),
            theSVG = document.querySelector('.imgColour'),
            guitarSVG = document.querySelector('.Vguitar'),
            cassetteSVG = document.querySelector('.Cassette'),
            soundpadSVG = document.querySelector('.soundPad'),
            saxSVG = document.querySelector('.saxophone'),            
            violinSVG = document.querySelector('.Violin'),
            trumpetSVG = document.querySelector('.Trumpet'),
            drumSVG = document.querySelector('.drumsPink'),
            bartSVG = document.querySelector('.simpson'),
            keytarSVG = document.querySelector('.keyTar');

      console.log ('Dear diary,');
      
      let allSVGs = document.querySelectorAll(".svg")

      function toggleSelected() {
        this.classList.toggle('selected');
      }

      function toggleSelectedGuitar() {
        this.classList.toggle('guitarSelected');
      }
      
      function toggleSelectedCassette() {
        this.classList.toggle('cassetteSelected');
      }
      
      function toggleSelectedSoundpad() {
        this.classList.toggle('soundpadSelected');
      }
      
      function toggleSelectedSaxophone() {
        this.classList.toggle('saxSelected');
      }

      function toggleSelectedViolin() {
        this.classList.toggle('violinSelected');
      }

      function toggleSelectedTrumpet() {
        this.classList.toggle('trumpetSelected');
      }

      function toggleSelectedBart() {
        this.classList.toggle('bartSelected');
      }

      function toggleSelectedDrums() {
        this.classList.toggle('drumSelected');
      }

      function toggleSelectedKeytar() {
        this.classList.toggle('keytarSelected');
      }

      function logSVG() {
        console.log(this.id);
      }

    // set up our triggers here
    mySpan.addEventListener('click', toggleSelected);
    theSVG.addEventListener('click', toggleSelected);
    guitarSVG.addEventListener('click', toggleSelectedGuitar);
    cassetteSVG.addEventListener('click', toggleSelectedCassette);
    soundpadSVG.addEventListener('click', toggleSelectedSoundpad);
    saxSVG.addEventListener('click', toggleSelectedSaxophone);
    violinSVG.addEventListener('click', toggleSelectedViolin);
    trumpetSVG.addEventListener('click', toggleSelectedTrumpet);
    drumSVG.addEventListener('click', toggleSelectedDrums);
    bartSVG.addEventListener('click', toggleSelectedBart);
    keytarSVG.addEventListener('click', toggleSelectedKeytar);
    allSVGs.forEach(item => item.addEventListener("click", logSVG));
})();