import Users from '../models/users.js'
import moment from 'moment';
import jwt from 'jsonwebtoken';

export const getUsers = async (req, res) => {
    try {const usrs = await Users.find();
        console.error(usrs);
        res.send(usrs);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
};

export const createUsers = async (req, res) => {
  let foundUser = await Users.findOne({ email: req.body.email });
  if (foundUser === null) {
    console.log(req.body);
    let {  email, contrasenia } = req.body;
    if (email?.length && contrasenia?.length) {
      const person = new Users({
        name: email,
        email: email,
        password: contrasenia,
      });
      await person.save();
      return res.status(201).json({ person });
    }else{
        return res.status(400).json({msg: "Por favor, incluya todos los valores en el cuerpo de la solicitud"});
    }
  } else {
    return res.status(400).json({ msg: "Ese eMail ya está en uso" });
  }
};

export const updateUsers = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaModificacion= moment().toDate();
        console.log(req.body);
        const updatedUser = await Users.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.json(updatedUser);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const deleteUsers = async (req,res) => {
    try {
        console.log(req);
        req.body.fechaFin = moment().toDate();
        req.body.activo = false;
        const userRemoved = await Users.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!userRemoved) return res.sendStatus(404).json('Not Founded');
        return res.json(userRemoved);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
}

export const getUser = async (req,res) => {
    try {
        const usr = await Users.findById(req.params.id);
        if (!usr) return res.sendStatus(404).json('Not Founded');
        return res.json(usr);
    } catch(error) {
        console.error(error.message);
        return res.status(500).json({message: error.message});
    }
    
};

export const login = async (req, res) => {
  const { email, contrasenia } = req.body;

  if (!email || !contrasenia) {
    return res.status(400).json({
      msg: "Consulta erronea. Por favor indique eMail y contraseñaen el area correspondiente",
    });
  }

  let foundUser = await Users.findOne({ email: req.body.email });
  if (foundUser) {
    const isMatch = await foundUser.comparePassword(contrasenia);

    if (isMatch) {
      const token = jwt.sign(
        { id: foundUser._id, name: foundUser.name },
        process.env.REACT_APP_JWT_SECRET,
        {
          expiresIn: "60m",
        }
      );

      return res.status(200).json({ token });
    } else {
      return res.status(400).json({ msg: "Bad password" });
    }
  } else {
    return res.status(400).json({ msg: "Bad credentails" });
  }
};