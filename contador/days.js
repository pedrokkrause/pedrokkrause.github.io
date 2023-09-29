const startDate = new Date('2019-04-12T00:00:00'); 

setInterval(() => {
    const now = new Date();
    const differenceInTime = now.getTime() - startDate.getTime(); 
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); 
    const years = Math.floor(differenceInDays / 365);
    const months = Math.floor((differenceInDays % 365) / 30);
    const days = Math.floor((differenceInDays % 365) % 30);

    document.getElementById('totalDays').textContent = differenceInDays;
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}, 1000);