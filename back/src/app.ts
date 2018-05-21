import { CalcPremiumNumber } from "./calc0fPremium";




export const number = new CalcPremiumNumber();
number.target = 10001;
number.getResult().then((result) => {
    console.log(`result of the ${number.target}nth prime number is ${result}`)
})