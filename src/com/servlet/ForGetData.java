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
		String task= (String) request.getParameter("task");
        String AttCode= (String) request.getParameter("code");
		String AttName=new String(request.getParameter("name").getBytes("ISO-8859-1"),"utf-8");
		String page=(String) request.getParameter("page");
		int pageNum=0;
		if(page==null) page="1";
		pageNum=Integer.parseInt(page)-1;
		//page
		if(task!=null && task.equals("page"))
		{
			
			String pageup=(String) request.getParameter("pageup");
			String pagedown=(String) request.getParameter("pagedown");
			if(pageup.equals("0"))
				pageNum=pageNum-1;			
			if(pagedown.equals("0"))
				pageNum=pageNum+1;
			page=String.valueOf(pageNum+1);
			
		
				
		}
		if(pageNum<0)
			pageNum=0;
		pageNum=pageNum*1000;
		
		


		//String apiUrl = "http://119.97.185.7:7615/TQLEX?Entry=HQServ.Tick"; 
		//String para="{\"Code\":\"IF1409\",\"Setcode\":47,\"Date\":0704,\"Startxh\":-1,\"WantNum\":10,\"HasAttachInfo\":1,\"ExHQFlag\":1,\"CharSet\":\"\"}";
		String apiUrl = "http://119.97.185.12:7615/TQLEX?Entry=HQServ.Tick"; 
		//String para="{\"Code\":\"IF1412\",\"Setcode\":47,\"Date\":0,\"Startxh\":0,\"WantNum\":1000,\"HasAttachInfo\":1,\"ExHQFlag\":1,\"CharSet\":\"\"}";
		String para="{\"Code\":\""+AttCode+"\",\"Setcode\":47,\"Date\":0,\"Startxh\":"+pageNum+",\"WantNum\":1000,\"HasAttachInfo\":1,\"ExHQFlag\":1,\"CharSet\":\"\"}";
		
		URLConnectionHelper helper=new URLConnectionHelper();
		String str =helper.sendPost(apiUrl, para);
		Gson gson=new Gson();
		tick tickk=new tick();
		tickk=gson.fromJson(str, tick.class);
		
		filterData filter=new filterData();
		List<String[]> data =new ArrayList();

		if(task!=null)
		{
			if(task.equals("initialize")|| task.equals("page"))
			{	
				data =tickk.getList();
			}
			if(task.equals("now"))
			{
				String max= (String) request.getParameter("max");
				data =filter.filterDetail(tickk.getList(),max);
				
			}
			if(task.equals("kind"))
			{
				//String kind= (String) request.getParameter("kind");
				String kind=new String(request.getParameter("kind").getBytes("ISO-8859-1"),"utf-8");
				String filterValue= (String) request.getParameter("filter");
				String min= (String) request.getParameter("min");
				String max= (String) request.getParameter("max");

				data =filter.filterDetail(tickk.getList(),filterValue,min,max);
				//request.setAttribute("kind",kind);

				request.setAttribute("kind",kind);
				
			}
		}
		
		tickk.setList(data);
		String ProStr=gson.toJson( tickk);




		String[] head =tickk.getListHead();
		//TODO transfrom 
        // RequestDispatcher rd = request.getRequestDispatcher("index.jsp");  
         //request.setAttribute("map",daJson);//存值  
        // rd.forward(request,response);
		
		
		RequestDispatcher rd = request.getRequestDispatcher("detail/detail.jsp"); 
		str=str.substring(1, str.length());
        
        request.setAttribute("tickk",data);//存值  
        request.setAttribute("tickJson",ProStr);
        request.setAttribute("name",AttName);
        request.setAttribute("code",AttCode);
        request.setAttribute("page",page);
        

        rd.forward(request,response);
	}

}
