const changeColorTheme = document.querySelector('.colortheme button')
const animColorTheme = document.querySelector('.colortheme button div')
const background = document.querySelector('body')
console.log(changeColorTheme)
console.log(animColorTheme)
console.log(background)

changeColorTheme.addEventListener('click',function(){

    if(changeColorTheme.classList.contains('active-btn-color')){
        changeColorTheme.classList.remove('active-btn-color')
        animColorTheme.classList.remove('active-btn-colordiv')
        background.style.backgroundColor = "white"
    }
    else
    {
        changeColorTheme.classList.add('active-btn-color')
        animColorTheme.classList.add('active-btn-colordiv')
        background.style.backgroundColor = "black"
    }

})




const card = document.querySelector('.card-header')
card.addEventListener('mouseenter',function(){

    const divforName = document.createElement('div')
    divforName.style.backgroundColor = "rgba(0,0,0, 0.8)";
    divforName.style.boxShadow = "rgba(255, 0, 0, 0.781) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(2, 58, 23, 0.15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 8px,#e63947  0 10px 40px";
    divforName.style.fontFamily = "'Montserrat', sans-serif";
    divforName.style.width = "40vw";
    divforName.style.fontSize = "2em";
    divforName.style.textAlign = "center";
    divforName.style.justifyContent = "center";
    divforName.style.display = "flex";
    divforName.style.padding= "20px";
    divforName.style.color = "white";
    divforName.style.borderRadius = "20px";
    divforName.innerHTML = " BARBARA BOCHEŃCZAK";
    divforName.style.position = "absolute";
    divforName.style.bottom = "20vh";
    document.body.appendChild(divforName);


    card.addEventListener('mouseleave',function(){
        divforName.remove();
    })
    
})

card.addEventListener('click',function(){
    const boverlay = document.createElement('div');
    const leftPage = document.createElement('div');
    const RightPage = document.createElement('div');

    //left

    leftPage.style.width = "35%";
    leftPage.style.height = "65%";
    leftPage.style.fontSize = "2em";
    leftPage.style.textAlign = "center";
    leftPage.style.display = "flex";
    leftPage.style.padding= "20px";
    leftPage.style.color = "white";
    leftPage.style.borderRadius = "20px";
    leftPage.style.position = "absolute";
    leftPage.style.top = "10vh";
    leftPage.style.left = "15vh";
    leftPage.style.zIndex = "1000";
    leftPage.style.backgroundImage = "url('art-pic.jpg')";
    leftPage.style.backgroundRepeat = "no-repeat";
    leftPage.style.backgroundSize = "cover";
    leftPage.style.backgroundPosition = "center";

   
   // background-repeat: no-repeat;
   // background-size: cover;
  //  background-position: center;
    
    

    //right
    RightPage.style.width = "35%";
    RightPage.style.height = "65%";
    //RightPage.style.fontSize = "2em";
    RightPage.style.textAlign = "center";
    RightPage.style.display = "flex";
    RightPage.style.alignContent = "center";
    RightPage.style.justifyContent = "center";
    RightPage.style.flexDirection = "column";
    RightPage.style.padding= "40px";
    RightPage.style.borderRadius = "20px";
    RightPage.style.position = "absolute";
    RightPage.style.top = "10vh";
    RightPage.style.right = "15vh";
    RightPage.style.zIndex = "1000";
    RightPage.style.fontSize = "2em";
    RightPage.style.fontFamily = "'Montserrat', sans-serif";
    if(changeColorTheme.classList.contains('active-btn-color'))
    {
        RightPage.style.backgroundColor = "black";
        RightPage.style.color = "white";
    }
    else{
        RightPage.style.backgroundColor = "white";
        RightPage.style.color = "black";
    }

    RightPage.style.opacity = "0.7";
    RightPage.style.transition = "all 300ms";
   
    RightPage.innerHTML = "BARBARA BOCHEŃCZAK <hr> CUSTOM ARTIST <br>";

   

    //overlay
    boverlay.style.width = "100%";
    boverlay.style.height = "100%";
    boverlay.style.backgroundColor = "rgba(0,0,0, 0.8)";
    boverlay.style.position = "absolute";
    boverlay.style.top = "0";


    RightPage.addEventListener('mouseenter',function(){

        RightPage.style.opacity = "1";
        RightPage.style.transition = "all 300ms";

    })
    RightPage.addEventListener('mouseleave',function(){

        RightPage.style.opacity = "0.7";
        RightPage.style.transition = "all 300ms";

    })




    boverlay.addEventListener('click',function(){
        boverlay.remove();
        leftPage.remove();
        RightPage.remove();
    })




    document.body.appendChild(leftPage);
    document.body.appendChild(RightPage);
    document.body.appendChild(boverlay);

})


