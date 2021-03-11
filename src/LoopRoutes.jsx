import {Switch, Route} from 'react-router-dom';

import Folders from './components/LoopScreen/index'
import Sort from './components/loop1/Step1/Sort'
import Content from './components/loop1/Step2/Content'
import Toggle from './components/loop1/Step3/Toggle'
import Data from './components/loop1/Step4/Data'

export default  () => (
    <Switch>
      <Route path="/" exact component={Folders} />
      <Route path="/loop1-step1" component={Sort} />
      <Route path="/loop1-step2" component={Content} />
      <Route path="/loop1-step3" component={Toggle} />
      <Route path="/loop1-step4" component={Data} />
    </Switch>
  )