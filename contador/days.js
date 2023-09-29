function dayMonthYearDifference(startDate, endDate){
    const oneDay = 1000 * 60 * 60 * 24;
    
    let days = Math.floor((endDate - startDate) / oneDay);

    let years = Math.floor(days / 365.25);
    days -= years * 365.25;

    let months = Math.floor(days / 30.4375);
    days -= months * 30.4375;

	let days = Math.floor(days)
	
    return {
        years,
        months,
        days
    };
}

const startDate = new Date('2019-04-12T00:00:00Z'); 

function calculateAndDisplayTime() {
    const now = new Date();
    const totalDays = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    const result = dayMonthYearDifference(startDate, now);

    document.getElementById('totalDays').textContent = totalDays;
    document.getElementById('years').textContent = result.years;
    document.getElementById('months').textContent = result.months;
    document.getElementById('days').textContent = result.days;
}

// Call the function initially to populate the values immediately
calculateAndDisplayTime();

// Then update every second
setInterval(calculateAndDisplayTime, 1000);