package com.servlet;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;




import com.comment.URLConnectionHelper;
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
		String ln = null;
		String la = null;
		request.setAttribute("username", ln);
		request.setAttribute("pwd", la);
		//String apiUrl = "http://119.97.185.7:7615/TQLEX?Entry=HQServ.Tick"; 
		//String para="{\"Code\":\"IF1409\",\"Setcode\":47,\"Date\":0704,\"Startxh\":-1,\"WantNum\":10,\"HasAttachInfo\":1,\"ExHQFlag\":1,\"CharSet\":\"\"}";
		String apiUrl = "http://119.97.185.7:7615/TQLEX?Entry=HQServ.MultiHQ"; 
		String para="{\"WantCol\":[\"NOW\",\"VOL\",\"VolInStock\",\"PreVolInStock\",\"ClearPrice\",\"LB\",\"OPEN\",\"MAX\",\"MIN\",\"CLOSE\",\"XSFLAG\"],\"SetDomain\":47,\"SubCode\":\"\",\"ColType\":14,\"Startxh\":0,\"WantNum\":20,\"SortType\":0,\"ExHQFlag\":1,\"CharSet\":\"\"}";
		URLConnectionHelper helper=new URLConnectionHelper();
		String str =helper.sendPost(apiUrl, para);
		Gson gson=new Gson();
		tick tickk=new tick();
		tickk=gson.fromJson(str, tick.class);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		
		/*RequestDispatcher rd=request.getRequestDispatcher("index.jsp");
		request.setAttribute("ln", ln);
		request.setAttribute("la", la);
		request.setAttribute("sign", signString);
		rd.forward(request, response);*/
		
		//TODO send get data
		String ln = null;
		String la = null;
		request.setAttribute("username", ln);
		request.setAttribute("pwd", la);
		String apiUrl = "http://119.97.185.7:7615/TQLEX?Entry=HQServ.Tick"; 
		String para="{\"Code\":\"IF1412\",\"Setcode\":47,\"Date\":0,\"Startxh\":0,\"WantNum\":100,\"HasAttachInfo\":1,\"ExHQFlag\":1,\"CharSet\":\"\"}";
		
		URLConnectionHelper helper=new URLConnectionHelper();
		String str =helper.sendGetBY(apiUrl, para);
		/*HttpGet get=new HttpGet();
		String str=get.sendHttpGet(apiUrl, params);*/
		/*json json=new json();
		Map<?, ?> dazhongMap=json.jsonToMap(str);*/
		/*Gson gson=new Gson();
		dataJson daJson=new dataJson();
		daJson=gson.fromJson(str, dataJson.class);*/
		Gson gson=new Gson();
		tick tickk=new tick();
		tickk=gson.fromJson(str, tick.class);
		
		
		
		/*List<businesses> bus =daJson.getBusinesses();
		Map<String, String> dazhongMap=new LinkedHashMap<>() ;
		int j=1;
		for(Iterator i =bus.iterator(); i.hasNext();)  
        {
			businesses bu=(businesses) i.next();
			String name="name"+j;
			String address="address"+j;
			String id="id"+j;
			dazhongMap.put(name, bu.getName());
			dazhongMap.put(address, bu.getAddress());
			dazhongMap.put(id, bu.getBusiness_id());
			j++;
        }*/
		//TODO transfrom 
        // RequestDispatcher rd = request.getRequestDispatcher("index.jsp");  
         //request.setAttribute("map",daJson);//存值  
        // rd.forward(request,response);
	}

}
