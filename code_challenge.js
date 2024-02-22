// // Coding Challenge #5
   
    // calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;
        
    // var scoreDolphins = calcAverage(44, 23, 71);
    // var scoreKoalas = calcAverage(65, 54, 49);

    // checkWinner = (scoreDolphins, scoreKoalas) => {
    //         if(scoreDolphins > scoreKoalas){
    //             console.log(`Dophins team win`);
    //         }
    //         else if(scoreKoalas > scoreDolphins){
    //             console.log("Koalas team wins");
    //         }
    //         else{
    //             console.log("No team wins...")
    //         }
    // }

    // checkWinner(scoreDolphins, scoreKoalas);



// // Coding Challenge #6

    // var bills = [125, 555, 44];
    // var calcTip = (bill) => 50 <= bill && bill <=500 ? 0.15 * bill : 0.20 * bill;
    // console.log(calcTip);

    // console.log(`Tip for $100 : ${calcTip(100)}`);


    
// // Coding Challenge #7

    // var mark = {
    //     fullName: "Mark Miller",
    //     mass: 95,
    //     height: 1.54,
    //     calcAge: function(){
    //         this.bmi = this.mass / (this.height * this.height);
    //         return this.bmi;
    //     },
    
    // };

    // var john = {
    //     fullName: "John Smith",
    //     mass: 86,
    //     height: 1.69,
    //     calcAge: function(){
    //         this.bmi = this.mass / (this.height * this.height);
    //         return this.bmi;
    //     },
    // };

    // if(mark.calcAge() > john.calcAge()){
    //     console.log(`${mark.fullName} weighs ${mark.mass} kg and is ${mark.height}m tall.`);
    //     console.log(`Mark BMI(${mark.calcAge()}) is higher than John BMI(${john.calcAge()})!`)
    // }
    // else if(mark.calcAge() < john.calcAge()){
    //     console.log(`${john.fullName} weighs ${john.mass} kg and is ${john.height}m tall.`);
    //     console.log(`John BMI(${john.calcAge()}) is higher than Mark BMI(${mark.calcAge()})!`)
    // }
    // else{
    //     console.log(`${mark.fullName} and ${john.fullName} has same BMI (${mark.calcAge()}).`);
    // }



// // Coding Challenge #8

    // var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    // var tips =[];
    // var totals =[];

    // var calcTip = (bill) => 50 <= bill && bill <=500 ? 0.15 * bill : 0.20 * bill;
    // console.log(calcTip);

    // for(let i = 0; i <= bills.length - 1; i++){
    //     var tip = calcTip(bills[i]);
    //     // console.log(tip);
    //     tips.push(tip);
    //     totals.push(bills[i] + tip);
    // }

    // console.log(`Bills: ${bills}, 
    // Tips: ${tips},
    // Totals: ${totals}`);

    // var calcAverage = (arr) => {
    //     let sum = 0;
    //     for(let i = 0; i <= arr.length -1; i++){
    //         sum = sum + arr[i];
    //         // console.log(`${sum / arr.length}`);
    //     }
    //     console.log(`Average of totals: ${sum / arr.length}`);
    // }

    // calcAverage(totals);



// // Coding Challenge #9

    // var temperatures = [17, 21, 23];
    // console.log(`${temperatures[0]} C in 1 days`);
    // console.log(`${temperatures[1]} C in 2 days`);
    // console.log(`${temperatures[2]} C in 3 days`);

    // var data2 = [12, 5, -5, 0, 4];

    // printForecast = (arr) => {
    //     for(let i = 0; i <= arr.length - 1; i++){
    //         // console.log(`${arr[i]} C in ${arr.indexOf(arr[i + 1])} days`);
    //         console.log(`${arr[i]} C in ${i + 1} days`);
    //     }
    // }

    // printForecast(temperatures);
    // printForecast(data2);