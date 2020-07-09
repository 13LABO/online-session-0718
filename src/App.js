import React, { useEffect , useState } from "react";
import "./App.css";
import * as contentful from "contentful";
import ApiKey from "./constants/contentful";
import Session0718 from "../src/pages/session0718";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App =()=>{
  const client = contentful.createClient(ApiKey)
  const [companies, setCompanies] = useState([])
  useEffect(() => {
    client
      .getEntries({
        order: '-sys.createdAt',
        'sys.contentType.sys.id': 'companies0718'
      })
      .then((res) => setCompanies(res.items))
      // .catch((e) => rollbar.error(`couldn't get from contentful1: ${e}`))
  })
  return(
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={() => <Session0718 data={companies}/>}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;