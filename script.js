const image = document.getElementById("image")
const checkbox = document.getElementById("oil")
const html = {
    shop : document.getElementById("shop"),
    store : document.getElementById("store"),
    items : document.getElementById("items"),
    dict : document.getElementById("dict"),
    useoil : document.getElementById("useoil"),
    level : document.getElementById("level"),
    s_cost : document.getElementById("s_cost"),
    value : document.getElementById("value"),
    s_item : document.getElementById("s_item"),
    currentcoin : document.getElementById("currentcoin"),
    probability : document.getElementById("probability")
}

const changeImg = lv => {
    image.src = `bean${lv}.png`;
    image.alt = `${lv}단계 : ${Bean[lv-1].name}`
    html.level.innerHTML = `${lv}단계 : ${Bean[lv-1].name}`
    html.s_cost.innerHTML = `강화 비용 : ${Bean[lv-1].s_cost}코인`
    html.s_item.innerHTML = `강화 아이템 : ${Bean[lv-1].s_item}`
    html.value.innerHTML = `판매 가격 : ${Bean[lv-1].value}코인`
    html.currentcoin.innerHTML = `보유 코인 : ${coin}코인`
    html.probability.innerHTML = `강화 확률 : ${100*Bean[lv-1].prob}%`
}

// EventListeners



image.addEventListener("click", () => {
    let check = 0;
    if (checkbox.checked) {
        if (items.oil<=0 && level!=0) {
            alert("콩기름이 없습니다.");
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
        if (strengthen(check) == undefined){

        } else if (strengthen(check)){
            coin -= Bean[level-1].s_cost;
            level++;
            changeImg(level)
        } else if (Bean[level-1].protect <= items.cake) {
            coin -= Bean[level-1].s_cost;
            if (confirm(`강화에 실패했습니다.\n인절미 ${Bean[level-1].protect}개를 사용하시겠습니까?`)) {
                useCake()
            } else {
                items.powder += givePowder()
                level = 1;
                changeImg(level)
            }
        } else {
            coin -= Bean[level-1].s_cost;
            items.powder += givePowder()
            level = 1;
            changeImg(level)
        }
        checkbox.checked = false;
    } else if (level == 25) {
        // 엔딩
    } 
})

document.getElementById("sellbean").addEventListener("click", () => {
    sellBean();
    changeImg(level);
})

document.getElementById("caketrade1").addEventListener("click", () => {
    caketrade1();
})

document.getElementById("caketrade2").addEventListener("click", () => {
    caketrade2();
})

document.getElementById("oiltrade").addEventListener("click", () => {
    oiltrade();
})


// Functions


