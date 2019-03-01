package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class Cursussen
 */
@WebServlet("/CursussenServlet")
public class CursussenServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	

  protected void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
  
  	Gson gson = new Gson();
  	PrintWriter pw = response.getWriter();
		Course[] cursussen = new Course[3];
    cursussen[0] = new Course("T58221", "Webapplicaties");
    cursussen[1] = new Course("T14161", "Databases");
    cursussen[2] = new Course("T12341", "Concepten van programmeertalen");
    
  
    response.setContentType("text/plain");     
    String responseData = gson.toJson(cursussen);

    
    pw.println(responseData);
    pw.close();

  }
  private class Course {
  	public String code;
  	public String name;
  	
  	public Course(String code, String name) {
  		this.code = code;
  		this.name = name;
  	}
  }
}
