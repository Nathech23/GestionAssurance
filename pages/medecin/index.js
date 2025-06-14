import Navigation from '../../components/Navigation'
import Link from 'next/link'

export default function MedecinDashboard() {
  return (
    <div>
      <Navigation userType="medecin" />
      <div className="container">
        <h1>Tableau de Bord - Médecin</h1>
        
        <div className="grid">
          <div className="card">
            <h3>Feuilles de Maladie</h3>
            <p>Enregistrer une nouvelle feuille de maladie</p>
            <Link href="/medecin/feuilles">
              <button className="btn">Nouvelle Feuille</button>
            </Link>
          </div>

          <div className="card">
            <h3>Prescriptions</h3>
            <p>Prescrire des médicaments</p>
            <Link href="/medecin/prescriptions">
              <button className="btn">Prescrire</button>
            </Link>
          </div>

          <div className="card">
            <h3>Consultations Spécialistes</h3>
            <p>Prescrire une consultation chez un spécialiste</p>
            <Link href="/medecin/consultations">
              <button className="btn">Prescrire Consultation</button>
            </Link>
          </div>

          <div className="card">
            <h3>Mes Patients</h3>
            <p>Consulter la liste de mes patients</p>
            <Link href="/medecin/patients">
              <button className="btn">Voir Patients</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}