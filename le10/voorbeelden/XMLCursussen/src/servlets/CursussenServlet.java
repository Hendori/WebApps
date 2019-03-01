package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Servlet implementation class Cursussen
 */
@WebServlet("/CursussenServlet")
public class CursussenServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	

  protected void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    response.setContentType("text/html");
    PrintWriter pw = response.getWriter();
    pw.print("<cursussen>");
    pw.print("<cursus code=\"T58221\" naam=\"Webapplicaties\" />");
    pw.print("<cursus code=\"T14161\" naam=\"Databases\" />");
    pw.print("<cursus code=\"T12341\" naam=\"Concepten van programmeertalen\" />");
    pw.print("</cursussen>");
    pw.close();
  }
}
