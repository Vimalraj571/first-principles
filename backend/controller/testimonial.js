import express from 'express'

const testimonialRouter = express.Router()

// GET    All Testimonial
// GET    Single Testimonial
// POST   Create A Testimonial
// DELETE Delete A Testimonial
// PUT    Update A Testimonial

testimonialRouter.get('/', async (request, response) => {
  response.send("GET ALL")
})

testimonialRouter.get('/:id', async (request, response) => {
  response.send("GET")
})

testimonialRouter.post('/', async (request, response) => {
  response.send("POST")
})

testimonialRouter.delete('/:id', async (request, response) => {
  response.send("DELETE")
})

testimonialRouter.put('/:id', async (request, response) => {
  response.send("PUT")
})

export default testimonialRouter
