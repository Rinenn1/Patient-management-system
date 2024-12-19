//get the input values and list values
const searchInput = document.getElementById('searchInput');
const patientList = document.getElementById('generalPatients');
const patientName = document.getElementById('nameInput');
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

function validatePatientData (){
    function isValidInput (value){
        return !isNaN(value) && Number.isInteger(Number(value));
    } 

    const errors = [];

    function checkPatientName (patientName){
        if (patientName === ""){
            errors.push("Invalid Input! Name must be a non-empty string.");
        } 
        if (typeof patientName !== "string"){
            errors.push("Invalid Input");
        }
    }

    function checkPatientAge (patientAge){
        if (patientAge === ""){
            errors.push("Invalid Input");
        } 
        if (typeof patientAge !== "string"){
            errors.push("Invalid Input");
        }
    }

    function checkPatientPhoneNumber (phoneNumber){
        if (isValidInput(phoneNumber) || phoneNumber.length < 10){
            errors.push("Invalid Input");
        }
    }

    function checkidNumber (idNumber){
        if (isValidInput(idNumber) || idNumber.length < 7){
            errors.push("Invalid Input. ID Number must be a numeric value with at least 7 digits.");
        }
    }

    function checkEmailAddress (emailAddress){
        if (isValidInput(emailAddress) || typeof emailAddress !== "string"){
            errors.push("Invalid Input");
        } 
        if (!emailAddress.includes("@") || !emailAddress.includes(".")){
            errors.push("Invalid Input");
        }
    }

    function checkDiagnosis (diagnosis){
        if (typeof diagnosis !== "string" || isValidInput(diagnosis)){
            errors.push("Invalid Input");
        } 
    }

    function checkEmergencyName (emergencyName){
        if (typeof emergencyName !== "string" || isValidInput(emergencyName)){
            errors.push("Invalid Input");
        } 
    }

    function checkEmergencyRelationship (relationship){
        if (typeof relationship !== "string" || !relationship){
            errors.push("Invalid Input");
        } 
    }

    function checkEmergencyContact (emergencyTel){
        if (isValidInput(emergencyTel) || emergencyTel.length < 10){
            errors.push("Invalid Input! Emergency Contact Number must be a numeric value with at least 10 digits.");
        } 
    }

    function checkInsuranceName (insuranceProvider){
        if (typeof insuranceProvider !== "string" || !insuranceProvider){
            errors.push("Invalid Input");
        } 
    }

    function checkInsurancePolicy (policyNumber){
        if (isValidInput(policyNumber) || !policyNumber){
            errors.push("Invalid Input");
        } 
    }
}




