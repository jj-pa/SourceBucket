package com.site.labs.controller

import com.site.labs.model.User
import com.site.labs.service.user.UserService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.util.ObjectUtils
import org.springframework.web.bind.annotation.*
import org.springframework.web.util.UriComponentsBuilder

@Api(description = "User", tags = ["User"])
@RestController
class UserController {

    @Autowired
    private lateinit var userService: UserService

    @ApiOperation("User 전체 조회")
    @GetMapping("/users")
    fun fetchUsers(): ResponseEntity<List<User>> {
        return ResponseEntity
            .ok()
            .body(userService.getAllUsers())
    }

    @ApiOperation("User id로 조회")
    @GetMapping("/user/{id}")
    fun fetchUserById(@PathVariable("id") userId: Long):
            ResponseEntity<User> {
        return ResponseEntity
            .ok()
            .body(userService.getUser(userId))
    }

    @ApiOperation("User name으로 조회")
    @GetMapping("/user")
    fun getUserByName(@RequestParam(value = "name") name: String):
            ResponseEntity<User> {
        return ResponseEntity
            .ok()
            .body(userService.getUserByName(name))
    }

    @ApiOperation("User 생성")
    @PostMapping("/user")
    fun addNewUser(
        @RequestBody user: User, uri: UriComponentsBuilder
    ) : ResponseEntity<User> {
        val persistUser = userService.saveUser(user)
        if (ObjectUtils.isEmpty(persistUser))
            return ResponseEntity<User>(HttpStatus.BAD_REQUEST)

        val headers = HttpHeaders()
        headers.location =
            uri.path("/user/{userId}").buildAndExpand(user.userId).toUri()
        return ResponseEntity(headers, HttpStatus.CREATED)
    }

    @ApiOperation("User 삭제")
    @DeleteMapping("/user/{id}")
    fun removeUserById(@PathVariable("id") userId: Long):
            ResponseEntity<Void> {

        if (userService.deleteUser(userId))
            return ResponseEntity<Void>(HttpStatus.NO_CONTENT)

        return ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR)
    }
}