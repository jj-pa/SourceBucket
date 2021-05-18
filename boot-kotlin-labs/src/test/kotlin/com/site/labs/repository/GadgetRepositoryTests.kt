package com.site.labs.repository

import com.site.labs.model.Gadget
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit.jupiter.SpringExtension
import javax.persistence.EntityManager
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals
import kotlin.test.assertNotNull

@ExtendWith(SpringExtension::class)
@SpringBootTest
class GadgetRepositoryTests {

    @Autowired
    private lateinit var gadgetRepository: GadgetRepository

    @Autowired
    private lateinit var entityManager: EntityManager

    @BeforeEach
    fun setUp() {
        gadgetRepository.save(Gadget("MyGadget", "Testing", false, 1500.0))
    }

    @Test
    fun `Gadget 찾기`() {
        println("----- Gadget 찾기 -----")

        //given
        val name = "MyGadget"
        entityManager.clear() //영속성 컨텍스트 클리어

        //when
        val gadget: Gadget? = gadgetRepository.findByGadgetName("MyGadget")

        //then
        assertNotNull(gadget)
        assertEquals(name, gadget.gadgetName)
        println("----- Gadget 찾기 -----")
    }

    @Test
    fun `전체 Gadget 찾기`() {
        println("----- 전체 Gadget 찾기 -----")

        //given
        entityManager.clear()

        //when
        val gadgets: List<Gadget>? = gadgetRepository.findAllBy();

        //then
        assertNotNull(gadgets)
        assertNotEquals(gadgets.size, 0)
        println("----- 전체 Gadget 찾기 -----")
    }
}