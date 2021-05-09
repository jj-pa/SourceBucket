package com.site.labs.model

import javax.persistence.*

@Entity
@Table(name = "USER")
data class User(
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val userId: Long,
    val userEmail: String, // 이메일
    val password: String, // 패스워드
    val userName: String, // 이름
    val mobile: String, // 연락처(휴대폰)

    val enabled: Boolean = true, // 사용여부
    val loginFailCnt: Int = 0, // 비밀번호 실패횟수

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(foreignKey = ForeignKey(ConstraintMode.NO_CONSTRAINT))
    val userRole: Role,

    override val createdBy: String,
    override val lastModifiedBy: String
): Base()