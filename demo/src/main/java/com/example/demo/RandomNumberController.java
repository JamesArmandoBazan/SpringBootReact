package com.example.restservice;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RandomNumberController {
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/random")
        @CrossOrigin(origins = "http://localhost:3000")
    public Random random(@RequestParam(value = "multi", defaultValue = "1") String multi) {
        return new Random(counter.incrementAndGet(), multi);
    }
}