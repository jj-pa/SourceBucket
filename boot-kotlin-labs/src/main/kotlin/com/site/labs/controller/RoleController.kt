package com.site.labs.controller

import com.site.labs.model.Role
import com.site.labs.service.role.RoleService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.util.ObjectUtils
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.util.UriComponentsBuilder

@Api(description = "Role", tags = ["Role"])
@RestController
class RoleController {

    @Autowired
    private lateinit var roleService: RoleService

    @ApiOperation("Role 전체 조회")
    @GetMapping("/roles")
    fun fetchRoles(): ResponseEntity<List<Role>> {
        return ResponseEntity
            .ok()
            .body(roleService.getAllRoles())
    }

    @ApiOperation("Role 생성")
    @PostMapping("role")
    fun addNewRole(
        @RequestBody role: Role, uri: UriComponentsBuilder
    ) : ResponseEntity<Role> {
        val persistedRole = roleService.saveRole(role)
        if (ObjectUtils.isEmpty(persistedRole))
            return ResponseEntity.badRequest().build()

        val headers = HttpHeaders()

        headers.location = uri.path("/role/{roleId}").buildAndExpand(role.roleId).toUri()
        return ResponseEntity(headers, HttpStatus.CREATED)
    }
}