const addBtn = document.getElementById("addBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const form = document.getElementById("dataForm");
const tableBody = document.querySelector("#dataTable tbody");

let data = [];

// Show modal
addBtn.onclick = () => modal.style.display = "block";

// Close modal
closeBtn.onclick = () => modal.style.display = "none";

// Render table
const renderTable = () => {
  tableBody.innerHTML = "";
  data.forEach(item => {
    const row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.branch}</td>
        <td>${item.address}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
};

// Handle form submit
form.onsubmit = (e) => {
  e.preventDefault();

  const newData = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    branch: document.getElementById("branch").value,
    address: document.getElementById("address").value
  };

  data.push(newData);
  renderTable();

  form.reset();
  modal.style.display = "none";
};

// Close modal on outside click
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};