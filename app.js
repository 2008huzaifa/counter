// function red(){

// }
var num = 0

function plus() {
    num++
    document.getElementById('number').innerHTML = num
    


}
function minus() {
    if(num > 0){
        num--
        document.getElementById('number').innerHTML = num
        
    }}
    function reset (){
    num = 0
    document.getElementById('number').innerHTML = num

}