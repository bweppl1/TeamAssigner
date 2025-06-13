let team1 = ["Chelsea", "Christine", "Tracy", "Jessica", "Brenda"];
let team2 = ["Brenda", "Christine", "Chelsea", "Jessica", "Tracy"];
let team3 = ["Brenda", "Christine", "Tracy", "Jessica", "Chelsea"];
let team4 = ["Brenda", "Christine", "Tracy", "Jessica", "Jessica"];

team1Primary = document.querySelector("#t1Primary");
team1Secondary = document.querySelector("#t1Secondary");
team2Primary = document.querySelector("#t2Primary");
team2Secondary = document.querySelector("#t2Secondary");
team3Primary = document.querySelector("#t3Primary");
team3Secondary = document.querySelector("#t3Secondary");
team4Primary = document.querySelector("#t4Primary");
team4Secondary = document.querySelector("#t4Secondary");

let team1Pos;
let team2Pos;
let team3Pos;
let team4Pos;

let assignment;

document.querySelector("#assign-staff").addEventListener("click", assignStaff);

function assignStaff() {
  const selectedStaff = document.querySelector("#staffSelect").value;

  // team1Primary.textContent = selectedStaff

  team1Pos = findTeam1Pos(selectedStaff);
  team2Pos = findTeam2Pos(selectedStaff);
  team3Pos = findTeam3Pos(selectedStaff);
  team4Pos = findTeam4Pos(selectedStaff);

  assignment = leastRecentAssignment(team1Pos, team2Pos, team3Pos, team4Pos);

  switch (assignment) {
    case 1:
      team1Primary.textContent = selectedStaff;
      break;
    case 2:
      team2Primary.textContent = selectedStaff;
      break;
    case 3:
      team4Primary.textContent = selectedStaff;
      break;
    default:
      team4Primary.textContent = selectedStaff;
      break;
  }
}

function findTeam1Pos(staff) {
  for (let i = 0; i < team1.length; i++) {
    if (team1[i] == staff) {
      return i;
    }
  }
}
function findTeam2Pos(staff) {
  for (let i = 0; i < team2.length; i++) {
    if (team2[i] == staff) {
      return i;
    }
  }
}
function findTeam3Pos(staff) {
  for (let i = 0; i < team3.length; i++) {
    if (team3[i] == staff) {
      return i;
    }
  }
}
function findTeam4Pos(staff) {
  for (let i = 0; i < team4.length; i++) {
    if (team4[i] == staff) {
      return i;
    }
  }
}

function leastRecentAssignment(t1, t2, t3, t4) {
  let leastRecent = t1;

  if (t2 > leastRecent) {
    leastRecent = t2;
  }

  if (t3 > leastRecent) {
    leastRecent = t3;
  }

  if (t4 > leastRecent) {
    leastRecent = t4;
  }

  switch (leastRecent) {
    case t1:
      return 1;
    case t2:
      return 2;
    case t3:
      return 3;
    default:
      return 4;
  }
}
