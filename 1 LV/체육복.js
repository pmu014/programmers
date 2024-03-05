function solution(n, lost, reserve) {
    let count = n-lost.length;
    let rout = [];
    const realReserve = reserve.filter(r => !lost.includes(r));
    for (let i of lost) {
        if (realReserve.includes(i - 1)&& !rout.includes(i-1)) {
            rout.push(i-1)
            count++;
            console.log(count);
        } else if (realReserve.includes(i + 1)&& !rout.includes(i+1)) {
            rout.push(i+1)
            count++;
            console.log(count);
        }
    }
    console.log(rout);
    return count;
}

solution(5, [2,4], [3])