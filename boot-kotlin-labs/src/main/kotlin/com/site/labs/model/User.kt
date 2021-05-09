package com.site.labs.model

import javax.persistence.*

@Entity
@Table(name = "USER")
data class User(
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val userId: Long,
    val userName: String,
    val password: String,
    val enabled: Boolean = true,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(foreignKey = ForeignKey(ConstraintMode.NO_CONSTRAINT))
    val role: Role
)