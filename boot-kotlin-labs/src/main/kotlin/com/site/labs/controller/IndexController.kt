package com.site.labs.controller

import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@Api(description = "Index Controller", tags = ["index"])
@RestController
class IndexController {

    @ApiOperation("index get")
    @GetMapping(path = ["/"])
    fun index() = "Hello Spring!"
}
