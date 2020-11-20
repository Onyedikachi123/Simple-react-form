import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="form-details">
        <form action="/action_page.php">
          <div className="container">
            <h1>Form</h1>
            <p>Please fill in this form to continue</p>
            <hr />
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              id="name"
              required
            />
            <label htmlFor="name">
              <b>Title</b>
            </label>
            <select id="country" name="country">
              <option value="australia">Mr</option>
              <option value="canada">Mrs</option>
              <option value="usa">Miss</option>
              <option value="usa">Others</option>
            </select>
            <label htmlFor="name">
              <b>Type</b>
            </label>
            <input
              type="text"
              placeholder="Enter Type"
              name="type"
              id="name"
              required
            />
            <label htmlFor="name">
              <b>Path</b>
            </label>
            <input
              type="text"
              placeholder="Enter Path"
              name="path"
              id="name"
              required
            />
            <hr />
            <button type="submit" className="registerbtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
