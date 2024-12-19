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


/* function searchesPatient(){

} */

/* function patientListArray (){

} */



const data = {};
const displayData = {};
const errors = [];

function isValidNumber (value){
    return !isNaN(value) && Number.isInteger(Number(value));
} 

function validateData (){
    errors.length = 0;
    displayList.innerHTML = "";
    
    if (!patientFirstName.value || typeof patientFirstName.value !== "string") {
        errors.push("Invalid First Name");
    } else {
        data.firstName = patientFirstName.value.trim();
    }
    
    if (!patientLastName.value || typeof patientLastName.value !== "string") {
        errors.push("Invalid Last Name");
    } else {
        data.lastName = patientLastName.value.trim();
    }

    const age = Number(patientAge.value)
    if (typeof age !== "number"){
        errors.push("Invalid Input");
    } 
    if (!isValidNumber(patientAge) || age <= 0 || age > 120){
            errors.push("Invalid Input");
    }
    else {
        data.Age = patientAge.value.trim();
    }

    
    if (!isValidInput(phoneNumber.value) || phoneNumber.value.length < 10){
        errors.push("Invalid Input");
    }
    else {
        data.phoneNumber = phoneNumber.value.trim();
        displayData.phoneNumber = phoneNumber.value.trim();
    }
    

    if (!isValidInput(idNumber.value) || idNumber.value.length < 7){
        errors.push("Invalid Input. ID Number must be a numeric value with at least 7 digits.");
    }
    else {
        data.idNumber = idNumber.value.trim();
    }


    if (!emailAddress.includes("@") || !emailAddress.includes(".")){
        errors.push("Invalid Input");
    }
    else {
        data.emailAddress = emailAddress.value.trim();
        displayData.emailAddress = emailAddress.value.trim();
    }


    if (typeof diagnosis !== "string" || !diagnosis.value){
        errors.push("Invalid Input");
    } 
    else {
        data.diagnosis = diagnosis.value.trim();
    }


    if (!emergencyFirstName.value || typeof emergencyFirstName.value !== "string") {
        errors.push("Invalid First Name");
    } else {
        data.emergencyFirstName = emergencyFirstName.value.trim();
    }
    
    if (!emergencyLastName.value || typeof emergencyLastName.value !== "string") {
        errors.push("Invalid Last Name");
    } else {
        data.emergencyLastName = emergencyLastName.value.trim();
    }


    if (typeof relationship.value !== "string" || !relationship.value){
        errors.push("Invalid Input");
    } 
    else {
        data.emergencyRelation = relationship.value.trim();
    }

    if (!isValidInput(emergencyTel) || emergencyTel.length < 10){
        errors.push("Invalid Input! Emergency Contact Number must be a numeric value with at least 10 digits.");
    } 
    else {
        data.emergencyPhone = emergencyTel.trim();
    }

    if (typeof insuranceProvider !== "string" || !insuranceProvider){
        errors.push("Invalid Input");
    } 
    else {
        data.insuranceProvider = insuranceProvider.trim();
        displayData.insuranceProvider = insuranceProvider.value.trim();
    }

    if (isValidInput(policyNumber.value) || !policyNumber.value || typeof policyNumber.value !== "number"){
        errors.push("Invalid Input");
    } 
    else {
        data.policyNumber = policyNumber.value.trim();
        displayData.policyNumber = policyNumber.value.trim();
    }


    if (errors.length > 0) {
        console.error("Invalid Inputs");
        return true;
    }

    function displayValidatedData() {
        for (const [key, value] of displayData) {
          const listItem = document.createElement("li");
          listItem.textContent = `${key}: ${value}`;
          patientList.append(listItem);
        }
      }

}



    
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    validateData();
});

function addToList(){

}



