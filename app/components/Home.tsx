import React from 'react';

// import styles from './Home.css';
import Shell from './Shell';

export default function Home() {
  // React.useEffect(() => {
  //   globalShortcut.register('CommandOrControl+X', () => {
  //     console.log('CommandOrControl+F is pressed');
  //   });
  // }, []);
  return (
    <div data-tid="container">
      {/* <h2>Home</h2> */}
      {/* <Link to={routes.COUNTER}>to Counter</Link> */}
      <Shell />
    </div>
  );
}
