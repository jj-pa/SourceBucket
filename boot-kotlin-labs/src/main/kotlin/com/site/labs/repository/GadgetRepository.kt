package com.site.labs.repository

import com.site.labs.model.Gadget
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface GadgetRepository : JpaRepository<Gadget, Long> {
    fun findAllBy(): List<Gadget>?
    fun findByGadgetName(gadgetName: String): Gadget?
}