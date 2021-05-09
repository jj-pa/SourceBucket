package com.site.labs.model

import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.LocalDateTime
import javax.persistence.Column
import javax.persistence.MappedSuperclass

@MappedSuperclass
abstract class Base {
    abstract val createdBy: String

    @CreatedDate
    @Column(updatable = false)
    open val createdDate: LocalDateTime = LocalDateTime.now()

    abstract val lastModifiedBy: String

    @LastModifiedDate
    open val lastModifiedDate: LocalDateTime = LocalDateTime.now()
}