//FUNCIONES
const data = []
let data_id = 0;

//LISTAR TODO
export const findAll = () =>{
  return data;
};

//BUSCAR por ID
//--> COMO CONVERTIR NUMB
//find retorna 1 solo elemento
export const findOne = (id) => {
  return data.find((p) => p.id === Number(id));
};

//CREATE
export const store = (product) => {
  product.id = data_id + 1;
  data.push(product);
  data_id=product.id;
};


//UPDATE
//--->FINDINDEX(RETORNA LA POSICION(0)), FIND
export const update = (id, product) =>{
  const index = data.findIndex((p) => p.id === Number(id));
  data[index] = {
    ...data[index],
    ...product
  };
};

//FILTER RETORNA UN ARRAY
export const remove = (id) => {
  const product = data.filter((p) => p.id !== Number(id));
  data.length = 0; //LIMPIA EL ARRAY
  data.push(...product);
};
