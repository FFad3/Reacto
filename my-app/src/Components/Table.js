import TableRow from "./TableRow";

function Table(props)
{
    return(
        <div className="Table">
            <div className="TableRow">
                <div className="AgeCol">Age</div>
                <div className="PictureCol">Picture</div>
                <div className="NameCol">First name</div>
                <div className="LastNCol">Last name</div>
                <div className="EmailCol">Email</div>
                <div className="PhoneCol">Cell phone</div>
            </div>
            <Rows data={props.data}/>
        </div>
    );
}
function Rows(props)
{
    const data = props.data
    console.log(data);

    const items = [];

    data.forEach(element => {
        items.push(<TableRow person={element}/>);
    });

    return(
        items
    );
}

export default Table;