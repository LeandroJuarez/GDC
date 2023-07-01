window.addEventListener('scroll', function() {
        
  var header = document.getElementById('main-header');
  if (window.scrollY > 0) {
      
  header.classList.remove('hidden');
      
  } else {
          
  header.classList.add('hidden');
      
  }
  });