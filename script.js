const images = ['/Images/contBcg-0.jpeg',
'/Images/contBcg-1.jpeg',
'/Images/contBcg-2.jpeg',
'/Images/contBcg-3.jpeg',
'/Images/contBcg-4.jpeg']

const imageLoad = document.querySelector('.img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let counter = 0;

document.addEventListener('DOMContentLoaded',function(){
imageLoad.style.backgroundImage  =  `url(${images[counter]})`;
})
next.addEventListener('click', function(){
    counter++
    counter > images.length -1 ? counter = 0 : counter
    imageLoad.style.backgroundImage  =  `url(${images[counter]})`;
    console.log(counter)
})

prev.addEventListener('click',function(){
        counter--
        counter < 0 ? counter = images.length -1  : counter
        imageLoad.style.backgroundImage = `url(${images[counter]})`;
        console.log(counter)
    
    })