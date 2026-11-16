import ApplicationList from './components/ApplicationList'
import { mockApplications} from "./data/mockApplication.js";
import './App.css'

function App() {
    const applications = mockApplications;

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

            <ApplicationList applications={applications} />
        </main>
    )
}

export default App;