const questionWrap = document.querySelector(".question_wrap");
const questionItem = document.querySelectorAll(".question_item");

const progress = [
    {
        title: "おうちで一番大切にしたいことは？",
        questions: [
            {
                question01: "毎日の料理を楽しみたい",
                imgPath01: "images/question_img01.png",
            },
            {
                question02: "おしゃれな空間で過ごしたい",
                imgPath02: "images/question_img01.png",
            },
            {
                question03: "自分らしく部屋作りをしたい",
                imgPath03: "images/question_img01.png",
            },
        ],
    },
    {
        title: "休日はどんな過ごし方が好き？",
        questions: [
            {
                question01: "カフェや食事を楽しむ",
                imgPath01: "images/question_img01.png",
            },
            {
                question02: "部屋でゆっくりリラックスする",
                imgPath02: "images/question_img01.png",
            },
            {
                question03: "DIYや模様替えをする",
                imgPath03: "images/question_img01.png",
            },
        ],
    },
    {
        title: "好きなインテリアは？",
        questions: [
            {
                question01: "自然を感じる優しい雰囲気",
                imgPath01: "images/question_img01.png",
            },
            {
                question02: "すっきりとした洗礼された雰囲気",
                imgPath02: "images/question_img01.png",
            },
            {
                question03: "自分らしさを表現できる雰囲気",
                imgPath03: "images/question_img01.png",
            },
        ],
    },
];

questionItem.forEach((e) => {
    e.addEventListener("click", () => {});
});

console.log(progress);
