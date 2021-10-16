import raspberry from '../../static/images/raspberry.png';
import stts from '../../static/images/stts.png';
import fixtureMaker from '../../static/images/fixture.png';
import school from '../../static/images/school.png';
import train from '../../static/images/train.png';
import brexit from '../../static/images/brexit.png';
import pineapple from '../../static/images/pineapple-icon.png';
import react from '../../static/images/react.png';
import mail from '../../static/images/mail.png';
import cloud from '../../static/images/cloud.png';
import rocket from '../../static/images/rocket.png';
import spending from '../../static/images/spending.png';
import secretHelper from '../../static/images/secret_helper.png';
import leaderboardLogo from '../../static/images/leaderboard_logo.png';
import cnv from '../../static/images/cnv.png';

export const featuredProjects = [
  {
    title: 'CNV: a command line unit converter',
    description: 'npm module to convert units in the command line',
    path: '/cnv-convert-units-in-command-line',
    src: cnv,
  },
  {
    title: 'Leaderboard API',
    description: 'An API to manage scoreboards and leaderboards',
    path: '/leaderboard-api',
    src: leaderboardLogo,
  },
  {
    title: 'Secret Helper',
    description: 'A helper library for creating api keys, hashing and verifying hashes',
    path: '/secret-helper-library',
    src: secretHelper,
  },
  {
    title: 'Spending tracker',
    description: 'A lightweight spending tracker web app built using react',
    path: '/spending-tracker',
    src: spending,
  },
  {
    title: 'HTTP Status code checker',
    description: 'Offline reference tool for quickly referencing HTTP status codes',
    path: '/http-status-code-checker',
    src: stts,
  },
  {
    title: 'Raspberry pi weather display',
    description: 'Laser-cut case to house a raspberry pi that fetches the weather and displays it on an e-ink display',
    path: '/raspberry-pi-zero-weather-display',
    src: raspberry,
  },
];

export const projects = [
  {
    title: 'CNV: a command line unit converter',
    description: 'npm module to convert units in the command line',
    path: '/cnv-convert-units-in-command-line',
    src: cnv,
  },
  {
    title: 'Leaderboard API',
    description: 'An API to manage scoreboards and leaderboards',
    path: '/leaderboard-api',
    src: leaderboardLogo,
  },
  {
    title: 'Secret Helper',
    description: 'A helper library for creating api keys, hashing and verifying hashes',
    path: '/secret-helper-library',
    src: secretHelper,
  },
  {
    title: 'Spending tracker',
    description: 'A lightweight spending tracker web app built using react',
    path: '/spending-tracker',
    src: spending,
  },
  {
    title: 'Weather CLI tool',
    description: 'A quick project to get the weather in your command line',
    path: '/weather-command-line',
    src: cloud,
  },
  {
    title: 'Tracking royal mail packages with node',
    description: 'I wrote a puppeteer script to track package deliveries',
    path: '/track-royal-mail-packages-with-puppeteer-script',
    src: mail,
  },
  {
    title: 'Managing state without redux',
    description: 'Playing around with the react useContext and useReducer API to manage state',
    path: '/react-state-management-using-usereducer-and-usecontext',
    src: react,
  },
  {
    title: 'Raspberry pi weather display',
    description: 'Laser-cut case to house a raspberry pi that fetches the weather and displays it on an e-ink display.',
    path: '/raspberry-pi-zero-weather-display',
    src: raspberry,
  },
  {
    title: 'Pineapple Journal',
    description: 'Daily journalling web app built using React',
    path: '/pineapple-journaling-app',
    src: pineapple,
  },
  {
    title: 'HTTP Status code checker',
    description: 'Offline reference tool for quickly referencing HTTP status codes. ',
    path: '/http-status-code-checker',
    src: stts,
  },
  {
    title: 'WIP: Fixture Maker',
    description: 'npm module to programatically create fixture files in .json or .js format.',
    path: '/fixture-maker',
    src: fixtureMaker,
  },
  {
    title: 'Responsive website for a school',
    description: "I designed and built a responsive site for a friend's school using Gatsby JS",
    path: '/responsive-school-website',
    src: school,
  },
  {
    title: 'Bombay train map',
    description: 'I designed a London-inspired map for the train lines in Bombay.',
    path: '/bombay-train-map-design',
    src: train,
  },
  {
    title: 'Brexit means Breadsticks',
    description: 'A Chrome extension that turns every mention of Brexit into Breadsticks.',
    path: '/brexit-means-breadsticks-chrome-extension',
    src: brexit,
  },
];
