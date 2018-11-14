import React from 'react'
import request from 'superagent'

class App extends React.Component {
  state = {
    model:'default',
    input: [[44,43,44],[90,83,82],"N","N","N"]
  }

  componentDidMount() {
    const url = 'http://colormind.io/list/'


    request.post(url)
    .send(this.state)
    .then(res => {
      this.setState(res.body)
      //let palette = JSON.parse(XMLHttpRequest.responseText).result
      console.log(res.body)
    })
    .catch(err => console.err(err))
  }

  render() {
    return (
      <React.Fragment>
        <h1>HI</h1>
        {this.state}
      </React.Fragment>
    )
  }
}

export default App

