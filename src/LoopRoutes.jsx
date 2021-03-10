import {Switch, Route} from 'react-router-dom';

import Folders from './components/LoopScreen/index'
import Sort from './components/loop1/Step1/Sort'
import Content from './components/loop1/Step2/Content'

export default  () => (
    <Switch>
      <Route path="/" exact component={Folders} />
      <Route path="/loop1-step1" component={Sort} />
      <Route path="/loop1-step2" component={Content} />
    </Switch>
  )