// SCHEDULED STAFF 
// TO-DO -> Import Staff from CSV or Spreadsheet
let staffNurses = ["Chelsea", "Christine", "Tracy", "Jessica", "Brenda", "Brent", "Cheryl", "Lindsey", "Amanda"]

// Base staff population
for(let i = 0; i < 5; i++) {
  addRN();
}


// Add RN function
function addRN() {
  // Creating select element
  const selectElement = document.createElement("select");
  selectElement.className = "scheduledRegisteredNurses";

  // Creating default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = " --- Choose a Nurse --- ";
  defaultOption.selected = true;

  selectElement.appendChild(defaultOption);

  // Create staff options
  staffNurses.forEach(staff => {
    const option = document.createElement("option")
    option.value = staff.toLowerCase();
    option.textContent = staff;
    selectElement.appendChild(option)
  })

  // Insert staff option into DOM
  document.getElementById("rn").appendChild(selectElement);
}
function addLPN() {
  // Creating select element
  const selectElement = document.createElement("select");
  selectElement.className = "scheduledLicensedPracticalNurses";

  // Creating default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = " --- Choose a Nurse --- ";
  defaultOption.selected = true;

  selectElement.appendChild(defaultOption);

  // Create staff options
  staffNurses.forEach(staff => {
    const option = document.createElement("option")
    option.value = staff.toLowerCase();
    option.textContent = staff;
    selectElement.appendChild(option)
  })

  // Insert staff option into DOM
  document.getElementById("lpn").appendChild(selectElement);
}

document.querySelector("#addRN").addEventListener("click", addRN);
document.querySelector("#addLPN").addEventListener("click", addLPN);

let team1 = ["Chelsea", "Christine", "Tracy", "Jessica", "Brenda"];
let team2 = ["Brenda", "Christine", "Chelsea", "Jessica", "Tracy"];
let team3 = ["Brenda", "Christine", "Tracy", "Jessica", "Chelsea"];
let team4 = ["Brenda", "Christine", "Tracy", "Jessica", "Jessica"];

// for refactoring later
// let assignments = ["team1", "team2", "team3", "team4", "float"];

let scheduledStaff = (document.querySelectorAll(".nurses"));
let staffArray = Array.from(scheduledStaff).map(scheduledStaff => scheduledStaff.value);

// Testing
console.log(staffArray)

document
  .querySelector("#assign-staff")
  .addEventListener("click", updateAssignmentDisplay);

function updateAssignmentDisplay() {
  let team1Nurse = document.querySelector("#t1n1");
  team1Nurse.textContent = assignTeamOne(staffArray);
  let team2Nurse = document.querySelector("#t2n1");
  team2Nurse.textContent = assignTeamTwo(staffArray);
  let team3Nurse = document.querySelector("#t3n1");
  team3Nurse.textContent = assignTeamOne(staffArray);
  let team4Nurse = document.querySelector("#t4n1");
  team4Nurse.textContent = assignTeamOne(staffArray);
}



// TEAM ASSIGNMENT

// Assigning Team 1 Nurse
function assignTeamOne(nurses) {
  let leastRecentNurse = nurses[0];

  for (let i = 1; i < nurses.length; i++) {
    if (team1.indexOf(nurses[i]) > team1.indexOf(leastRecentNurse)) {
      leastRecentNurse = nurses[i];
    }
  }
  let nurseIndex = staffArray.indexOf(leastRecentNurse)
  return staffArray.splice(nurseIndex, 1)
}

// Assigning Team 2 Nurse
function assignTeamTwo(nurses) {
  let leastRecentNurse = nurses[0];

  for (let i = 1; i < nurses.length; i++) {
    if (team2.indexOf(nurses[i]) > team2.indexOf(leastRecentNurse)) {
      leastRecentNurse = nurses[i];
    }
  }
  let nurseIndex = staffArray.indexOf(leastRecentNurse)
  return staffArray.splice(nurseIndex, 1)
}

function assignTeamThree(nurses) {
  let leastRecentNurse = nurses[0];

  for (let i = 1; i < nurses.length; i++) {
    if (team3.indexOf(nurses[i]) > team3.indexOf(leastRecentNurse)) {
      leastRecentNurse = nurses[i];
    }
  }
  let nurseIndex = staffArray.indexOf(leastRecentNurse)
  return staffArray.splice(nurseIndex, 1)
}

function assignTeamFour(nurses) {
  let leastRecentNurse = nurses[0];

  for (let i = 1; i < nurses.length; i++) {
    if (team4.indexOf(nurses[i]) > team4.indexOf(leastRecentNurse)) {
      leastRecentNurse = nurses[i];
    }
  }
  let nurseIndex = staffArray.indexOf(leastRecentNurse)
  return staffArray.splice(nurseIndex, 1)
}
