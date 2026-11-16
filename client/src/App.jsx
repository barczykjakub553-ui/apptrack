import ApplicationList from './components/ApplicationList'
import { mockApplications} from "./data/mockApplication.js";
import './App.css'
import {useState} from "react";
import ApplicationForm from "./components/ApplicationForm.jsx";

function App() {
    const [applications, setApplications] = useState(mockApplications);

    function handleAddApplication(newApplication) {
        const applicationWithId = { ...newApplication, id: crypto.randomUUID()}
        setApplications((prev) => [applicationWithId, ...prev])
    }

    const totalCount = applications.length;
    const interviewCount = applications.filter(
        (application) => application.status === 'interview',
    ).length;
    const offerCount = applications.filter(
        (application) => application.status === 'offer',
    ).length;

    return (
        <main>
            <header>
                <h1>AppTrack</h1>
                <p>All applications in one-place.</p>
            </header>

            <p>
                All: {totalCount} - Interview: {interviewCount} - Offer: {offerCount}
            </p>
            <ApplicationForm onAdd={handleAddApplication} />
            <ApplicationList applications={applications} />
        </main>
    )
}

export default App;