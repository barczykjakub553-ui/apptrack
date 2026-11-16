import { useState } from 'react'
import { STATUS_LABELS } from '../constants/status'

function getToday() {
    return new Date().toISOString().slice(0,10)
}

function createEmptyForm() {
    return {
        company: '',
        position: '',
        status: 'applied',
        appliedAt: getToday(),
        link: '',
    }
}

function ApplicationForm({ onAdd }) {
    const [formData, setFormData] = useState(createEmptyForm)
    const [error, setError] = useState('')

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) =>  ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        const company = formData.company.trim()
        const position = formData.position.trim()

        if (!company || !position) {
            setError('Company and position are required')
            return
        }

        onAdd({ ...formData, company, position})
        setFormData(createEmptyForm())
        setError('')
    }

    return (
        <form className="application-form" onSubmit={handleSubmit}>
            <h2>Add application</h2>

            <div>
                <label htmlFor="company">Company</label>
                <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="position">Position</label>
                <input
                    id="position"
                    name="position"
                    type="text"
                    value={formData.position}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    {Object.entries(STATUS_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="appliedAt">Application date</label>
                <input
                    id="appliedAt"
                    name="appliedAt"
                    type="date"
                    value={formData.appliedAt}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="link">Job offer link</label>
                <input
                    id="link"
                    name="link"
                    type="url"
                    placeholder="https://..."
                    value={formData.link}
                    onChange={handleChange}
                />
            </div>

            {error && <p role="alert">{error}</p>}

            <button type="submit">Add application</button>
        </form>
    )
}

export default ApplicationForm