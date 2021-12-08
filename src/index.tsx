import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {
  mergeStyles,
  initializeIcons,
  loadTheme,
} from 'office-ui-fabric-react';
import * as serviceWorker from './serviceWorker';
import { navigatorTheme } from './theme/theme';
import { NeutralColors } from '@uifabric/fluent-theme';
import 'office-ui-fabric-react/dist/css/fabric.css';

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#root)': {
      margin: 0,
      padding: 0,
      height: '100vh',
      backgroundColor: NeutralColors.gray10,
    },
  },
});

loadTheme(navigatorTheme);
initializeIcons();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
