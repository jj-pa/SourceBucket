package com.site.labs.model

import javax.persistence.*

// Kotlin data class by default offers setter/getter methods.
@Entity
@Table(name = "GADGET")
data class Gadget(

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val gadgetId : Long? = null,
    var gadgetName : String? = null,
    var gadgetCategory: String? = null,
    var gadgetAvailability: Boolean = true,
    var gadgetPrice : Double? = 0.0
)
