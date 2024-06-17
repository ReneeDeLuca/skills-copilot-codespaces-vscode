function skillsMember() {
  // 1. Get the current member
  var member = getCurrentMember();
  if (!member) {
    return;
  }

  // 2. Get the skills of the current member
  var skills = member.skills;
  if (!skills) {
    return;
  }

  // 3. Get the skills list element
  var skillsList = document.getElementById('skills-list');
  if (!skillsList) {
    return;
  }

  // 4. Clear the skills list
  skillsList.innerHTML = '';

  // 5. Add the skills to the skills list
  for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];
    var skillElement = document.createElement('div');
    skillElement.className = 'skill';
    skillElement.textContent = skill;
    skillsList.appendChild(skillElement);
  }
}