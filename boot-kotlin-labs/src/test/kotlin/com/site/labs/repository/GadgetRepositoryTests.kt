package com.site.labs.repository

import com.site.labs.model.Gadget
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager
import kotlin.test.assertEquals

@DataJpaTest(showSql = true)
class GadgetRepositoryTests @Autowired constructor (
    private val entityManager: TestEntityManager,
    private val gadgetRepository: GadgetRepository
) {
    @Test
    fun testSaveNewGadget() {
        val gadget = Gadget()
        gadget.gadgetName = "MyGadget"
        gadget.gadgetCategory = "Testing"
        gadget.gadgetAvailability = false
        gadget.gadgetPrice = 1500.0

        entityManager.persist(gadget)

        val repositoryGadget: Gadget? = gadgetRepository.findByGadgetName("MyGadget")

        assertEquals("MyGadget", repositoryGadget?.gadgetName)
    }
}