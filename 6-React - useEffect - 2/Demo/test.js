let N = 321;
let tmp;
let rev =0;
let i=0;
while(N!=0)
{
    tmp=N%10;
    rev= rev*10+tmp;
    N= N%10;
}
console.log(N);