package com.site.labs.model

import javax.persistence.*

@Entity
@Table(name = "ROLE")
data class Role(
    @Id
    @Column(name = "role_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val roleId: Long,
    val roleName: String
)
