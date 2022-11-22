// let num = document.getElementById("input1").addEventListener('input', function(){
//     pascalTriangle(this.value)
// });




// let n = document.getElementById("input1").value;
// let x = parseInt("n");
// x.document.addEventListener('input', function(){pascalTriangle(this.value)});
// let num = document.getElementById("input1").addEventListener('input', function(){
//     pascalTriangle(this.value)
// });

// let num = document.querySelector(".sub").addEventListener('.sub',()=> pascalTriangle(this.value))
// // console.log(num)
// // num.onclick = function (){
// //     pascalTriangle(num);
// // }

function pascalTriangle(){

    let numRows = document.getElementById("input1").value ;

    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        // setTimeout(result.push(arr), 100);
        result.push(arr);
    }
    function solve(){}
    for(let i = 0 ; i < result.length ; i++){
        let str = "";
        for(let j = 0 ; j < result[i].length ; j++){
            str += (result[i][j].toString() + " ");
        }
        // setTimeout(document.getElementById('answer').innerHTML += `<p>${str}</p>`, 1000);
        document.getElementById('answer').innerHTML += `<p>${str}</p>`
    }
}



var resetButton = document.querySelector('#rest');
resetButton.onclick= reloadPage;

function reloadPage(){
   window.location.reload();
}
