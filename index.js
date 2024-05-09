let point = document.querySelectorAll('.point')
let imageSlider = document.querySelectorAll('.imageSlider')
let about__list = document.querySelectorAll('.about__list')
leftBtn = document.getElementById('leftBtn')
rightBtn = document.getElementById('rightBtn')


point[0].classList.add ('activeImage')
imageSlider[0].classList.add ('activeImage')
about__list[0].classList.add ('active')

let counter = 0;

 for(let i=0; i<point.length; i++){
    point[i].addEventListener('click',()=>{
        for(let k = 0; k<imageSlider.length; k++){
            point[k].classList.remove('activeImage')
            imageSlider[k].classList.remove('activeImage')
        }
        counter = i;
        imageSlider[counter].classList.add('activeImage')
        point[counter].classList.add('activeImage')
    })
 
 }


 leftBtn.addEventListener('click',()=>{
    for(let k = 0;k<imageSlider.length;k++){
        point[k].classList.remove('activeImage')
            imageSlider[k].classList.remove('activeImage')
    }
    counter--
    if (counter <0 ){
        counter = imageSlider.length-1
    }
    imageSlider[counter].classList.add('activeImage')
    point[counter].classList.add('activeImage')
 })

 rightBtn.addEventListener('click',()=>{
    for(let k = 0;k<imageSlider.length;k++){
        point[k].classList.remove('activeImage')
            imageSlider[k].classList.remove('activeImage')
    }
    counter++
    if (counter >= imageSlider.length ){
        counter = 0
    }
    imageSlider[counter].classList.add('activeImage')
    point[counter].classList.add('activeImage')
})


 
