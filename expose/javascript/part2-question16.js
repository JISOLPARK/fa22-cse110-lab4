for (const cars in statistics){
    if (cars.startsWith('r') || statistics[cars] % 2 !== 0){
        console.log(statistics[cars])
    }
}