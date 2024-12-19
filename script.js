//get the input values and list values
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
const relationship = document.getElementById('emergencyRelationInput');
const emergencyTel = document.getElementById('emergencyPhoneInput');
const insuranceProvider = document.getElementById('insuranceProviderNameInput');
const policyNumber = document.getElementById('insurancePolicyNumberInput');
const submitButton = document.querySelector('#button');



const data = {};
const displayData = {};

function isValidInput (value){
    return !isNaN(value) && Number.isInteger(Number(value));
} 

function validateData (){
    displayList.innerHTML = "";
    
    if (!patientFirstName.value || typeof patientFirstName.value !== "string") {
        alert("Invalid First Name");
    } else {
        data.firstName = patientFirstName.value.trim();
    }
    
    if (!patientLastName.value || typeof patientLastName.value !== "string") {
        alert("Invalid Last Name");
    } else {
        data.lastName = patientLastName.value.trim();
    }

    const age = Number(patientAge.value)
    if (!isNaN(age)){
        alert("Invalid Input");
    } 
    if (!isValidInput(age) || age <= 0 || age > 120){
        alert("Invalid Input");
    }
    else {
        data.age = patientAge.value.trim();
    }

    
    if (!isValidInput(phoneNumber.value) || phoneNumber.value.length < 10){
        alert("Invalid Input");
    }
    else {
        data.phoneNumber = phoneNumber.value.trim();
        displayData.phoneNumber = phoneNumber.value.trim();
    }
    

    if (!isValidInput(idNumber.value) || idNumber.value.length < 7){
        alert("Invalid Input. ID Number must be a numeric value with at least 7 digits.");
    }
    else {
        data.idNumber = idNumber.value.trim();
    }


    if (!emailAddress.value.includes("@") || !emailAddress.Value.includes(".")){
        alert("Invalid Input");
    }
    else {
        data.emailAddress = emailAddress.value.trim();
        displayData.emailAddress = emailAddress.value.trim();
    }


    if (typeof diagnosis !== "string" || !diagnosis.value){
        alert("Invalid Input");
    } 
    else {
        data.diagnosis = diagnosis.value.trim();
    }


    if (!emergencyFirstName.value || typeof emergencyFirstName.value !== "string") {
        alert("Invalid First Name");
    } else {
        data.emergencyFirstName = emergencyFirstName.value.trim();
    }
    
    if (!emergencyLastName.value || typeof emergencyLastName.value !== "string") {
        alert("Invalid Last Name");
    } else {
        data.emergencyLastName = emergencyLastName.value.trim();
    }


    if (typeof relationship.value !== "string" || !relationship.value){
        alert("Invalid Input");
    } 
    else {
        data.emergencyRelation = relationship.value.trim();
    }

    if (!isValidInput(emergencyTel.value) || emergencyTel.value.length < 10){
        alert("Invalid Input! Emergency Contact Number must be a numeric value with at least 10 digits.");
    } 
    else {
        data.emergencyPhone = emergencyTel.trim();
    }

    if (typeof insuranceProvider.value !== "string" || !insuranceProvider.value){
        alert("Invalid Input");
    } 
    else {
        data.insuranceProvider = insuranceProvider.value.trim();
        displayData.insuranceProvider = insuranceProvider.value.trim();
    }

    if (isValidInput(policyNumber.value) || !policyNumber.value || typeof policyNumber.value !== "number"){
        alert("Invalid Input");
    } 
    else {
        data.policyNumber = policyNumber.value.trim();
        displayData.policyNumber = policyNumber.value.trim();
    }


    if (errors.length > 0) {
        console.error(errors);
        return true;
    }

}
function displayValidatedData() {
    for (const [key, value] in displayData) {
        const listItem = document.createElement("li");
        listItem.textContent = `${key}: ${value}`;
        patientList.append(listItem);
    }
}  

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    validateData();
});




