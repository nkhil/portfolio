import raspberry from '../../static/images/raspberry.png';
import stts from '../../static/images/stts.png';
import fixtureMaker from '../../static/images/fixture.png';
import school from '../../static/images/school.png';
import train from '../../static/images/train.png';
import brexit from '../../static/images/brexit.png';

export const featuredProjects = [
  {
    title: 'Raspberry pi weather display',
    description: 'Laser-cut case to house a raspberry pi that fetches the weather and displays it on an e-ink display.',
    path: '/project-title-here',
    src: raspberry,
  },
  {
    title: 'HTTP Status code checker',
    description: 'Offline reference tool for quickly referencing HTTP status codes. ',
    path: '/project-two-comes-here',
    src: stts,
  },
  {
    title: 'WIP: Fixture Maker',
    description: 'npm module to programatically create fixture files in .json or .js format.',
    path: '/',
    src: fixtureMaker,
  },
  {
    title: 'Responsive website for a school',
    description: "I designed and built a responsive site for a friend's school using Gatsby JS",
    path: '/',
    src: school,
  },
  {
    title: 'Bombay train map',
    description: 'I designed a London-inspired map for the train lines in Bombay.',
    path: '/',
    src: train,
  },
  {
    title: 'Brexit means Breadsticks',
    description: 'A Chrome extension that turns every mention of Brexit into Breadsticks.',
    path: '/',
    src: brexit,
  },
];
