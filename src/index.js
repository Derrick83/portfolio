import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker.js'; 
import Navbar from './components/Navbar.js';
// import HeroView from './components/HeroView.jsx';
// import SkillContainer from './components/SkillContainer.jsx';
// import ProjectsContainer from './components/ProjectsContainer.jsx';
// import ParallaxImage from './components/ParallaxImage.jsx';
// import AboutMe from './components/AboutMe.jsx';
// import Footer from './components/Footer.jsx';
// import CallToAction from './components/CallToAction.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      blank: []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  //<List items={this.state.items}/>

  render () {

    return (
      <div>

      <Navbar />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker()
