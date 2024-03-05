// import bcrypt from "bcrypt";
// const hash = bcrypt.hashSync("hello", 1);
// console.log(bcrypt.compareSync("hell", hash));

import jwt from "jsonwebtoken"

const token=jwt.sign({
    data: 'foobar'
  }, 'secrett', { expiresIn: '1h' });
  console.log(token);