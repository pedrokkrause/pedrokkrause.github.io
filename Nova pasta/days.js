const startDate = new Date('2019-04-12T00:00:00'); 
setInterval(() => {
    const now = new Date();
    const differenceInTime = now.getTime() - startDate.getTime(); 
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); 
    document.getElementById('days').textContent = differenceInDays;
}, 1000);