window.onscroll=function(){
    progressFunction();
    scrollBtn();
}
function progressFunction(){
    var scroll=document.body.scrollTop||document.documentElement.scrollTop;
    var height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    var scrolled=(scroll/height)*100;
    document.getElementById('progress-bar').style.width=scrolled+'%'; 
}
function scrollBtn(){
    if(document.body.scrollTop>30||document.documentElement.scrollTop>30){
        topBtn.style.display='block';
    }else{
        topBtn.style.display='none';
    }
    if(document.body.scrollTop>1400||document.documentElement.scrollTop>1400){
        navigation.style.position='fixed';
        navigation.style.top='3px';
        navigation.style.backgroundColor='rgb(0,0,0,0.5)';
    }else{
        navigation.style.position='initial';
        navigation.style.backgroundColor='rgb(0,0,0)';
    }
}
let navigation=document.getElementById('navigation');
let topBtn=document.getElementById('top-btn');
topBtn.addEventListener('click',()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})
let hero_Slider=document.getElementById('hero-slider');
let heroSlide=document.querySelectorAll('.slide').length;
let types=document.querySelectorAll('.type');
let Slideindex=0;
let type=document.querySelectorAll('.type');
let colorSlider=document.querySelector('.color-slider');

function showSlider(index){
    if(index>=heroSlide){
        Slideindex=0;
        index=0;
    }
    if(index<0){
        Slideindex=heroSlide-1;
        index = heroSlide - 1;
    }
    console.log(index);
    hero_Slider.style.transform=`translateX(-${index*100}vw)`;
    colorSlider.style.transform=`translateX(-${index*100}vw)`;
    for(var i=0;i<types.length;i++){
        if(i!=index){
            types[i].style.borderBottom='none';
        }
    }
    types[index].style.borderBottom='2px solid white';
}
function nextSlide(){
    Slideindex++;
    showSlider(Slideindex);
}
function prevSlide(){
    Slideindex--;
    showSlider(Slideindex);
}
//setInterval(nextSlide,20000);
let index=0;
const slider=document.querySelector('#classic-shoes');
const slide=document.querySelectorAll('.shoe');
const sportSlider=document.querySelector('.sport-slider');
const memSlider=document.querySelector('.member-slider');
function slideRight(){
    index++;
    
    slider.scrollBy({
        left:320,
        behavior: 'smooth',
    });
    if(index>=9){
        index=0;
        slider.scrollBy({
            left:-3200,
            transition:'0s ease',
        })
        return;
    }
}
function slideLeft(){
    index--;
    slider.scrollBy({
        left:-320,
        behavior: 'smooth',
    });
    if(index<=0){
        index=9;
        slider.scrollBy({
            left:3200,
            transition:'0s ease',
        })
        return;
    }
}
function sportRight(){
    index++;
    sportSlider.scrollBy({
        left:470,
        behavior: 'smooth',
    });
    if(index>=7){
        index=0;
        sportSlider.scrollBy({
            left:-3680,
            transition:'0s ease',
        })
        return;
    }
}
function sportLeft(){
    index--;
    sportSlider.scrollBy({
        left:-470,
        behavior: 'smooth',
    });
    if(index<=0){
        index=6;
        sportSlider.scrollBy({
            left:3680,
            transition:'0s ease',
        })
        return;
    }
}
function memberRight(){
    index++;
    memSlider.scrollBy({
        left:355,
        behavior: 'smooth',
    });
    if(index>=5){
        index=0;
        memSlider.scrollBy({
            left:-2130,
            transition:'0s ease',
        })
        return;
    }
}
function memberLeft(){
    index--;
    memSlider.scrollBy({
        left:-355,
        behavior: 'smooth',
    });
    if(index<=0){
        index=5;
        memSlider.scrollBy({
            left:2130,
            transition:'0s ease',
        })
        return;
    }
}

const price= document.querySelectorAll('.price');
const newPrice=document.querySelectorAll('.new-price');
setTimeout(() => {
    price.forEach(item=>{
        item.style.setProperty('--after-width', '70px'); 
        if(window.matchMedia("(max-width: 500px)").matches){
            item.style.setProperty('--after-width', '50px'); 
        }
    })
    newPrice.forEach(newp=>{
        newp.style.transform='translateX(0%)';
    })
    setTimeout(() => {
        newPrice.forEach(newp=>{
            newp.style.display='inline-block';
        })
    },500)
    console.log('Price is striked');
}, 1000); 

const guide=document.getElementById('guide');
const guideOptions=document.getElementById('guide-options');
const guideArrow=document.getElementById('guide-arrow');
guide.addEventListener('mouseover',()=>{
    guideOptions.style.display='block';
    guideArrow.style.transform='rotate(180deg)';
})
guide.addEventListener('mouseout',()=>{
    guideOptions.style.display='none';
    guideArrow.style.transform='rotate(0deg)';
})

const category=document.getElementById('category');
const categoryHidden=document.querySelectorAll('.cat-hidden');
category.addEventListener('mouseover',()=>{
    categoryHidden.forEach(item=>{
        item.style.display='block';
    })
})
category.addEventListener('mouseout',()=>{
    categoryHidden.forEach(item=>{
        item.style.display='none';
    })
})
const heroImage=document.getElementById('image1');
const changeImage=document.getElementById('change-img');
changeImage.addEventListener('mouseover',()=>{
    heroImage.src="images/airforcecolorchange.png";
    changeImage.src="images/airforcehero.png";
})
const bars=document.getElementById('bars');
const cross=document.getElementById('cross');
const navLinks=document.getElementById('navLinks');
bars.addEventListener('click',()=>{
    navLinks.style.display='block';
})
cross.addEventListener('click',()=>{
    navLinks.style.display='none';
})