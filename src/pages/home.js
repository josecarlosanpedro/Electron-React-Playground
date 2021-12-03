import React from 'react'

import si from "systeminformation";
// import { Button } from 'antd'

export default class Home extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {brand: "Ford"};
  //   this.state.bind(this);
  // }
  state = {
    system_data: '',
    mem: '',
    cpu: ''
  }
  componentDidMount(){
    this.test()
  }
  test = async () => {
    const system_data = await si.osInfo();
    const mem = await si.mem();
    const cpu = await si.cpu();
    this.setState({
      system_data: JSON.stringify(system_data)
    });
    this.setState({
      mem: JSON.stringify(mem)
    });
    this.setState({
      cpu: JSON.stringify(cpu)
    });
  }
  // details = async () => {
  //   const system_data = await si.osInfo();
  //   this.setState({brand: JSON.stringify(system_data)})
  // }
  render() { 
   
    return (
      <div className="flex column">
        <p>System Date {this.state.system_data}</p>
        <p>Memory {this.state.mem}</p>
        <p>CPU {this.state.cpu}</p>
      </div>
    )
  }

} // class Home end