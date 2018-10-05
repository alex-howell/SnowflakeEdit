import React from 'react'
import Navbar from '../components/NavBar';


const LoadingIcon = require('react-loading-animation');

class AboutApp extends React.Component<Props> {


    render() {

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
      
        `}</style>
                <Navbar />
                <div id="main" align="center">
                    <title>About</title>
                    <h1>Skills Matrix</h1>
                    
                    <div align="left">

                        <h4>Individual Record</h4>
                        <p>Begin by entering your organisation ID and click go. </p>  
                        <p>If you've previously tracked your progress, the application will load your saved progress. If it is the first time you are tracking your progress, it will load a blank state. Work your way through the different tracks, rating yourself accordingly. Once you have completed scoring yourself click the save button and your record will be saved.</p>
                       
                        <h4>Viewing Team Average</h4>
                        <p>This will determine the average score for each track of the selected team, based on the records stored in the database.</p>

                        <h4>View All</h4>
                        <p>Here is where you view all records stored within the database. You can filter the table to only show the records of the selected team. Clicking export will download the displayed table as an excel file.</p>
                    </div>
                </div>
            </main>
                        )
    }
}

export default AboutApp