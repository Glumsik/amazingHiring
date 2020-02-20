import React from 'react';
import './App.css';
import Table from './Table/Table';
import _ from 'lodash';


class App extends React.Component
{
  constructor()
    {
      super();
      this.state =
      {
        data: [],
        sort: 'asc',
        sortBy: ''
      };
    }


    componentDidMount() 
    {
      fetch('https://raw.githubusercontent.com/blmzv/ah-frontend-intern/master/profiles.json')
        .then(res => res.json())
        .then(
          (result) => 
          {
            this.setState(
            {
              data: result
            });
            this.sortSave()
          },
          (error) => 
          {
            console.log(error)
          }
        )
    }


    onSort = (sortField) => 
    {  
      const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';

      this.sortState(sortField, sortType);    

      sessionStorage.setItem('sortSave', JSON.stringify([{sortBy : sortField},{sort : sortType}]))
    }


    sortSave = () => 
    {  
      if(sessionStorage.getItem('sortSave') !== null)
      {
        const sessionSave = JSON.parse(sessionStorage.sortSave);
        const sortField = sessionSave[0].sortBy
        const sortType = sessionSave[1].sort

        this.sortState(sortField, sortType);    
      }
    }


    sortState = (sortField, sortType) =>
    {
      const orderedData = _.orderBy(this.state.data, sortField, sortType);
      this.setState(
      {
        data: orderedData,
        sort: sortType,
        sortBy: sortField
      })
    }


    render()
    {
      return(
        <div className="outerContainer">
              <Table dataTable={this.state.data} onSort={this.onSort} sortBy={this.state.sortBy} sort={this.state.sort}/>
       </div>
      )      
    }
}

export default App;