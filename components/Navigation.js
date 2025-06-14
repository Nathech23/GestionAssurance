import Link from 'next/link'

export default function Navigation({ userType }) {
  const getNavItems = () => {
    switch(userType) {
      case 'assureur':
        return [
          { href: '/assureur', label: 'Dashboard' },
          { href: '/assureur/assures', label: 'Assurés' },
          { href: '/assureur/medecins', label: 'Médecins' },
          { href: '/assureur/feuilles', label: 'Feuilles' },
          { href: '/assureur/remboursements', label: 'Remboursements' }
        ]
      case 'medecin':
        return [
          { href: '/medecin', label: 'Dashboard' },
          { href: '/medecin/feuilles', label: 'Feuilles' },
          { href: '/medecin/prescriptions', label: 'Prescriptions' },
          { href: '/medecin/consultations', label: 'Consultations' },
          { href: '/medecin/patients', label: 'Patients' }
        ]
      case 'assure':
        return [
          { href: '/assure', label: 'Dashboard' },
          { href: '/assure/consultations', label: 'Mes Consultations' },
          { href: '/assure/remboursements', label: 'Remboursements' }
        ]
      default:
        return []
    }
  }

  return (
    <nav className="nav">
      <ul>
        {getNavItems().map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
        <li style={{ marginLeft: 'auto' }}>
          <Link href="/">Déconnexion</Link>
        </li>
      </ul>
    </nav>
  )
}