package Securite_sociale.CSI.Exceptions;

public class AssureDejaExistantException extends Exception {
    public AssureDejaExistantException() {
        super("L'assuré existe déjà.");
    }

    public AssureDejaExistantException(String message) {
        super(message);
    }
}

