window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++){
        var windowheight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 180;
        if (elementTop < windowheight - revealpoint){
            reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
                }

    }
    var revealsleft = document.querySelectorAll('.reveal-left');
    for(var i=0;i<revealsleft.length;i++){
        var windowheight = window.innerHeight;
        var elementTop = revealsleft[i].getBoundingClientRect().top;
        var revealpoint = 180;
        if (elementTop < windowheight - revealpoint){
            revealsleft[i].classList.add('active');
            }
            else{
                revealsleft[i].classList.remove('active');
                }

    }
        var revealsright = document.querySelectorAll('.reveal-right');
    for(var i=0;i<revealsright.length;i++){
        var windowheight = window.innerHeight;
        var elementTop = revealsright[i].getBoundingClientRect().top;
        var revealpoint = 180;
        if (elementTop < windowheight - revealpoint){
            revealsright[i].classList.add('active');
            }
            else{
                revealsright[i].classList.remove('active');
                }

    }
        var inp = document.getElementById("name");
    inp.addEventListener('mouseover',function(){
            this.style.borderLeft = '1px solid red';
                  setTimeout(function() {
      }, 1);
      this.style.borderBottom = '1px solid red';
                  setTimeout(function() {
      }, 10);
      this.style.borderRight = '1px solid red';
                  setTimeout(function() {
      }, 100);
      this.style.borderTop = '1px solid red';
                  setTimeout(function() {
      }, 1000);

    });
    inp.addEventListener('mouseout',function(){
        this.style.border='1px solid  rgb(225, 220, 220)';
    });

}


