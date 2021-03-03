import React from 'react';

function Confirm(props) {
  const { userData } = props;
  console.log('userData', props.userData);
  return (
    <div>
      <p>{`Имя ............................${
        userData && userData.mainData.name
      }`}</p>

      <p>{`Фамилия............................ ${
        userData && userData.mainData.lastName
      }`}</p>
      <p>{`Отчество............................ ${
        userData && userData.mainData.middleName
      }`}</p>
      <p>{`ИИН............................ ${
        userData && userData.mainData.IIN
      }`}</p>
      <p>{`Номер телефона............................ ${
        userData && userData.contactInformation.phoneNumber
      }`}</p>
      <p>Сумма первонального взноса</p>
      <p>Сумма займа</p>
      <button>Изменить данные</button>
      <button>Отправить заявку</button>
    </div>
  );
}

export default Confirm;
