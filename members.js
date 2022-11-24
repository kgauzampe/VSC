// api url
const api_url = "http://localhost:5000/members";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);
 
  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}
// Function to define innerHTML for HTML table
function show(data) {
  let dataTable = `<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Married</th>
		</tr>`;

  // Loop to access all rows
  for (let record of data) {
    dataTable += `<tr>
	<td>${record.firstname} </td>
	<td>${record.age}</td>
	<td>${record.is_married}</td>		
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("data-output").innerHTML = dataTable;
}
