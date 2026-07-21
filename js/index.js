const items = document.querySelectorAll(".item_wrap");
const diagnosisWrap = document.querySelector(".diagnosis_wrap");
const goriras = document.querySelectorAll(".gorira_wrap");

const itemObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.3,
    },
);

items.forEach((item) => {
    itemObserver.observe(item);
});

const goriraObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                goriras.forEach((gorira, index) => {
                    setTimeout(() => {
                        gorira.classList.add("show");
                    }, index * 500);
                });

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.5,
    },
);

goriraObserver.observe(diagnosisWrap);
