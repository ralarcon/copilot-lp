function skillsMember(){};
skillsMember.prototype = {
  skills: ['HTML', 'CSS', 'JS'],
  addSkill: function(skill){
    this.skills.push(skill);
  }
}