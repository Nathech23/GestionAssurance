package Securite_sociale.CSI.Models;

public class Feuille_de_maladie {
    private int noFeuille;
    private double montant_total;

    public Feuille_de_maladie(int noFeuille,double montant_total){
        this.montant_total=montant_total;
        this.noFeuille=noFeuille;
    }

    public int getNoFeuille() {
        return noFeuille;
    }

    public void setNoFeuille(int noFeuille) {
        this.noFeuille = noFeuille;
    }

    public double getMontant_total() {
        return montant_total;
    }

    public void setMontant_total(double montant_total) {
        this.montant_total = montant_total;
    }
}
