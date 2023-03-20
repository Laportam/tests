

const btns = document.querySelectorAll('.boto');
const realBtns = [...btns];

let ind = 1;

let pageWidth = document.querySelector('main').clientWidth;



realBtns.forEach( btn => {
    // Actualiza el ancho de la página, cada vez que este se cambia, para que así funcione el evento de click
    window.addEventListener('resize', () => {
        pageWidth = document.querySelector('main').clientWidth;
    });

    btn.addEventListener('click', (e) => {
        let mult;
        let n;
        if (pageWidth >= 360 && pageWidth < 768) {
            if (btn.classList.contains('back')){
                if(ind <= 1){
                    btn.disabled = true;
                } else {
                    ind--;
                    mult = 1;
                    n = 5;
                    slideProduct(mult, n)
                }
            } else {
                if (ind >= 16) {
                    btn.disabled = true;
                } else {
                    ind++;
                    mult = 1;
                    n = 5;
                    slideProduct(mult, n);
                }
            }
        } else if (pageWidth >= 768 && pageWidth < 1080){
            if (btn.classList.contains('back')){
                if(ind <= 1){
                    btn.disabled = true;
                } else {
                    ind--;
                    mult = 2;
                    n = 10;
                    slideProduct(mult, n)
                }
            } else {
                if (ind >= 8) {
                    btn.disabled = true;
                } else {
                    ind++;
                    mult = 2;
                    n = 10;
                    slideProduct(mult, n);
                }
            }
        } else if (pageWidth >= 1080) {
            if (btn.classList.contains('back')){
                if(ind <= 1){
                    btn.disabled = true;
                } else {
                    ind--;
                    mult = 4;
                    n = 20;
                    slideProduct(mult, n);
                }
            } else {
                if (ind >= 4) {
                    btn.disabled = true;
                } else {
                    ind++;
                    mult = 4;
                    n = 20;
                    slideProduct(mult, n);
                }
            }
        }
        
    })

});

function slideProduct(mult, n){
    const displayWidth = document.querySelector('.product').clientWidth * mult + n;
    
    document.querySelectorAll('.product').forEach( each => {
        each.style.transform = `translateX(${- (ind - 1) * displayWidth}px)`;
    })
};

console.log(window.screen.height)