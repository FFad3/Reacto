import Table from "./Table";
import UserCount from "./UserCount";
import {useState,useEffect} from 'react';
import axios from 'axios';

function View()
{
    const [amount,setAmount] = useState(1);
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get(`https://randomuser.me/api/?results=${amount}`).then(
            (result) => {return setData(result.data.results)
        })
    }, [amount])

    return(
        <div className="View">
            <UserCount amount={amount} setAmount={setAmount}/>
            <Table data={data}/>
        </div>
    );
}


export default View;