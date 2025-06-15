package Securite_sociale.CSI.Models;
import java.util.Date;

public class Specialiste extends Medecin{
    private String specialite;
    public Specialiste(String nom,String prenom, Date date_de_naissance,String adresse,int idMedecin,int noOrdre,Date dateInscription,String specialite){
        super(nom,prenom,date_de_naissance,adresse,idMedecin,noOrdre,dateInscription);
        this.specialite=specialite;
    }

    public String getSpecialite() {
        return specialite;
    }

    public void setSpecialite(String specialite) {
        this.specialite = specialite;
    }
}
