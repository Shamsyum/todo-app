import {useDispatch, useSelector} from 'react-redux';
import {filterChanged} from '../store/filterSlice';



const Filters = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filterReducer.status);

    const allColor = filter === 'All' ? 'white' : 'black';
    const allbgColor = filter === 'All' ? 'gray' : 'white';
    
    const activeColor = filter === 'Active' ? 'white' : 'black';
    const activeBgColor = filter === 'Active' ? 'gray' : 'white';

    const completedColor = filter === 'Completed' ? 'white' : 'black';
    const completedBgColor = filter === 'Completed' ? 'gray' : 'white';

    return(
        <div> 
            <div> {"Show: "}  
                <button
                    style={{backgroundColor: allbgColor, color: allColor, marginRight: "4px"}}
                    onClick={()=>dispatch(filterChanged("All"))}
                    >All</button>
                
                <button
                 style={{backgroundColor: activeBgColor, color: activeColor, marginRight: "4px"}}
                onClick={()=>dispatch(filterChanged("Active"))}
                >Active</button>
                
                <button 
                 style={{backgroundColor: completedBgColor, color: completedColor, marginRight: "4px"}}
                onClick={()=>dispatch(filterChanged("Completed"))}
                >Completed</button>
            </div>
        </div>
    );
}

export default Filters;