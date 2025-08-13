self.addEventListener('install', function(e) {
    console.log('Service Worker Installed');
  });
  
  self.addEventListener('fetch', function(e) {
    // Let the browser handle all requests normally
  });
  