const iconBar = Array(3).fill('icon-bar')
const navBar = ['Skills', 'Projects', 'Resume', 'About', 'Contact']

const allProjects = [
	{
		buttonDescription: ['Demo', 'Github'],
		links: ['https://flying-mongeese.herokuapp.com/', 'https://github.com/derrick83'],
		//every odd numbered index must have a float of go-right!!!!!!!!!
		image: "https://goo.gl/6wRmgG",
		title: 'AirHR',
		float: [],
		subtitle: 'emulation of Airbnb',
		summary: "AirHR is a project developed by 4 fellow engineers to showcase our advancement and skills to form a functional full stack application. The application has specific funtionality for searching by city, map api, individual listings, user profile/auth, list your own property, ratings, and booking reservations.",
		colors: ['info', 'warning', 'primary'],
		technologies: ['Frontend', 'Backend', 'Deployment'],
		Frontend: ['Javascript', 'React.js', 'Bootstrap.css', 'HTML', 'CSS'],
		Backend: ['Node.js', 'Postgres', 'Passport'],
		Deployment: ['Heroku']	
	},
	{
		buttonDescription: ['Visit Website'],
		links: ['http://myshabuhouse.com'],
		//every odd numbered index must have a float of go-right!!!!!!!!!
		image: "https://goo.gl/m8DL2F",
		float: ['go-right', 'go-left'],
		title: 'Shabu House',
		subtitle: 'small business website',
		summary: "A restaurant website built from vision to reality. Responsible and managed creative direction from illustrative wireframe to final design implementations. Utilized Wordpress CMS to offer a simplified working solution to client's web presence objectives.",
		colors: ['info', 'primary'],
		technologies: ['Frontend', 'Technologies'],
		Frontend: ['Javascript', 'HTML', 'CSS'],
		Technologies: ['Wordpress', 'Wordpress', 'Illustrator']
	},
	{
		buttonDescription: ['Statistics', 'Github'],
		links: ['https://flying-mongeese.herokuapp.com/', 'https://github.com/derrick83'],
		//every odd numbered index must have a float of go-right and go-left!!!!!!!!!
		image: "https://goo.gl/2EPeb5",
		float: [],
		title: 'HollaCabs Driver Tracking',
		subtitle: 'emulate uber driving tracking microservice',
		summary: "My capstone project revolved around system design and an emulation of Uber. My role was to track driver availability and their current geo coordinates in real time. Primary goal was to calculated nearest driver geolocation within 500 meters of the user in under 200ms per query on a 10 million entry database set utilizing MongoDB.",
		colors: ['warning', 'danger'],
		technologies: ['Backend', 'Testing'],
		Backend: ['Node.js', 'Koa', 'MongoDB', 'Amazon SQS'],
		Testing: ['Jest', 'Artillery', 'New Relic'],	
	}
]

const mySkills = [
	{
		style: 'UI / UX',
		icon: 'fa-magic',
		summary: "I sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. My focuses are on modern and clean architecture design. I'm a minimalist who truly believes that less is more.",
		label: 'label-primary',
		skills: ['Photoshop', 'Illustrator', 'Wordpress', 'GIT']
	},
	{
		style: 'FRONTEND',
		icon: 'fa-tv',
		summary: "I love coding from scratch by utilizing Javascript / HTML / CSS. My primary front-end framework is React.JS with Bootstrap as my styling framework. My experience also includes Angular.js, Jquery, and Wordpress.",
		label: 'label-info',
		skills: ['Javascript', 'React', 'Boostrap', 'Angular', 'HTML', 'CSS']

	},
	{
		style: 'BACKEND',
		icon: 'fa-database',
		summary: "Utilization of data and implementing backend solutions to full-stack applications have been an integral part of my growth. My core backend technologies consists of Node.js / Express for serverside with MongoDB and Postgres my primary databases.",
		label: 'label-warning',
		skills: ['Node.js', 'Express', 'Koa', 'Postgres', 'MongoDB', 'Redis']
	}
]

const aboutMeParagraphs = [
	"Born in Houhai (Goung Dong Province), China and raised in San Francisco since I was 5 years old. Video games and design has always been a passion ever since we purchased our first pentium 2 computer in the 90s.",
	"My all time favorite game must be Diablo 2 but I do have a fond relationship with Dota, Tribes, Harvest Moon and any multiplayer co-op console game.",
	"As a part time freelancing gig, I design/develop websites for small businesses around the Bay Area ONLY.",
	"If I'm not designing, playing video games, or programming. You can find me at the nearest disc golf course playing a round of 18 holes, hiking, or at home making the next greatest belgian waffle combo."
]

const imageLinksAndLegends = [

	{url:"https://goo.gl/X1T3Gu", legend:"hack reactor 86ersss"},
	{url:"https://goo.gl/bPgJE3", legend:"the great one"},
	{url:"https://goo.gl/YXzurg", legend:"my pride and joy"},
	{url:"https://goo.gl/apjwT6", legend:"bucket list, warriors finals 2015 game 5"},
	{url:"https://goo.gl/KcVoXN", legend:"volley-ma-ball"},
	{url:"https://goo.gl/Lgoce4", legend:"disc golf at golden gate park"},
	{url:"https://goo.gl/YrLemK", legend:"good times"},
	{url:"https://goo.gl/DtrVWM", legend:"tough muddddder"},
	{url:"https://goo.gl/N9b3Rp", legend:"screen print art collector"},
	{url:"https://goo.gl/v6pAVr", legend:"e-sports fan"}

]

const footerIcons = [
	{url:"#", type:"fa-phone"},
	{url:"#", type:"fa-envelope"},
	{url:"#", type:"fa-facebook"},
	{url:"#", type:"fa-linkedin"},
	{url:"#", type:"fa-github"}
]

const goalStatistics = [
	{title:'Websites Completed Goal : 30', value: 8, max:'30', percentage:27, progress:'8 completed'},
	{title:'Current Traffic Goal : 100 visits per month', value: 0, max:'100', percentage:0, progress:'0 visitors'},
	{title:'UI/UX Components Goal: 100', value: 0, max:'100', percentage:14, progress:'14 components'},
	{title:'Pull Ups Goal', value: 0, max:'10', percentage:0, progress:'0 completed'}
]
export {iconBar, navBar, allProjects, mySkills, aboutMeParagraphs, imageLinksAndLegends, footerIcons, goalStatistics};



