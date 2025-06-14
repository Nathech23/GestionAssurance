import Navigation from '../../components/Navigation'
import Link from 'next/link'

export default function AssureDashboard() {
  return (
    <div>
      <Navigation userType="assure" />
      <div className="container">
        <h1>Espace Assuré</h1>
        
        <div className="grid">
          <div className="card">
            <h3>Mes Consultations</h3>
            <p>Voir l’historique de mes consultations</p>
            <Link href="/assure/consultations">
              <button className="btn">Voir Consultations</button>
            </Link>
          </div>

          <div className="card">
            <h3>Mes Remboursements</h3>
            <p>Suivre l’état de mes remboursements</p>
            <Link href="/assure/remboursements">
              <button className="btn">Voir Remboursements</button>
            </Link>
          </div>

          <div className="card">
            <h3>Mon Médecin Traitant</h3>
            <p>Dr. Nziéleu Nathan - Généraliste</p>
            <p>📞 6 77 77 77 77</p>
          </div>

          <div className="card">
            <h3>Mes Informations</h3>
            <p><strong>Nom :</strong> Essono Flora</p>
            <p><strong>N° Sécurité Sociale :</strong> 1800515123456</p>
            <button className="btn btn-secondary">Modifier</button>
          </div>
        </div>
      </div>
    </div>
  )
}