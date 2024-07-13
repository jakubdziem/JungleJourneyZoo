// Function to get URL parameters and set default values if parameters are not provided
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name') || 'Big Nose',
        species: params.get('species') || 'Proboscis Monkey',
        description: params.get('description') || 'Big Nose is a unique Proboscis Monkey known for its large, prominent nose. Its distinctive appearance and gentle behavior make it stand out.',
        image: params.get('image') || 'assets/bignose.png'
    };
}

// Function to update the content on the webpage with the URL parameters or default values
function updateContent() {
    const params = getUrlParams();
    document.getElementById('monkeyName').textContent = params.name;
    document.getElementById('monkeyDescription').textContent = params.description;
    document.getElementById('monkeyImage').src = params.image;
    document.getElementById('feedName').textContent = params.name;
    updateCartCounter();
}

// Call updateContent function when the window loads to initialize the content
window.onload = updateContent;

// Function to add the monkey to the cart and update the cart counter
function feedMonkey() {
    const params = getUrlParams();
    const priceOfBananas = +document.getElementById('inputQuantity').value * 5;
    const fedMonkey = {
        id: params.id,
        name: params.name,
        bananas: document.getElementById('inputQuantity').value,
        price: priceOfBananas
    };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(fedMonkey);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();

    // Show toast notification to confirm feeding
    const toastElement = document.getElementById('feedToast');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}

// Function to update the cart counter displayed on the webpage
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCounter').textContent = cart.length;
}

// Add event listener to the feed button to trigger the feedMonkey function when clicked
document.getElementById('feedButton').addEventListener('click', feedMonkey);

// Function to save sponsorship details to local storage and update the cart counter
function sendSponsorshipToForms(sponsorshipDetails) {
    const sponsorshipForms = JSON.parse(localStorage.getItem('sponsorshipForms')) || [];
    sponsorshipForms.push(sponsorshipDetails);
    localStorage.setItem('sponsorshipForms', JSON.stringify(sponsorshipForms));
    updateCartCounter();
}

// Add event listener to the send sponsorship button to save the form details and handle the response
document.getElementById('sendSponsorshipBtn').addEventListener('click', function() {
    const sponsorshipDetails = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        street: document.getElementById("street").value,
        streetNumber: document.getElementById("streetNumber").value,
        postalCode: document.getElementById("postalCode").value,
        city: document.getElementById("city").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        email: document.getElementById("email").value,
        donation: document.getElementById("donation").value,
        duration: getSelectedDurations(),
        contactMethod: []
    };

    // Check if email checkbox is checked and add to contactMethod array
    if (document.getElementById("contactEmail").checked) {
        sponsorshipDetails.contactMethod.push("email");
    }

    // Check if phone checkbox is checked and add to contactMethod array
    if (document.getElementById("contactPhone").checked) {
        sponsorshipDetails.contactMethod.push("phone");
    }

    // Function to get the selected durations from the form
    function getSelectedDurations() {
        const selectedDurations = [];
        const durationCheckboxes = document.querySelectorAll('input[name="duration"]:checked');
        durationCheckboxes.forEach(checkbox => {
            selectedDurations.push(checkbox.value);
        });
        return selectedDurations;
    }

    sendSponsorshipToForms(sponsorshipDetails);

    // Fetch weather information for the city from an API and show a toast notification
    fetch('https://api.api-ninjas.com/v1/weather?city=' + sponsorshipDetails.city, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'a=b',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(result => {
        var temperature = result.temp;
        var cloudPercentage = result.cloud_pct;
        var windSpeed = result.wind_speed;
        var formSendMessage;
        if (temperature < 15) {
            formSendMessage = " In the city that you live, the climate is too cold for monkeys.";
        } else if (cloudPercentage > 90) {
            formSendMessage = " In the city that you live, the weather is too cloudy for monkeys.";
        } else if (windSpeed > 30) {
            formSendMessage = " In the city that you live, the wind is too strong for monkeys.";
        } else {
            formSendMessage = " In the city that you live, the climate is perfect for monkeys!";
        }
        // Show toast notification with the weather and sponsorship message
        const toastElement = document.getElementById('sponsorshipToast');
        const toastBody = toastElement.querySelector('.toast-body');
        toastBody.textContent = "Thank you for your sponsorship application monkey lover!🐒 We invite you to visit your favorite!" + formSendMessage;
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Add event listener to the cancel button to reset the sponsorship form
document.getElementById('cancelSponsorshipBtn').addEventListener('click', function() {
    document.getElementById('sponsorshipForm').reset();
});