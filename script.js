const image = document.getElementById("image")
const checkbox = document.getElementById("useoil")
const prob = [50,90,80,70,1,1,1,1,1,1,1,1,1,1,1] // Probability

const changeImg = lv => {
    image.src = `bean${lv}.png`;
    image.alt = `${lv}단계 : ${Bean[lv-1].name}`
}

// EventListeners



image.addEventListener("click", () => {
    let check = 0;
    if (checkbox.checked) {
        if (items.oil<=0) {
            alert("기름이 없습니다.");
            return
        } else {
            check = 1;
        }
    } else {
        check = 0;
    }
    if (level == 0) { // 게임 시작
        level = 1;
        changeImg(level)
    } else if (level < 25){
        // 강화시키기
        if (strengthen(check)){
            level++;
            changeImg(level)
        } else if (Bean[level-1].protect <= items.cake) {
            if (confirm(`인절미 ${Bean[level-1].protect}개를 사용하시겠습니까?`)) {
                useCake()
            } else {
                items.powder += givePowder()
                level = 1;
                changeImg(level)
            }
        }
    } else if (level == 25) {
        // 엔딩
    } 
})

// Functions


