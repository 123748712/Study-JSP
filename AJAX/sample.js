export default () => { 
    alert("function");
}

const c_obj = {
    name : "name",
    song : "song"
}

const c_obj2 = {
    name : "name2",
    song : "song2"
}

// export 할게 많다면 객체에 담아 보내기
const bigBox = {
    "item1" : c_obj,
    "item2" : c_obj2,
    "item3" : () => "box in function"
}
// export { c_obj, c_obj2 }
export { bigBox }