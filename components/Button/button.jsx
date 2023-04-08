
import {FaSistrix} from 'react-icons/fa'
const button = (props) => {
    return (
        <>
            <button className="p-2 m-4 border-2 rounded-md shadow-4xl shadow-black mx-auto" onClick={props.onClick}> 
                <FaSistrix size={25} color='white'/> 
            </button>
        </>
    )
}

export default button