package com.site.labs.model

import javax.persistence.*

// Kotlin data class by default offers setter/getter methods.
@Entity
@Table(name = "GADGET")
class Gadget(gadgetName: String, gadgetCategory: String, gadgetAvailability: Boolean, gadgetPrice: Double) {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var gadgetId: Long? = null

    var gadgetName: String = gadgetName
    var gadgetCategory: String = gadgetCategory
    var gadgetAvailability: Boolean = gadgetAvailability
    var gadgetPrice: Double = gadgetPrice

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Gadget

        if (gadgetId != other.gadgetId) return false
        if (gadgetName != other.gadgetName) return false
        if (gadgetCategory != other.gadgetCategory) return false
        if (gadgetAvailability != other.gadgetAvailability) return false
        if (gadgetPrice != other.gadgetPrice) return false

        return true
    }

    override fun hashCode(): Int {
        return gadgetId?.hashCode() ?: 0
    }

    override fun toString(): String {
        return "Gadget(gadgetId=$gadgetId, gadgetName='$gadgetName', gadgetCategory='$gadgetCategory', gadgetAvailability=$gadgetAvailability, gadgetPrice=$gadgetPrice)"
    }
}