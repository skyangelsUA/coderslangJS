export const getBMICategory = (bmi) => {
  if (bmi >= 30 ) {
    return `Obesity`
  }if (bmi >= 25 && bmi < 30) {
    return `Overweight`
  } if (bmi >  18.5 && bmi < 25) {
    return `Normal weight`
  } else {
    return `Underweight` 
  }
}