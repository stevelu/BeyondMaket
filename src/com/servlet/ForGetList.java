package com.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.comment.URLConnectionHelper;
import com.google.gson.Gson;
import com.model.category;
import com.model.tick;

/**
 * Servlet implementation class ForGetList
 */
public class ForGetList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ForGetList() {
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


		//String apiUrl = "http://119.97.185.7:7615/TQLEX?Entry=HQServ.Tick"; 
		//String para="{\"Code\":\"IF1409\",\"Setcode\":47,\"Date\":0704,\"Startxh\":-1,\"WantNum\":10,\"HasAttachInfo\":1,\"ExHQFlag\":1,\"CharSet\":\"\"}";
		String apiUrl = "http://119.97.185.12:7615/TQLEX?Entry=HQServ.MultiHQ"; 
		String para="{\"WantCol\":[\"NOW\",\"VOL\",\"VolInStock\",\"PreVolInStock\",\"ClearPrice\",\"LB\",\"OPEN\",\"MAX\",\"MIN\",\"CLOSE\",\"XSFLAG\"],\"SetDomain\":47,\"SubCode\":\"\",\"ColType\":14,\"Startxh\":0,\"WantNum\":20,\"SortType\":0,\"ExHQFlag\":1,\"CharSet\":\"\"}";
		URLConnectionHelper helper=new URLConnectionHelper();
		String str =helper.sendPost(apiUrl, para);
		Gson gson=new Gson();
		category cate=new category();
		cate=gson.fromJson(str, category.class);
		
         
//test
         if(cate!=null)
         {
        	category category=new category();
        	category=cate;
        	List<String[]> cateList=category.getList();
        	String [] data=new String [14];
        	String name=null;
        	String code=null;
        	for(int i=0;i< cateList.size();i++)
        	{
        		data=cateList.get(i);
        		name=data[2];
        		code=data[0];
        		System.out.println(name+"="+code);
        	}
         }
         //end
         
        //RequestDispatcher rd = request.getRequestDispatcher("index.jsp"); 
         RequestDispatcher rd = request.getRequestDispatcher("category/category.jsp"); 
         
        request.setAttribute("cate",cate.getList());//存值  
        rd.forward(request,response);

	}

}
