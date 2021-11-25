const showGalleryBtn = document.querySelector('.gallery-btn')
const galleryHeader = document.querySelector('.header-gallery')
const gallerydiv = document.querySelectorAll('.galerry div')
const shownGallery = document.getElementById('index-gallery')
console.log(shownGallery)

console.log(gallerydiv)

/*showGalleryBtn.addEventListener('click',function(){
    galleryHeader.classList.add('close-header');
    if(shownGallery.classList.contains('index-gallery-hidden'))
    {
        shownGallery.classList.remove('index-gallery-hidden');
    shownGallery.classList.add('index-gallery-shown');
    }
    
    
    
})*/

const kurtki = document.querySelector('.header-left')
const buty = document.querySelector('.header-right')
kurtki.addEventListener('click',function(){
    galleryHeader.classList.add('close-header');
    if(shownGallery.classList.contains('index-gallery-hidden'))
    {
        shownGallery.classList.remove('index-gallery-hidden');
    shownGallery.classList.add('index-gallery-shown');
    }
    window.scrollTo(0, document.querySelector(".img12").offsetTop);
    this.remove();
    buty.remove();
})


buty.addEventListener('click',function(){
    galleryHeader.classList.add('close-header');
    if(shownGallery.classList.contains('index-gallery-hidden'))
    {
        shownGallery.classList.remove('index-gallery-hidden');
    shownGallery.classList.add('index-gallery-shown');
    }
   
    this.remove();
    kurtki.remove();
})

