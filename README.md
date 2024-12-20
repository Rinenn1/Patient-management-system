# Patient-management-system
This is a SP website that helps manage the patients details of a hospital

# Patient Management Form

This project is a **Patient Management Form** implemented in JavaScript. The form collects patient details, validates the inputs, and dynamically displays the data in a styled list using DOM manipulation. This project demonstrates basic form validation, event handling, and dynamic styling in JavaScript.

---

## Features
- Collects patient information including first name, last name, age, contact details, and insurance information.
- Validates user inputs to ensure correctness (e.g., numeric values for age and phone numbers).
- Displays the entered patient data dynamically in a list.
- Applies dynamic styling to the displayed list items.
- Provides clear error messages for invalid inputs.

---

## Technologies Used
- **HTML** for the form structure.
- **CSS** for styling (external or inline).
- **JavaScript** for DOM manipulation, form validation, and styling.

---

## Installation and Setup
1. Clone the repository or download the source code.
2. Open the `index.html` file in any modern browser.
3. Fill out the patient form and click **Submit** to see the functionality in action.

---

## Usage
### Input Fields:
The form includes the following fields:
- **First Name** and **Last Name** (text fields, required).
- **Age** (numeric field, required, valid range: 1-120).
- **Phone Number** (numeric field, required, minimum 10 digits).
- **ID Number** (numeric field, required, minimum 7 digits).
- **Email Address** (text field, required, must contain a valid email format).
- **Insurance Provider** and **Policy Number** (optional, but validated if filled).

### Buttons:
- **Submit:** Validates input fields and displays the data dynamically in a styled list below the form.

### Error Handling:
- Alerts are shown for any invalid inputs.
- Input errors must be corrected before submission.

---

## Code Structure
### JavaScript File:
- **Validation Logic:** Ensures all inputs meet specified requirements.
- **Dynamic DOM Manipulation:**
  - Clears and updates the list of patients.
  - Applies inline styles to list items dynamically.
- **Event Listener:** Captures the click event on the submit button to trigger validation and display logic.

### Styling:
- Inline styles are added dynamically to the list items for demonstration purposes.
- Additional CSS classes can be added for consistent and reusable styling.

---

## Example Workflow
1. User fills out the form with patient details.
2. User clicks **Submit.**
3. If inputs are valid:
   - Data is displayed in a list below the form.
   - Each list item is styled dynamically (e.g., padding, colors).
4. If any input is invalid:
   - An error message is displayed.
   - User must correct the input and resubmit.

---

## Future Enhancements
- Save patient data to a database using a backend service.
- Add edit and delete functionality for patient records.
- Improve the UI/UX with a modern design framework (e.g., Bootstrap).
- Implement real-time input validation with visual indicators.

---

## Author
Developed by Isaac, showcasing JavaScript DOM manipulation and basic validation techniques.

---

## License
This project is licensed under the MIT License. Feel free to use and modify it as per your needs.
