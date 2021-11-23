const showGalleryBtn = document.querySelector('.gallery-btn')
const galleryHeader = document.querySelector('.header-gallery')
const gallerydiv = document.querySelectorAll('.galerry div')
const main = document.querySelector('index-gallery');
console.log(gallerydiv)

showGalleryBtn.addEventListener('click',function(){
    galleryHeader.classList.add('close-header');
    galleryHeader.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    
})
