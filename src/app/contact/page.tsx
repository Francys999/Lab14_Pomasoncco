import type { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}, ${personalInfo.title}`,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contacto</h1>

        <p className="text-gray-700 mb-8">
          Si deseas ponerte en contacto conmigo para consultas, proyectos o
          colaboraciones, puedes usar el siguiente formulario o escribirme
          directamente a mi correo.
        </p>

        {/* Información de contacto directa */}
        <div className="mb-8 space-y-2">
          <p className="text-gray-800">
            <span className="font-semibold">Nombre:</span> {personalInfo.name}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Email:</span>{' '}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-blue-600 hover:underline"
            >
              {personalInfo.email}
            </a>
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">GitHub:</span>{' '}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {personalInfo.github}
            </a>
          </p>
        </div>

        {/* Formulario de contacto (solo frontend) */}
        <form
          className="space-y-4 bg-white p-6 rounded-lg shadow-md"
          action={`mailto:${personalInfo.email}`}
          method="POST"
          encType="text/plain"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu nombre"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu@correo.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Asunto
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Motivo del contacto"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
