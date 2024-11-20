
// document.addEventListener("DOMContentLoaded", () => {
//     // Add event listeners to reminder buttons
//     const reminderButtons = document.querySelectorAll(".send-reminder");
//     reminderButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const name = button.getAttribute("data-name");
//             const email = button.getAttribute("data-email");
//             alert(`Reminder sent to ${name} (${email})`);
//             // Logic to send email reminder can be added here
//         });
//     });

//     // Handle the form submission for adding new insurance
//     const addInsuranceForm = document.getElementById("addInsuranceForm");
//     addInsuranceForm.addEventListener("submit", function(event) {
//         event.preventDefault();
//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const insuranceType = document.getElementById("insuranceType").value;
//         const startDate = document.getElementById("startDate").value;
//         const endDate = document.getElementById("endDate").value;

//         // Add new row to the table (You can later add logic to save this to the server)
//         const newRow = document.createElement("tr");
//         newRow.innerHTML = `
//             <td>#</td>
//             <td>${name}</td>
//             <td>${email}</td>
//             <td>${startDate}</td>
//             <td>${endDate}</td>
//             <td><span class="badge bg-warning">Near Expiry</span></td>
//             <td><button class="btn btn-warning btn-sm send-reminder" data-name="${name}" data-email="${email}">Send Reminder</button></td>
//         `;
//         document.getElementById("insurance-list").appendChild(newRow);

//         // Close the modal and reset the form
//         const modal = bootstrap.Modal.getInstance(document.getElementById('addInsuranceModal'));
//         modal.hide();
//         addInsuranceForm.reset();
//     });
// });


document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('submit').addEventListener('click', formSubmit)

    getDashboard()


})



async function formSubmit() {

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const insuranceType = document.getElementById("insuranceType").value;

    console.log(name, phone, insuranceType);

    if (!name.trim() || !phone.trim() || !insuranceType.trim()) {
        return alert('enter all details')
    }

    // Close the modal and reset the form
    const modal = bootstrap.Modal.getInstance(document.getElementById('addInsuranceModal'));
    modal.hide();
    addInsuranceForm.reset();


    const response = await fetch('/addInsurance', {
        method: 'POST',
        body: JSON.stringify({ name, phone, insuranceType }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response);

};


async function getDashboard() {
    const response = await fetch('/dashboardDetails', {
        method: 'GET'
    });

    const {data} = await response.json();


    const tableBody = document.getElementById('tableBody'); 

    tableBody.innerHTML = '';


    data.forEach((ele, index) => {

        const row = document.createElement('tr');

        
        const slno = document.createElement('td');
        slno.textContent = index+1;
    
        const nameCell = document.createElement('td');
        nameCell.textContent = ele.name;

        const phoneCell = document.createElement('td');
        phoneCell.textContent = ele.phone;


        const insuranceStartingCell = document.createElement('td');
        insuranceStartingCell.textContent = new Date(ele.insuranceStarting).toLocaleDateString();

        const insuranceExpiryCell = document.createElement('td');
        insuranceExpiryCell.textContent = new Date(ele.insuranceExpiry).toLocaleDateString();

        const statusCell = document.createElement('td');
        statusCell.innerHTML = 'pending'

        const actionCell = document.createElement('td');
        actionCell.innerHTML =  '<button class="btn btn-warning btn-sm send-reminder" data-name="${name}" data-email="${email}">Send Reminder</button>'



        // Append each cell to the row
        row.appendChild(slno);
        row.appendChild(nameCell);
        row.appendChild(phoneCell);
        row.appendChild(insuranceStartingCell);
        row.appendChild(insuranceExpiryCell);
        row.appendChild(statusCell);
        row.appendChild(actionCell)

        // Append the row to the table body
        tableBody.appendChild(row);
    });




}