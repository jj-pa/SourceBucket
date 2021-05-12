package com.site.labs.model

import javax.persistence.*

@Entity
@Table(name = "ROLE")
data class Role(

    @Id
    @Column(name = "role_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val roleId: Long? = null,

    var roleName: String? = null,

    override var createdBy: String = "",
    override var lastModifiedBy: String = "",
): Base()
