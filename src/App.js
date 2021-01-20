import styled from "styled-components";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyle from "./Global/reset";
import { Welcome } from "./Pages/welcome";
import { Homepage } from "./Pages/homepage";
import { Projects } from "./Pages/projects";
import { Skillset } from "./Pages/skillset";
import { Resume } from "./Pages/resume";

function App() {
  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <Switch>
          <Route path="/homepage" component={Homepage} />
          <Route path="/projects" component={Projects} />
          <Route path="/skillset" component={Skillset} />
          <Route path="/resume" component={Resume} />
          <Route path="/" component={Welcome} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  width: 100%;
  /* max-height: 100vh; */
`;

export default App;
