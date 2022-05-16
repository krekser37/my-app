const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivanov@mail.ru",
  id: "1",
  about:
    "Таким образом, консультация с широким активом способствует повышению качества системы обучения кадров, соответствующей насущным потребностям. Кстати, некоторые особенности внутренней политики являются только методом политического участия и рассмотрены",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlR3hMw_3daUL3Uhr5Y3uJh_kMaYzyqQhhPA&usqp=CAU",
};

const users = {
    0: { name: "Ипатий", lastname: "Ельцин", id: 4 },
    1: { name: "Валерия", lastname: "Ялбачевa", id: 6 },
    2: { name: "Ксения", lastname: "Тетеринa", id: 9 },
    3: { name: "Нина", lastname: "Ельцинa", id: 7 },
    4: { name: "Владислава", lastname: "Енютинa", id: 2 },
    5: { name: "Юлия", lastname: "Юлбачевa", id: 12 },
    6: { name: "Петр", lastname: "Праздников", id: 11 },
    7: { name: "Владислав", lastname: "Вольпов", id: 18 },
    8: { name: "Константин", lastname: "Вольпов", id: 19 },
    9: { name: "Нина", lastname: "Тетеринa", id: 14 },
    10: { name: "Владислав", lastname: "Яблочков", id: 20 },
    };


export function getUser(userId) {
  for(let i =0; i<Object.keys(users).length; i++) {
    if (users[i].id ==userId) return users[i];
  }
  return user;
}

export function getUsers() {
    return users;
  }
