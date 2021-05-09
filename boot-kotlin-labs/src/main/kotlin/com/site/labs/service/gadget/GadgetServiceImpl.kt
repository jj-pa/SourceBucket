package com.site.labs.service.gadget

import com.site.labs.model.Gadget
import com.site.labs.repository.GadgetRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import javax.transaction.Transactional

@Service
class GadgetServiceImpl constructor(
    @Autowired private val gadgetRepository: GadgetRepository) : GadgetService {

    override fun getAllGadgets(): List<Gadget>? =
        gadgetRepository.findAllBy()

    override fun getGadget(id: Long): Gadget? =
        gadgetRepository.findById(id).orElse(null)

    override fun getGadgetByName(name: String): Gadget? {
        return gadgetRepository.findByGadgetName(name);
    }

    @Transactional
    override fun saveGadget(gadget: Gadget): Gadget =
        gadgetRepository.save(gadget)
}