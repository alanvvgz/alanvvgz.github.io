<script>
        const rows = document.querySelectorAll('tr');
        rows.forEach(row => {
            row.addEventListener('click', () => {
                rows.forEach(r => r.classList.remove('selected'));
                row.classList.add('selected');
            });
        });
        const makeTransparentButton = document.getElementById('makeTransparentButton');
        makeTransparentButton.addEventListener('click', () => {
            const table = document.querySelector('table');
            table.style.opacity = '0.5';
            setTimeout(() => {
                table.style.opacity = '1';
            }, 3000);
        });
    </script>
