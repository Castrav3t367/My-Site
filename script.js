function showSection(sectionId) {
    // 1. Hide every section first
    document.getElementById('home').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';

    // 2. Turn on just the one we asked for
    document.getElementById(sectionId).style.display = 'block';
}

// 3. Connect your links to the action
document.querySelector('a[href="#projects"]').onclick = function() { showSection('projects'); };
document.querySelector('a[href="#about"]').onclick = function() { showSection('about'); };
document.querySelector('a[href="#home"]').onclick = function() { showSection('home'); };
document.querySelector('a[href="#contact"]').onclick = function() { showSection('contact'); };