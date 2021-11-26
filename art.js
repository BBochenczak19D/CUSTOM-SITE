const showName = document.querySelector('.card-header')
showName.addEventListener('mouseenter',function(){

    const divforName = document.createElement('div')
    divforName.style.backgroundColor = "rgba(255, 255, 255, 0.514)";
    divforName.style.boxShadow = "rgba(255, 0, 0, 0.781) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(2, 58, 23, 0.15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 8px,#e63947  0 10px 40px";
    divforName.style.height = "10vh";
    divforName.style.width = "40%";
    divforName.style.fontSize = "3em";
    divforName.style.textAlign = "center";
    divforName.style.padding= "20px";
    divforName.style.color = "white";
    divforName.style.borderRadius = "100px";
    divforName.innerHTML = " BARBARA BOCHEŃCZAK";
    divforName.style.position = "absolute";
    divforName.style.top = "80vh";
    document.body.appendChild(divforName);


    showName.addEventListener('mouseleave',function(){
        divforName.remove();
    })
    
})
