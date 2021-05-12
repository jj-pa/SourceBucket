package com.site.labs.controller

import com.site.labs.model.Gadget
import com.site.labs.repository.GadgetRepository
import com.site.labs.service.gadget.GadgetService
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

    @ApiOperation("Gadget id로 조회")
    @GetMapping("/gadget/{id}")
    fun fetchGadgetById(@PathVariable("id") gadgetId: Long):
            ResponseEntity<Gadget> {
        return ResponseEntity
            .ok()
            .body(gadgetService.getGadget(gadgetId))
    }

    @ApiOperation("Gadget name으로 조회")
    @GetMapping("/gadget")
    fun getGadgetByName(@RequestParam(value = "name") name: String): ResponseEntity<Gadget> {
        return ResponseEntity
            .ok()
            .body(gadgetService.getGadgetByName(name))
    }

    @ApiOperation("Gadget 생성")
    @PostMapping("/gadget")
    fun addNewGadget(
        @RequestBody gadget: Gadget, uri: UriComponentsBuilder
    ) : ResponseEntity<Gadget> {
        val persistedGadget = gadgetRepository.save(gadget)
        if (ObjectUtils.isEmpty(persistedGadget)) {
            return ResponseEntity<Gadget>(HttpStatus.BAD_REQUEST)
        }
        val headers = HttpHeaders()

        headers.setLocation(uri.path("/gadget/{gadgetId}").buildAndExpand(gadget.gadgetId).toUri())
        return ResponseEntity(headers, HttpStatus.CREATED)
    }

    @ApiOperation("Gadget 수정")
    @PutMapping("/gadget/{id}")
    fun updateGadgetById(@PathVariable("id") gadgetId: Long,
        @RequestBody gadget: Gadget): ResponseEntity<Gadget> {
        return gadgetRepository.findById(gadgetId).map {
            gadgetDetails ->
                gadgetDetails.gadgetCategory = gadget.gadgetCategory
                gadgetDetails.gadgetName = gadget.gadgetName
                gadgetDetails.gadgetPrice = gadget.gadgetPrice
                gadgetDetails.gadgetAvailability = gadget.gadgetAvailability
                ResponseEntity(gadgetRepository.save(gadgetDetails), HttpStatus.OK)
        }.orElse(ResponseEntity<Gadget>(HttpStatus.INTERNAL_SERVER_ERROR))
    }

    @ApiOperation("Gadget id로 삭제")
    @DeleteMapping("/gadget/{id}")
    fun removeGadgetById(@PathVariable("id") gadgetId: Long):
            ResponseEntity<Void> {
        val gadget = gadgetRepository.findById(gadgetId)
        if (gadget.isPresent) {
            gadgetRepository.deleteById(gadgetId)
            return ResponseEntity<Void>(HttpStatus.NO_CONTENT)
        }
        return ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR)
    }

    @ApiOperation("Gadget 전체 삭제")
    @DeleteMapping("/gadgets")
    fun removeGadgets(): ResponseEntity<Void> {
        gadgetRepository.deleteAll()
        return ResponseEntity<Void>(HttpStatus.OK)
    }
}