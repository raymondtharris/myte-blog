import React, { useContext } from 'react';
import { GlobalContext} from '../../context/GlobalContext'
import './MyteFilter.css'


export const MyteFilter = () => {
  //const [filter, setFilter] = useState(0);
  const { togglePosts} = useContext(GlobalContext)

  return (
    <div className="Myte-Filter">
        <button onClick={()=> togglePosts("Code")}>Code</button>
        <button onClick={()=> togglePosts("Music")}>Music</button>
        <button onClick={()=> togglePosts("Fashion")}>Fashion</button>
    </div>
  )
}
