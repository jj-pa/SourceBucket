package com.site.labs.service.user

import com.site.labs.model.User
import com.site.labs.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import javax.transaction.Transactional

@Service
class UserServiceImpl constructor(
    @Autowired private val userRepository: UserRepository
) : UserService {

    override fun getAllUsers(): List<User>? =
        userRepository.findAll()

    override fun getUser(id: Long): User? =
        userRepository.findById(id).orElse(null)

    override fun getUserByName(name: String): User? {
        return userRepository.findByUserName(name)
    }

    @Transactional
    override fun saveUser(user: User): User =
        userRepository.save(user)

    override fun deleteUser(userId: Long): Boolean {
        val user = userRepository.findById(userId)

        if (user.isPresent) {
            userRepository.deleteById(userId)
            return true
        }
        return false
    }
}