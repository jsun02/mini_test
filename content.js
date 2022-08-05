const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

// 버튼의 개수만큼 반복, 해당 요소 이벤트 등록
for(let btn of btns){
    // 각 버튼 클릭
    btn.addEventListener("click", (e) => {
        // on 클래스 추가 및 제거 로직
        console.log(btn);
        for(let element of btns) {
            console.log(element);
            element.classList.remove('on');
        };
        btn.classList.add('on');
        for(let element of articles) {
            element.classList.remove('on');
        }
    });
};
