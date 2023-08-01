module.exports = (err, req, res, next) => {
  let message = `Internal Server Error`;
  let status = 500;

  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      message = err.errors[0].message;
      status = 400;
      break;
    case "wrong":
      message = `Email/Password is wrong`;
      status = 401;
      break;
    case "email_required":
      message = `email is required`;
      status = 400;
      break;
    case "password_required":
      message = `password is required`;
      status = 400;
      break;
    default:
      break;
  }

  res.status(status).json({ message: message });
};
