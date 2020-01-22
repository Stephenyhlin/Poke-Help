package com.pokehelp.backendController;

import java.util.concurrent.atomic.AtomicLong;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

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

import com.pokehelp.pokemon.Pokemon;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class BackendController {

  private static ArrayList<Pokemon> heroList = new ArrayList<Pokemon>();

  // @ModelAttribute
	// public void setResponseHeader(HttpServletResponse response) {
	// 	response.setHeader("Access-Control-Allow-Origin", "*");
  // }
  
  // @GetMapping("/helloworld")
  // @ResponseBody
  // public Greeting sayHello(@RequestParam(name="name", required=false, defaultValue="Stranger") String name) {
  //   return new Greeting(counter.incrementAndGet(), String.format(template, name));
  // }

  @PostMapping("/add")
  @ResponseBody
  public Pokemon addHero(@RequestBody Pokemon pokemon) {
    if (!heroList.contains(pokemon)){
      heroList.add(pokemon);
    }
    return pokemon;
  }

  @PutMapping("/update")
  @ResponseBody
  public Pokemon updateHero(@RequestBody Pokemon pokemon) {
    int index = heroList.indexOf(pokemon);
    Pokemon modifyPokemon;
    modifyPokemon = heroList.get(index);
    modifyPokemon.setName(pokemon.getName());
    return modifyPokemon;
  }

  @DeleteMapping("/delete/{id}")
  @ResponseBody
  public void deleteHero(@PathVariable String id) {
    for(Pokemon pokemon : heroList){
      if (pokemon.getId() == Integer.parseInt(id)){
        heroList.remove(pokemon);
        break;
      }
    }
    return;
  }

  @GetMapping("/get")
  @ResponseBody
  public Object[] getHeroes() {
    return heroList.toArray();
  }

  @GetMapping("/get/{id}")
  @ResponseBody
  public Pokemon getHero(@PathVariable String id) {
    for(Pokemon pokemon : heroList){
      if (pokemon.getId() == Integer.parseInt(id)){
        return pokemon;
      }
    }
    return new Pokemon(Integer.parseInt(id), "");
  }

  @GetMapping("/batman")
  @ResponseBody
  public void addBatman() {
    heroList.add(new Pokemon(1, "Batman"));
    return;
  }

}