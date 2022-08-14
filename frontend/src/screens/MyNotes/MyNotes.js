import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card, useAccordionButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'
// import notes from '../../data/notes';
import axios from "axios";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <div
            type="button"
            onClick={decoratedOnClick}
        >
            {children}
        </div>
    );
}


const MyNotes = () => {
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const data = await axios.get('/api/notes')
        setNotes(data?.data);
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    const deleteHandler = id => {
        if (window.confirm('Are you sure?')) {
            console.log('Delete', id);
        }
    }

    return <MainScreen title="Welcome back Kuldeep">
        <Link to="createnote">
            <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                Create New Note
            </Button>
        </Link>
        {
            notes?.map((note) => (
                <Accordion defaultActiveKey="0" key={note._id}>
                    <Card>
                        <Card.Header style={{ display: "flex" }}>
                            <span style={{ color: "black", textDecoration: "none", flex: 1, cursor: "pointer", alignSelf: "center", fontSize: 18 }}>

                                <CustomToggle eventKey={note._id}>{note.title}</CustomToggle>
                                {/* <Accordion.Toggle
                                    as={Card.Text}
                                    variant="link"
                                    eventKey="0"
                                >
                                    {note.title}
                                </Accordion.Toggle> */}
                            </span>
                            <div>
                                <Button>
                                    <Link to={`/note/${note._id}`}>
                                        Edit
                                    </Link>
                                </Button>
                                <Button variant="danger" className="mx-2" onClick={() => deleteHandler(note._id)}>Delete</Button>
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey={note._id}>
                            <Card.Body>
                                <h4>
                                    <Badge pill bg="info">
                                        Category - {note.category}
                                    </Badge>
                                </h4>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {note.content}
                                    </p>
                                    <footer className="blockquote-footer">
                                        {note.createdAt}
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            ))
        }
    </MainScreen >
}

export default MyNotes
