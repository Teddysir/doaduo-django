document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides'); // 슬라이드 전체
    const slideItems = document.querySelectorAll('.slide'); // 각 슬라이드 항목
    const totalSlides = slideItems.length; // 슬라이드 개수
    let currentIndex = 0; // 현재 슬라이드 인덱스

    const moveToSlide = (index) => {
        slides.style.transform = `translateX(-${index * 100}%)`; // 슬라이드 이동
        slides.style.transition = 'transform 0.5s ease-in-out'; // 부드러운 전환 효과
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides; // 마지막 슬라이드 후 첫 번째로 이동
        moveToSlide(currentIndex);
    };

    // 3초마다 슬라이드 이동
    setInterval(nextSlide, 3000);
});
