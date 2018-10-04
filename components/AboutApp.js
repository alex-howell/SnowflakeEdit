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
        .inputDiv{
            margin:0 auto;
        }
        .form, label {
            padding:10px;
            font-size:20px;
        }
        .heading{
            text-decoration:underline;
        }
        `}</style>
        <Navbar/>
                <div id="main" align="center">
                
                    <title>Home</title>
                    <h1>Skills Matrix</h1>
                    <h3>How does it work?</h3> 
                    <div align="left" className="heading">
                        <h4>Individual Record</h4>
                        <p>Begin by entering your organisation ID and click go. If you%E2%80%99ve previously tracked your progress, the application will load your saved progress. If it is the first time you are tracking your progress, it will load a blank state. Work your way through the different tracks, rating yourself accordingly. Once you have completed scoring yourself click the save button and your record will be saved.</p>       

                        <h4>Viewing Team Average</h4>
                        <p>This will determine the average score for each track of the selected team, based on the records stored in the database.</p>
                    </div>
                </div>
            </main>
        )
    }
}

export default AboutApp