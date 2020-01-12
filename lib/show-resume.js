const inquirer = require('inquirer');
const render = require('./render-view');

const promptTypes = {
  LIST: 'list',
};

const choices = {
  landing: {
    ABOUT: 'About me',
    EXPERIENCE: 'Work experience',
    EDUCATION: 'Education',
  },
  BACK: 'Back',
  EXIT: 'Exit',
};

const landingChoices = {
  type: promptTypes.LIST,
  name: 'landingChoice',
  message: 'Select an option below.',
  choices: [...Object.values(choices.landing), choices.EXIT],
};

const backChoices = {
  type: promptTypes.LIST,
  name: 'backChoice',
  message: 'Back or exit?',
  choices: [choices.BACK, choices.EXIT],
};

const getAnswer = async choices =>
  new Promise((resolve, reject) => {
    inquirer.prompt(choices).then(answer => resolve(answer));
  });

const showResume = async resume => {
  const {
    me: { name, title, about, skills, website, email },
    experience,
    education,
  } = resume;
  console.clear();
  render.renderLanding(name, title);

  const landingChoice = await getAnswer(landingChoices);
  console.clear();
  if (landingChoice.landingChoice === choices.EXIT) return;

  if (landingChoice.landingChoice === choices.landing.ABOUT) {
    render.renderAbout(about, skills);
  } else if (landingChoice.landingChoice === choices.landing.EXPERIENCE) {
    render.renderExperience(experience.reverse());
  } else if (landingChoice.landingChoice === choices.landing.EDUCATION) {
    render.renderEducation(education.reverse());
  }
  console.log('\n\n');

  const backChoice = await getAnswer(backChoices);
  if (backChoice.backChoice === choices.EXIT) {
    console.clear();
    return;
  }
  showResume(resume);
};

module.exports = showResume;
