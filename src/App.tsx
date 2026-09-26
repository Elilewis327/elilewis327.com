function App() {
  return (
    <main>
      <header className="panel title-panel">
        <h1>Elilewis327.com</h1>
        <h3>Software Engineer |</h3>
        <h3>Writing Scalable Cybersecurity Solutions For The AI Era</h3>
      </header>

      <section className="panel body-panel">
        <h2>About Me</h2>
        <p>
          I am a Full-Stack Software Engineer working at Barracuda Networks.
          <br /> I am passionate about creating functional and effective
          products and scaling them up with the demands of a growing user base.
          I love solving problems and creating cool stuff, both with and without
          the help of generative language models. <br />
        </p>
      </section>
      <section className="panel body-panel">
        <h2>Projects</h2>
        <h3>[Professional] API Gateway and MCP Server</h3>
        <p>
          A service providing users streamlined integration possibilities.
          <br />
          Tech Stack:
          <ul>
            <li>Go</li>
            <li>GraphQL</li>
            <li>OpenAPI / OGEN</li>
            <li>Kubernetes</li>
          </ul>
        </p>
        <h3>[Professional] Identity and Access Management</h3>
        <p>
          Experience implementing cloud-native security solutions, with specific
          experience in the following technologies:
          <ul>
            <li>OpenFGA</li>
            <li>JWT Token Infrastructure</li>
            <li>Kubernetes Secret Management</li>
          </ul>
        </p>
        <h3>[Personal] [In Progress] ASimpleHarness</h3>
        <p>
          A tuneable Go TUI for interacting with LLMs and more. <br />
          Tech Stack:
          <ul>
            <li>Go</li>
            <li>Tcell</li>
          </ul>
        </p>
      </section>
      <section className="panel body-panel">
        <h2>Interesting Papers & Projects</h2>
        <p>This is just a list of papers and projects that I think are cool</p>
        <ul>
          <li>
            <a href="https://storage.googleapis.com/gweb-research2023-media/pubtools/5068.pdf">
              Zanzibar Auth
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/pdf/2104.02835">MAGIS-100</a>
          </li>
          <li>
            <a href="https://github.com/nickjvandyke/opencode.nvim">
              opencode.nvim
            </a>
          </li>
          <li>
            <a href="https://github.com/nvim-neo-tree/neo-tree.nvim">
              neo-tree.nvim
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
