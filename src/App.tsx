import { Component } from 'solid-js';

const SUBSCRIBE_HREF = "http://localhost:4000/subscribe"; //tmp, this will use some relative url

const App: Component = () => {
  return (
    <div>
      <a href={SUBSCRIBE_HREF} target="_blank">
        subscribe
      </a>
    </div>
  );
};

export default App;
