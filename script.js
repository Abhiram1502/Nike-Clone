window.onscroll=function(){
    progressFunction();
}
function progressFunction(){
    var scroll=document.body.scrollTop||document.documentElement.scrollTop;
    var height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    var scrolled=(scroll/height)*100;
    document.getElementById('progress-bar').style.width=scrolled+'%'; 
}
const slider=document.querySelector('#classic-shoes');
const slide=document.querySelectorAll('.shoe');
const sportSlider=document.querySelector('.sport-slider')
let index=0;
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
    sportSlider.scrollBy({
        left:355,
        behavior: 'smooth',
    });
    if(index>=5){
        index=0;
        sportSlider.scrollBy({
            left:-2130,
            transition:'0s ease',
        })
        return;
    }
}
function memberLeft(){
    index--;
    sportSlider.scrollBy({
        left:-355,
        behavior: 'smooth',
    });
    if(index<=0){
        index=5;
        sportSlider.scrollBy({
            left:2130,
            transition:'0s ease',
        })
        return;
    }
}

