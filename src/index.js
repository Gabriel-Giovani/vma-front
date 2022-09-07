import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import language from 'antd/lib/locale-provider/pt_BR';
import moment from 'moment';
import Routes from './pages/routes';
import { ConfigProvider } from 'antd';
import GlobalStyle from './styles/globalStyle';

moment.locale('pt-BR');

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ConfigProvider locale={language}>
        <GlobalStyle/>
        <Routes />
      </ConfigProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));