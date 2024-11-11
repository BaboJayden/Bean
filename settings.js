Bean = [
    {name : "작은 콩", level : 1, prob : 1.00, s_cost : 1500, value : 100, protect : 1,},
    {name : "뿌리가 난 콩", level : 2, prob : 1.00, s_cost : 2300, value : 100, protect : 1,},
    {name : "싹이 난 콩", level : 3, prob : 0.95, s_cost : 3400, value : 100, protect : 1,},
    {name : "가지가 난 콩", level : 4, prob : 0.95, s_cost : 5100, value : 100, protect : 1,},
    {name : "잎이 많은 콩", level : 5, prob : 0.90, s_cost : 7600, value : 100, protect : 1,},
    {name : "꽃이 핀 콩", level : 6, prob : 0.85, s_cost : 11400, value : 100, protect : 1,},
    {name : "다 자란 콩", level : 7, prob : 0.80, s_cost : 17000, value : 100, protect : 2,},
    {name : "병아리콩", level : 8, prob : 0.75, s_cost : 26000, value : 100, protect : 2,},
    {name : "대두", level : 9, prob : 0.70, s_cost : 40000, value : 100, protect : 2,},
    {name : "카카오콩", level : 10, prob : 0.65, s_cost : 80000, value : 100, protect : 3,},
    {name : "커피콩", level : 11, prob : 0.60, s_cost : 160000, value : 100, protect : 4,},
    {name : "땅콩", level : 12, prob : 0.50, s_cost : 320000, value : 100, protect : 5,},
    {name : "팥", level : 13, prob : 0.45, s_cost : 640000, value : 100, protect : 6,},
    {name : "콩나물", level : 14, prob : 0.40, s_cost : 1280000, value : 100, protect : 10,},
    {name : "강낭콩", level : 15, prob : 0.35, s_cost : 3840000, value : 100, protect : 15,},
    {name : "콩밥", level : 16, prob : 0.30, s_cost : 11520000, value : 100, protect : 20,},
    {name : "일반적인 콩", level : 17, prob : 0.50, s_cost : 0, value : 100, protect : 20,},
    {name : "검은콩", level : 18, prob : 0.50, s_cost : 0, value : 100, protect : 25,},
    {name : "녹두", level : 19, prob : 0.40, s_cost : 0, value : 100, protect : 30,},
    {name : "두유", level : 20, prob : 0.40, s_cost : 0, value : 100, protect : 35,},
    {name : "검은콩 두유", level : 21, prob : 0.30, s_cost : 0, value : 100, protect : 40,},
    {name : "녹두 두유", level : 22, prob : 0.30, s_cost : 0, value : 100, protect : 50,},
    {name : "완두콩", level : 23, prob : 0.25, s_cost : 0, value : 100, protect : 80,},
    {name : "멘델의 완두콩", level : 24, prob : 0.30, s_cost : 0, value : 100, protect : 1000000,},
    {name : "빛나는 콩", level : 25, prob : 0, s_cost : 0, value : 100, protect : 1,},
]

let level = 0;
let coin = 1000000;
let items = {
    powder : 0, // 화폐
    oil : 0, // 확률 5% 상승, 300콩가루
    cake : 0, // 방지권, 30콩가루 / 250콩가루에 10인절미
    bean15 : 0,
    bean16 : 0,
}

function strengthen (isOilUsed) { // 강화 성공 시 true 실패시 false 반환하는 함수, isOilUsed에 참이면 1, 거짓이면 0 넣을 것
    const rand = Math.random()
    obj = Bean[level-1]
    if (obj.s_cost <= coin) {
        coin -= obj.s_cost;
        if (rand < obj.prob + isOilUsed*0.05) {
            items.oil -= isOilUsed;
            return true
        } else {
            return false
        }
    } else {
        alert("코인이 부족합니다.")
    }
}

function sellBean () { // 콩을 파는 함수
    level = 1;
    coin += Bean[level-1].value;
}

function keepBean () { // 15, 16단계에서 콩을 보관하는 함수
    items["bean"+level] += 1;
    level = 1;
}

function givePowder () { // 콩가루 분배 함수
    give = Math.floor((level**2)*0.2) + 10
    return give

}

function useCake () 
{
    items.cake -= Bean[level-1].protect
    return;
}


