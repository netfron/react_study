const title = 'My First React Element';
const desc = 'This is Description';
const myTitleId = 'main-title';
const name = 'ldk';
 
const header = (
  <header>
    <h1 id={myTitleId}>{name}'s {title}</h1>
    <p className="main-desc">{desc}</p>
  </header>
);
 
console.log(header);
 
ReactDOM.render(header, document.getElementById('root'));