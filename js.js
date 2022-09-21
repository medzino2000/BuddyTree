//declare all variables and get all documants to manipulat
let left = document.getElementById("b_left");
let right = document.getElementById("b_right");
let cards = document.querySelectorAll(".event_article");
//turn cards elements into array type
let cardsarr = Array.from(cards);
//calculat the number of cards
let j = cardsarr.length;
//declar the main counter
let k = 0 ;
let i=0;
//declare a style
cardsarr.forEach(  (card)  =>  {
    card.style.transform = `translateX(calc(0 * calc(-100% - 2vw)))`;
})
//start the event 
right.onclick = function() {
//2nd counter index 
    k++;
    i++;
//aplly translats for each element
    cardsarr.forEach( (card) => {
        //apply the slide event
        card.style.transform = `translateX(calc(${k} * calc(-100% - 2vw)))`;
        //if the slid gone to the end
        const font = card.style.transform;
        if (k >= j-1) {
            //modify image
            right.src = "icons/Icon_Artwork_prim.png";
        }else  {
            right.src = "icons/Icon-Artwork.png";
        }
        
        if (font === `translateX(calc(${j} * (-100% - 2vw)))`) {
            //stop the event
            k--;
            cardsarr[0].style.transform = `translateX(calc(${k} * calc(-100% - 2vw)))`;
            k=0 ;
            left.src = "icons/Icon_Artwork.png";
            card.style.transform = `translateX(calc(${k} * calc(-100% - 2vw)))`;
        }
        if (k != 0) {
            left.src = "icons/Icon-Artwork-prim.png";
        }
    });
};

left.onclick = function() {
    //2nd counter index 
    k = k - 1;
    //aplly translats for each element
        cardsarr.forEach( (card) => {
            //apply the slide event
            card.style.transform = `translateX(calc(${k} * calc(-100% - 2vw)))`;
            //if the slid gone to the end
            const font = card.style.transform;
            if (font === `translateX(calc(-1 * (-100% - 2vw)))`) {
                //stop the event
                k=0;
                card.style.transform = `translateX(calc(${k} * calc(-100% - 2vw)))`;
                Event.preventDefault();
                
            };
            //if we return from the end
            if (k >= 0) {
                right.src = "icons/Icon-Artwork.png";
            }
            if (k <= 0) {
                left.src = "icons/Icon_Artwork.png";
            }
            if (k <= -1) {
                Event.preventDefault();
                right.src = "icons/Icon-Artwork.png";
            }
            
        });
    };

    //video popup event
    let play = document.querySelector(".play");
    let vid = document.getElementsByTagName("video")[0];
    let pause = document.querySelector(".close");
    vid.style.cssText = "top:0;"
    //play button
    console.log(vid)
    play.onclick = function() {
        vid.play();
        vid.style.cssText = "top:50%;";
        vid.style.display = "block" ;
        document.body.style.overflowY = "hidden";
        vid.setAttribute("class" ,"show");
        pause.style.display = "block";
    };
    // pause button
    pause.onclick = function() {
        document.body.style.overflowY = "scroll";
        vid.style.display = "none";
        pause.style.display = "none";
        vid.pause()
    }
    
