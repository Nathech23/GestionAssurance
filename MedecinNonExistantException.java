package Securite_sociale.CSI.Exceptions;

public class MedecinNonExistantException extends Exception {
    public MedecinNonExistantException() {
        super("Le médecin n'existe pas.");
    }

    public MedecinNonExistantException(String message) {
        super(message);
    }
}