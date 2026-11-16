import ApplicationCard from './ApplicationCard.jsx'

function ApplicationList({ applications, onDelete }) {
    if (applications.length === 0) {
        return <p>No applications. Add some first.</p>
    }

    return (
        <ul className="application-list">
            {applications.map((application) => (
                <li key={application.id}>
                    <ApplicationCard application={application} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    )
}

export default ApplicationList