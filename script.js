function showSection(sectionId) {
    // 1. Hide every section first
    document.getElementById('home').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('bug-space-invasion').style.display = 'none';

    // 2. Turn on just the one we asked for
    document.getElementById(sectionId).style.display = 'block';
}

// 3. Connect your links to the action
document.querySelector('a[href="#projects"]').onclick = function() { showSection('projects'); };
document.querySelector('a[href="#about"]').onclick = function() { showSection('about'); };
document.querySelector('a[href="#home"]').onclick = function() { showSection('home'); };
document.querySelector('a[href="#contact"]').onclick = function() { showSection('contact'); };
document.querySelector('a[href="#bug-space-invasion"]').onclick = function() { showSection('bug-space-invasion'); };



let currentImgIndex = 0; 

function changeImage(direction) {
    const images = document.querySelectorAll('.gallery-img');
    images[currentImgIndex].classList.remove('active-img');
    currentImgIndex = currentImgIndex + direction;
    
    if (currentImgIndex >= images.length) {
        currentImgIndex = 0;
    } 
    else if (currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
    }
    
    // Turn on the new image
    images[currentImgIndex].classList.add('active-img');
}