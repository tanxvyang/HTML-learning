
//输出直角三角形


for(var table="#";table.length<8;table+="#")
  console.log(table);




//打印1~100的数，如果能被3整除，打印 “Fizz”,如果被5整除，打赢“Buzz”,
//如果同时被3,5整除打印“FizzBizz”

for(var num=1; num<=100;num++){
  let output="" ;
if (num%3==0)output+="Fizz" ;
  if(num%5==0)output+="Buzz" ;
  console.log(output||num) ;
}


//打印棋盘3,8x8
/*

  # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 

*/
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);