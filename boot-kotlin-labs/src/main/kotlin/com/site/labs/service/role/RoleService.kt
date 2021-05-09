package com.site.labs.service.role

import com.site.labs.model.Role
import org.springframework.stereotype.Service

@Service
interface RoleService {

    fun getAllRoles(): List<Role>?

    fun saveRole(role: Role): Role
}