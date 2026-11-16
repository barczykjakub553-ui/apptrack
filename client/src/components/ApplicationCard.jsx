import { STATUS_LABELS } from '../constants/status'

function formatDate(isoDate) {
    return new Date(isoDate).toLocaleDateString('pl-PL')
}

function ApplicationCard({ application, onDelete }) {
    const { id, company, position, status, appliedAt, link } = application

    //web app principles - article, (dostepnosc i wyszukiwarki rozumieja strukture ekranu)
    return (
        <article className="application-card">
            <h2>{company}</h2>
            <p>{position}</p>
            <p>
                Status: {STATUS_LABELS[status]}
            </p>
            <p>Application Date: {formatDate(appliedAt)}</p>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    View job offer
                </a>
            )}
            <button type="button" onClick = {() => onDelete(id)}>
                Delete
            </button>
        </article>
    )
}

export default ApplicationCard