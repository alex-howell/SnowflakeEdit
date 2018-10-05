import React from 'react'
import Navbar from '../components/NavBar';



const LoadingIcon = require('react-loading-animation');


class HomeApp extends React.Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            hits: [],

            isLoading: true,
            error: null,
        };
    }

    componentDidMount() {
        document.title = "Home";
        fetch('/teams', {
            method: "POST"
        })

            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ hits: data.hits, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
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
        var array = Array.from(set1);

        return (
            
            <main>
                <style jsx global>{`
        body{
            font-family: Helvetica;
            background-color:#9dc0f9;
        }
        
        #main {
            padding:25px;
            margin:auto;
            font-size:15px;
            text-align: center;
            background-color:white;
            height:100vh;
            width:50%;
            border-radius:10px;
        }
        #teams:a{
            padding-left:10px;
        }
        .name-input {
            
            
            font-size: 20px;
            line-height: 25px;
            font-weight: bold;
            width: 75%;
            margin-bottom: 5px;
        }
        .name-input:hover, .name-input:focus {
            border-bottom: 2px solid #ccc;
            outline: 0;
        }
        .btn{
          background-color:#9dc0f9;
         display:inline-block;
         padding:0.35em 1.2em;
         border:0.15em solid #FFFFFF;
         margin:0 0.3em 0.3em 0;
         border-radius:0.12em;
         box-sizing: border-box;
         text-decoration:none;
         font-family:'Roboto',sans-serif;
         font-weight:300;
         color:#FFFFFF;
         text-align:center;
         transition: all 0.2s;
        }
        .btn:hover{
         background-color:#6099f7;
        }
        @media all and (max-width:30em){
         .btn{
          display:block;
          margin:0.4em auto;
         }
        .inputDiv{
            margin:0 auto;
        }
        .form, label {
            padding:10px;
            font-size:20px;
        }
        `}</style>
        <Navbar/>
                <div id="main" align="center">
                    <h1>Skills Matrix</h1>
                    <div className="inputDiv">
                        <form method="POST" action="/find" className="form">
                            <label>Enter Your Organisation ID</label><br />

                            <input type="text" placeholder="Organisation ID" name="searchID" className="name-input" required /><br />
                            <input type="submit" value="Go" className="btn" />
                        </form>
                    </div>
                    
                    <div className="inputDiv">
                        <form method="POST" action="/team" className="form">
                            <label>View Team Average</label><br />
                            <select name="teamName" className="name-input">
                                {array.map(team =>
                                    <option value={team}>{team}</option>
                                )}
                            </select><br />
                            <input type="submit" value="Search" className="btn" />
                        </form>
                    </div>

                    <div className="inputDiv">
                        <form method="get" action="/findall" className="form">
                            <label>View All Records</label><br />
                            <input type="submit" value="VIEW ALL" className="btn" />
                        </form>
                    </div>

                </div>
            </main>
        )
    }
}

export default HomeApp