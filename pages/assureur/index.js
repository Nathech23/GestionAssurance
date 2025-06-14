//import { useState } from 'react'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

export default function AssureurDashboard() {
  return (
    <div>
      <Navigation userType="assureur" />
      <div className="container">
        <h1>Tableau de Bord - Agent Sécurité Sociale</h1>
        
        <div className="grid">
          <div className="card">
            <h3>Gestion des Assurés</h3>
            <p>Inscrire et gérer les assurés</p>
            <Link href="/assureur/assures">
              <button className="btn">Gérer les Assurés</button>
            </Link>
          </div>

          <div className="card">
            <h3>Gestion des Médecins</h3>
            <p>Enregistrer et gérer les médecins</p>
            <Link href="/assureur/medecins">
              <button className="btn">Gérer les Médecins</button>
            </Link>
          </div>

          <div className="card">
            <h3>Feuilles de Maladie</h3>
            <p>Consulter et traiter les feuilles de maladie</p>
            <Link href="/assureur/feuilles">
              <button className="btn">Voir les Feuilles</button>
            </Link>
          </div>

          <div className="card">
            <h3>Remboursements</h3>
            <p>Effectuer les remboursements</p>
            <Link href="/assureur/remboursements">
              <button className="btn">Gérer Remboursements</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}