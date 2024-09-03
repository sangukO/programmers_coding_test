function solution(n) {
    if (n < 2) return 0;
    
    const isPrime = new Array(n+1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for (let index = 2; index * index <= n; index++) {
        if (isPrime[index]) {
            for (let sq = index * index; sq <= n; sq += index) {
                isPrime[sq] = false;
            }
        }
    }
    
    return isPrime.reduce((count, prime) => count + (prime ? 1 : 0), 0);
}