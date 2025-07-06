var count=0;
function increaseCount(){
    var pRef = document.querySelector("p");
    count++;
    pRef.innerText="Count value is : " + count;
}