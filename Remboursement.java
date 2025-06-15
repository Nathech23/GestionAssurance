package Securite_sociale.CSI.Models;

public class Remboursement {
    private float montant;
    private float taux;
    private String modeRemb;

    public Remboursement(float montant,float taux,String modeRemb){
        this.modeRemb=modeRemb;
        this.montant=montant;
        this.taux=taux;
    }

    public float getMontant() {
        return montant;
    }

    public float getTaux() {
        return taux;
    }

    public String getModeRemb() {
        return modeRemb;
    }

    public void setModeRemb(String modeRemb) {
        this.modeRemb = modeRemb;
    }

    public void setMontant(float montant) {
        this.montant = montant;
    }

    public void setTaux(float taux) {
        this.taux = taux;
    }
}
