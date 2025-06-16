// SCHEDULED STAFF 
// TO-DO ->\
// 1. Import Staff and Team queues from CSV or Spreadsheet
// 2. Append spreadsheet when new staff is added (Create new staff button)
// 3. If staff name not found on team array, assign them the team and append them to the teamArray[0]

// EDGE CASE HANDLING
// 1. Short Staff
// 2. Over Staffed
// 3. Uneven balance of RNs/LPNs 

let staffRN = ["Chelsea", "Christine", "Tracy", "Jessica", "Cheryl", "Amanda"]
let staffLPN = ["Brent", "Rachelle", "Kayla", "Lindsey", "Kristin", "Jen"]

// Base amount of staff selectors
for(let i = 0; i < 5; i++) {
  addRN();
}

for(let i = 0; i < 5; i++) {
  addLPN();
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
  staffRN.forEach(staff => {
    const option = document.createElement("option")
    option.value = staff;  //toLowerCase()
    option.textContent = staff;
    selectElement.appendChild(option)
  })

  // Insert staff option into DOM
  document.getElementById("rn").appendChild(selectElement);
}

function addLPN() {
  // Creating select element
  const selectLPN = document.createElement("select");
  selectLPN.className = "scheduledLicensedPracticalNurses";

  // Creating default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = " --- Choose a Nurse --- ";
  defaultOption.selected = true;

  selectLPN.appendChild(defaultOption);

  // Create staff options
  staffLPN.forEach(staff => {
    const option = document.createElement("option")
    option.value = staff; // toLowerCase() when needed
    option.textContent = staff;
    selectLPN.appendChild(option)
  })

  // Insert staff option into DOM
  document.getElementById("lpn").appendChild(selectLPN);
}

document.querySelector("#addRN").addEventListener("click", addRN);
document.querySelector("#addLPN").addEventListener("click", addLPN);

let team1 = ["Chelsea", "Christine", "Tracy", "Jessica", "Brenda"];
let team2 = ["Brenda", "Chelsea", "Christine", "Jessica", "Tracy"];
let team3 = ["Tracy", "Christine", "Jessica", "Brenda", "Chelsea"];
let team4 = ["Jessica", "Brenda", "Tracy", "Chelsea", "Christine"];
let float = []

// Assign Staff Button
document
  .querySelector("#assign-staff")
  .addEventListener("click", updateAssignmentDisplay);

// Assigns and Displays Nurses After Button Click
function updateAssignmentDisplay() {
  let assignments = [team1, team2, team3, team4, float];
  let scheduledRNs = document.querySelectorAll(".scheduledRegisteredNurses");
  let scheduledRNsArray = Array.from(scheduledRNs).map(scheduledRNs => scheduledRNs.value);
  let scheduledLPNs = document.querySelectorAll(".scheduledLicensedPracticalNurses");
  let scheduledLPNsArray = Array.from(scheduledLPNs).map(scheduledLPNs => scheduledLPNs.value);

  while(scheduledRNsArray.length > 0) {
    
  }
  let team1Nurse = document.querySelector("#t1n1");
  let team1Nurse1 = assignTeamOne(scheduledRNs, assignments[0]);
  team1Nurse.textContent = team1Nurse1;
  scheduledRNsArray.splice(scheduledRNsArray.indexOf(team1Nurse1), 1);

  // let team2Nurse = document.querySelector("#t2n1");
  // let team2Nurse1 = assignTeamTwo(scheduledStaffArray);
  // team2Nurse.textContent = team2Nurse1;
  // scheduledStaffArray.splice(scheduledStaffArray.indexOf(team2Nurse1), 1);

  // let team3Nurse = document.querySelector("#t3n1");
  // let team3Nurse1 = assignTeamThree(scheduledStaffArray);
  // team3Nurse.textContent = team3Nurse1;
  // scheduledStaffArray.splice(scheduledStaffArray.indexOf(team3Nurse1), 1);

  // let team4Nurse = document.querySelector("#t4n1");
  // let team4Nurse1 = assignTeamFour(scheduledStaffArray);
  // team4Nurse.textContent = team4Nurse1;
  // scheduledStaffArray.splice(scheduledStaffArray.indexOf(team4Nurse1), 1);

  // console.log(scheduledStaffArray);
}





// TEAM ASSIGNMENT

// Assigning Team 1 Nurse 1
function assignTeamOne(nurses, team) {
  let leastRecentNurse = nurses[0];

  for (let i = 1; i < nurses.length; i++) {
    if (team.indexOf(nurses[i]) > team.indexOf(leastRecentNurse)) {
      leastRecentNurse = nurses[i];
    }
  }
  console.log(`${leastRecentNurse} has been assigned to ${team}`)
  return(leastRecentNurse);
}

// Assigning Team 2 Nurse 1
function assignTeamTwo(nurses) {
  let leastRecentNurse = nurses[0];

  for (let i = 1; i < nurses.length; i++) {
    if (team2.indexOf(nurses[i]) > team2.indexOf(leastRecentNurse)) {
      leastRecentNurse = nurses[i];
    }
  }
  console.log(`${leastRecentNurse} has been assigned to Team 2`)
  return(leastRecentNurse);
}

// Assigning Team 3 Nurse 1
function assignTeamThree(nurses) {
  let leastRecentNurse = nurses[0];

  for (let i = 1; i < nurses.length; i++) {
    if (team3.indexOf(nurses[i]) > team3.indexOf(leastRecentNurse)) {
      leastRecentNurse = nurses[i];
    }
  }
  console.log(`${leastRecentNurse} has been assigned to Team 3`)
  return(leastRecentNurse);
}

// Assigning Team 4 Nurse 1
function assignTeamFour(nurses) {
  let leastRecentNurse = nurses[0];

  for (let i = 1; i < nurses.length; i++) {
    if (team4.indexOf(nurses[i]) > team4.indexOf(leastRecentNurse)) {
      leastRecentNurse = nurses[i];
    }
  }
  console.log(`${leastRecentNurse} has been assigned to Team 4`)
  return(leastRecentNurse);
}
