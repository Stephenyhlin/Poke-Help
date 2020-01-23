package com.pokehelp.backend;

public class Build {

    public String name;
    public long id;
    public String competition;
    public long IV;
    public String nature;
    public String[] moves = new String[4];
    //private String item;

    public Build(String name, long id, String competition, long IV, String nature, String[] moves) {
        this.name = name;
        this.id = id;
        this.competition = competition;
        this.IV = IV;
        this.nature = nature;
        this.moves = moves.clone();
    }

    // public String getName() {
    //     return this.name;
    // }

    // public String getId() {
    //     return this.id;
    // }

    // public String getCompetition() {
    //     return this.competition;
    // }

    // public String getIV() {
    //     return this.IV;
    // }

    // public String getNature() {
    //     return this.nature;
    // }

    // public String[] getMoves() {
    //     return this.moves;
    // }

    @Override
    public boolean equals(Object o){
        final Build other = (Build) o;
        if (other.id == this.id){
            return true;
        }
        return false;
    }

    @Override
    public String toString() {
        String stringify = this.name + " " + this.id + " " + this.competition + " " + this.IV;
        return stringify;
    }

}