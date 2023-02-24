function Root() {
  return (
    <div className="Root">
      <header className="py-2">
        <h1 className="heading">7GUIs in React</h1>
      </header>
      <ul className="flex flex-col gap-1">
        <li>
          <a href="/counter" className="link">
            Counter
          </a>
        </li>
        <li>
          <a href="/converter" className="link">
            Temperature Converter
          </a>
        </li>
        <li>
          <a href="/booker" className="link">
            Flight Booker
          </a>
        </li>
        <li>
          <a href="/timer" className="link">
            Timer
          </a>
        </li>
        <li>
          <a href="/crud" className="link">
            CRUD
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Root;
