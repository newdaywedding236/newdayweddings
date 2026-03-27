export default function WeddingOfficiantWebsite() {
  const services = [
    {
      title: "Christian Ceremonies",
      description:
        "Primarily Christian wedding ceremonies with optional Scripture, prayer, and a meaningful message that honors marriage while fitting the couple’s style.",
    },
    {
      title: "Custom Weddings",
      description:
        "Flexible ceremonies tailored to your story, your values, and the atmosphere you want for your wedding day in the Florida Keys.",
    },
    {
      title: "Elopements & Intimate Gatherings",
      description:
        "Beautiful officiating for beach weddings, waterfront ceremonies, private vow exchanges, and smaller gatherings across Key Largo, Islamorada, and Tavernier.",
    },
  ];

  const steps = [
    "Reach out to check availability and share your wedding date, venue, and ceremony vision.",
    "Choose a ceremony style with the right balance of faith, personalization, vows, readings, and tone.",
    "Receive a clear ceremony plan and confident day-of officiating so everything feels calm, smooth, and memorable.",
  ];

  const pricing = [
    {
      title: "Standard Ceremony",
      price: "$400",
      details:
        "Ideal for simple weddings and intimate ceremonies with a polished, personal officiating experience.",
    },
    {
      title: "Custom Ceremony",
      price: "$450",
      details:
        "Best for weddings needing more customization, added ceremony elements, or more detailed planning.",
    },
  ];

  const faq = [
    {
      question: "What areas do you serve?",
      answer:
        "New Day Weddings serves Key Largo, Islamorada, and Tavernier, offering officiating for local weddings, elopements, and destination ceremonies in the Upper Keys.",
    },
    {
      question: "Are ceremonies strictly Christian?",
      answer:
        "Ceremonies are primarily Christian, but flexible. Couples can choose how much faith content, prayer, Scripture, or traditional structure they want included.",
    },
    {
      question: "What types of weddings do you officiate?",
      answer:
        "Beach weddings, resort ceremonies, private vow exchanges, intimate weddings, vow renewals, and custom ceremonies are all welcome.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-slate-200 blur-3xl" />
          <div className="absolute right-[-8%] top-20 h-72 w-72 rounded-full bg-stone-200 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">
                Florida Keys Wedding Officiant
              </p>
              <h1 className="mt-1 text-xl font-semibold">New Day Weddings</h1>
            </div>
            <div className="hidden gap-6 text-sm md:flex">
              <a href="#services" className="transition hover:opacity-70">Services</a>
              <a href="#pricing" className="transition hover:opacity-70">Pricing</a>
              <a href="#about" className="transition hover:opacity-70">About</a>
              <a href="#faq" className="transition hover:opacity-70">FAQ</a>
              <a href="#contact" className="transition hover:opacity-70">Contact</a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-sm text-slate-600 shadow-sm">
              Flexible ceremonies • Primarily Christian • Serving the Upper Keys
            </p>
            <h2 className="max-w-xl text-4xl font-bold tracking-tight md:text-6xl">
              Meaningful wedding ceremonies for Key Largo, Islamorada, and Tavernier.
<img src="/photo.jpeg" />
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Beach weddings, elopements, and intimate ceremonies in the Florida Keys. New Day Weddings provides warm, personal officiating for couples who want a beautiful ceremony in the Florida Keys. Led by Joseph Danko, ceremonies are flexible in style while remaining primarily Christian for couples who want faith thoughtfully included.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:newdayweddings@icloud.com?subject=Wedding%20Inquiry"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Check Availability
              </a>
              <a
                href="#pricing"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:bg-slate-50"
              >
                View Pricing
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Why Couples Choose New Day Weddings
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl font-bold">Faithful</p>
                  <p className="mt-1 text-sm text-slate-600">Primarily Christian ceremonies with optional Scripture, prayer, and blessing.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl font-bold">Flexible</p>
                  <p className="mt-1 text-sm text-slate-600">Each ceremony is shaped to fit the couple, venue, and desired tone.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl font-bold">Local</p>
                  <p className="mt-1 text-sm text-slate-600">Serving weddings across Key Largo, Islamorada, and Tavernier.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl font-bold">Professional</p>
                  <p className="mt-1 text-sm text-slate-600">Clear communication, dependable preparation, and calm day-of presence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Services</p>
          <h3 className="mt-3 text-3xl font-bold md:text-4xl">Wedding officiating for the Florida Keys</h3>
          <p className="mt-4 text-lg text-slate-600">
            From Christian weddings to flexible custom ceremonies, New Day Weddings helps couples create a ceremony that feels personal, peaceful, and memorable.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="border-y bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Pricing</p>
            <h3 className="mt-3 text-3xl font-bold md:text-4xl">Simple, clear pricing</h3>
            <p className="mt-4 text-lg text-slate-600">
              Wedding officiating services typically range from $400 to $450 depending on ceremony complexity, customization, and location.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pricing.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{item.title}</p>
                <p className="mt-3 text-4xl font-bold">{item.price}</p>
                <p className="mt-4 leading-7 text-slate-600">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">About</p>
            <h3 className="mt-3 text-3xl font-bold md:text-4xl">Meet Joseph Danko</h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Joseph Danko officiates weddings through New Day Weddings for couples seeking a ceremony that is heartfelt, organized, and beautifully presented. His approach is warm and respectful, with the flexibility to offer ceremonies that are primarily Christian while still tailored to each couple’s preferences.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether the setting is a beach, private residence, resort, dockside location, or intimate gathering place in the Upper Keys, the goal is the same: to create a meaningful wedding ceremony that feels authentic and memorable.
<img src="/photo.jpeg" />
            </p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-lg">
            <h4 className="text-xl font-semibold">What couples can expect</h4>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li>• A calm, professional officiant</li>
              <li>• Flexible ceremony structure and tone</li>
              <li>• Primarily Christian options with adjustable faith content</li>
              <li>• Guidance on vows, readings, and ceremony flow</li>
              <li>• Service throughout Key Largo, Islamorada, and Tavernier</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Process</p>
            <h3 className="mt-3 text-3xl font-bold md:text-4xl">Simple, clear, and personal</h3>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="mt-4 leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">FAQ</p>
          <h3 className="mt-3 text-3xl font-bold md:text-4xl">Questions couples often ask</h3>
        </div>

        <div className="mt-10 grid gap-6">
          {faq.map((item) => (
            <div key={item.question} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-xl font-semibold">{item.question}</h4>
              <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Contact</p>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">Let’s talk about your wedding day</h3>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Reach out with your wedding date, venue, and the kind of ceremony you want. New Day Weddings serves Key Largo, Islamorada, and Tavernier, with officiating rates typically ranging from $400 to $450.
              </p>
              <div className="mt-8 space-y-3 text-slate-700">
                <p><span className="font-semibold">Officiant:</span> Joseph Danko</p>
                <p><span className="font-semibold">Preferred Contact:</span> Email at newdayweddings@icloud.com</p>
                <p><span className="font-semibold">Service Area:</span> Key Largo, Islamorada, and Tavernier</p>
                <p><span className="font-semibold">Typical Pricing:</span> $400–$450</p>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <h4 className="text-xl font-semibold">Contact</h4>
              <div className="mt-6">
                <a
                  href="mailto:newdayweddings@icloud.com?subject=Wedding%20Inquiry"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 inline-block"
                >
                  Email to Check Availability
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm">© 2026 New Day Weddings. All rights reserved.</p>
          <p className="text-sm">Wedding officiating by Joseph Danko for the Upper Florida Keys.</p>
        </div>
      </footer>
    </div>
  );
}