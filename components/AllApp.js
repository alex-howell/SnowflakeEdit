import React from 'react';
import NavBar from '../components/NavBar';


const LoadingIcon = require('react-loading-animation');

const API = '/findall?team=';

class AllApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],

      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    
    this.setState({ isLoading: true });
    var QUERY=localStorage.getItem('query');
    fetch(API+QUERY, {
      method:"POST"
    })
    
      .then(response => {
        if (response.ok) {
          localStorage.setItem('query','all');
          
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ hits: data.hits,isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleChange(e){
    if(e.target.value!==""){
      localStorage.setItem('query',e.target.value);
      location.reload();
    }
  }

  handleClick(e){

  }
   
  render() {
    var { hits, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <LoadingIcon />;
    }

    

    var set1 = new Set();
    hits.map(team => 
      set1.add(team.TEAM)
    )
    
    var array= Array.from(set1);
    return (
      <main>
        <style jsx global>{`
        body {
          font-family: Helvetica;
        }
        table{
          display:block;
          height:500px;
          overflow-y:scroll;
        }
        div{
            overflow-x:auto;
            
        }
        th{
            background-color: #9dc0f9;
            color: white;
            padding:5px;
            width:10px;
            
        }
        td {
            border-bottom: 1px solid #ddd;
            text-align:center;
            padding:5px;
            
        }
        tr:hover {background-color: #f5f5f5;}
        a{
          color:inherit;
        }
        
      `}</style>
        <div>
          <title>View All</title>
          <NavBar />
          <br />
          <label>Filter By Team - </label>
         

          <select name="team" width="15px;"onChange={(e) => {this.handleChange(e)}}>
            <option value="">Select team...</option>
            <option value="all">All</option>
            {array.map(team =>
              <option value={team}>{team}</option>
            )}
          </select>
          
            
          <br />
          <br/>
          <table>
            <th>Name</th><th>Team</th><th>Location</th><th>Booking</th><th>Booking Core</th><th>Shipment</th><th>Product & Routing</th><th>Pricing</th><th>Haulage</th><th>Customer</th><th>Activity Plan</th><th>Allocation</th><th>TPDoc Management</th><th>Framework</th><th>FUI</th><th>Cargo</th><th>Special Cargo</th><th>Interfaces</th><th>Document Process Engine</th><th>DocBroker</th><th>Archiving</th><th>ToP</th><th>GHDER</th><th>Decommissioned</th><th>Reference Data Management</th><th>UI Framework</th><th>SAT</th><th>Development Support Features</th><th>Environment</th><th>General Knowhow</th>
            {hits.map(hit =>
              <tr>
                  <th>{hit.NAME}<br/>({hit._id})</th><td>{hit.TEAM}</td><td>{hit.LOCATION}</td><td>{hit.BOOKING}</td><td>{hit.BOOKING_CORE}</td><td>{hit.SHIPMENT}</td><td>{hit.PRODUCT_AND_ROUTING}</td><td>{hit.PRICING}</td><td>{hit.HAULAGE}</td><td>{hit.CUSTOMER}</td><td>{hit.ACTIVITY_PLAN}</td><td>{hit.ALLOCATION}</td><td>{hit.TPDOC}</td><td>{hit.FRAMEWORK}</td><td>{hit.FUI}</td><td>{hit.CARGO}</td><td>{hit.SPECIAL_CARGO}</td><td>{hit.INTERFACES}</td><td>{hit.DOC_PROCESS_ENG}</td><td>{hit.DOCBROKER}</td><td>{hit.ARCHIVING}</td><td>{hit.TOP}</td><td>{hit.GHDER}</td><td>{hit.DECOMMISSIONED}</td><td>{hit.REF_DAT_MGMT}</td><td>{hit.UI_FMWK}</td><td>{hit.SAT}</td><td>{hit.DEVELOPMENT}</td><td>{hit.ENVIRONMENT}</td><td>{hit.GENERAL_KNW}</td>
                </tr>
            )}
          </table>
          <button onClick={(e) => {this.handleClick(e)}}>Save</button>
        </div>
      </main>
    );
  }
}

export default AllApp;