//FUNCIONES
const data = [
  {
    id:1,
    name:"Pepe",
    last_name: "Perez",
  },
  {
    id:2,
    name:"Cristopher",
    last_name: "Gutierrez",
  },
  {
    id:3,
    name:"Edward",
    last_name: "Rojas",
  },
];
let data_id = 0;

//LISTAR TODO
export const findAll = () =>{
  return data;
};

//BUSCAR por ID
//--> COMO CONVERTIR NUMB
//find retorna 1 solo elemento
export const findOne = (id) => {
  return data.find((u) => u.id === Number(id));
};

//CREATE
export const store = (user) => {
  user.id = data_id + 1;
  data.push(user);
  data_id=user.id;
};


//UPDATE
//--->FINDINDEX(RETORNA LA POSICION(0)), FIND
export const update = (id, user) =>{
  const index = data.findIndex((u) => u.id === Number(id));
  data[index] = {
    ...data[index],
    ...user,
  };
};

//FILTER RETORNA UN ARRAY
export const remove = (id) => {
  const users = data.filter((u) => u.id !== Number(id));
  data.length = 0; //LIMPIA EL ARRAY
  data.push(...users);
};
