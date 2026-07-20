const resultTypeName = document.querySelector("#diagnosisResult");
const typeEx = document.querySelector("#typeEx");
const typeLine = document.querySelector("#typeLine");
const resultImgWrap = document.querySelector("#resultImgWrap");
const resultData = JSON.parse(localStorage.getItem("results"));

console.log(resultData);

resultTypeName.textContent = resultData[0].typeName;
typeEx.textContent = resultData[0].typeEx;
typeLine.textContent = resultData[0].typeLine;
resultImgWrap.innerHTML = `<img src="images/${resultData[0].imgPath}" alt="" />`;
