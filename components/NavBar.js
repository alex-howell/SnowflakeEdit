import React from 'react'
class NavBar extends React.Component<Props> {

render() {
    
    return (
      <main>
        <style >{`      
        #navbar ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow-x: auto;
            background-color: #9dc0f9;
        }

        #navbar li {
            float: left;
        }

        #navbar li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size:20px;
        }

        #navbar li a:hover {
            background-color: #6099f7;
            color:white;
        }
        `}</style>
        
        <div id="navbar">
            <title>Home</title>
        <ul >
		    <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
	    </ul>

         </div>
      </main>
    )
  }
}

export default NavBar