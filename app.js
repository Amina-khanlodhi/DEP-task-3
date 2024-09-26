document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    });
  }
  