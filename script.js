const image = document.getElementById("image")
const checkbox = document.getElementById("oil")
const html = {
    shop : document.getElementById("shop"),
    store : document.getElementById("store"),
    items : document.getElementById("items"),
    dict : document.getElementById("dict"),
    useoil : document.getElementById("useoil")
}

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
            if (confirm(`강화에 실패했습니다.\n인절미 ${Bean[level-1].protect}개를 사용하시겠습니까?`)) {
                useCake()
            } else {
                items.powder += givePowder()
                level = 1;
                changeImg(level)
            }
        } else {
            items.powder += givePowder()
            level = 1;
            changeImg(level)
        }
        checkbox.checked = false;
    } else if (level == 25) {
        // 엔딩
    } 
})

// Functions




