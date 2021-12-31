jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {
        hljs?.highlightAll()
        $('.level-bar-inner').each((element) => {
        
            let itemWidth = $(element).data('level');
            
            $(element).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});