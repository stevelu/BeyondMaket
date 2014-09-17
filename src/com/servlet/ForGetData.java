package com.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;












import com.comment.URLConnectionHelper;
import com.data.filterData;
import com.google.gson.Gson;
import com.model.tick;

/**
 * Servlet implementation class ForGetData
 */
public class ForGetData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ForGetData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost( request,  response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		String AttCode= (String) request.getParameter("code");
		String AttScode=(String)request.getParameter("Scode");
		String AttName=(String)request.getParameter("name");
		

		//String apiUrl = "http://119.97.185.7:7615/TQLEX?Entry=HQServ.Tick"; 
		//String para="{\"Code\":\"IF1409\",\"Setcode\":47,\"Date\":0704,\"Startxh\":-1,\"WantNum\":10,\"HasAttachInfo\":1,\"ExHQFlag\":1,\"CharSet\":\"\"}";
		String apiUrl = "http://119.97.185.7:7615/TQLEX?Entry=HQServ.Tick"; 
		//String para="{\"Code\":\"IF1412\",\"Setcode\":47,\"Date\":0,\"Startxh\":0,\"WantNum\":1000,\"HasAttachInfo\":1,\"ExHQFlag\":1,\"CharSet\":\"\"}";
		String para="{\"Code\":\""+AttCode+"\",\"Setcode\":47,\"Date\":0,\"Startxh\":0,\"WantNum\":1000,\"HasAttachInfo\":1,\"ExHQFlag\":1,\"CharSet\":\"\"}";
		URLConnectionHelper helper=new URLConnectionHelper();
		String str =helper.sendPost(apiUrl, para);
		Gson gson=new Gson();
		tick tickk=new tick();
		tickk=gson.fromJson(str, tick.class);
		
		filterData filter=new filterData();
		List<String[]> data =filter.filterDetail(tickk.getList());
		String[] head =tickk.getListHead();
		//TODO transfrom 
        // RequestDispatcher rd = request.getRequestDispatcher("index.jsp");  
         //request.setAttribute("map",daJson);//存值  
        // rd.forward(request,response);
		
		
		RequestDispatcher rd = request.getRequestDispatcher("detail/detail.jsp"); 
		str=str.substring(1, str.length());
        
        request.setAttribute("tickk",data);//存值  
        request.setAttribute("tickJson",str);
       // request.setAttribute("name",AttName);

        rd.forward(request,response);
	}

}
