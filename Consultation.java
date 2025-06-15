package Securite_sociale.CSI.Models;
import java.util.Date;

public class Consultation {
private int idConsultation;
private Date date;
private double tarif;
public Consultation(int idConsultation,Date date,double tarif){
    this.idConsultation=idConsultation;
    this.date=date;
    this.tarif=tarif;
}

    public void setDate(Date date) {
        this.date = date;
    }

    public int getIdConsultation() {
        return idConsultation;
    }

    public void setIdConsultation(int idConsultation) {
        this.idConsultation = idConsultation;
    }

    public Date getDate() {
        return date;
    }

    public double getTarif() {
        return tarif;
    }

    public void setTarif(double tarif) {
        this.tarif = tarif;
    }
}

