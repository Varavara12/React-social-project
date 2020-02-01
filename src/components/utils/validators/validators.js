export const requireField = value => {
    if(value) return undefined;
    return "Field is required"
};

export const maxLengthCreator = (maxLength30) => (value) => {              /*Thunk создали через замыкание. Используем для валидации формы*/
    if( value.length > maxLength30) return `Max length is ${maxLength30} symbol`;
    return undefined;
};

