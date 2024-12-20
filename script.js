// Get input fields and other DOM elements
const searchInput = document.getElementById('searchInput');
const patientList = document.getElementById('generalPatients');
const patientFirstName = document.getElementById('firstNameInput');
const patientLastName = document.getElementById('lastNameInput');
const patientAge = document.getElementById('ageInput');
const genderInput = document.getElementById('genders');
const phoneNumber = document.getElementById('phoneNumberInput');
const idNumber = document.getElementById('idNumberInput');
const emailAddress = document.getElementById('emailInput');
const homeAddress = document.getElementById('homeAddressInput');
const diagnosis = document.getElementById('diagnosisInput');
const admissionDate = document.getElementById('admissionDateInput');
const followUpDate = document.getElementById('followUpDateInput');
const dischargeDate = document.getElementById('dischargeDateInput');
const emergencyFirstName = document.getElementById('emergencyFirstNameInput');
const emergencyLastName = document.getElementById('emergencyLastNameInput');
const emRelationship = document.getElementById('emergencyRelationInput');
const emergencyTel = document.getElementById('emergencyPhoneInput');
const insuranceProvider = document.getElementById('insuranceProviderNameInput');
const policyNumber = document.getElementById('insurancePolicyNumberInput');
const submitButton = document.getElementById('button');

// Function to check if input is valid
function isValidPhoneNumber(value) {
    return !isNaN(value) && value.length >= 10; // Must be a number and at least 10 digits
}

function isValidID(value) {
    return !isNaN(value) && value.length >= 7; // Must be a number and at least 7 digits
}

function validateEmail(email) {
    return email.includes("@") && email.endsWith(".com"); // Must contain "@" and end with ".com"
}

let patients = [];

// Validate and display data
function validateAndDisplayData() {
    patientList.innerHTML = "";
    const errors = [];
    const data = {};
    const displayData = {}; 

    // Validate personal details
    if (!patientFirstName.value.trim()) {
        errors.push("First Name is required.");
    } else {
        data.firstName = patientFirstName.value.trim(), displayData.firstName = patientFirstName.value.trim();
    }

    if (!patientLastName.value.trim()) {
        errors.push("Last Name is required.");
    } else {
        data.lastName = patientLastName.value.trim(), displayData.lastName = patientLastName.value.trim();
    }

    const age = Number(patientAge.value);
    if (isNaN(age) || age <= 0 || age > 120) {
        errors.push("Age must be a number between 1 and 120.");
    } else {
        data.age = age;
    }

    if (!isValidPhoneNumber(phoneNumber.value)) {
        errors.push("Phone Number must be a numeric value with at least 10 digits.");
    } else {
        data.phoneNumber = phoneNumber.value.trim(), displayData.phoneNumber = phoneNumber.value.trim();
    }

    if (!isValidID(idNumber.value)) {
        errors.push("ID Number must be a numeric value with at least 7 digits.");
    } else {
        data.idNumber = idNumber.value.trim(), displayData.idNumber = idNumber.value.trim();
    }

    if (!validateEmail(emailAddress.value)) {
        errors.push("Invalid Email Address.");
    } else {
        data.email = emailAddress.value.trim();
    }

    if (!diagnosis.value.trim()) {
        errors.push("Diagnosis is required.");
    } else {
        data.diagnosis = diagnosis.value.trim();
    }

    // Validate emergency contact
    if (!emergencyFirstName.value.trim()) {
        errors.push("Emergency Contact First Name is required.");
    } else {
        data.emergencyFirstName = emergencyFirstName.value.trim();
    }

    if (!emergencyLastName.value.trim()) {
        errors.push("Emergency Contact Last Name is required.");
    } else {
        data.emergencyLastName = emergencyLastName.value.trim();
    }

    if (!emRelationship.value.trim()) {
        errors.push("Emergency Relationship is required.");
    } else {
        data.emergencyRelation = emRelationship.value.trim();
    }

    if (!isValidPhoneNumber(emergencyTel.value)) {
        errors.push("Emergency Contact Phone Number must be a numeric value with at least 10 digits.");
    } else {
        data.emergencyTel = emergencyTel.value.trim();
    }

    // Validate insurance details
    if (!insuranceProvider.value.trim()) {
        errors.push("Insurance Provider is required.");
    } else {
        data.insuranceProvider = insuranceProvider.value.trim();
    }

    if (!isValidID(policyNumber.value)) {
        errors.push("Policy Number must be a numeric value.");
    } else {
        data.policyNumber = policyNumber.value.trim();
    }

    // Display errors or add the data to the list
    if (errors.length > 0) {
        alert(errors.join("\n")); 
    } else {
        for (const [key, value] of Object.entries(data)) {
            const listItem = document.createElement("li");
            listItem.textContent = `${key}: ${value}`;
            patientList.appendChild(listItem);
            listItem.style.display = "flex";
            listItem.style.backgroundColor = "#0000ff";
            listItem.style.borderRadius = "10px";
        }

        alert("Patient successfully added!");
        patientList.innerHTML = "";
    }

    
}


// Attach event listener to the submit button
submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    validateAndDisplayData();
});

function addPatient() {
    const newPatient = {
        firstName: patientFirstName.value.trim(),
        lastName: patientLastName.value.trim(),
        age: patientAge.value.trim(),
        gender: genderInput.value,
        phone: phoneNumber.value.trim(),
        id: idNumber.value.trim(),
        email: emailAddress.value.trim(),
        address: homeAddress.value.trim(),
        diagnosis: diagnosis.value.trim(),
        admissionDate: admissionDate.value,
        followUpDate: followUpDate.value,
        dischargeDate: dischargeDate.value,
        status: 'Admitted' // Default status
    };

    if (validatePatient(newPatient)) {
        patients.push(newPatient);
        renderPatients();
        clearForm();
    } else {
        alert('Please fill out all required fields correctly.');
    }
}

// Function to validate patient data
function validatePatient(patient) {
    return (
        patient.firstName &&
        patient.lastName &&
        !isNaN(patient.age) &&
        patient.phone.match(/^\d{10,}$/) &&
        patient.id &&
        patient.email.includes('@') && patient.email.includes('.')
    );
}

// Function to clear form inputs
function clearForm() {
    document.querySelector('form').reset();
}

// Function to render patient list
function renderPatients() {
    patientList.innerHTML = '';

    patients.forEach((patient, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'patient-item';

        // Add patient details
        listItem.innerHTML = `
            <div>
                <span class="patient-name">${patient.firstName} ${patient.lastName}</span> -
                <span class="patient-status">${patient.status}</span>
            </div>
            <div class="newBtns">
                <button onclick="viewPatient(${index})" class="viewBtn">View</button>
                <button onclick="removePatient(${index})" class="removeBtn">Remove</button>
                <select onchange="updateStatus(${index}, this.value)" class="updateBtn">
                    <option value="Admitted" ${patient.status === 'Admitted' ? 'selected' : ''}>Admitted</option>
                    <option value="Follow-Up" ${patient.status === 'Follow-Up' ? 'selected' : ''}>Follow-Up</option>
                    <option value="Discharged" ${patient.status === 'Discharged' ? 'selected' : ''}>Discharged</option>
                </select>
            </div>
            
        `;

        patientList.appendChild(listItem);
    });
}

// Function to view patient details
function viewPatient(index) {
    const patient = patients[index];
    alert(`
        Name: ${patient.firstName} ${patient.lastName}
        Age: ${patient.age}
        Gender: ${patient.gender}
        Phone: ${patient.phone}
        ID: ${patient.id}
        Email: ${patient.email}
        Address: ${patient.address}
        Diagnosis: ${patient.diagnosis}
        Admission Date: ${patient.admissionDate}
        Follow-Up Date: ${patient.followUpDate}
        Discharge Date: ${patient.dischargeDate}
        Status: ${patient.status}
    `);
}

// Function to remove a patient
function removePatient(index) {
    if (confirm('Are you sure you want to remove this patient?')) {
        patients.splice(index, 1);
        renderPatients();
    }
}

// Function to update patient status
function updateStatus(index, newStatus) {
    patients[index].status = newStatus;
    renderPatients();
}

// Function to search patients
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    const filteredPatients = patients.filter(patient =>
        `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(query)
    );

    patientList.innerHTML = '';
    filteredPatients.forEach((patient, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'patient-item';

        listItem.innerHTML = `
            <div>
                <span class="patient-name">${patient.firstName} ${patient.lastName}</span> -
                <span class="patient-status">${patient.status}</span>
            </div>
                <button onclick="viewPatient(${index})" class="viewBtn">View</button>
                <button onclick="removePatient(${index})" class="removeBtn">Remove</button>
                <select onchange="updateStatus(${index}, this.value)" class="updateBtn">
                    <option value="Admitted" ${patient.status === 'Admitted' ? 'selected' : ''}>Admitted</option>
                    <option value="Follow-Up" ${patient.status === 'Follow-Up' ? 'selected' : ''}>Follow-Up</option>
                    <option value="Discharged" ${patient.status === 'Discharged' ? 'selected' : ''}>Discharged</option>
                </select>
            
        `;

        patientList.appendChild(listItem);
    });

    
});

// Event listener for adding patients
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    addPatient();
});
