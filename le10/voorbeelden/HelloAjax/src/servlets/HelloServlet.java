package servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HelloServlet
 */
@WebServlet("/HelloServlet")
public class HelloServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;
  private static final String NAAM = "naam";

  protected void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    String naam = request.getParameter(NAAM);
    if (naam != null) {
      response.setContentType("text/plain");
      response.getWriter().write("Hallo " + naam);
    }
  }
}

