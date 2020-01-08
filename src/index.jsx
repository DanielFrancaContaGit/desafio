import React from 'react';
import ReactDOM from 'react-dom';
import { ComponetsMontados} from './view';

function App(){
    return(
        <section>
            <ComponetsMontados />
            <div>Oi mundo</div>
        </section> 
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));