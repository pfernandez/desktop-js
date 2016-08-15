(function() {


  // Demo: Drag-n-drop file path.
  var finder = document.getElementById('finder');
  finder.ondragover = function (e) {
    e.preventDefault();
    this.style.background = '#ccc';
  };
  finder.ondragleave = finder.ondragend = function () {
    this.style.background = 'inherit';
  };
  finder.ondrop = function (e) {
    e.preventDefault();
    this.style.background = 'inherit';
    var file = e.dataTransfer.files[0];
    console.log('The file you dropped is', file.path);
  };
  
  
  // Demo: Embedded web page.
  window.onload = function() {
    var webview = document.querySelector('.portal webview');
    var loader = document.querySelector('.loader');
    var loadstart = loadstop = function() {
      loader.classList.toggle('hide');
      webview.classList.toggle('hide');
    }
    webview.addEventListener('did-start-loading', loadstart);
    webview.addEventListener('did-stop-loading', loadstop);
  }
  
  
  // Demo: Ractive templating.
  var ractive = new Ractive({
    el: '#container',
    template: '#template',
    data: {
      name: 'World',
      time:  new Date(),
      nodeVersion:     process.versions.node,
      chromeVersion:   process.versions.chrome,
      electronVersion: process.versions.electron,
    },
  });
  setInterval(function() {
    ractive.set('time', new Date())
  }, 1000);
  
})();
