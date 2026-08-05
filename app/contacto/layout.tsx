import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Consulta Confidencial',
  description: 'Envíe su consulta jurídica de forma confidencial. Respondemos a la brevedad para evaluar su caso penal, empresarial o de urgencia.',
  alternates: { canonical: `${SITE_URL}/contacto` },
  openGraph: {
    title: 'Consulta Confidencial | Imperium Iuris',
    description: 'Contacte a nuestro equipo jurídico. Confidencialidad garantizada.',
    url: `${SITE_URL}/contacto`,
  },
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
