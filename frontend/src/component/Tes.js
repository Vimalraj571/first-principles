import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

const Tes = () => {
  const testimonial = [
    {
      name: "Anna Deynah",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      designation: "CEO",
      cratedOn: 1,
    },
    {
      name: "John Doe",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      designation: "Web Developer",
      cratedOn: 2,
    },
    {
      name: "Photographer",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp",
      designation: "CEO",
      cratedOn: 3,
    },
    {
      name: "Deynah Joe",
      description:
        "Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp",
      designation: "Developer",
      cratedOn: 4,
    },
  ]
  return (
    <section id="testimonials" className="services-area">
      <Carousel showArrows={true} showThumbs={false}>
        {testimonial.map((t) => {
          return (
            <div key={t.cratedOn} style={{ padding: 20, height: 500 }}>
              <div>
                <img
                  className="rounded-circle shadow-1-strong mb-4"
                  src={t.img}
                  alt="avatar"
                  style={{ width: "150px" }}
                />
                <h5 className="mb-3">{t.name}</h5>
                <p>{t.designation}</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2" />
                  {t.description}
                </p>
              </div>
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}

export default Tes
