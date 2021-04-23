function karatsuba(x, y){

  //base case
  if(x < 10 && y < 10){
    // console.log(x*y)
    return x * y
  }
  
  //length in digits of largest value
  let n = Math.max(x.toString().length, y.toString().length)

  //middle point of digits
  let s = Math.floor(n / 2)
  console.log(s, x, y)

  let a = Math.floor(x / (10**s))
  let b = x % 10**s

  let c = Math.floor(y / (10**s))
  let d = y % 10**s

  let step1 = karatsuba(a, c)
  let step2 = karatsuba(b, d)
  let step3 = karatsuba((a + b), (c + d)) - step1 - step2

  return (10**(s*2)) * (step1) + (10**s * (step3)) + step2
}

console.log(karatsuba(35789, 3489))