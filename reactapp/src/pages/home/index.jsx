import './styles.css';
import {Card} from '../../components/Card';
export function Home(){
    return(
        <div className='container'>
            <h1>Presence </h1>
            <input type="text" placeholder="Insert name.." />
            <button type="button">Add</button>

            <Card name="Rodrigo" time="10:34:23"/>
            <Card name='Joao' time='11:24:23'/>
            
        </div>
    )
} ;