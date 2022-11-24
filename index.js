function mySidebar() {
    var sideMenu = document.getElementById('leftMenu');
    
    var headings1 = document.getElementById('heading1');
    
    var headings2 = document.getElementById('heading2');
    
    var headings3 = document.getElementById('heading3');
    
    var headings4 = document.getElementById('heading4');
    
    var headings5 = document.getElementById('heading5');
    
    var socialMedia = document.getElementById('social');
    
    if (sideMenu.style.width == '150px')  {
        sideMenu.style.width = '25px';
        headings1.style.display = 'none';
        headings2.style.display = 'none';
        headings3.style.display = 'none';
        headings4.style.display = 'none';
        headings5.style.display = 'none';
        socialMedia.style.display = 'none';
    }
    else {
        sideMenu.style.width = '150px';
        headings1.style.display = 'block';
        headings2.style.display = 'block';
        headings3.style.display = 'block';
        headings4.style.display = 'block';
        headings5.style.display = 'block';
        socialMedia.style.display = 'block';
    }
}

function toTop() {
    var backTop = document.getElementById('toTop');
    
    backTop = document.body.scrollTop = 0;
    backTop = document.documentElement.scrollTop = 0;
}
