import express from 'express'
import Testimonial from '../model/testimonial.js'

const testimonialRouter = express.Router()

// GET    All Testimonial
// GET    Single Testimonial
// POST   Create A Testimonial
// DELETE Delete A Testimonial
// PUT    Update A Testimonial

testimonialRouter.get('/', async (request, response) => {
  const testimonials = await Testimonial.find({active:true})
  response.json(testimonials)
})

testimonialRouter.get('/:id', async (request, response) => {
  const testimonial = await Testimonial.findById(request.params.id)
  if (testimonial) {
    response.json(testimonial.toJSON())
  } else {
    response.status(404).end()
  }
})

testimonialRouter.post('/', async (request, response) => {
  const { body } = request
  const newTestimonial = { ...body, createOn: new Date(), lastUpdate: new Date(), active: true }
  const testimonial = new Testimonial(newTestimonial)
  const savedTestimonial = await testimonial.save()
  response.status(201).json(savedTestimonial)
})

testimonialRouter.delete('/:id', async (request, response) => {
  const testimonial = await Testimonial.findById(request.params.id)

  if (!testimonial) {
    return response.status(404).json({ error: 'invalid testimonial' })
  }
  const updatedTestimonial = await Testimonial.findByIdAndUpdate(request.params.id, { active: false }, {
    new: true,
    runValidators: true,
    context: 'query'
  })
  response.status(200).json(updatedTestimonial)
})

testimonialRouter.put('/:id', async (request, response) => {
  const updateTestimonial = { ...request.body, lastUpdate: new Date() }
  const updatedTestimonial = await Testimonial.findByIdAndUpdate(request.params.id, updateTestimonial, {
    new: true,
    runValidators: true,
    context: 'query'
  })
  response.status(200).json(updatedTestimonial)
})

export default testimonialRouter
