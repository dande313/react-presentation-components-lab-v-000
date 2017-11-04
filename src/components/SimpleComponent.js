import React from 'react';

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        mood: 'happy'
    }
  }

  render(){
    return <div> I am just happy. </div>
  }

}

export default SimpleComponent;
