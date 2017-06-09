import params from './params';

const textpoints = [
// texts for "wanna be ..."
  {
    text: 'I wanna be',
    color: params.colors[0],
    x: 1,
    y: 2.2,
    align: 'end'
  },
  {
    text: 'an ARTIST!',
    color: params.colors[0],
    x: 1,
    y: 2.3,
    align: 'end'
  },
  {
    text: 'I wanna be',
    color: params.colors[1],
    x: 1,
    y: 3.5,
    align: 'end'
  },
  {
    text: 'a GRAPHIC',
    color: params.colors[1],
    x: 1,
    y: 3.6,
    align: 'end'
  },
  {
    text: 'DESIGNER!',
    color: params.colors[1],
    x: 1,
    y: 3.7,
    align: 'end'
  },
  {
    text: 'I wanna be',
    color: params.colors[2],
    x: 2,
    y: 7.9,
    align: 'end'
  },
  {
    text: 'a HACKER!',
    color: params.colors[2],
    x: 2,
    y: 8,
    align: 'end'
  },
  {
    text: "Don't know!",
    color: params.colors[3],
    x: 2,
    y: 9,
    align: 'end'
  },
  {
    text: 'Leave me alone!!',
    color: params.colors[3],
    x: 2,
    y: 9.1,
    align: 'end'
  },
// texts for years
  {
    text: '0 y',
    color: params.colors[4],
    size: 42,
    x: 1,
    y: 0
  },
  {
    text: '6 y',
    color: params.colors[4],
    size: 42,
    x: 1,
    y: 1
  },
  {
    text: 'Primary School',
    color: params.text.color,
    x: 1,
    y: 1.2
  },
  {
    text: 'Evening Art School',
    color: params.text.color,
    x: 1,
    y: 1.6
  },
  {
    text: '12 y',
    color: params.colors[4],
    size: 42,
    x: 1,
    y: 2.5
  },
  {
    text: 'Graphic design is a thing?!',
    color: params.text.color,
    x: 1,
    y: 3
  },
  {
    text: 'Got a computer',
    color: params.text.color,
    x: 1,
    y: 4
  },
  {
    text: 'Contemporary Dance Classes',
    color: params.text.color,
    x: 1,
    y: 5
  },
  {
    text: '15 y',
    color: params.colors[4],
    size: 42,
    x: 1,
    y: 6
  },
  {
    text: 'Art School',
    color: params.text.color,
    x: 0,
    y: 7
  },
  {
    text: '✗ no math',
    color: params.text.color,
    rotate: -20,
    x: 0,
    y: 7.25
  },
  {
    text: '✗ no physics',
    color: params.text.color,
    rotate: -20,
    x: 0,
    y: 7.35
  },
  {
    text: '✗ no chemistry',
    color: params.text.color,
    rotate: -20,
    x: 0,
    y: 7.45
  },
  {
    text: "✗ no info' technology",
    color: params.text.color,
    rotate: -20,
    x: 0,
    y: 7.55
  },
  {
    text: 'General High School',
    color: params.text.color,
    x: 2,
    y: 7
  },
  {
    text: '✗',
    size: 52,
    font: 'sans-serif',
    color: params.text.color,
    x: 0,
    y: 7.7
  },
  {
    text: '_____________',
    font: 'sans-serif',
    color: params.text.color,
    x: 2,
    y: 7.05
  },
  {
    text: '16 y',
    color: params.colors[4],
    size: 42,
    x: 2,
    y: 7.5
  },
  {
    text: 'First website created',
    color: params.text.color,
    x: 2,
    y: 7.7
  },
  {
    text: 'Graduated',
    color: params.text.color,
    x: 2,
    y: 8.2
  },
  {
    text: 'Evening Art School',
    color: params.text.color,
    x: 2,
    y: 8.3
  },
  {
    text: 'First program written',
    color: params.text.color,
    x: 2,
    y: 8.6
  },
  {
    text: '17 y',
    color: params.colors[4],
    size: 42,
    x: 2,
    y: 9
  },
  {
    text: 'Applications for uni',
    color: params.text.color,
    x: 2,
    y: 9.2
  },
  {
    text: 'Humanities',
    color: params.text.color,
    x: 0,
    y: 9.8
  },
  {
    text: '-oriented uni',
    color: params.text.color,
    x: 0,
    y: 9.9
  },
  {
    text: '✗',
    size: 52,
    color: params.text.color,
    x: 0,
    y: 10.05
  },
  {
    text: 'Job',
    color: params.text.color,
    x: 2,
    y: 9.8
  },
  {
    text: '✗',
    size: 52,
    color: params.text.color,
    x: 2,
    y: 9.95
  },
  {
    text: 'Masaryk University',
    color: params.text.color,
    x: 1,
    y: 9.8
  },
  {
    text: 'Applied Informatics',
    color: params.text.color,
    x: 1,
    y: 9.9
  },
  {
    text: 'Are you sure',
    color: 'lightgrey',
    x: 1,
    y: 10.2
  },
  {
    text: "you'll like tech?",
    color: 'lightgrey',
    x: 1,
    y: 10.3
  },
  {
    text: 'But you will study',
    color: 'lightgrey',
    x: 1,
    y: 10.75
  },
  {
    text: "lot's of math!",
    color: 'lightgrey',
    x: 1,
    y: 10.85
  },
  {
    text: 'My friend is studying it',
    color: 'lightgrey',
    x: 1,
    y: 11.33
  },
  {
    text: "and HE says it's HARD,",
    color: 'lightgrey',
    x: 1,
    y: 11.43
  },
  {
    text: 'are you sure you will',
    color: 'lightgrey',
    x: 1,
    y: 11.53
  },
  {
    text: 'pass coding and math?',
    color: 'lightgrey',
    x: 1,
    y: 11.63
  },
  {
    text: 'You should try',
    color: 'lightgrey',
    x: 1,
    y: 12.15
  },
  {
    text: 'management for informatics',
    color: 'lightgrey',
    x: 1,
    y: 12.25
  },
  {
    text: 'instead, that is not',
    color: 'lightgrey',
    x: 1,
    y: 12.35
  },
  {
    text: 'that hard!',
    color: 'lightgrey',
    x: 1,
    y: 12.45
  },
  {
    text: "But u don't",
    color: 'lightgrey',
    x: 1,
    y: 12.8
  },
  {
    text: 'code at home',
    color: 'lightgrey',
    x: 1,
    y: 12.9
  },
  {
    text: "I didn't really ask for your",
    color: params.colors[4],
    x: 1,
    y: 13.2
  },
  {
    text: 'opinion, but I guess thanks?',
    color: params.colors[4],
    x: 1,
    y: 13.3
  },
  {
    text: 'Yeah, do what',
    color: params.colors[2],
    x: 1,
    y: 13.5
  },
  {
    text: 'you want to do.',
    color: params.colors[2],
    x: 1,
    y: 13.6
  },
  {
    text: "Informatics is interestin' 'n'",
    color: params.colors[2],
    x: 1,
    y: 13.85
  },
  {
    text: "perspective for job opport'",
    color: params.colors[2],
    x: 1,
    y: 13.95
  },
  {
    text: '18 y',
    color: params.colors[4],
    size: 42,
    x: 1,
    y: 14.3
  },
  {
    text: 'First semester of uni',
    color: params.text.color,
    x: 1,
    y: 14.5
  },
  {
    text: 'Enjoying uni . . .',
    color: params.text.color,
    x: 1,
    y: 14.7
  },
  {
    text: '. . while studying hard . . NOT!',
    color: params.text.color,
    x: 1,
    y: 14.85
  },
  {
    text: ' . . passing',
    color: params.text.color,
    x: 1,
    y: 15.05
  },
  {
    text: 'Math I',
    color: params.text.color,
    x: 1,
    y: 15.3
  },
  {
    text: 'Ⓕ',
    size: 45,
    rotate: -15,
    color: 'red',
    x: 1,
    y: 15.45
  },
  {
    text: 'Intro to Programming',
    color: params.text.color,
    x: 1,
    y: 15.7
  },
  {
    text: 'Ⓕ',
    size: 45,
    rotate: -15,
    color: 'red',
    x: 1,
    y: 15.85
  },
  {
    text: 'Second semester of uni',
    color: params.text.color,
    x: 1,
    y: 16.1
  },
  {
    text: 'Studing from start . .',
    color: params.text.color,
    x: 1,
    y: 16.35
  },
  {
    text: '. . in reality!',
    color: params.text.color,
    x: 1,
    y: 16.50
  },
  {
    text: 'Math I - revisited',
    color: params.text.color,
    x: 1,
    y: 16.9
  },
  {
    text: 'Ⓑ',
    size: 45,
    rotate: -15,
    color: 'green',
    x: 1,
    y: 17.05
  },
  {
    text: 'Math II',
    color: params.text.color,
    x: 1,
    y: 17.3
  },
  {
    text: 'Ⓔ',
    size: 45,
    rotate: -15,
    color: 'green',
    x: 1,
    y: 17.45
  },
  {
    text: 'Programming in Java',
    color: params.text.color,
    x: 1,
    y: 17.7
  },
  {
    text: 'Ⓒ',
    size: 45,
    rotate: -15,
    color: 'green',
    x: 1,
    y: 17.85
  },
  {
    text: ' . . lots of other subjects',
    color: params.text.color,
    x: 1,
    y: 18.1
  },
  {
    text: '22 y',
    color: params.colors[4],
    size: 42,
    x: 1,
    y: 18.5
  },
  {
    text: 'Bachelor of Applied Informatics',
    color: params.text.color,
    x: 1,
    y: 18.7
  },
  {
    text: 'Data visualization is a thing?!',
    color: params.text.color,
    x: 1,
    y: 19
  },
  {
    text: '24 y',
    color: params.colors[4],
    size: 42,
    x: 1,
    y: 19.5
  },
  {
    text: 'Master of Applied Informatics',
    color: params.text.color,
    x: 1,
    y: 19.7
  },
  {
    text: 'specializing in DataViz',
    color: params.text.color,
    x: 1,
    y: 19.85
  },
  {
    text: 'PhD',
    color: params.text.color,
    x: 0,
    y: 21
  },
  {
    text: 'Job',
    color: params.text.color,
    x: 2,
    y: 21
  },
  {
    text: 'Internship',
    color: params.text.color,
    x: 0,
    y: 21.3
  },
  {
    text: 'Bergen, Norway',
    color: params.text.color,
    x: 0,
    y: 21.4
  },
  {
    text: 'Dropped out . . .',
    color: params.text.color,
    x: 0,
    y: 21.8
  },
  {
    text: 'Part-time freelance',
    color: params.text.color,
    x: 2,
    y: 21.3
  },
  {
    text: 'Part-time dataviz',
    color: params.text.color,
    x: 1,
    y: 22.65
  },
  {
    text: "Let's try another country!",
    color: params.text.color,
    x: 1,
    y: 23
  },
  {
    text: '~25 y',
    color: params.colors[4],
    size: 42,
    x: 1,
    y: 23.5
  },
  {
    text: 'Moved to London',
    color: params.text.color,
    x: 1,
    y: 23.65
  },
  {
    text: '3 days before Brexit referendum . . .',
    color: params.text.color,
    x: 1,
    y: 24
  },
  {
    text: '. . Got an offer',
    color: params.text.color,
    x: 1,
    y: 24.15
  },
  {
    text: '3 days after Brexit referendum . . .',
    color: params.text.color,
    x: 1,
    y: 24.5
  },
  {
    text: '. . Signed the offer',
    color: params.text.color,
    x: 1,
    y: 24.65
  }
];

export default textpoints;
