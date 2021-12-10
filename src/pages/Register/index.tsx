import React, {Component } from 'react';

export interface RegisterProp {
  userName?: string;
  password?: string;
  phone?: number;
}

class Register extends Component<RegisterProp,{}>{
  render() {
    const ReBody = (
      <div className="RegisterBody">
        <header>
          <div>
            <i className="iconfont icon-xiangji"></i>
            <span></span>
          </div>
        </header>
        <main>
          <aside></aside>
          <section></section>
        </main>
      </div>
    )
    return (ReBody)
  }
}

export default Register;