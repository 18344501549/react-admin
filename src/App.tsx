import React, { Fragment } from 'react';
import UseroutesIndex from './routers/router';
import './App.scss';

// const files = require.context('./components', true, /\.tsx$/);
// files.keys().map(item => {
//   if (item.includes('./Login') || item.includes('./admin')) { return false; };
//   const splitFilesName = item.split('.');
//   const path = `/admin${splitFilesName[1].toLowerCase()}`;
//   console.log(path, 'path');

// })



function App() {
  return (
    <Fragment>
      {<UseroutesIndex />}
    </Fragment>
  );
}

export default App;
