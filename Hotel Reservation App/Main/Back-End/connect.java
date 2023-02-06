import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class connect {
    public static void main(String[] args) {
        Connection conn = null;
        try {
            String url = "jdbc:mysql://localhost:3306/test_db";
            String user = "root";
            String password = "";
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to the MySQL server successfully.");
        } catch (SQLException ex) {
            System.out.println("An error occurred while connecting to the MySQL server: " + ex.getMessage());
        } finally {
            try {
                if (conn != null && !conn.isClosed()) {
                    conn.close();
                }
            } catch (SQLException ex) {
                System.out.println("An error occurred while closing the connection: " + ex.getMessage());
            }
        }
    }
}