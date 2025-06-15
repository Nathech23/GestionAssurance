package Securite_sociale.CSI.Models;
import java.util.Date;


public class Assure extends Personne{
    private int noSecu;
    private Date dateAffiliation;
    private Boolean estActif;
    private Medecin MedecinTraitant;

    public Assure(String nom,String prenom, Date date_de_naissance,String adresse,int noSecu,Date dateAffiliation,Boolean estActif,Medecin MedecinTraitant){
        super(nom,prenom,date_de_naissance,adresse);
        this.noSecu=noSecu;
        this.dateAffiliation=dateAffiliation;
        this.estActif=estActif;
        this.MedecinTraitant=MedecinTraitant;
    }

    public Medecin getMedecinTraitant() {
        return MedecinTraitant;
    }

    public void setMedecinTraitant(Medecin medecinTraitant) {
        MedecinTraitant = medecinTraitant;
    }

    public Boolean getEstActif() {
        return estActif;
    }

    public Date getDateAffiliation() {
        return dateAffiliation;
    }

    public int getNoSecu() {
        return noSecu;
    }

    public void setDateAffiliation(Date dateAffiliation) {
        this.dateAffiliation = dateAffiliation;
    }

    public void setEstActif(Boolean estActif) {
        this.estActif = estActif;
    }

    public void setNoSecu(int noSecu) {
        this.noSecu = noSecu;
    }
}
