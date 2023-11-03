const users = [
  {
    id: 1,
    city: "São Paulo",
    name: "josé da silva",
    age: 21,
    weight: 70,
    sex: "m",
    height: 1.7,
    salary: 1000,
    married: false,
    active: true,
  },
  {
    id: 2,
    city: "Rio de Janeiro",
    name: "maria clementina correia",
    age: 17,
    weight: 70,
    sex: "f",
    height: 1.6,
    salary: 2000,
    married: false,
    active: true,
  },
  {
    id: 3,
    city: "Rio de Janeiro",
    name: "antonieta francesa rainha",
    age: 28,
    weight: 70,
    sex: "f",
    height: 1.65,
    salary: 3000,
    married: true,
    active: true,
  },
  {
    id: 4,
    city: "Rio de Janeiro",
    name: "silva melo de aguiar",
    age: 38,
    weight: 70,
    sex: "m",
    height: 1.85,
    salary: 5000,
    married: true,
    active: true,
  },
  {
    id: 5,
    city: "São Paulo",
    name: "joão carvalho da conceição",
    age: 48,
    weight: 70,
    sex: "m",
    height: 1.9,
    salary: 9000,
    married: false,
    active: true,
  },
  {
    id: 6,
    city: "São Paulo",
    name: "zé rico programador",
    age: 62,
    weight: 90,
    sex: "m",
    height: 1.82,
    salary: 30000, // 30 mil
    married: false,
    active: true,
  },
];

const userProducts = [
  {
    id: 1,
    userId: 1,
    name: "Maçã",
    category: "Comida",
    price: 10,
  },
  {
    id: 2,
    userId: 1,
    name: "Blusa",
    category: "Roupa",
    price: 50,
  },
  {
    id: 3,
    userId: 2,
    name: "Calça Jeans",
    category: "Roupa",
    price: 300,
  },
  {
    id: 4,
    userId: 2,
    name: "Sapatos",
    category: "Roupa",
    price: 100,
  },
  {
    id: 5,
    userId: 2,
    name: "Sapatos",
    category: "Roupa",
    price: 120,
  },
  {
    id: 6,
    userId: 2,
    name: "Toalha",
    category: "Cama e Mesa",
    price: 35,
  },
  {
    id: 7,
    userId: 3,
    name: "Uber",
    category: "Transporte",
    price: 20,
  },
  {
    id: 8,
    userId: 2,
    name: "Uber",
    category: "Transporte",
    price: 20,
  },
  {
    id: 9,
    userId: 3,
    name: "Taxi",
    category: "Transporte",
    price: 30,
  },
  {
    id: 10,
    userId: 6,
    name: "Computador",
    category: "Tecnologia",
    price: 5000,
  },
];

class User {
  constructor(users, userProducts) {
    this.users = users;
    this.userProducts = userProducts;
  }

  // 1. Encontrar um usuário pelo nome;
  findUserByName(userName) {
    return this.users.find((user) => {
      if (user.name === userName) return user;
    });
  }

  // 2. Encontrar um usuário pelo valor de uma propriedade qualquer;
  findUserByPropValue(prop, value) {
    return this.users.find((user) => {
      if (user[`${prop}`] === value) return user;
    });
  }

  // 3. Encontrar a usuária do sexo feminino com o salário maior.
  findWomanWithHighestSalary() {
    const women = this.users.filter((user) => {
      if (user.sex === "f") return user;
    });

    return women.reduce((accumulate, woman) => {
      if (woman.salary > accumulate.salary) {
        return (accumulate = woman);
      }
    });
  }

  // 4. Encontre os usuários de um dado estado e com peso maior
  // que um dado peso;
  filterUsersByStateAndByWeight(city, weight) {
    return this.users.filter((user) => {
      if (user.city === city && user.weight > weight) {
        return user;
      }
    });
  }

  // 5. Encontre os usuários de um dado estado ou que são casados;
  filterUsersByStateAndByMarried(city) {
    return this.users.filter((user) => {
      if (user.city === city || user.married) {
        return user;
      }
    });
  }

  // 6. Cria uma função que recebe a lista de usuários e retorna
  // uma lista com o IMC dos respectivos usuários;
  // OBS: imc = peso/(altura x altura)
  getAllUserIMC() {
    return this.users.map((user) => {
      return (user.weight / (user.height * user.height)).toFixed(2);
    });
  }

  // 7. Cria uma função que recebe a lista de usuários e retorna
  // a lista dos nomes completos capitalizados;
  // OBS: o nome 'joao da silva' capitalizado, seria: Joao Da Silva
  // Dica1: Criar uma função auxiliar somente para capitalizar
  // uma única palavra.
  // Dica2: Criar outra função auxiliar para capitalizar
  // um nome completo, com mais de uma palavra.
  // Usar: split e join e a função da dica1

  capitalizeAllUserName() {
    const capitalizeWord = (word) => {
      const firstLetter = word[0].toUpperCase();
      return word.split("").toSpliced(0, 1, firstLetter).join("");
    };

    return this.users.map((user) => {
      return user.name
        .split(" ")
        .map((word) => {
          return capitalizeWord(word);
        })
        .join(" ");
    });
  }

  // 8. Calcular a média de altura de todos os usuários;
  calculateAverageHeight() {
    return (
      this.users
        .map((user) => user.height)
        .reduce((accumulate, height) => accumulate + height) / this.users.length
    ).toFixed(2);
  }
  // 9. Retornar os usuários com altura abaixo da média;
  getUsersByBelowAverageHeight() {
    return this.users.filter((user) => {
      if (user.height < this.calculateAverageHeight()) {
        return user;
      }
    });
  }

  // 10. Verificar se um dado produto foi consumido
  // mais de uma vez.

  verificarSeDadoProdutoFoiConsumidoMaisDeUmaVez(product) {
    return `o produto ${product} foi consumido ${
      this.userProducts.filter((e) => {
        if (e.name === product) {
          return e;
        }
      }).length
    } vezes`;
  }

  // 11. Verificar se um dado produto foi consumido
  // mais de um usuário.
  verificarSeProdutoFoiConsumidoPorMaisDeUmUser(product) {
    const products = this.userProducts.filter((e) => {
      if (e.name === product) return e;
    });

    const organizedProducts = products.reduce((accumalate, product) => {
      if (!accumalate.consumidores) {
        accumalate = {
          name: product.name,
          consumidores: [{ userId: product.userId }],
        };
      }
      if (
        !accumalate.consumidores.find((e) => {
          if (e.userId === product.userId) {
            return e;
          }
        })
      ) {
        accumalate.consumidores.push({ userId: product.userId });
      }

      return accumalate;
    }, {});

    return organizedProducts;
  }

  // 12. Verificar se existe algum produto
  // que foi comprado por mais de um usuário
  VerificarSeExistAlgumProdutoCompradoPorMaisDeUmUser() {
    return this.userProducts.reduce((prev, curr) => {
      const quantidade = this.userProducts.filter((e) => {
        if (e.name === curr.name) return e;
      });

      if (quantidade.length > 1) {
        const exist = prev.find((e) => {
          if (e.name === curr.name) return e;
        });

        if (!exist) {
          prev.push({
            name: curr.name,
            consumidores: [{ userId: curr.userId }],
          });
        }

        if (exist) {
          const index = prev.indexOf(exist);
          if (
            !prev[index].consumidores.find((e) => {
              if (e.userId === curr.userId) return e;
            })
          ) {
            prev[index].consumidores.push({ userId: curr.userId });
          } else {
            prev.splice(index, 1);
          }
        }
      }
      return prev;
    }, []);
  }

  // 13. Retornar a lista de usuários sem o usuário mais novo da lista.
  listOfUsersWithoutNewestuser() {
    const arr = [...this.users];
    arr.pop();
    return arr;
  }

  // 14. Retornar um objeto que mapeia usuários pelo próprio
  // id do usuário.
  // ex: {
  //   1: {
  //     id: 1,
  //     city: "São Paulo",
  //     name: "josé da silva",
  //     age: 21,
  //     weight: 70,
  //     sex: "m",
  //     height: 1.7,
  //     salary: 1000,
  //     married: false,
  //     active: true,
  //   },
  //   .
  //   .
  //   .
  // }

  mapUserById() {
    return this.users.reduce((acumulate, user) => {
      return (acumulate = { ...acumulate, [user.id]: { ...user } });
    }, {});
  }

  // 15. Contar a quantidade de usuários de uma dada cidade;
  numberUserInCity(city) {
    return this.users.reduce((acumulate, user) => {
      if (user.city === city) {
        return (acumulate += 1);
      }
      return acumulate;
    }, 0);
  }

  // 16. Agrupar usuários pela cidade;
  groupUsersByCity() {
    return this.users.reduce((acumulate, user) => {
      if (acumulate[user.city]) {
        acumulate[user.city].push(user);
      }

      if (!acumulate[user.city]) {
        acumulate[user.city] = [];
        acumulate[user.city].push(user);
      }

      return { ...acumulate };
    }, {});
  }

  // 17. Contar a quantidade de usuários por cidade;

  countNumberOfUsersByCity() {
    return this.users.reduce((acumulate, user) => {
      if (acumulate[user.city]) {
        acumulate[user.city].quantidade += 1;
      }
      if (!acumulate[user.city]) {
        acumulate[user.city] = { quantidade: 0 };
        acumulate[user.city].quantidade += 1;
      }
      return { ...acumulate };
    }, {});
  }

  // 18. Obter a média salarial dos usuários por cidade;

  getAverageSalaryByCity() {
    const usersFilteredByCity = this.users.reduce((accumulate, user) => {
      const city = accumulate.find((e) => {
        if (e["name"] === user.city) {
          return e;
        }
      });

      if (!city) {
        accumulate.push({ name: user.city, users: [user] });
      }
      if (city) {
        let index = accumulate.indexOf(city);
        accumulate[index].users.push(user);
      }

      return accumulate;
    }, []);

    return usersFilteredByCity.map((obj) => {
      const { name, users } = obj;
      return {
        name,
        averageSalary: (
          users.reduce((accumulate, user) => {
            return (accumulate += user.salary);
          }, 0) / users.length
        ).toFixed(2),
      };
    });
  }

  // 19. Obter os nomes distintos de produtos;
  getDifferentProductNames() {
    return this.userProducts.reduce((accumulate, product) => {
      const hasProduct = accumulate.find((e) => {
        if (e.name === product.name) return e;
      });

      if (!hasProduct) {
        accumulate.push({ name: product.name });
      }

      return accumulate;
    }, []);
  }

  // 20. Retornar os usuários que gastaram mais que preço
  // médio dos produtos vendidos;
  spentMoreThanAveragePrice() {
    const mediaPrecoProdutos =
      this.userProducts.reduce((accumulate, product) => {
        return (accumulate += product.price);
      }, 0) / this.userProducts.length;
    return this.users.reduce((accumulate, user) => {
      const comprasByUser = this.userProducts.filter((product) => {
        if (product.userId === user.id) return product;
      });

      const totalGastoPorUser = comprasByUser.reduce((accumulate, product) => {
        return (accumulate += product.price);
      }, 0);

      if (totalGastoPorUser > mediaPrecoProdutos) {
        console.log(user);
        accumulate.push(user);
      }
      return [...accumulate];
    }, []);
  }

  // 21. Encontre o userId que menos gastou;
  findUserIdThatSpentTheLeast() {
    return {
      userId: this.users.reduce((accumulate, user) => {
        const comprasByUser = this.userProducts.filter((product) => {
          if (product.userId === user.id) return product;
        });
        const totalGastoPorUser = comprasByUser.reduce(
          (accumulate, product) => {
            return (accumulate += product.price);
          },
          0
        );

        if (!accumulate.totalGasto) {
          if (accumulate.totalGasto != 0) {
            return { ...user, totalGasto: totalGastoPorUser };
          }
        }

        if (accumulate.totalGasto > totalGastoPorUser) {
          return { ...user, totalGasto: totalGastoPorUser };
        }
        return accumulate;
      }).id,
    };
  }
  // 22. Encontre o userId que comprou menos produtos, mas
  // que comprou sim algum produto;
  econtrarUserIdqueComprouMenosProdutosMasComprouAlgumProduto() {
    const obj = this.users.map((user) => {
      return {
        userId: user.id,
        quantidade: this.userProducts.filter((product) => {
          if (product.userId === user.id) {
            return product;
          }
        }).length,
      };
    });

    return obj.reduce((accumalate, user) => {
      if (accumalate.quantidade < 1) {
        return user;
      } else {
        if (accumalate.quantidade > user.quantidade) {
          return user;
        } else {
          return accumalate;
        }
      }
    });
  }

  // 23. Encontre os usuários (objetos completos)
  // que compraram algum produto;
  econtrarUserQueComprouAlgumProduto() {
    return this.users.reduce((accumulate, user) => {
      if (
        this.userProducts.find((product) => {
          if (product.userId === user.id) {
            return product;
          }
        })
      ) {
        accumulate.push(user);
      }

      return accumulate;
    }, []);
  }

  // 24. Encontre os usuários comuns a duas listas de usuários.
  // Dois usuários são idênticos, se tiverem o mesmo id;
  // ex: lista1=[{id:2}, {id:3}] e lista2=[{id:3},{id:4}]
  // usuariosComuns => [{id:3}]
  encontrarUsersComuns() {
    const lista1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const lista2 = [{ id: 4 }, { id: 1 }, { id: 5 }, { id: 3 }];

    return lista1.reduce((accumulate, user) => {
      const hasItem = lista2.find((e) => {
        if (e.id === user.id) return e;
      });
      if (hasItem) {
        accumulate.push(user);
      }
      return accumulate;
    }, []);
  }

  // 25. Encontre os usuários não-comuns a duas listas de usuários.
  // ex: lista1=[{id:2}, {id:3}] e lista2=[{id:3},{id:4}]
  // usuariosNaoComuns => [{id:2}, {id:4}]
  encontrarUsersNaoComuns() {
    const lista1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const lista2 = [{ id: 4 }, { id: 1 }, { id: 5 }, { id: 3 }];

    const find = (list1, list2) => {
      return list1.reduce((accumulate, user) => {
        const hasItem = list2.find((e) => {
          if (e.id === user.id) return e;
        });

        if (!hasItem) accumulate.push(user);

        return accumulate;
      }, []);
    };

    return [...find(lista1, lista2), ...find(lista2, lista1)];
  }
}

const user = new User(users, userProducts);
console.log(user.VerificarSeExistAlgumProdutoCompradoPorMaisDeUmUser());
