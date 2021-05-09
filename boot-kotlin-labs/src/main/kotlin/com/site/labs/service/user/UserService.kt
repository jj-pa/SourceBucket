package com.site.labs.service.user

import com.site.labs.model.User
import org.springframework.stereotype.Service
import java.util.*

@Service
interface UserService {

    fun getAllUsers(): List<User>?
    fun getUser(id: Long): User?
    fun saveUser(user: User): User
    fun getUserByName(name: String): User?
    fun deleteUser(userId: Long): Boolean
}