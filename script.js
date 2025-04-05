function updateDateTime() {
    const now = new Date();

    // Get the current time
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = hours.toString().padStart(1, '0') + ':' +
                    minutes.toString().padStart(2, '0') + ':' +
                    seconds.toString().padStart(2, '0') + ' ' + ampm;

    // Get the current date
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // months are zero-based
    const year = now.getFullYear();
    const strDate = `${day}/${month}/${year}`;

    // Update the HTML
    document.getElementById('time').textContent = strTime;
    document.getElementById('date').textContent = strDate;
}

// Update the time every second
setInterval(updateDateTime, 1000);

// Initial call to display the time immediately
updateDateTime();
