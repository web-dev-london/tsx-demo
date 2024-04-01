import { useState } from "react"

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {


    const [selectedIndex, setSelectedIndex] = useState(-1)

    const message = items.length === 0 && <p>No item found</p>


    const listItems = items.map((item, index) =>
        <li key={item}
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item)
            }}
        >{item}</li>);



    return (
        <>
            <h1>{heading}</h1>
            {message}
            <ul className="list-group">
                {listItems}
            </ul>
        </>
    )
}

export default ListGroup