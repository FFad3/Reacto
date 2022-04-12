function TableRow(props)
{
    const p = props.person;
    return(
        <div className="TableRow">
            <div className="AgeCol">{p.dob.age}</div>
            <div className="PictureCol"><img src={p.picture.medium}/></div>
            <div className="NameCol">{p.name.first}</div>
            <div className="LastNCol">{p.name.last}</div>
            <div className="EmailCol">{p.email}</div>
            <div className="PhoneCol">{p.cell}</div>
        </div>
    );
}
export default TableRow;