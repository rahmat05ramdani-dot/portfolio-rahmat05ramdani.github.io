
window.addEventListener("load", function(){

    setTimeout(function(){
    
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".semua").style.display = "block";
    
    },1500);
    
    });

    document.addEventListener("click", function(){
        const music = document.getElementById("music");
        music.muted = false;
        music.play();
      });
      
    const texts = [
        "I am a Data Scientist ",
        "I am a Data Analyst ",
        "I am a Data Engineer ",
        "I am a Web Designer "
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let deleting = false;
        
        function typeEffect(){
        
        const element = document.querySelector(".identitas");
        const currentText = texts[textIndex];
        
        if(!deleting){
        element.textContent = currentText.substring(0, charIndex++);
        }else{
        element.textContent = currentText.substring(0, charIndex--);
        }
        
        if(!deleting && charIndex === currentText.length){
        deleting = true;
        setTimeout(typeEffect,600);
        return;
        }
        
        if(deleting && charIndex === 0){
        deleting = false;
        textIndex++;
        
        if(textIndex >= texts.length){
        textIndex = 0;
        }
        }
        
        setTimeout(typeEffect, deleting ? 50 : 100);
        
        }
        
        typeEffect();
        
        

    function showCertifications(){
        document.getElementById("slider").style.display = "block";
        AOS.refresh();
        function slideLeft(){
            document.getElementById("cards").scrollBy({
            left:-220,
            behavior:"smooth"
            });
            }
            
            function slideRight(){
            document.getElementById("cards").scrollBy({
            left:220,
            behavior:"smooth"
            });
            }
        }
        
    
            