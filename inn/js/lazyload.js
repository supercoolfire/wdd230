const lazyIndustrious = {
  init: () => {
    lazyIndustrious.Lesson7();
    lazyIndustrious.lazySrcset();
  },
  Lesson7: () => {
    // <img src="placeHolder.jpg" data-src="picture.jpg" alt="">
    if (!!window.IntersectionObserver) {
      // console.log("I support Inserction Observer.")
    }

    // create a function
    let myObserver = new IntersectionObserver((myListA, myObserver) => {

      myListA.forEach(cupX => {
        if (cupX.isIntersecting) {
          cupX.target.src = cupX.target.dataset.src;
          cupX.target.removeAttribute('data-src');
          myObserver.unobserve(cupX.target);
        }
      });
    }, {
      rootMargin: "0px 0px -100px 0px"
    });

    // make a list of all images with a data source and send that list to myObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
      // console.log("img");
      // console.log(img)
      myObserver.observe(img)
    });
  },
  lazySrcset: () => {
    // <img src="placeholder" data-src="largest" data-srcset="small.jpg 400w,
    //     medium.jp 650w, large.jpg 900w, largest.jpg 900w" sizes="100vw" alt="">
    const images = document.querySelectorAll('img[data-srcset]');
    const config = {
      rootMargin: "0px 0px -100px 0px"
      ,threshold: 0.01
    };

    let observer;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(onChange, config);
      images.forEach(img => observer.observe(img));
    } else {
      console.log('%cIntersection Observers not supported', 'color: red');
      images.forEach(image => loadImage(image));
    }

    const loadImage = image => {
      image.classList.add('fade-in');
      image.src = image.dataset.src;
      if (image.dataset.srcset) {
        image.srcset = image.dataset.srcset;
      }
      
    }

    function onChange(changes, observer) {
      changes.forEach(change => {
        if (change.intersectionRatio > 0) {
          // Stop watching and load the image
          loadImage(change.target);
          observer.unobserve(change.target);
        }

      });
    }
  }
}
lazyIndustrious.init();