//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Validation: Check if inputs are empty
    if (!name || !age) {
        alert('Please fill in all fields.');
        return;
    }

    // Call the function to handle the promise
    validateAge(name, age);
});

function validateAge(name, age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); // Delay of 4 seconds
    })
    .then((message) => {
        alert(message); // Show success message
    })
    .catch((message) => {
        alert(message); // Show error message
    });
}
