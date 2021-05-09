package com.site.labs.model

import javax.persistence.*

// Kotlin data class by default offers setter/getter methods.
@Entity
@Table(name = "GADGET")
data class Gadget(

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val gadgetId : Long,
    val gadgetName : String,
    val gadgetCategory: String?,
    val gadgetAvailability: Boolean = true,
    val gadgetPrice : Double
)
