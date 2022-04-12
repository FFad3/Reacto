
function UserCount(props)
{
    return(
        <div className='InputContainer'>
            <div>Get: {props.amount} Users</div>
            <button onClick={()=>props.setAmount(1)} >1</button>
            <button onClick={()=>props.setAmount(props.amount+1)} >+1</button>
            <button onClick={()=>props.setAmount(props.amount+5)} >+5</button>
            <button onClick={()=>props.setAmount(props.amount+10)}>+10</button>
        </div>
    );

}
export default UserCount;