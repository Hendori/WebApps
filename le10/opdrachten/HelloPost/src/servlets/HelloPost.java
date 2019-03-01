package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HelloPost
 */
@WebServlet("/HelloPostServlet")
public class HelloPost extends HttpServlet {
	  private static final long serialVersionUID = 1L;
	  private static final String NAAM = "naam";
	  private String bewaardeNaam = "Geen naam";



    /**
     * Voor de afhandeling van http GET
     */
      protected void doGet(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
        response.setContentType("text/html");
        String naam = request.getParameter(NAAM);
        PrintWriter pw = response.getWriter();
        pw.println("<html>");
        pw.println("<head><title>Hallo</title></head>");
        pw.println("<body>");
        pw.println("<h1>Hallo "+naam+" !</h1>");
        pw.println("</body></html>");
        pw.close();
      }


	/**
	 *Voor de afhandeling van POST
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        String naam = request.getParameter(NAAM);
        PrintWriter pw = response.getWriter();
        pw.println("<html>");
        pw.println("<head><title>Hallo</title></head>");
        pw.println("<body>");
        pw.println("<h1>Hallo "+naam+" !</h1>");
        pw.println("<h1>De vorige naam was "+bewaardeNaam+" </h1>");
        pw.println("</body></html>");
        bewaardeNaam = naam;
        pw.close();
      }

}
