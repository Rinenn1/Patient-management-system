//get the input values and list values
const searchInput = document.getElementById('searchInput');
const patientList = document.getElementById('generalPatients');
const patientName = document.getElementById('nameInput');
const patientAge = document.getElementById('ageInput');
const genderInput = document.getElementById('genders');
const phoneNumber = document.getElementById('phoneNumberInput');
const idumber = document.getElementById('idNumberInput');
const emailAddress = document.getElementById('emailInput');
const homeAddress = document.getElementById('homeAddressInput');
const diagnosis = document.getElementById('diagnosisInput');
const admissionDate = document.getElementById('admissionDateInput');
const followUpDate = document.getElementById('followUpDateInput');
const dischargeDate = document.getElementById('dischargeDateInput');
const emergencyName = document.getElementById('emergencyNameInput');
const relationship = document.getElementById('emergencyRelationInput');
const emergencyTel = document.getElementById('emergencyPhoneInput');
const insuranceProvider = document.getElementById('insuranceProviderNameInput');
const policyNumber = document.getElementById('insurancePolicyNumberInput');
const submitButton = document.querySelector('#button');


/* function searchesPatient(){

} */

/* function patientListArray (){

} */

if (patientName === ""){
    console.error("Invalid Input");
} 
if (patientName.isInteger === true){
    console.error("Invalid Input");
}
