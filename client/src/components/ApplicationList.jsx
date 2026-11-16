import ApplicationCard from './ApplicationCard.jsx'

function ApplicationList({ applications }) {
    if (applications.length === 0) {
        return <p>No applications. Add some first.</p>
    }

    return (
        <ul className="application-list">
            {applications.map((application) => (
                <li key={application.id}>
                    <ApplicationCard application={application} />
                </li>
            ))}
        </ul>
    )
}

export default ApplicationList