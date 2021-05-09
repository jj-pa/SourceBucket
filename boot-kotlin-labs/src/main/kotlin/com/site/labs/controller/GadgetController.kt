package com.site.labs.controller

import com.site.labs.model.Gadget
import com.site.labs.repository.GadgetRepository
import com.site.labs.service.GadgetService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.util.ObjectUtils
import org.springframework.web.bind.annotation.*
import org.springframework.web.util.UriComponentsBuilder

@Api(description = "Gadget", tags = ["Gadget"])
@RestController
class GadgetController {

    @Autowired
    private lateinit var gadgetRepository: GadgetRepository

    @Autowired
    private lateinit var gadgetService: GadgetService

    @ApiOperation("Gadget 전체 조회")
    @GetMapping("/gadgets")
    fun fetchGadgets(): ResponseEntity<List<Gadget>> {
        return ResponseEntity
            .ok()
            .body(gadgetService.getAllGadgets())
    }

    @GetMapping("/gadget/{id}")
    fun fetchGadgetById(@PathVariable("id") gadgetId: Long):
            ResponseEntity<Gadget> {
        return ResponseEntity
            .ok()
            .body(gadgetService.getGadget(gadgetId))
    }

    @GetMapping("/gadget")
    fun getGadgetByName(@RequestParam(value = "name") name: String): ResponseEntity<Gadget> {
        return ResponseEntity
            .ok()
            .body(gadgetService.getGadgetByName(name))
    }

    @PostMapping("/gadget")
    fun addNewGadget(@RequestBody gadget: Gadget, uri: UriComponentsBuilder) : ResponseEntity<Gadget> {
        val persistedGadget = gadgetRepository.save(gadget)
        if (ObjectUtils.isEmpty(persistedGadget)) {
            return ResponseEntity<Gadget>(HttpStatus.BAD_REQUEST)
        }
        val headers = HttpHeaders()

        headers.setLocation(uri.path("/gadget/{gadgetId}").buildAndExpand(gadget.gadgetId).toUri())
        return ResponseEntity(headers, HttpStatus.CREATED)
    }

    @PutMapping("/gadgets/{id}")
    fun updateGadgetById(@PathVariable("id") gadgetId: Long,
        @RequestBody gadget: Gadget): ResponseEntity<Gadget> {
        return gadgetRepository.findById(gadgetId).map {
            gadgetDetils ->
                val updatedGadget: Gadget = gadgetDetils.copy(
                    gadgetCategory = gadget.gadgetCategory,
                    gadgetName = gadget.gadgetName,
                    gadgetPrice = gadget.gadgetPrice,
                    gadgetAvailability = gadget.gadgetAvailability
                )
                ResponseEntity(gadgetRepository.save(updatedGadget), HttpStatus.OK)
        }.orElse(ResponseEntity<Gadget>(HttpStatus.INTERNAL_SERVER_ERROR))
    }

    @DeleteMapping("/gadgets/{id}")
    fun removeGadgetById(@PathVariable("id") gadgetId: Long):
            ResponseEntity<Void> {
        val gadget = gadgetRepository.findById(gadgetId)
        if (gadget.isPresent) {
            gadgetRepository.deleteById(gadgetId)
            return ResponseEntity<Void>(HttpStatus.NO_CONTENT)
        }
        return ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR)
    }

    @DeleteMapping("/gadgets")
    fun removeGadgets(): ResponseEntity<Void> {
        gadgetRepository.deleteAll()
        return ResponseEntity<Void>(HttpStatus.OK)
    }

}