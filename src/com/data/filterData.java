package com.data;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class filterData {
	
	public List<String[]> filterDetail(List<String[]> lists)
	{
		 List<String[]> data= new ArrayList<String[]>();
		 String [] a=new String [7];
		 int volCount=0;
		 for (int i=0;i<lists.size();i++)
		 {
			 a=lists.get(i);
			  volCount=Integer.parseInt(a[2]);
			 if(volCount>5)
			 {
				 data.add(a);				 
			 }
		 }
		 
		return data;
		
	}

}
