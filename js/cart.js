// Updates the cart counter displayed on the webpage
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCounter').textContent = cart.length;
}

// Loads the list of monkeys from the cart and displays them in a table
function loadMonkeys() {
    updateCartCounter();
    const monkeys = JSON.parse(localStorage.getItem('cart')) || [];
    const tableBody = document.querySelector('#monkeysTable tbody');
    tableBody.innerHTML = '';

    monkeys.forEach((monkey, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${monkey.name}</td>
            <td>${monkey.bananas}</td>
            <td>${monkey.price}</td>
            <td><button type="button" class="btn btn-danger" onclick="deleteMonkey(${index})">X</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Deletes a specific monkey from the cart based on its index and reloads the list of monkeys
function deleteMonkey(index) {
    const monkeys = JSON.parse(localStorage.getItem('cart')) || [];
    monkeys.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(monkeys));
    loadMonkeys();
}

// Deletes all monkeys from the cart and reloads the list of monkeys
function deleteAllMonkeys() {
    localStorage.removeItem('cart');
    loadMonkeys();
}

// Loads the sponsorship forms from local storage and displays them on the webpage
function loadSponsorshipForms() {
    const sponsorshipForms = JSON.parse(localStorage.getItem('sponsorshipForms')) || [];
    const formsContainer = document.getElementById('sponsorshipForms');
    formsContainer.innerHTML = '';

    sponsorshipForms.forEach((form, index) => {
        const formDiv = document.createElement('div');
        formDiv.className = 'col-md-6';
        formDiv.innerHTML = `
            <div class="card" style="background-color: #045136">
            <div class="card-body">
                <h5>Sponsorship ${index + 1}</h5><br>
                Firstname: ${form.firstName}<br>
                Lastname: ${form.lastName}<br>
                Street: ${form.street}<br>
                Street Number: ${form.streetNumber}<br>
                Postal Code: ${form.postalCode}<br>
                City: ${form.city}<br>
                Phone Number: ${form.phoneNumber}<br> 
                Email: ${form.email}<br>
                Donation: ${form.donation}<br>
                Duration: ${form.duration}<br>
                Contact: ${form.contactMethod}<br>
                <button type="button" class="btn btn-warning" onclick="editSponsorship(${index})">Edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteSponsorship(${index})" data-bs-target="#staticBackdrop">Delete</button></h5>
            </div>
            </div>
        `;
        formsContainer.appendChild(formDiv);
    });
}

// Edits a specific sponsorship form based on its index and displays the form for editing
function editSponsorship(index) {
    const sponsorshipForms = JSON.parse(localStorage.getItem('sponsorshipForms')) || [];
    const form = sponsorshipForms[index];
    const editedForm = document.getElementById('editedForm');
    editedForm.innerHTML = '';
    const formDiv = document.createElement('div');
    formDiv.className = 'w-75 mx-auto';
    formDiv.innerHTML = `
    <h3 class="fw-bolder text-center">Sponsorship form</h3>
<form class="col-lg-8 col-md-8 col-sm-10 mx-auto my-5" id="sponsorshipForm" onsubmit="return sprawdz()">
    <div class="row d-flex justify-content-center">
        <div class="form-group col">
            <label for="firstName">Firstname</label>
            <input type="text" class="form-control" id="firstName" placeholder="Tim" required pattern="[a-zA-Z ]{2,}" title="Please enter a valid firstname (at least 2 characters of letters only)">
        </div>
        <div class="form-group col">
            <label for="lastName">Lastname</label>
            <input type="text" class="form-control" id="lastName" placeholder="Tiny" required pattern="[a-zA-Z ]{2,}" title="Please enter a valid lastname (at least 2 characters of letters only)">
        </div>
    </div>
    <div class="form-group">
        <label for="street">Street</label>
        <input type="text" class="form-control" id="street" placeholder="Chimpanzee Street" required>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="form-group col">
            <label for="streetNumber">Street number</label>
            <input type="text" class="form-control" id="streetNumber" placeholder="10" required pattern="\d+[A-Za-z]*" title="Please enter a valid street number">
        </div>
        <div class="form-group col">
            <label for="postalCode">Postal code</label>
            <input type="text" class="form-control" id="postalCode" placeholder="80-200" required pattern="\d{2}-\d{3}" title="Please enter a valid postal code (e.g., 00-000)">
        </div>
    </div>
    <div class="form-group">
        <label for="city">City</label>
        <input type="text" class="form-control" id="city" placeholder="Lublin" required>
    </div>
    <div class="form-group">
        <label for="phoneNumber">Phone number</label>
        <input type="text" class="form-control" id="phoneNumber" placeholder="+48 123 456 789" required pattern="\+\d{2} \d{3} \d{3} \d{3}" title="Please enter a valid phone number (e.g., +48 123 456 789)">
    </div>
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="monkey@zoo.com" required>
    </div>
    <div class="form-group">
        <label for="donation">Donation amount</label>
        <input type="number" class="form-control" id="donation" placeholder="100" required min="1" max="50000">
    </div>
    <div class="form-group">
        <label for="duration">Duration in months</label><br>
        <input type="radio" name="duration" id="duration1" value="1-3" required> 1-3 months<br>
        <input type="radio" name="duration" id="duration2" value="4-6" required> 4-6 months<br>
        <input type="radio" name="duration" id="duration3" value="7-12" required> 7-12 months<br>
    </div>
    <div class="form-group">
        <label>Contact Method:</label><br>
        <input type="checkbox" id="contactEmail" name="contactMethod" value="email" checked>
        <label for="contactEmail">Email</label><br>
        <input type="checkbox" id="contactPhone" name="contactMethod" value="phone">
        <label for="contactPhone">Phone</label><br>
    </div>        
    <button type="submit" class="btn btn-success my-3" id="sendSponsorshipBtn">Send</button>
    <button type="button" class="btn btn-warning my-3" id="cancelSponsorshipBtn">Cancel</button>
</form>`;
    editedForm.appendChild(formDiv);
    document.getElementById("firstName").value = form.firstName;
    document.getElementById("lastName").value = form.lastName;
    document.getElementById("street").value = form.street;
    document.getElementById("streetNumber").value = form.streetNumber;
    document.getElementById("postalCode").value = form.postalCode;
    document.getElementById("city").value = form.city;
    document.getElementById("phoneNumber").value = form.phoneNumber;
    document.getElementById("email").value = form.email;
    document.getElementById("donation").value = form.donation;
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
            contactMethod: getSelectedContactMethod()
        };
        sendSponsorshipToForms(sponsorshipDetails, index);
        // Hide the edited form after submission
        // document.getElementById('editedForm').style.display = 'none';
    });

    // Retrieves the selected durations from the form
    function getSelectedDurations() {
        const selectedDurations = [];
        const durationCheckboxes = document.querySelectorAll('input[name="duration"]:checked');
        durationCheckboxes.forEach(checkbox => {
            selectedDurations.push(checkbox.value + " months");
        });
        return selectedDurations;
    }

    // Retrieves the selected contact methods from the form
    function getSelectedContactMethod() {
        const selectedContactMethods = [];
        const contactMethodCheckboxes = document.querySelectorAll('input[name="contactMethod"]:checked');
        contactMethodCheckboxes.forEach(checkbox => {
            selectedContactMethods.push(checkbox.value);
        });
        return selectedContactMethods;
    }

    // Saves the edited sponsorship form to local storage and reloads the forms
    function sendSponsorshipToForms(sponsorshipDetails, index) {
        const sponsorshipForms = JSON.parse(localStorage.getItem('sponsorshipForms')) || [];
        sponsorshipForms[index] = sponsorshipDetails; // Update the form
        localStorage.setItem('sponsorshipForms', JSON.stringify(sponsorshipForms));
        loadSponsorshipForms();
    }

    // Resets the sponsorship form and hides the edited form section
    document.getElementById('cancelSponsorshipBtn').addEventListener('click', function() {
        document.getElementById('sponsorshipForm').reset();
        document.getElementById('editedForm').style.display = 'none';
    });

    // Make sure the edited form is visible when editing
    document.getElementById('editedForm').style.display = 'block';
}

// Deletes a specific sponsorship form based on its index and reloads the forms
function deleteSponsorship(index) {
    const sponsorshipForms = JSON.parse(localStorage.getItem('sponsorshipForms')) || [];
    sponsorshipForms.splice(index, 1);
    localStorage.setItem('sponsorshipForms', JSON.stringify(sponsorshipForms));
    loadSponsorshipForms();
}

// Executes when the DOM content is fully loaded and initializes the data display
document.addEventListener('DOMContentLoaded', () => {
    loadMonkeys();
    loadSponsorshipForms();
});
