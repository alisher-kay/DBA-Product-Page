// Gallery lightbox with navigation
let galleryImages = [];
let currentImageIndex = 0;

// Initialize gallery images array from all gallery links
function initGalleryImages() {
    const links = document.querySelectorAll('.gallery-link');
    galleryImages = [];
    links.forEach(function(link) {
        galleryImages.push(link.href);
    });
}

function FullView(ImgLink) {
    initGalleryImages();
    // Find current image index
    currentImageIndex = galleryImages.indexOf(ImgLink);
    if (currentImageIndex === -1) currentImageIndex = 0;
    
    document.getElementById('FullImage').src = ImgLink;
    document.getElementById('FullImageView').style.display = 'block';
}

function CloseFullView() {
    document.getElementById('FullImageView').style.display = 'none';
}

function showPrevImage() {
    if (galleryImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById('FullImage').src = galleryImages[currentImageIndex];
}

function showNextImage() {
    if (galleryImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    document.getElementById('FullImage').src = galleryImages[currentImageIndex];
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    var prevBtn = document.getElementById('PrevButton');
    var nextBtn = document.getElementById('NextButton');
    var fullImageView = document.getElementById('FullImageView');
    
    if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
    if (nextBtn) nextBtn.addEventListener('click', showNextImage);
    
    // Close lightbox when clicking outside the image
    if (fullImageView) {
        fullImageView.addEventListener('click', function(e) {
            if (e.target === fullImageView) {
                CloseFullView();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (document.getElementById('FullImageView').style.display === 'block') {
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'Escape') CloseFullView();
        }
    });
});












