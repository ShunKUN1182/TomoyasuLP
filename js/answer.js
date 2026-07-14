const questionWrap = document.querySelector(".question_wrap");
const minNum = document.querySelector("#minNum");
const maxNum = document.querySelector("#maxNum");
let questionItem = document.querySelectorAll(".question_item");
let count = 0;

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

function renderProgress(count) {
    questionWrap.innerHTML = "";
    const progres = progress[count];
    questionWrap.insertAdjacentHTML(
        "beforeend",
        `
            <h2>${progres.title}</h2>
            <div class="question_item" data-score="a">
                <div class="question_img">
                    <img src="${progres.questions[0].imgPath01}" alt="" />
                </div>
                <div class="question_text">
                    <p>${progres.questions[0].question01}</p>
                </div>
            </div>
            <div class="question_item" data-score="a">
                <div class="question_img">
                    <img src="${progres.questions[1].imgPath02}" alt="" />
                </div>
                <div class="question_text">
                    <p>${progres.questions[1].question02}</p>
                </div>
            </div>
            <div class="question_item" data-score="a">
                <div class="question_img">
                    <img src="${progres.questions[2].imgPath03}" alt="" />
                </div>
                <div class="question_text">
                    <p>${progres.questions[2].question03}</p>
                </div>
            </div>
        `,
    );
    questionItem = document.querySelectorAll(".question_item");
    addEvent();
}

function addEvent() {
    questionItem.forEach((e) => {
        e.addEventListener("click", () => {
            count++;
            minNum.textContent = count + 1;
            if (count < progress.length) {
                renderProgress(count);
            } else {
                alert("診断終了");
            }
        });
    });
}

minNum.textContent = count + 1;
maxNum.textContent = progress.length;
addEvent();
