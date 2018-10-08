import React from 'react'
import NavBar from '../components/NavBar';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    
    return (
    <main>
       <style jsx>{`
        div {
            font-size:30px;
        }
      `}</style>
      <div>
        <NavBar />
        <p>
            {this.props.statusCode
            ? `Error ${this.props.statusCode} has occurred on server. `
            : 'An error occurred on client'}
        </p>
      </div>
    </main>
    )
  }
}