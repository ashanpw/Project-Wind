import React, { Component } from 'react';
import './App.css';
import PreHome from '../components/PreHome/PreHome';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';

class App extends Component {
  state = {
    page: "Experience",
  }
  updatePageHandler = (page) => {
    this.setState({ page: page });
    console.log(this.state)
  }
  render() {
    let display = this.state.page === "PreHome" ?
      <PreHome changePage={this.updatePageHandler} /> : this.state.page === "Home" ?
        <Home changePage={this.updatePageHandler} isReturning={false} /> : this.state.page === "HomeReturn" ?
          <Home changePage={this.updatePageHandler} isReturning={true} /> : this.state.page === "About" ?
            <About changePage={this.updatePageHandler} /> : this.state.page === "Experience" ? <Experience changePage={this.updatePageHandler} /> :
              <Projects changePage={this.updatePageHandler} />
    // let display = this.state.page === "About" ? <About changePage={this.updatePageHandler} /> : <Home changePage={this.updatePageHandler} />
    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;
