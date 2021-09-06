document.addEventListener('DOMContentLoaded', function () {
    const brandBlock1 = $('.footer-group_left');
    const brandBlock2 = $('.footer-group_right');
    let i = 0;
    let j = 1200;
    window.isValidRunnedBrand = false;
    (function runnedBrandlist(i,j){
        window.isValidRunnedBrand = true;
        window.setInterval1 = setInterval(() => {
            i++;
            let x = Math.floor(i/1200);
            if(i<2400){
                if( x%2===0 && i > x*1200 && i <= (x+1)*1200 ){
                    brandBlock2.css('transform', `translateX(-${i}px)`);
                    brandBlock1.css('transform', `translateX(-${i}px)`);
                }else{
                    j--;
                    brandBlock2.css('transform', `translateX(-${i}px)`);
                    brandBlock1.css('transform', `translateX(${j}px)`);
                }
            }else{
                i = 0;
                j = 1200;
            }
        }, 30);
    })(i, j);
});