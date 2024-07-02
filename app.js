document.addEventListener('DOMContentLoaded', () => {
    // For my display name and gmail
    const slackDisplayName = document.querySelector('[data-testid="slackDisplayName"]');
    slackDisplayName.textContent = "DANIEL JOHN";
    const slackEmail = document.querySelector('[data-testid="slackEmail"]');
    slackEmail.textContent ="ekpenyongdaniel444@gmail.com";

    // for Current Time in UTC
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDate = new Date();
    currentTimeUTC.textContent = currentDate.toUTCString().split(' ')[4];

    // For Current Day of the Week
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    currentDay.textContent = daysOfWeek[currentDate.getUTCDay()];
});


//the color changer
const texts = ['#ff5e00','#a2ff00','#ffa200','#ff005e','#ff00a2','#ffffff','#f0f0f0','#333333','#000000']; // Define an array of texts to cycle through
const changeText = (index) => {
    setTimeout(() => {
        const newColor = texts[index % texts.length]; // Get the next text from the array
        document.getElementById("newColor").style.color = newColor;
        changeText(index + 1); // Call changeText again with the next index
    }, 1000); // Change text every 1000 milliseconds (1 second)
};

// Start the text changing process with the first text in the array
changeText(0);
