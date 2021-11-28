import React, { Component } from 'react';
import Test from './Test';

const CMC_API = [
  {
    id: 1,
    token_name: 'Bitcoin',
    token_price: 55000,
  },
  {
    id: 2,
    token_name: 'Ethereum',
    token_price: 4200,
  },
  {
    id: 3,
    token_name: 'Binance Coin',
    token_price: 590,
  },
  {
    id: 4,
    token_name: 'Tether',
    token_price: 1,
  },
  {
    id: 5,
    token_name: 'Cordano',
    token_price: 1.4,
  },
];

class App extends Component {
  render() {
    const tableRowComponent = CMC_API.map((item) => <Test key={item.id} token_info={item} />);

    return (
      <div>
        <table border="1">
          <tbody>{tableRowComponent}</tbody>
        </table>
      </div>
    );
  }
}

export default App;


// END OF AudioParamMap.js FIle


import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super();

    this.state = {
      count: props.token_info.token_price,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevAmount) => {
      return {
        count: prevAmount.count - prevAmount.count,
      };
    });
    console.log(this.state.count);
  }

  render() {
    return (
      <tr>
        <td style={{ padding: '1rem' }}>{this.props.token_info.id}.</td>
        <td style={{ padding: '1rem' }}>{this.props.token_info.token_name}.</td>
        <td style={{ padding: '1rem' }}>{this.state.count.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
        <td style={{ padding: '1rem' }}>
          <button onClick={this.handleClick}>Update</button>
        </td>
      </tr>
    );
  }
}

export default Test;
