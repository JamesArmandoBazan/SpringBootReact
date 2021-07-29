package com.example.restservice;

public class Random {

    private final long id;
    private final String numberGiven;
    private int randomNumberValue;
    private int baseMultiple;
    private int randomNumber;

    public Random(long id, String numberGiven) {
        this.numberGiven = numberGiven;
        this.baseMultiple = Integer.parseInt(numberGiven) * 50;
        this.randomNumber = (int)Math.floor(Math.random()*((baseMultiple * 2)-baseMultiple+baseMultiple)+baseMultiple);
        this.id = id;
        this.randomNumberValue = randomNumber;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return String.valueOf(randomNumberValue);
    }
}