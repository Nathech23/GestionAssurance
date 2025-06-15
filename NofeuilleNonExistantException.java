package Securite_sociale.CSI.Exceptions;



public class NofeuilleNonExistantException extends Exception {
    public NofeuilleNonExistantException() {
        super("La feuille de soin n'existe pas.");
    }

    public NofeuilleNonExistantException(String message) {
        super(message);
    }
}

