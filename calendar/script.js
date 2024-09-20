// script.js

document.addEventListener('DOMContentLoaded', () => {
    const months = [
        { month: 0, name: 'January' },
        { month: 1, name: 'February' },
        { month: 2, name: 'March' },
        { month: 3, name: 'April' },
        { month: 4, name: 'May' },
        { month: 5, name: 'June' },
        { month: 6, name: 'July' },
        { month: 7, name: 'August' },
        { month: 8, name: 'September' },
        { month: 9, name: 'October' },
        { month: 10, name: 'November' },
        { month: 11, name: 'December' }
    ];
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const container = document.getElementById('calendar-container');

    months.forEach(({ month, name }) => {
        const calendar = document.createElement('div');
        calendar.className = 'calendar';

        const header = document.createElement('div');
        header.className = 'calendar-header';
        header.textContent = name;
        calendar.appendChild(header);

        const body = document.createElement('div');
        body.className = 'calendar-body';
        calendar.appendChild(body);

        // Create day headers
        daysOfWeek.forEach(day => {
            const dayCell = document.createElement('div');
            dayCell.className = 'calendar-day';
            dayCell.textContent = day;
            body.appendChild(dayCell);
        });

        const firstDay = new Date(2024, month, 1).getDay();
        const daysInMonth = new Date(2024, month + 1, 0).getDate();

        // Add empty cells for days before the start of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            body.appendChild(emptyCell);
        }

        // Add the days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateCell = document.createElement('div');
            dateCell.className = 'calendar-date';
            dateCell.textContent = day;
            body.appendChild(dateCell);
        }

        container.appendChild(calendar);
    });
});
