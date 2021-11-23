const showGalleryBtn = document.querySelector('.gallery-btn')
const galleryHeader = document.querySelector('.header-gallery')
const gallerydiv = document.querySelectorAll('.galerry div')
const shownGallery = document.getElementById('index-gallery')
console.log(shownGallery)

console.log(gallerydiv)

showGalleryBtn.addEventListener('click',function(){
    galleryHeader.classList.add('close-header');
    if(shownGallery.classList.contains('index-gallery-hidden'))
    {
        shownGallery.classList.remove('index-gallery-hidden');
    shownGallery.classList.add('index-gallery-shown');
    }
    
    
    
})
