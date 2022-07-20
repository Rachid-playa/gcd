const gcd = (x, y) => {
    let multiple = 1
    const gcdrange = []
    let value
    if (x > y) {
        num = y
    } else{
        num  = x
    } 
    while (multiple <= num) {
        if (x % multiple === 0 && y % multiple ===0) {
            gcdrange.push(multiple)
        }
        multiple++
    }
    value = gcdrange.length - 1
    return gcdrange[value]
}

 console.log(gcd(10, 20))