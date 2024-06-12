const questions = [
    "請問你的性別是?",
    "請從下面四種遊戲中挑選一種最喜歡的",
    "想像你在一個幽靜的森林，你第一個看到的動物是?",
    "某天，你在上歷史課時，不小心睡著了，你夢到的是?",
    "路上有一個老人，告訴你他有預知未來的能力，而且願意回答你一個問題，你會問?",
    "在巴黎香榭大道上，看到一對擁吻的情侶，你覺得他們身分可能是?",
    "下圖是吃一半的三明治，你下一口會咬哪裡?",
    "假如某天你逛寵物店，想要買一隻寵物回家養，你會選?",
    "某天在爬山時，前方突然沒路了，你會怎麼做?",
    "你在吃披薩時，會搭配什麼飲料?",
    "??????????????????"
    // 其他問題...
];

const options = [
    [{ text: "男", image: "p/Q1/Q1option1.jpg"},
    { text: "女", image: "p/Q1/Q1option2.jpg" },
    { text: "生理女心理男", image: "p/Q1/Q1option3.png" },
    { text: "生理男心理女", image: "p/Q1/Q1option4.png" }], // 問題1的選項

    [{ text: "原神", image: "p/Q2/Q2option1.jpg" },
    { text: "傳說對決", image: "p/Q2/Q2option2.jpg" },
    { text: "貓咪大戰爭", image: "p/Q2/Q2option3.jpg" },
    { text: "Minecraft", image: "p/Q2/Q2option4.jpg" }], // 問題2的選項

    [{ text: "獨眼巨人", image: "p/Q3/Q3option1.png" },
    { text: "飛天少女豬", image: "p/Q3/Q3option2.jpg" },
    { text: "哥吉拉", image: "p/Q3/Q3option3.png" },
    { text: "我阿嬤", image: "p/Q3/Q3option4.jpg" }], // 問題3的選項

    [{ text: "騎著獨角獸在天空上飛", image: "p/Q4/Q4option1.jpg" },
    { text: "站在廁所前面等已經拉屎40分鐘的媽媽趕快出來", image: "p/Q4/Q4option2.jpg" },
    { text: "在上歷史課", image: "p/Q4/Q4option3.jpg" },
    { text: "凌晨趕專案結果猝死，然後轉生異世界", image: "p/Q4/Q4option4.jpg" }], // 問題4的選項

    [{ text: "下次的樂透號碼是多少?", image: "p/Q5/Q5option1.jpg" },
    { text: "明年有哪些大事件會發生?", image: "p/Q5/Q5option2.png" },
    { text: "什麼都不要說", image: "p/Q5/Q5option3.jpg" },
    { text: "是誰讓你出院的?", image: "p/Q5/Q5option4.png" }], // 問題5的選項

    [{ text: "小學生", image: "p/Q6/Q6option1.jpg" },
    { text: "咖啡廳老闆", image: "p/Q6/Q6option2.jpg" },
    { text: "你失散多年親生父親", image: "p/Q6/Q6option3.jpg" },
    { text: "道路清潔工", image: "p/Q6/Q6option4.jpg" }], // 問題6的選項

    [{ text: "A", image: "p/Q7/Q7option1.jpg" },
    { text: "B", image: "p/Q7/Q7option2.jpg" },
    { text: "C", image: "p/Q7/Q7option3.jpg" },
    { text: "我全都要，包含手指", image: "p/Q7/Q7option4.jpg" }], // 問題7的選項

    [{ text: "皮卡丘", image: "p/Q8/Q8option1.png" },
    { text: "雷鳥(不是閃電鳥)", image: "p/Q8/Q8option2.jpg" },
    { text: "饕餮", image: "p/Q8/Q8option3.png" },
    { text: "八岐大蛇", image: "p/Q8/Q8option4.jpg" }], // 問題8的選項

    [{ text: "原路折返", image: "p/Q9/Q9option1.png" },
    { text: "拿出手機查google map", image: "p/Q9/Q9option2.jpg" },
    { text: "拿出任意門直達山頂", image: "p/Q9/Q9option3.jpg" },
    { text: "打電話叫私人直升機來載你", image: "p/Q9/Q9option4.jpg" }], // 問題9的選項

    [{ text: "可樂/雪碧", image: "p/Q10/Q10option1.jpg" },
    { text: "檸檬紅茶", image: "p/Q10/Q10option2.jpg" },
    { text: "白開水", image: "p/Q10/Q10option3.jpg" },
    { text: "岩漿", image: "p/Q10/Q10option4.jpg" }], // 問題10的選項

    [{ text: "可樂/雪碧", image: "option1.jpg" },
        { text: "檸檬紅茶", image: "option2.jpg" },
        { text: "白開水", image: "option1.jpg" },
        { text: "岩漿", image: "option3.jpg" }],//這是當作最後的題目，但是看不到
];



const result = [
    { text: "你是原神玩家!!", image: "p/Q8/Q8option1.png" },
    { text: "You are Gay!", image: "p/Q8/Q8option1.png" },
    { text: "你是一個喜歡在吃披薩時配汽水的人", image: "p/Q8/Q8option1.png" },
    { text: "你是一個喜歡在吃披薩時配檸檬紅茶的人", image: "p/Q8/Q8option1.png" },
    { text: "你是一個喜歡在吃披薩時配水的人，你很健康", image: "p/Q8/Q8option1.png" },
    { text: "你沒有吃過披薩", image: "p/Q8/Q8option1.png" },
    { text: "你是人類", image: "p/Q8/Q8option1.png" },
];

document.getElementById("viewResultButton").addEventListener("click", function() {
    const resultIndex = calculateResultIndex(calculateScore());
    window.location.href = `result.html?result=${resultIndex}`;
});


let currentQuestion = -1;

function displayStartPage() {
    const startDiv = document.getElementById("start");
    startDiv.style.display = "block";
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startTest);
}

function startTest() {
    currentQuestion = 0;
    const startDiv = document.getElementById("start");
    startDiv.style.display = "none";
    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.style.display = "block";
    questionElement.textContent = questions[currentQuestion];


    optionsElement.innerHTML = "";
    options[currentQuestion].forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.setAttribute("data-question", currentQuestion);
        optionElement.setAttribute("data-option-index", index);
        
        const imageElement = document.createElement("img");
        imageElement.src = option.image;
        optionElement.appendChild(imageElement);
        
        const textElement = document.createElement("span");
        textElement.textContent = option.text;
        optionElement.appendChild(textElement);
        
        optionElement.addEventListener("click", () => {
            optionElement.classList.add("selected");
            currentQuestion++;
            if (currentQuestion === questions.length - 1) {
                // 如果是最后一题，显示測驗結束區塊
                const questionElement = document.getElementById("question");
                const optionsElement = document.getElementById("options");
                const finishDiv = document.getElementById("finish");
        
                questionElement.style.display = "none";
                optionsElement.style.display = "none";
                finishDiv.style.display = "block";
           } else {
               // 如果不是最后一题，繼續下一題
               displayQuestion();
               //讀取選項
           }
       });
       optionsElement.appendChild(optionElement);
   });

    //88888888888
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startTest);
    }


function displayResult() {
    const resultElement = document.getElementById("result");
    const resultHeaderElement = document.getElementById("resultHeader");
    const resultImageElement = document.getElementById("resultImage");
    const resultTextElement = document.getElementById("resultText");
    const resultButton = document.getElementById("resultButton");

    resultElement.style.display = "block";
    resultHeaderElement.textContent = "測驗結果";

    let userChoices = [];
    for (let i = 0; i < questions.length; i++) {
        const selectedOption = document.querySelector(`.option.selected[data-question="${i}"]`);
        if (selectedOption) {
            const optionIndex = parseInt(selectedOption.getAttribute("data-option-index"));
            userChoices.push(options[i][optionIndex]);
        }
    }

    const resultIndex = calculateResultIndex(calculateScore());
    resultTextElement.textContent = result[resultIndex].text;
    resultImageElement.src = result[resultIndex].image;

    resultButton.style.display = "none";

    // window.location.href = `result.html?result=${resultIndex}`; // 我們不需要重新導向
}

function addViewResultButtonListener() {
    const viewResultButton = document.getElementById("viewResultButton");
    if (viewResultButton) {
        viewResultButton.addEventListener("click", function() {
            const resultIndex = calculateResultIndex(calculateScore());
            window.location.href = `result.html?result=${resultIndex}`;
        });
    } else {
        console.error("viewResultButton element not found");
    }
}

window.addEventListener('DOMContentLoaded', function() {
    addViewResultButtonListener();
    const optionsElement = document.getElementById("options");
    const lastQuestionIndex = questions.length - 1;
    if (currentQuestion === lastQuestionIndex) {
        // 在最后一题时，显示查看结果按钮
        const resultButton = document.createElement("button");
        resultButton.textContent = "查看結果";
        resultButton.id = "viewResultButton";
        resultButton.style.display = "none"; // 初始状态隐藏
        optionsElement.appendChild(resultButton);
        resultButton.addEventListener("click", function() {
            displayResult();
        });
    }
});



// 计算分数

function calculateScore() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const selectedOption = document.querySelector(`.option.selected[data-question="${i}"]`);
        console.log("aa")
        if (selectedOption) {
        console.log("bb")
        const optionIndex = parseInt(selectedOption.getAttribute("data-option-index"));
            //記得第一題代號是0，第一選項也是0
            console.log(i)
            console.log(optionIndex)
            if (i === 0 && optionIndex === 3) {
                score += 100;
            }
            if (i === 1 && optionIndex === 0) {
                score += 1000;
            }
            if (i === 2 && optionIndex === 3) {
                score += 100;
            }
            if (i === 9 && optionIndex === 0) {
                score += 1;
            }
            if (i === 9 && optionIndex === 1) {
                score += 2;
            }
            if (i === 9 && optionIndex === 2) {
                score += 3;
            }
            if (i === 9 && optionIndex === 3) {
                score += 4;//沒吃過披薩
            }
            else {
                score += 0;
            }
        }
    }
    return score;
}


// 根据分数计算结果索引
function calculateResultIndex(score) {
    if (score >= 1004) {
        return 0; // 第一种结果，原神玩家
    } else if (score >= 201 && score <= 204) {
        return 1; // 第二种结果，you are gay
    } else if (score === 1 || score === 101 || score === 1001) {
        return 2; // 第三种结果，你是一個喜歡在吃披薩時配汽水的人
    } else if (score === 2 || score === 102 || score === 1002) {
        return 3; // 第四种结果，你是一個喜歡在吃披薩時配檸檬紅茶的人
    } else if (score === 3 || score === 103 || score === 1003) {
        return 4; // 第五种结果，你是一個喜歡在吃披薩時配水的人，你很健康
    } else if (score === 4 || score === 104 || score === 1004) {
        return 5; // 第五种结果，你沒有吃過披薩
    } else {
        return 6; // 第六种结果，你是一個人類
    }
}

window.addEventListener('DOMContentLoaded', function() {
    addViewResultButtonListener();
});

function addViewResultButtonListener() {
    const viewResultButton = document.getElementById("viewResultButton");
    if (viewResultButton) {
        viewResultButton.addEventListener("click", function() {
            const resultIndex = calculateResultIndex(calculateScore());
            window.location.href = `result.html?result=${resultIndex}`;
        });
    } else {
        console.error("viewResultButton element not found");
    }
}

displayStartPage();