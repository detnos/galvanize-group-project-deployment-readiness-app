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

        if (user.getFirstName() != null) {
            originalUser.setFirstName(user.getFirstName());
        }
        if (user.getLastName() != null) {
            originalUser.setLastName(user.getLastName());
        }
        if (user.getEdipi() != null) {
            originalUser.setEdipi(user.getEdipi());
        }
        if (user.getUnit() != null) {
            originalUser.setUnit(user.getUnit());
        }
        if (user.getBase() != null) {
            originalUser.setBase(user.getBase());
        }
        if (user.getAfsc() != null) {
            originalUser.setAfsc(user.getAfsc());
        }
        if (user.getRoleId() != null) {
            originalUser.setRoleId(user.getRoleId());
        }
        if (user.getRoleHeiararchy() != null) {
            originalUser.setRoleHeiararchy(user.getRoleHeiararchy());
        }
        if (user.getEmail() != null) {
            originalUser.setEmail(user.getEmail());
        }
        if (user.getPassword() != null) {
            originalUser.setPassword(user.getPassword());
        }
        if (user.getGrade() != null) {
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
