import express from 'express'
import Testimonial from '../model/testimonial.js'

const testimonialRouter = express.Router()

// GET    All Testimonial
// GET    Single Testimonial
// POST   Create A Testimonial
// DELETE Delete A Testimonial
// PUT    Update A Testimonial

// Data Model
// const testimonial = [
//   {
//     name: "Anna Deynah",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
//     img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
//     designation: "CEO",
//     cratedOn: 1,
//   },
//   {
//     name: "John Doe",
//     description:
//       "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
//     img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
//     designation: "Web Developer",
//     cratedOn: 2,
//   },
//   {
//     name: "Photographer",
//     description:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti",
//     img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp",
//     designation: "CEO",
//     cratedOn: 3,
//   },
//   {
//     name: "Deynah Joe",
//     description:
//       "Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.",
//     img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp",
//     designation: "Developer",
//     cratedOn: 4,
//   },
// ]

testimonialRouter.get('/', async (request, response) => {
  const testimonials = await Testimonial.find({})
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
