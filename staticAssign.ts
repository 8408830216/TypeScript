console.log("================Calculator Class using Static Method===============");


class Calculator{
    static addition(numAdd1:number,numAdd2:number){
        return numAdd1+numAdd2;
    }
    static substract(numSub1:number,numSub2){
        return numSub1-numSub2;
    }
    static multiplication(numMul1:number,numMul2:number){
        return numMul1*numMul2;              
    }
    static division(numDiv1:number,numDiv2:number){
        return numDiv1/numDiv2;
    }
};
console.log(`Addition of 10 and 50 is-: ${Calculator.addition(10,50)}`);
console.log(`Substraction of 100 and 50 is-: ${Calculator.substract(100,50)}`);
console.log(`Multiplication of 10 and 50 is-: ${Calculator.multiplication(10,50)}`);
console.log(`Division of 100 and 5 is-: ${Calculator.division(100,5)}`);


  
