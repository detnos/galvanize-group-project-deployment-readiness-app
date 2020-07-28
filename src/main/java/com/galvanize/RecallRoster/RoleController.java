package com.galvanize.RecallRoster;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/roles")
public class RoleController {

    private final RoleRepository repository;

    public RoleController(RoleRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<Role> all() {
        return this.repository.findAll();
    }

    @PostMapping("")
    public Role create(@RequestBody Role role) {
        return this.repository.save(role);
    }

    @GetMapping("/{id}")
    public Role read(@PathVariable Integer id) {

        Optional<Role> role = this.repository.findById(id);

        return role.get();
    }

    @PatchMapping("/{id}")
    public Role update(@RequestBody Role role, @PathVariable Integer id) {

        Optional<Role> roleFromRepo = this.repository.findById(id);

        if (role.getRole() != null) {
            roleFromRepo.get().setRole(role.getRole());
        }

        return this.repository.save(roleFromRepo.get());
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable Integer id) {

        try {
            this.repository.deleteById(id);
            return true;
        }
        catch (Exception e) {
            return false;
        }
    }
}
