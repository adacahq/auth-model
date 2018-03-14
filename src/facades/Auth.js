class AuthFacade {
  constructor(usersRepository) {
    this.userRepository = usersRepository;
  }

  login(request) {
    return false;
  }
}

module.exports = AuthFacade;