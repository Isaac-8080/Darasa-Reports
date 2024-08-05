// document.addEventListener("DOMContentLoaded", function () {
//     const accordions = document.querySelectorAll('.accordionToggle');

//     accordions.forEach(accordion => {
//         accordion.addEventListener('click', function () {
//             const text = this.nextElementSibling;
//             const icon = this.querySelector('.material-symbols-rounded');

//             if (text.classList.contains('hidden')) {
//                 text.classList.remove('hidden');
//                 icon.textContent = 'keyboard_arrow_up';
//             } else {
//                 text.classList.add('hidden');
//                 icon.textContent = 'keyboard_arrow_down';
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll('.accordionToggle');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            const text = this.nextElementSibling;
            const icon = this.querySelector('.arrow');

            if (text.classList.contains('hidden')) {
                text.classList.remove('hidden');
                icon.classList.add('rotate');
            } else {
                text.classList.add('hidden');
                icon.classList.remove('rotate');
            }
        });
    });
});