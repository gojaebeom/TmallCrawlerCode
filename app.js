// 데이터 가공 
function dataParser() {
    const title = document.querySelector(".tb-detail-hd").querySelector("h1").textContent.trim();
    const cost = document.querySelector(".tm-price").textContent;
    const thumbnail = document.querySelector("#J_ImgBooth").src;
    const contentImages = document.querySelector(".content.ke-post p").childNodes;
    const contentImgList = [];
    
    for(let img of contentImages){
        contentImgList.push(img.src);
    }

    return { title, cost, thumbnail, contentImgList };
};
// 화면 갱신 및 복사기능 ( 없어도 무방, 간지용 )
function draw( data ) {
    const { title, cost, thumbnail, contentImgList } = data;

    const body = document.body;
    body.innerHTML = `
    <div style="padding:20px;border-radius:10px;background:white;font-size:24px;">
        <textarea style="position:fixed;left:0;top:0;width:1px;height:1px;">
상품명 : ${title}
가격 : ${cost}
썸네일 : ${thumbnail}
상세이미지 : 
${contentImgList.map(item => {
    return ""+item+"\n";
}).join("")}
        </textarea>
        <h2>복사가 완료되었습니다. 🛸</h2>
    </div>
    `;
    body.style.width = "100%";
    body.style.height = "100vh";
    body.style.background = "linear-gradient(#04B431, #04B486)";
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.overflow = "hidden";

    console.log(`제목 : ${ title }`);
    console.log(`가격 : ${ cost }`);
    console.log(`썸네일 이미지 : ${thumbnail}`);
    console.log( contentImgList );

    document.querySelector("textarea").select();
    document.execCommand("Copy");
}
// 실행함수
(function init (){
    const data = dataParser();
    draw( data );
})();
