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
const h2 = page2.clientHeight;
page2.addEventListener('mouseenter',function(){
    window.scroll(0,h2)
})
const page3 = document.querySelector('.page3')
const h3 = page3.clientHeight + h2;
page3.addEventListener('mouseenter',function(){
    window.scroll(0,h3)
})
const page4 = document.querySelector('.page4')
const h4 = page4.clientHeight + h3 + h2;
page4.addEventListener('mouseenter',function(){
    window.scroll(0,h4);
})
console.log(h2,h3,h4)
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

window.addEventListener('scroll',function(){
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if(Math.ceil(scrolled)  == scrollable)
    {
        if(modal.classList.contains('modal-active')){
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
const linia1 = document.querySelector('.raz')
const linia2 = document.querySelector('.dwa')
const linia3 = document.querySelector('.trzy')
const linia4 = document.querySelector('.cztery')
const linia5 = document.querySelector('.piec')
const artysta = document.querySelectorAll('.page4-header')
console.log(artysta)
page4.addEventListener('mouseover',function(){

if(linia1.classList.contains('line-active')){
    linia1.classList.remove('line-active')
    linia2.classList.remove('line-active')
    linia3.classList.remove('line-active')
    linia4.classList.remove('line-active')
    linia5.classList.remove('line-active')
    
}
else
{
    linia1.classList.add("line-active")
    linia2.classList.add('line-active')
    linia3.classList.add('line-active')
    linia4.classList.add('line-active')
    linia5.classList.add('line-active')
  
}

})
page4.addEventListener('mouseout',function(){

    
    linia1.classList.remove('line-active')
    linia2.classList.remove('line-active')
    linia3.classList.remove('line-active')
    linia4.classList.remove('line-active')
    linia5.classList.remove('line-active')
    
    
    })

const logo = document.querySelector('.logo')
logo.addEventListener('mousemove', (e) => {

    let x = (window.innerWidth / 2 - e.pageX) /6;
    let y = (window.innerHeight / 2 - e.pageY) /15;
    logo.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`

});
logo.addEventListener('mouseleave', (e)=> {

    logo.style.transform = `rotateY(0deg) rotateX(0deg)`
    logo.style.transform = `transition: all 300ms`


})


