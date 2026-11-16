import { Router } from 'express'
import { randomUUID } from 'node:crypto'

const VALID_STATUSES = ['applied', 'interview', 'offer', 'rejected']

let applications = [
    {
        id: '1',
        company: 'Pixel Labs',
        position: 'Junior Frontend Developer',
        status: 'interview',
        appliedAt: '2026-11-03',
        link: 'https://example.com/oferta-1',
    },
    {
        id: '2',
        company: 'CloudNest',
        position: 'Junior React Developer',
        status: 'applied',
        appliedAt: '2026-11-08',
        link: '',
    },
]

function validateApplication(body) {
    const es = [] //errors

    if (typeof body.company !== 'string' || body.company.trim() === '') {
        es.push('company is required')
    }
    if (typeof body.position !== 'string' || body.position.trim() === '') {
        es.push('position is required')
    }
    if (body.status !== undefined && !VALID_STATUSES.includes(body.status)) {
        es.push(`status must be one of: ${VALID_STATUSES.join(', ')}`)
    }

    return es
}

export const applicationsRouter = Router()

applicationsRouter.get('/', (req, res) => {
    res.json(applications)
})

applicationsRouter.get('/:id', (req, res) => {
    const application = applications.find((a) => a.id === req.params.id)

    if (!application) {
        return res.status(404).json({ error: 'Not Found' })
    }

    res.json(application)
})

applicationsRouter.post('/', (req, res) => {
    const body = req.body ?? {}
    const errors = validateApplication(body)

    if (errors.length > 0) {
        return res.status(400).json({ errors })
    }

    const newApplication = {
        id: randomUUID(),
        company: body.company.trim(),
        position: body.position.trim(),
        status: body.status ?? 'applied',
        appliedAt: body.appliedAt ?? new Date().toISOString().slice(0,10),
        link: body.link ?? '',
    }

    applications.push(newApplication)
    res.status(201).json(newApplication)
})

applicationsRouter.patch('/:id', (req, res) => {
    const application = applications.find((a) => a.id === req.params.id)

    if (!application) {
        return res.status(404).json({ error: 'Not Found' })
    }

    const { status } = req.body ?? {}

    if (!VALID_STATUSES.includes(status)) {
        return res.status(400).json({ errors: "Wrong status" })
    }

    application.status = status
    res.json(application)
})

applicationsRouter.delete('/:id', (req, res) => {
    const exists = applications.some((a) => a.id === req.params.id)

    if (!exists) {
        return res.status(404).json({ error: 'Not Found' })
    }

    applications = applications.filter((a) => a.id !== req.params.id)
    res.status(204).end()
})