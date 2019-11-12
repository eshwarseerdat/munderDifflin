var headImg = document.getElementById('header');
headImg.addEventListener('mouseover', () => {
    headImg.style.transform = 'scale(1.1,1.1)'
    /* headImg.style.transform = 'skew(5deg)'
    headImg.style.transform = 'rotate(5deg)' */
    headImg.style.margin = '2px'
    
})

headImg.addEventListener('mouseout', () => {
    headImg.style.transform = ''
    headImg.style.margin = ''
})