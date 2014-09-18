package com.adarsh.rest;

import com.adarsh.Employee;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Path("/json/employee")
public class EmployeeService {


    // http://localhost:8080/AnjularJsSample10/rest/json/employee/get
    @GET
    @Path("/get")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Employee> getEmployeeList() {

        return new ArrayList<Employee>() {
            {
                add(new Employee(10, "Adarsh Kumar", "adarsh@kumar"));
                add(new Employee(12, "Amit Kumar", "amit@kumar"));
                add(new Employee(13, "Radha Singh", "radha@kumar"));
                add(new Employee(14, "Rajit Kumar", "rajat@kumar"));
                add(new Employee(15, "Raj Kumar", "raj@kumar"));
            }
        };
    }



    // http://localhost:8080/AnjularJsSample10/rest/json/employee/post
    /*
     {"employeeId":10,"employeeName":"Adarsh Kumar","employeeEmail":"adarsh@kumar"}
     */
    @POST
    @Path("/post")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response saveEmployee(Employee employee) {
        final String result = "Employee Saved : " + employee;
        System.out.println(employee);
        return Response.status(201).entity(result).build();
    }


    // http://localhost:8080/AnjularJsSample10/rest/json/employee/postList
   /* [
     {"employeeId":10,"employeeName":"Adarsh Kumar","employeeEmail":"adarsh@kumar"}
     ,{"employeeId":12,"employeeName":"Amit Kumar","employeeEmail":"adarsh@kumar"}
     ,{"employeeId":13,"employeeName":"Adarsh Kumar","employeeEmail":"adarsh@kumar"}
     ,{"employeeId":14,"employeeName":"Adarsh Kumar","employeeEmail":"adarsh@kumar"}
     ]
     */

    @POST
    @Path("/postList")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response saveEmployeeList(List<Employee> employeeList) {
        final String result = "Employee List Saved : " + employeeList;
        System.out.println(employeeList);
        return Response.status(201).entity(result).build();
    }

}