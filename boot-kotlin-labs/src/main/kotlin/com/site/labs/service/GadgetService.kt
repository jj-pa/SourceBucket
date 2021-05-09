package com.site.labs.service

import com.site.labs.model.Gadget
import org.springframework.stereotype.Service

@Service
interface GadgetService {

    fun getAllGadgets(): List<Gadget>?

    fun getGadget(id: Long): Gadget?

    fun saveGadget(gadget: Gadget): Gadget

    fun getGadgetByName(name: String): Gadget?
}