const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')


toggleBtn.addEventListener('click', function(){
    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar')
    }
    else
    {
        sidebar.classList.add('show-sidebar')
    }
    

})
closeBtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar')
     
}) 
const expand_pic = document.querySelector('.art2')
const expandBtn = document.querySelector('.expand')
const expandedContent = document.querySelector('.expanded-content')
const expandedp = document.querySelector('.expand p')
expandBtn.addEventListener('click',function(){
    if(expandBtn.classList.contains('expand-active')){
        expandBtn.classList.remove('expand-active')
        expandedContent.classList.remove('expanded-content-active')
        expandedp.classList.remove('active-p')
        expandedp.innerHTML= "Masz pytanie?"
    }
    else
    {
        expandBtn.classList.add('expand-active')
        expandedContent.classList.add('expanded-content-active')
        expandedp.classList.add('active-p')
        expandedp.innerHTML= "------"
    }
})

const page2 = document.querySelector('.page2')
page2.addEventListener('mouseover',function(){
    window.scroll({
        top: 955,
        
        behavior: 'smooth'
      });
})
const page3 = document.querySelector('.page3')
page3.addEventListener('mouseover',function(){
    window.scroll({
        top: 1910,
        
        behavior: 'smooth'
      });
})
const page4 = document.querySelector('.page4')
page4.addEventListener('mouseover',function(){
    window.scroll({
        top: 2870,
        
        behavior: 'smooth'
      });
})


const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

window.addEventListener('scroll',function(){
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if(Math.ceil(scrolled)  == scrollable)
    {
        if(modal.classList.contains('.modal-active')){
            modal.classList.remove('modal-active')
            overlay.classList.remove('overlay-active')
           
        }
        else
        {
           modal.classList.add('modal-active')
            overlay.classList.add('overlay-active')
        }
    }
    else{
        overlay.classList.remove('overlay-active')
        modal.classList.remove('modal-active')
    }
});





