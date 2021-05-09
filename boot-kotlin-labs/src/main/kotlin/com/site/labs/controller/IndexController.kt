package com.site.labs.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class IndexController {

    @GetMapping(path = ["/"])
    fun index() = "Hello Spring!"
}