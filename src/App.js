import logo from './logo.svg';
import './App.css';
import './Banner'
import Search from './Search'
import Banner from './Banner';
import React from 'react'
import Results from './Results'
import Nominations from './Nominations';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorData: null,
      searchList: [],
      nominationList: [],
      isComplete:false
    }
  }

  setErrorData = (error) => {
    this.setState((state) => ({
      ...state,
      errorData: error
    }))
  }
  setSearchResultList = (list) => {
    this.setState((state) => ({
      ...state,
      searchList: list
    }))
  }
  addNominee = (nominee) => {
    let newNomineeList = this.state.nominationList
    newNomineeList.push(nominee)
    let isComplete=(newNomineeList && newNomineeList.length>=5)
    this.setState((state) => ({
      ...state,
      nominationList: newNomineeList,
      isComplete: isComplete
    }))
  }

  removeNominee = (nominee) => {
    let newNomineeList = this.state.nominationList.filter(result => nominee != result)
    this.setState((state) => ({
      ...state,
      nominationList: newNomineeList
    }))
  }
  render() {
    return (
      <>
      {this.state.isComplete?
      <div className="active">Thank You For Nominating</div>:
      null
      }
        <div className="main-container">
          <Banner>The Shoppies</Banner>
          <div className="main-content">
            <Search setErrorData={this.setErrorData} searchResultList={this.setSearchResultList} ></Search>
            <Results error={this.state.errorData} NomineeList={this.state.nominationList} results={this.state.searchList} addNominee={this.addNominee} className="search-result-list"></Results>
            <Nominations removeNominee={this.removeNominee} NomineeList={this.state.nominationList}></Nominations>
          </div>
      </div>
      </>
    );
  }

}

export default App;
