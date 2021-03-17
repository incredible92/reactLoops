import {Switch, Route} from 'react-router-dom';

import Folders from './components/LoopScreen/index'
import Sort from './components/loop1/Step1/Sort'
import Content from './components/loop1/Step2/Content'
import Toggle from './components/loop1/Step3/Toggle'
import Data from './components/loop1/Step4/Data'
import Design from './components/loop1/Step5/Design'
import Animation from './components/loop1/Step6/Animation'
import Scroll from './components/loop1/Step7/Scroll'
import Search from './components/loop1/Step8/Search'

export default  () => (
    <Switch>
      <Route path="/" exact component={Folders} />
      <Route path="/loop1-step1" component={Sort} />
      <Route path="/loop1-step2" component={Content} />
      <Route path="/loop1-step3" component={Toggle} />
      <Route path="/loop1-step4" component={Data} />
      <Route path="/loop1-step5" component={Design} />
      <Route path="/loop1-step6" component={Animation} />
      <Route path="/loop1-step7" component={Scroll} />
      <Route path="/loop1-step8" component={Search} />
    </Switch>
  )