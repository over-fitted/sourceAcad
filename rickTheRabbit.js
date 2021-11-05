
const memo = [1];
function rabbit(n) {
    if (n < 0) {
        return 0;
    }
    if (memo[n] !== undefined) {
        return memo[n];
    }
    let answer = 0;
    for (let i = 0; i < n; i = i + 1) {
       answer = answer + rabbit(i); 
    }
    memo[n] = answer;
    return answer;
}

rabbit(20);