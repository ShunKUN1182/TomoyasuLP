const questionWrap = document.querySelector(".question_wrap");
const minNum = document.querySelector("#minNum");
const maxNum = document.querySelector("#maxNum");
const progressBar = document.querySelector(".progress_bar");
let count = 0;
let barGauge = 10;
let score = { A: 0, B: 0, C: 0 };

const progress = [
    {
        title: "おうちで一番大切にしたいことは？",
        questions: [
            {
                question01: "毎日の料理を楽しみたい",
                imgPath01: "images/question_img01.png",
                score: "a",
            },
            {
                question02: "おしゃれな空間で過ごしたい",
                imgPath02: "images/question_img02.png",
                score: "b",
            },
            {
                question03: "自分らしく部屋作りをしたい",
                imgPath03: "images/question_img03.png",
                score: "c",
            },
        ],
        results: [
            {
                typeName: "MOKU",
                typeEx: "あなたは居心地のよい空間ずぐづくりを大切にするタイプです。",
                typeLine: "木のぬくもりが、心地よい時間を灯します。",
                imgPath: "resultImg01.png",
            },
        ],
    },
    {
        title: "休日はどんな過ごし方が好き？",
        questions: [
            {
                question01: "カフェや食事を楽しむ",
                imgPath01: "images/question_img01.png",
                score: "a",
            },
            {
                question02: "部屋でゆっくりリラックスする",
                imgPath02: "images/question_img01.png",
                score: "b",
            },
            {
                question03: "DIYや模様替えをする",
                imgPath03: "images/question_img01.png",
                score: "c",
            },
        ],
        results: [
            {
                typeName: "ARAS",
                typeEx: "あなたは「使いやすさ」と「デザイン性」を大切にするタイプ",
                typeLine: "割れにくく、美しく。毎日の食卓をもっと楽しく。",
                imgPath: "resultImg02.png",
            },
        ],
    },
    {
        title: "好きなインテリアは？",
        questions: [
            {
                question01: "自然を感じる優しい雰囲気",
                imgPath01: "images/question_img01.png",
                score: "a",
            },
            {
                question02: "すっきりとした洗礼された雰囲気",
                imgPath02: "images/question_img01.png",
                score: "b",
            },
            {
                question03: "自分らしさを表現できる雰囲気",
                imgPath03: "images/question_img01.png",
                score: "c",
            },
        ],
        results: [
            {
                typeName: "DIY",
                typeEx: "あなたは自分らしい空間図づくりを楽しむクリエイティブタイプ",
                typeLine: "壁や床を、自分だけのデザインに。",
                imgPath: "resultImg03.png",
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
            <div class="question_item" data-score="${progres.questions[0].score}">
                <div class="question_img">
                    <img src="${progres.questions[0].imgPath01}" alt="" />
                </div>
                <div class="question_text">
                    <p>${progres.questions[0].question01}</p>
                </div>
            </div>
            <div class="question_item" data-score="${progres.questions[1].score}">
                <div class="question_img">
                    <img src="${progres.questions[1].imgPath02}" alt="" />
                </div>
                <div class="question_text">
                    <p>${progres.questions[1].question02}</p>
                </div>
            </div>
            <div class="question_item" data-score="${progres.questions[2].score}">
                <div class="question_img">
                    <img src="${progres.questions[2].imgPath03}" alt="" />
                </div>
                <div class="question_text">
                    <p>${progres.questions[2].question03}</p>
                </div>
            </div>
        `,
    );
}

questionWrap.addEventListener("click", (e) => {
    const targetText = document.querySelectorAll(".question_text");
    const targetImg = document.querySelectorAll(".question_img");
    console.log(e.target);
    if (e.target == targetText || targetImg) {
        const targetItem = e.target.closest(".question_item");
        const targetScore = targetItem.dataset.score;
        if (targetScore == "a") {
            score.A += 1;
        }
        if (targetScore == "b") {
            score.B += 1;
        }
        if (targetScore == "c") {
            score.C += 1;
        }
        count++;
        barGauge += 40;
        if (count == 3) {
            const max = Math.max(score.A, score.B, score.C);
            let resultNum;
            if (max === score.A) {
                resultNum = 0;
            } else if (max === score.B) {
                resultNum = 1;
            } else {
                resultNum = 2;
            }
            const setResults = progress[resultNum].results;
            localStorage.setItem("results", JSON.stringify(setResults));
            location.href = "./result.html";
        } else {
            renderProgress(count);
            renderValue();
        }
    }
});

renderProgress(count);

function renderValue() {
    document.documentElement.style.setProperty("--barWidth", barGauge + "%");
    minNum.textContent = count + 1;
    maxNum.textContent = progress.length;
}

renderValue();
