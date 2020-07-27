package com.galvanize.RecallRoster;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/roster")
public class RecallRosterController {

    private final RecallRosterRepository repository;

    public RecallRosterController(RecallRosterRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<RecallRoster> all() {
        return this.repository.findAll();
    }

    @PostMapping("")
    public RecallRoster create(@RequestBody RecallRoster roster) {
        return this.repository.save(roster);
    }
}
