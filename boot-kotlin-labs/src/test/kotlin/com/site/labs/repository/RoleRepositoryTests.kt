package com.site.labs.repository

import com.site.labs.model.Role
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager
import kotlin.test.assertEquals

@DataJpaTest
class RoleRepositoryTests @Autowired constructor(
    private val entityManager: TestEntityManager,
    private val roleRepository: RoleRepository
) {

    @Test
    fun testSaveNewRole() {
        val role = Role()
        role.roleName = "AdminTest"
        role.createdBy = "tester"
        role.lastModifiedBy = "tester"

        entityManager.persist(role)

        val repositoryRole: Role? = roleRepository.findByRoleName("AdminTest")

        assertEquals("AdminTest", repositoryRole?.roleName)
    }
}