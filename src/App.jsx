import { useState } from "react";

const cakes = [
  {
    title: "Elegant Celebration",
    category: "Custom Cakes",
    image: "/images/cake-1.jpg",
  },
  {
    title: "Strawberry Dream",
    category: "Signature Cakes",
    image: "/images/cake-2.jpg",
  },
  {
    title: "Luxury Cupcakes",
    category: "Cupcakes",
    image: "/images/cake-3.jpg",
  },
  {
    title: "Sweet Celebration",
    category: "Custom Treats",
    image: "/images/cake-4.jpg",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fff8f0] text-[#4a2c2a]">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-[#ead9ca]/80 bg-[#fff8f0]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* LOGO */}
          <a
            href="#home"
            className="group shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <h2 className="font-serif text-2xl font-bold tracking-tight transition group-hover:text-[#b76e79]">
              Midnight Whisking
            </h2>

            <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#b76e79]">
              Custom Cakes & Treats
            </p>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-7 xl:flex">
            {[
              ["About Me", "#about"],
              ["Cakes", "#cakes"],
              ["Amenities", "#amenities"],
              ["$25–$$$", "#pricelist"],
              ["Opening Hours", "#opening_hours"],
              ["Contact Us", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative py-2 text-sm font-medium text-[#4a2c2a] transition hover:text-[#b76e79]"
              >
                {label}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#b76e79] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* PHONE CTA */}
          <a
            href="tel:+17022042467"
            className="hidden items-center gap-2 rounded-full bg-[#4a2c2a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4a2c2a]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#633c38] xl:flex"
          >
            <span>☎</span>
            <span>Call Now</span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ead9ca] bg-white text-xl text-[#4a2c2a] transition hover:bg-[#f3e4d6] xl:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden border-t border-[#ead9ca] bg-[#fff8f0] transition-all duration-300 xl:hidden ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto max-w-7xl px-5 py-5">
            <div className="flex flex-col">
              {[
                ["About Me", "#about"],
                ["Cakes", "#cakes"],
                ["Amenities", "#amenities"],
                ["$25–$$$", "#pricelist"],
                ["Opening Hours", "#opening_hours"],
                ["Contact Us", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#ead9ca] py-4 text-base font-medium text-[#4a2c2a] transition hover:pl-2 hover:text-[#b76e79]"
                >
                  {label}
                </a>
              ))}

              <a
                href="tel:+17022042467"
                onClick={() => setMenuOpen(false)}
                className="mt-5 rounded-full bg-[#b76e79] px-6 py-4 text-center font-semibold text-white shadow-lg shadow-[#b76e79]/20 transition hover:bg-[#a85f6b]"
              >
                ☎ Call (702) 204-2467
              </a>
            </div>
          </nav>
        </div>
      </header>
      {/* HERO */}
      <section id="home" className="overflow-hidden pt-18">
        {" "}
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#d8bda9] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#b76e79]">
              ✦ Handcrafted in Las Vegas
            </div>

            <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Beautiful cakes.
              <span className="block text-[#b76e79]">
                Unforgettable moments.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#765957]">
              Handcrafted custom cakes, cupcakes, cookies, and sweet treats made
              specially for your celebrations in Las Vegas and Henderson.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#b76e79] px-8 py-4 text-center font-semibold text-white shadow-xl shadow-[#b76e79]/20 transition hover:-translate-y-1"
              >
                Start Your Custom Order
              </a>

              <a
                href="#cakes"
                className="rounded-full border border-[#c9a66b] px-8 py-4 text-center font-semibold transition hover:bg-[#f3e4d6]"
              >
                Explore Our Cakes
              </a>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#765957]">
              <span>✓ Custom designs</span>
              <span>✓ Freshly baked</span>
              <span>✓ Las Vegas & Henderson</span>
            </div>

            <div className="mt-10 flex gap-8 border-t border-[#e3cfc0] pt-7">
              <div>
                <p className="font-serif text-2xl font-bold">100%</p>
                <p className="text-xs uppercase tracking-wider text-[#8c706b]">
                  Handmade
                </p>
              </div>

              <div className="h-10 w-px bg-[#ddc8b8]" />

              <div>
                <p className="font-serif text-2xl font-bold">Custom</p>
                <p className="text-xs uppercase tracking-wider text-[#8c706b]">
                  Designed For You
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE PLACEHOLDER */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#e8d5c4] blur-3xl" />

            <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-[#dcb3b8] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-[#ead9ca] shadow-2xl">
              <img
                src="/images/hero-cake.jpg"
                alt="Beautiful custom cake"
                className="aspect-[4/5] h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#4a2c2a]/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-6 py-4 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#b76e79]">
                Sweetly crafted
              </p>

              <p className="mt-1 font-serif text-lg font-bold">
                Just for you ♡
              </p>
            </div>

            <div className="absolute -right-4 top-10 hidden rounded-2xl bg-white px-5 py-4 shadow-xl sm:block">
              <p className="text-2xl">✦</p>

              <p className="text-xs font-semibold text-[#765957]">
                Custom creations
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <section id="about" className="bg-[#f3e4d6] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="flex aspect-square items-center justify-center rounded-[2rem] bg-[#d7b9a5]">
            <div className="text-center">
              <div className="text-7xl">🤎</div>
              <p className="mt-5 font-serif text-3xl font-bold">
                Baked with heart
              </p>
              <p className="mt-2 text-[#765957]">
                One sweet creation at a time.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b76e79]">
              Meet Midnight Whisking
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Because the best memories deserve something sweet.
            </h2>

            <p className="mt-6 leading-8 text-[#765957]">
              Midnight Whisking creates custom cakes and treats designed around
              your special moments. Every order is made with creativity, care
              and attention to the details that make your celebration yours.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-[#4a2c2a] px-7 py-4 font-semibold text-white transition hover:bg-[#633c38]"
            >
              Let's Create Something Sweet
            </a>
          </div>
        </div>
      </section>
      {/* CAKES */}
      <section id="cakes" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b76e79]">
              Our Specialties
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
              Sweet creations for every occasion
            </h2>

            <p className="mt-5 leading-7 text-[#765957]">
              From elegant wedding cakes to fun birthday treats, every creation
              is made with care and a little extra sweetness.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cakes.map((cake) => (
              <article
                key={cake.title}
                className="group overflow-hidden rounded-[1.5rem] border border-[#ead9ca] bg-[#fff8f0] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#ead9ca]">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.innerHTML =
                        '<div class="flex h-full items-center justify-center text-6xl">🍰</div>';
                    }}
                  />
                </div>

                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#b76e79]">
                    {cake.category}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-bold">
                    {cake.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section className="bg-[#fff8f0] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b76e79]">
              Simple & Sweet
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
              How it works
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              [
                "01",
                "Share Your Vision",
                "Tell us about your celebration, colors, flavors and dream cake.",
              ],
              [
                "02",
                "We Create",
                "We bring your ideas to life with attention to every delicious detail.",
              ],
              [
                "03",
                "Make It Sweet",
                "Pick up your custom creation and make your celebration memorable.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-[#e7d4c5] bg-white p-8"
              >
                <span className="font-serif text-5xl font-bold text-[#dcb3b8]">
                  {number}
                </span>

                <h3 className="mt-5 font-serif text-2xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-[#765957]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* AMENITIES */}
      <section id="amenities" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b76e79]">
              Why Choose Us
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
              Made for your sweetest moments
            </h2>

            <p className="mt-5 leading-7 text-[#765957]">
              From the first idea to the final bite, we make ordering your
              custom treats simple, personal, and delicious.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🎂",
                title: "Custom Cakes",
                text: "Personalized cakes designed around your celebration, style, and theme.",
              },
              {
                icon: "🧁",
                title: "Cupcakes & Treats",
                text: "Beautiful cupcakes and sweet treats perfect for parties and special occasions.",
              },
              {
                icon: "✨",
                title: "Made With Care",
                text: "Every creation receives careful attention to flavor, design, and presentation.",
              },
              {
                icon: "📍",
                title: "Local Service",
                text: "Proudly serving customers throughout Las Vegas and Henderson.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[1.5rem] border border-[#ead9ca] bg-[#fff8f0] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3e4d6] text-2xl transition group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-6 font-serif text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#765957]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PRICELIST */}
      <section id="pricelist" className="bg-[#f3e4d6] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b76e79]">
              Price Guide
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
              Something sweet for every celebration
            </h2>

            <p className="mt-5 leading-7 text-[#765957]">
              Starting prices are shown below. Custom designs, flavors, sizes,
              and decorations may affect the final price.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* CUPCAKES */}
            <div className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl">🧁</div>

              <p className="mt-6 text-sm font-bold uppercase tracking-wider text-[#b76e79]">
                Sweet Treats
              </p>

              <h3 className="mt-2 font-serif text-3xl font-bold">Cupcakes</h3>

              <div className="my-6 h-px bg-[#ead9ca]" />

              <p className="font-serif text-3xl font-bold text-[#4a2c2a]">
                From $25
              </p>

              <p className="mt-4 leading-7 text-[#765957]">
                Deliciously decorated cupcakes for birthdays, celebrations,
                parties, and everyday sweet cravings.
              </p>
            </div>

            {/* CUSTOM CAKES */}
            <div className="relative rounded-[2rem] bg-[#4a2c2a] p-8 text-white shadow-xl transition hover:-translate-y-2">
              <div className="absolute right-6 top-6 rounded-full bg-[#dcb3b8] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#4a2c2a]">
                Popular
              </div>

              <div className="text-5xl">🎂</div>

              <p className="mt-6 text-sm font-bold uppercase tracking-wider text-[#dcb3b8]">
                Signature
              </p>

              <h3 className="mt-2 font-serif text-3xl font-bold">
                Custom Cakes
              </h3>

              <div className="my-6 h-px bg-[#6a4641]" />

              <p className="font-serif text-3xl font-bold">From $50</p>

              <p className="mt-4 leading-7 text-[#ead9ca]">
                Custom-designed cakes created around your theme, colors,
                flavors, and celebration.
              </p>
            </div>

            {/* PREMIUM */}
            <div className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl">✨</div>

              <p className="mt-6 text-sm font-bold uppercase tracking-wider text-[#b76e79]">
                Special Events
              </p>

              <h3 className="mt-2 font-serif text-3xl font-bold">
                Luxury Creations
              </h3>

              <div className="my-6 h-px bg-[#ead9ca]" />

              <p className="font-serif text-3xl font-bold text-[#4a2c2a]">
                From $$$
              </p>

              <p className="mt-4 leading-7 text-[#765957]">
                Elaborate custom creations for weddings, milestone celebrations,
                and unforgettable events.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-[#765957]">
              Looking for something specific?
            </p>

            <a
              href="#contact"
              className="mt-3 inline-flex rounded-full bg-[#b76e79] px-7 py-3 font-semibold text-white transition hover:-translate-y-1"
            >
              Ask About Your Order
            </a>
          </div>
        </div>
      </section>
      ~{/* OPENING HOURS */}
      <section id="opening_hours" className="bg-[#fff8f0] py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <div className="grid lg:grid-cols-2">
              {/* LEFT */}
              <div className="bg-[#4a2c2a] p-10 text-white sm:p-14">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#dcb3b8]">
                  Visit & Order
                </p>

                <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
                  Opening Hours
                </h2>

                <p className="mt-6 leading-7 text-[#ead9ca]">
                  Planning a celebration? Get in touch with Midnight Whisking to
                  discuss your custom cake or sweet treat.
                </p>

                <a
                  href="tel:+17022042467"
                  className="mt-8 inline-flex rounded-full bg-[#dcb3b8] px-7 py-4 font-semibold text-[#4a2c2a] transition hover:-translate-y-1"
                >
                  (702) 204-2467
                </a>
              </div>

              {/* RIGHT */}
              <div className="p-10 sm:p-14">
                <div className="space-y-5">
                  {[
                    ["Monday", "By Appointment"],
                    ["Tuesday", "By Appointment"],
                    ["Wednesday", "By Appointment"],
                    ["Thursday", "By Appointment"],
                    ["Friday", "By Appointment"],
                    ["Saturday", "By Appointment"],
                    ["Sunday", "Closed"],
                  ].map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex items-center justify-between border-b border-[#ead9ca] pb-4"
                    >
                      <span className="font-semibold text-[#4a2c2a]">
                        {day}
                      </span>

                      <span className="text-sm text-[#765957]">{hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-[#f3e4d6] p-5">
                  <p className="text-sm font-semibold text-[#4a2c2a]">
                    ✦ Custom orders
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#765957]">
                    Please contact us ahead of time to discuss availability and
                    your custom order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* GALLERY */}
      <section id="gallery" className="bg-[#4a2c2a] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#dcb3b8]">
            From Our Kitchen
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
            A little gallery of sweetness
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "gallery-1.jpg",
              "gallery-2.jpg",
              "gallery-3.jpg",
              "gallery-4.jpg",
              "cake-1.jpg",
              "cake-2.jpg",
              "cake-3.jpg",
              "cake-4.jpg",
            ].map((image, index) => (
              <div
                key={image}
                className="group aspect-square overflow-hidden rounded-3xl bg-[#6a4641]"
              >
                <img
                  src={`/images/${image}`}
                  alt={`Midnight Whisking cake creation ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* TESTIMONIAL */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="text-3xl text-[#c9a66b]">★★★★★</div>

          <blockquote className="mt-7 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            “The cake was absolutely beautiful and tasted even better than it
            looked. Every detail was perfect!”
          </blockquote>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#b76e79]">
            Happy Customer
          </p>
        </div>
      </section>
      {/* CTA */}
      <section id="contact" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#dcb3b8] px-7 py-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6a4641]">
            Your celebration starts here
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-bold sm:text-5xl">
            Let's create something sweet together.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#6a4641]">
            Tell us what you're celebrating and we'll help turn your idea into a
            delicious custom creation.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:7022042467"
              className="rounded-full bg-[#4a2c2a] px-8 py-4 font-semibold text-white"
            >
              Call (702) 204-2467
            </a>

            <a
              href="mailto:midnightwhisking@gmail.com"
              className="rounded-full border border-[#4a2c2a] px-8 py-4 font-semibold text-[#4a2c2a]"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-[#33201f] py-10 text-[#ead9ca]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-serif text-2xl font-bold text-white">
              Midnight Whisking
            </p>
            <p className="mt-1 text-sm">Custom cakes, cupcakes & treats</p>
          </div>

          <div className="text-sm">
            <p>Las Vegas & Henderson, Nevada</p>
            <p className="mt-1">(702) 204-2467</p>
          </div>

          <p className="text-xs text-[#a98e84]">
            © {new Date().getFullYear()} Midnight Whisking
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
