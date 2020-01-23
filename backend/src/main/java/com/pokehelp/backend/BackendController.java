package com.pokehelp.backend;

import java.util.concurrent.atomic.AtomicLong;
import javax.servlet.http.HttpServletResponse;

import java.util.ArrayList;
import java.util.Stack;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class BackendController {

  private static ArrayList<Build> buildList = new ArrayList<Build>();

  // @ModelAttribute
	// public void setResponseHeader(HttpServletResponse response) {
	// 	response.setHeader("Access-Control-Allow-Origin", "*");
  // }
  
  // @GetMapping("/helloworld")
  // @ResponseBody
  // public Greeting sayHello(@RequestParam(name="name", required=false, defaultValue="Stranger") String name) {
  //   return new Greeting(counter.incrementAndGet(), String.format(template, name));
  // }

  @PostMapping("/addBuild")
  @ResponseBody
  public Build addHero(@RequestBody Build build) {
    if (!buildList.contains(build)){
      buildList.add(build);
    }
    return build;
  }

  @PutMapping("/update")
  @ResponseBody
  public Build updateHero(@RequestBody Build build) {
    int index = buildList.indexOf(build);
    Build modifyBuild;
    modifyBuild = buildList.get(index);
    modifyBuild.name = build.name;
    return modifyBuild;
  }

  @DeleteMapping("/delete/{id}")
  @ResponseBody
  public void deleteHero(@PathVariable String id) {
    for(Build build : buildList){
      if (build.id == id){
        buildList.remove(build);
        break;
      }
    }
    return;
  }

  @GetMapping("/get")
  @ResponseBody
  public Object[] getHeroes() {
    return buildList.toArray();
  }

  // @GetMapping("/get/{id}")
  // @ResponseBody
  // public Build getHero(@PathVariable String id) {
  //   for(Build build : buildList){
  //     if (build.getId() == Integer.parseInt(id)){
  //       return build;
  //     }
  //   }
  //   return new Build(Integer.parseInt(id), "");
  // }

  // @GetMapping("/batman")
  // @ResponseBody
  // public void addBatman() {
  //   buildList.add(new Build(1, "Batman"));
  //   return;
  // }

}