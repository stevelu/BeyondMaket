package com.data;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.TimeZone;

public class filterData {
	
	public List<String[]> filterDetail(List<String[]> lists,String max)
	{
		 List<String[]> data= new ArrayList<String[]>();
		 String [] a=new String [7];
		 SimpleDateFormat sdf = new SimpleDateFormat( "HH:mm:ss");
		 int maxNum=Integer.parseInt(max);
		 int volCount=0;
		 for (int i=0;i<lists.size();i++)
		 {
			 a=lists.get(i);
			  volCount=Integer.parseInt(a[2]);
			 if(volCount>=maxNum)
			 {
				// a[0]=sdf.format(new Date((Integer.parseInt(a[0])*1000L)));
				 //a[0]=paserTime(Integer.parseInt(a[0]));
				 data.add(a);				 
			 }
		 }
		 
		return data;
		
	}
	
	public List<String[]> filterDetail(List<String[]> lists,String kind,String min,String max)
	{
		 List<String[]> data= new ArrayList<String[]>();
		 String [] a=new String [7];
		 SimpleDateFormat sdf = new SimpleDateFormat( "HH:mm:ss");
		 int maxNum=Integer.parseInt(max);
		 int minNum=Integer.parseInt(min);
		 int volCount=0;
		 for (int i=0;i<lists.size();i++)
		 {
			 a=lists.get(i);
			 if(kind=="1")
			  volCount=Integer.parseInt(a[2]);
			 if(kind=="2")
				  volCount=Integer.parseInt(a[3]);
			 if(volCount>=minNum && volCount<=maxNum)
			 {
				// a[0]=sdf.format(new Date((Integer.parseInt(a[0])*1000L)));
				 //a[0]=paserTime(Integer.parseInt(a[0]));
				 data.add(a);				 
			 }
		 }
		 
		return data;
		
	}
	
	public String paserTime(int time){
	      System.setProperty("user.timezone", "Asia/Shanghai");
	      TimeZone tz = TimeZone.getTimeZone("Asia/Shanghai");
	      TimeZone.setDefault(tz);
	      SimpleDateFormat format = new SimpleDateFormat("HH:mm");
	      Date date=new  Date(time * 1000L);
	      date.setHours(date.getHours()-8);
	      String times = format.format(date);
	     // System.out.print("日期格式---->" + times);
	      return times;
	}

}
