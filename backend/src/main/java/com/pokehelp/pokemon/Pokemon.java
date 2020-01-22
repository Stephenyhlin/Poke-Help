package com.pokehelp.pokemon;

public class Pokemon {

    private String name;
    private long id;
    private String competition;
    private long IV;
    private String nature;
    private String[] moves = new String[4];
    private String item;

    public Pokemon(String name, long id, String competition, long IV, String nature, String[] moves, String item) {
        this.name = name;
        this.id = id;
        this.competition = competition;
        this.IV = IV;
        this.nature = nature;
        this.moves = moves.clone();
        this.item = item;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int setName(String name){
        this.name = name;
        return 0;
    }

    @Override
    public boolean equals(Object o){
        final Pokemon other = (Pokemon) o;
        if (other.id == this.id){
            return true;
        }
        return false;
    }

}