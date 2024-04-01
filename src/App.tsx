
import Alert from './components/Alert';
import ListGroup from './components/ListGroup'

function App() {
    const items = [
        'London',
        'Manchester',
        'New York',
        'Paris',
        'Germany',
    ]

    function handleSelecItem(item: string) {
        console.log(item);
    }

    return (
        <>
            <ListGroup onSelectItem={handleSelecItem}
                items={items}
                heading='Cities' />
            <Alert>
                Hello <span>World!</span>
            </Alert>
        </>
    )
}

export default App
