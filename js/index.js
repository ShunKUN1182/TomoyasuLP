const items = document.querySelectorAll(".item_wrap");

const observer = new IntersectionObserver(
    (entries) => {
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
    observer.observe(item);
});
