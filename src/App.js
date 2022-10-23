import {Component}from 'react'
import Counter from './components/udemy/counter'
import Indecision from './components/udemy/Indecision'
import Visibility from './components/udemy/visibility'
class App extends Component {
    render(){
        return(
            <div>
                Hello World!
                <Indecision/>
                <Counter/>
                <Visibility/>
            </div>
        )
    }
}

export default App