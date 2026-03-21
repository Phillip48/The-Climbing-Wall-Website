export const NAV_LINKS = [
  { label: 'Screenshots', href: '#screenshots' },
  { label: 'Features',    href: '#features' },
  { label: 'How it works', href: '#how' },
]

export const APP_URL = 'https://appetize.io/app/b_e77nh6nlgxdsw3thwigj7fxutq'
export const GITHUB_URL = 'https://github.com/Phillip48/The-Climbing-Wall-App'

export const STATS = [
  { num: 'V0–V17', desc: 'Full grade range supported' },
  { num: '5',      desc: 'Sections: Home, Projects, Sends, Diary, Profile' },
  { num: '100%',   desc: 'Free to use' },
  { num: '∞',      desc: 'Projects & sends to log' },
]

export const FEATURES = [
  {
    icon: '🎯',
    title: 'Projects',
    desc: 'Log routes you\'re working on with grade, attempts, sessions, notes, and video. Update as you make progress.',
  },
  {
    icon: '✅',
    title: 'Sends',
    desc: 'Record every send in detail. Mark warmups separately. Converting a project to a send is one tap.',
  },
  {
    icon: '📈',
    title: 'Auto Grade Tracking',
    desc: 'Max boulder and top rope grades update automatically every time you log or delete a send.',
  },
  {
    icon: '🗓️',
    title: 'Calendar Heatmap',
    desc: 'See your consistency at a glance. A heatmap shows every day you made it to the wall.',
  },
  {
    icon: '📊',
    title: 'Stats & Graphs',
    desc: 'Total sends, attempts, climbing days, and grade graphs — all on your profile page.',
  },
  {
    icon: '📖',
    title: 'Diary',
    desc: 'Write session notes for any day. Review what you worked on and how you felt at the wall.',
  },
]

export const STEPS = [
  {
    num: '01',
    tag: 'Start Here',
    title: 'Create a Project',
    desc: 'Add any route you\'re working on. Set the grade, log attempts and sessions, and leave beta notes.',
  },
  {
    num: '02',
    tag: 'Keep Going',
    title: 'Log Your Sessions',
    desc: 'Update your project after each session. Track how many attempts it\'s taking as you get closer to the send.',
  },
  {
    num: '03',
    tag: 'The Payoff',
    title: 'Mark the Send',
    desc: 'When you stick it, mark it sent. The project becomes a send, max grades update, and your stats grow.',
  },
]

export const SCREENSHOTS = [
  { src: 'home',     alt: 'Home screen',      title: 'Home',            desc: 'Latest sends & grade search' },
  { src: 'projects', alt: 'Projects screen',  title: 'Projects',        desc: 'Track routes in progress' },
  { src: 'sends',    alt: 'Sends screen',     title: 'Sends',           desc: 'Log sends & warmups instantly' },
  { src: 'diary',    alt: 'Diary screen',     title: 'Diary',           desc: 'Day-by-day session notes' },
  { src: 'profile',  alt: 'Profile & Stats',  title: 'Profile & Stats', desc: 'Heatmap, grades & totals' },
]

// Heatmap cell intensity levels (0 = empty, 1-4 = low-high)
export const HEATMAP_DATA = [
  0,1,0,2,1,0,3,1,0,2,0,1,0,
  2,0,4,1,3,0,2,4,1,0,2,3,0,
  1,2,1,0,4,2,1,0,3,1,2,0,4,
]

export const BAR_DATA = [35, 60, 25, 100, 55, 70, 45, 80]
