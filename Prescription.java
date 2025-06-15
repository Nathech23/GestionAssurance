package Securite_sociale.CSI.Models;

public class Prescription {
    private int idPrescr;
    private String description;

    public Prescription(int idPrescr,String description){
        this.idPrescr=idPrescr;
        this.description=description;
    }

    public int getIdPrescr() {
        return idPrescr;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setIdPrescr(int idPrescr) {
        this.idPrescr = idPrescr;
    }
}
