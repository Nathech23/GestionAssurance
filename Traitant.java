package Securite_sociale.CSI.Models;

import java.util.Date;

public class Traitant extends Medecin{
    public Traitant(String nom, String prenom, Date date_de_naissance, String adresse, int idMedecin, int noOrdre, Date dateInscription){
        super(nom,prenom,date_de_naissance,adresse,idMedecin,noOrdre,dateInscription);
    }

}
