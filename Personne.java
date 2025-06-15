package Securite_sociale.CSI.Models;
import java.util.Date;

public class Personne {
    private String nom;
    private String prenom;
    private Date date_de_naissance;
    private String adresse;

    public Personne (String nom,String prenom,Date date_de_naissance, String adresse){
        this.nom=nom;
        this.prenom=prenom;
        this.date_de_naissance=date_de_naissance;
        this.adresse=adresse;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getNom() {
        return nom;
    }

    public Date getDate_de_naissance() {
        return date_de_naissance;
    }

    public String getAdresse() {
        return adresse;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public void setDate_de_naissance(Date date_de_naissance) {
        this.date_de_naissance = date_de_naissance;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
}
