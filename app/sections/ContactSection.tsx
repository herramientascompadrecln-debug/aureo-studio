"use client";

export default function ContactSection() {
  return (
    <section className="relative px-6 pb-40">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-yellow-400 tracking-[0.35em] text-sm mb-4">
            CONTACTO
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Comienza Tu Experiencia
          </h2>

          <p className="text-neutral-400 text-lg">
            Creamos experiencias digitales premium para eventos inolvidables.
          </p>

        </div>

        <form
          action="https://formsubmit.co/herramientascompadrecln@gmail.com"
          method="POST"
          className="space-y-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 md:p-12"
        >

          <input
            type="hidden"
            name="_subject"
            value="Nuevo lead AUREO"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400 transition"
          />

          <select
            name="event"
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400 transition"
          >
            <option>Boda</option>
            <option>XV Años</option>
            <option>Cumpleaños</option>
            <option>AUREO KIDS</option>
            <option>BLACK EDITION</option>
          </select>

          <textarea
            name="message"
            placeholder="Cuéntanos sobre tu evento..."
            rows={6}
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400 transition resize-none"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-5 rounded-2xl font-bold hover:scale-[1.02] transition duration-300"
          >
            Solicitar Cotización
          </button>

        </form>

      </div>

    </section>
  );
}