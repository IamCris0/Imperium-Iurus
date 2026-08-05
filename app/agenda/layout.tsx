import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Agenda una Cita',
  description: 'Reserve su consulta legal confidencial con Imperium Iuris. Seleccione fecha y horario disponible — lunes a viernes, 08:00 a 18:00.',
  alternates: { canonical: `${SITE_URL}/agenda` },
  openGraph: {
    title: 'Agenda una Cita | Imperium Iuris',
    description: 'Reserve una consulta de defensa penal en Guayaquil. Horarios disponibles en línea.',
    url: `${SITE_URL}/agenda`,
  },
}

export default function AgendaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
