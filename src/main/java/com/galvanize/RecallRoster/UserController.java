package com.galvanize.RecallRoster;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<User> all() {
        return this.repository.findAll();
    }

    @PostMapping("")
    public User create(@RequestBody User user) {
        return this.repository.save(user);
    }

    @GetMapping("/{id}")
    public User read(@PathVariable Long id) {
        Optional<User> user = this.repository.findById(id);

        return user.get();
    }

    @PatchMapping("/{id}")
    public User update(@PathVariable Long id, @RequestBody User user) {
        User originalUser = this.repository.findById(id).get();

        if (!user.getFirstName().equals(originalUser.getFirstName())) {
            originalUser.setFirstName(user.getFirstName());
        }
        if (!user.getLastName().equals(originalUser.getLastName())) {
            originalUser.setLastName(user.getLastName());
        }
        if (user.getEdipi() != originalUser.getEdipi()) {
            originalUser.setEdipi(user.getEdipi());
        }
        if (!user.getUnit().equals(originalUser.getUnit())) {
            originalUser.setUnit(user.getUnit());
        }
        if (!user.getBase().equals(originalUser.getBase())) {
            originalUser.setBase(user.getBase());
        }
        if (!user.getAfsc().equals(originalUser.getAfsc())) {
            originalUser.setAfsc(user.getAfsc());
        }
        if (user.getRoleId() != originalUser.getRoleId()) {
            originalUser.setRoleId(user.getRoleId());
        }
        if (user.getRoleHeiararchy() != originalUser.getRoleHeiararchy()) {
            originalUser.setRoleHeiararchy(user.getRoleHeiararchy());
        }
        if (!user.getEmail().equals(originalUser.getEmail())) {
            originalUser.setEmail(user.getEmail());
        }
        if (!user.getPassword().equals(originalUser.getPassword())) {
            originalUser.setPassword(user.getPassword());
        }
        if (!user.getGrade().equals(originalUser.getGrade())) {
            originalUser.setGrade(user.getGrade());
        }

        return this.repository.save(originalUser);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable Long id) {

        try {
            this.repository.deleteById(id);
            return true;
        }
        catch (Exception e) {
            return false;
        }
    }
}
