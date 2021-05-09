package com.site.labs.service.role

import com.site.labs.model.Role
import com.site.labs.repository.RoleRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import javax.transaction.Transactional

@Service
class RoleServiceImpl constructor(
    @Autowired private val roleRepository: RoleRepository) : RoleService {

    override fun getAllRoles(): List<Role>? =
        roleRepository.findAll()

    @Transactional
    override fun saveRole(role: Role): Role =
        roleRepository.save(role)
}