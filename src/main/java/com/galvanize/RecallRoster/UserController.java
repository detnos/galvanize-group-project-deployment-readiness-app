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
    public User read(@PathVariable Map<String, String> querystring) {
        String strId = querystring.get("id");
        Long id = Long.parseLong(strId);
        Optional<User> user = this.repository.findById(id);

        return user.get();
    }

    @PatchMapping("/{id}")
    public User update(
            @RequestBody User user,
            @PathVariable Map<String, String> querystring
    ) {

        String strId = querystring.get("id");
        Long id = Long.parseLong(strId);
        Optional<User> userFromRepo = this.repository.findById(id);

        if (user.getFirstName() != null) {
            userFromRepo.get().setFirstName(user.getFirstName());
        }

        if (user.getLastName() != null) {
            userFromRepo.get().setLastName(user.getLastName());
        }

        if (user.getUnit() != null) {
            userFromRepo.get().setUnit(user.getUnit());
        }

        if (user.getBase() != null) {
            userFromRepo.get().setBase(user.getBase());
        }

        if (user.getAfsc() != null) {
            userFromRepo.get().setAfsc(user.getAfsc());
        }

        if (user.getRole() != null) {
            userFromRepo.get().setRole(user.getRole());
        }

        if (user.getEmail() != null) {
            userFromRepo.get().setEmail(user.getEmail());
        }
        if (user.getPassword() != null) {
            userFromRepo.get().setPassword(user.getPassword());
        }

        if (user.getRank() != null) {
            userFromRepo.get().setRank(user.getRank());
        }

        return this.repository.save(userFromRepo.get());
    }

    @DeleteMapping("/{id}")
    public HashMap<String, Integer> delete(
            @PathVariable Map<String, String> querystring
    ) {
        HashMap<String, Integer> result = new HashMap<>();

        String strId = querystring.get("id");
        Long id = Long.parseLong(strId);
        Optional<User> user = this.repository.findById(id);


        if (user.toString() != "Optional.empty") {
            this.repository.delete(user.get());
            Iterable<User> all = this.repository.findAll();
            Integer count = 0;
            for (User u: all ) { count++; }

            result.put("count", count);
        } else {
            result.put("no-action taken; user not found with id " + strId, 0);
        }

        return result;
    }
}
