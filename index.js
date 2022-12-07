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
    let speed = document.getElementById("input2").value ;

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
        result.push(arr);
    }
    
        
    
    let count=0;
    for(let i = 0 ; i < result.length ; i++){
        // let str = "";
        count++;
        function solve(){            
            let str = "";
            for(let j = 0 ; j < result[i].length ; j++){
                str += (result[i][j].toString() + " ");               
            }
            
            if(i&1)
            {
                document.getElementById('answer').innerHTML += `<p style="color:white">${str}</p>`  
            }
            else
            {
                document.getElementById('answer').innerHTML += `<p style="color:yellow">${str}</p>`  
            } 


        }
        
        let delay = speed*100;
        setTimeout(function(){solve()},i*delay);
        // solve();
         
    }


}



var resetButton = document.querySelector('#rest');
resetButton.onclick= reloadPage;

function reloadPage(){
   window.location.reload();
}
