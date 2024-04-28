
//script makes the terms appear when clicked
document.addEventListener('DOMContentLoaded', function() {
    const terms = document.querySelectorAll('.term');

    terms.forEach(term => {
        term.addEventListener('click', () => {
            const definition = term.nextElementSibling;

            if (definition.style.display === 'none') {
                definition.style.display = 'block';
            } else {
                definition.style.display = 'none';
            }
        });

        term.nextElementSibling.style.display = 'none';
    });
});
