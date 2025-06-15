package Securite_sociale.CSI.Models;
import java.util.Date;

public class Medecin extends Personne{
    private Long idMedecin;
    private int noOrdre;
    private Date dateInscription;

    public Medecin(String nom,String prenom, Date date_de_naissance,String adresse,int idMedecin,int noOrdre,Date dateInscription){
        super(nom,prenom,date_de_naissance,adresse);
        this.dateInscription=dateInscription;
        this.idMedecin= (long) idMedecin;
        this.noOrdre=noOrdre;
    }

    public Long getIdMedecin() {
        return idMedecin;
    }

    public Date getDateInscription() {
        return dateInscription;
    }

    public int getNoOrdre() {
        return noOrdre;
    }

    public void setDateInscription(Date dateInscription) {
        this.dateInscription = dateInscription;
    }

    public void setIdMedecin(int idMedecin) {
        this.idMedecin = (long) idMedecin;
    }

    public void setNoOrdre(int noOrdre) {
        this.noOrdre = noOrdre;
    }
}
