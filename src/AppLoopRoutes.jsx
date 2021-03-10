import {Switch, Route} from 'react-router-dom';

import Folders from './components/LoopScreen/index'

export default () => (
    <Switch>
      <Route path="/" exact component={Folders} />
      {/* <Route path="/loop1-step1" component={Loop1Step1} /> */}
    </Switch>
  )