// const body = document.querySelector('body');
// const toggleDay = document.querySelector('#toggleDay');
// const toggleNight = document.querySelector('#toggleNight');

// toggleDay.addEventListener('click', (e) => {
//     body.classList.toggle('dark');
// })
// toggleNight.addEventListener('click', (e) => {
//     body.classList.toggle('dark');
// })

// const scrollOffset = 100;


// let scrollElements = document.querySelectorAll(".row__list > div ");

// console.log(scrollElements);
// const elementInView = (el, offset = 0) => {
//     const elementTop = el.getBoundingClientRect().top;

//     return (
//         elementTop <=
//         ((window.innerHeight || document.documentElement.clientHeight) - offset)
//     );
// };

// const handleScrollAnimation = () => {
//     scrollElements.forEach((el) => {
//         if (elementInView(el, 1.25)) {
//             displayScrollElement(el);
//         } else if (elementOutofView(el)) {
//             hideScrollElement(el)
//         }
//     })
// }

// const displayScrollElement = () => {
//     scrollElements.classList.add('scrolled');
// }

// const hideScrollElement = () => {
//     scrollElements.classList.remove('scrolled');
// }

// // const handleScrollAnimation = () => {
// //     if (elementInView(scrollElements, scrollOffset)) {
// //         displayScrollElement();
// //     } else {
// //         hideScrollElement();
// //     }
// // }

// window.addEventListener('scroll', () => {
//     handleScrollAnimation();
// })



const scrollElements = document.querySelectorAll(".row__list");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});