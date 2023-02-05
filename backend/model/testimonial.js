import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema({
  photo: String,
  name: {
    type: String,
    required: true,
    immutable: true
  },
  designation: String,
  description: String,
  createOn: Date,
  lastUpdate: Date,
  active: Boolean
})

testimonialSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    delete ret._id
  }
})

const Testimonial = mongoose.model('Testimonial', testimonialSchema)

export default Testimonial
