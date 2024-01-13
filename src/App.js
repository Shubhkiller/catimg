import logo from './logo.svg';
import './App.css';

function App() {
  return (
<main>
  <div className="cat-head">
    <div className="cat-ears">
      <div className="cat-left-ear">
        <div className="cat-left-inner-ear" />
      </div>
      <div className="cat-right-ear">
        <div className="cat-right-inner-ear" />
      </div>
    </div>
    <div className="cat-eyes">
      <div className="cat-left-eye">
        <div className="cat-left-inner-eye" />
      </div>
      <div className="cat-right-eye">
        <div className="cat-right-inner-eye" />
      </div>
    </div>
    <div className="cat-nose" />
    <div className="cat-mouth">
      <div className="cat-mouth-line-left" />
      <div className="cat-mouth-line-right" />
    </div>
    <div className="cat-whiskers">
      <div className="cat-whiskers-left">
        <div className="cat-whisker-left-top" />
        <div className="cat-whisker-left-middle" />
        <div className="cat-whisker-left-bottom" />
      </div>
      <div className="cat-whiskers-right">
        <div className="cat-whisker-right-top" />
        <div className="cat-whisker-right-middle" />
        <div className="cat-whisker-right-bottom" />
      </div>
    </div>
  </div>
</main>

  );
}

export default App;
