document.addEventListener('scroll', () => {
    const photos = document.querySelector('.photos');
    const scrollPosition = window.scrollY;
    const sectionHeight = document.querySelector('#gallery').offsetHeight;

    // Calculate the scroll percentage
    const scrollPercent = scrollPosition / sectionHeight;

    // Adjust the transform based on the scroll percentage
    photos.style.transform = `translateY(-${scrollPercent * 50}px)`;
});
