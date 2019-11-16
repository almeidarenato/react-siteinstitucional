import React, { useContext } from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import { Home, Services, Portfolio, Pricing, Contact } from "./pages";
import { Route, Switch, __RouterContext } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import { useTransition, animated } from "react-spring";

const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" }
  });

  return (
    <React.Fragment>
      <AppHeader />

      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>
        </animated.div>
      ))}
      <AppFooter />
    </React.Fragment>
  );
};

export default App;
