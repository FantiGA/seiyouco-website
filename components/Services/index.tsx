"use client";

type Service = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    id: 1,
    icon: "bi bi-activity",
    title: "Nesciunt Mete",
    description:
      "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
  },
  {
    id: 2,
    icon: "bi bi-broadcast",
    title: "Eosle Commodi",
    description:
      "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
  },
  {
    id: 3,
    icon: "bi bi-easel",
    title: "Ledo Markt",
    description:
      "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
  },
  {
    id: 4,
    icon: "bi bi-bounding-box-circles",
    title: "Asperiores Commodit",
    description:
      "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
  },
  {
    id: 5,
    icon: "bi bi-calendar4-week",
    title: "Velit Doloremque",
    description:
      "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
  },
  {
    id: 6,
    icon: "bi bi-chat-square-text",
    title: "Dolori Architecto",
    description:
      "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={service.id * 100}
            >
              <div className="text-4xl text-primary mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">
                <a
                  href="#"
                  className="text-dark hover:text-primary transition-colors"
                >
                  {service.title}
                </a>
              </h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
