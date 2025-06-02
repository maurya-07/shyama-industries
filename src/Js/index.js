// ⁡⁣⁢⁣STICKY NAVBAR⁡
const handleScroll = () => document.querySelector('header')?.classList.toggle('scrolled', window.scrollY > 0);
document.addEventListener('scroll', handleScroll);