const chalk = require('chalk');
const ROW_CHAR_LIMIT = 50;

const renderRow = length =>
  Array(length)
    .fill('-')
    .join('');

const rowLengthLimit = (text, limit) => {
  let charCounter = 0;
  let newText = '';
  text.split(' ').forEach(word => {
    charCounter += word.length;
    if (charCounter >= limit) {
      newText += ` ${word}\n`;
      charCounter = 0;
    } else {
      newText += ` ${word}`;
    }
  });
  return newText;
};

const renderLanding = (name, title) =>
  console.log(
    chalk.bold(
      `\n\n Hi there, my name is ${chalk.magenta(name)}.\n I'm ${title}.\n`
    )
  );

const renderAbout = (about, skills) => {
  console.log();
  console.log(chalk.magenta.bold.underline(`\n\n About me 👨‍💻\n`));
  console.log(`${rowLengthLimit(about, ROW_CHAR_LIMIT)}\n`);
  console.log(chalk.magenta.bold.underline(`\n\n My skills 🦸‍♂️`));
  console.log(`${rowLengthLimit(skills, ROW_CHAR_LIMIT)}\n`);
};

const renderExperience = experiences => {
  console.log(chalk.magenta.bold.underline(`\n\n Work Experience 🛠\n`));
  console.log(`${renderRow(ROW_CHAR_LIMIT)}\n`);
  experiences.forEach(experience => {
    console.log(chalk.yellowBright(experience.name));
    console.log(chalk.yellow(experience.role));
    console.log(chalk.blue(`${experience.date.from} - ${experience.date.to}`));
    console.log(`\n${rowLengthLimit(experience.description, ROW_CHAR_LIMIT)}`);
    console.log(renderRow(ROW_CHAR_LIMIT));
  });
};

const renderEducation = educations => {
  console.log(chalk.magenta.bold.underline(`\n\n Education 🚌\n`));
  console.log(`${renderRow(ROW_CHAR_LIMIT)}\n`);
  educations.forEach(education => {
    console.log(chalk.yellowBright(education.name));
    console.log(chalk.yellow(education.study));
    console.log(chalk.blue(`${education.date.from} - ${education.date.to}`));
    console.log(renderRow(ROW_CHAR_LIMIT));
  });
};

module.exports = {
  renderAbout,
  renderLanding,
  renderExperience,
  renderEducation,
};
